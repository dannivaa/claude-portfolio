"use client";

import * as React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export type GooeyTextRevealMode = "immediate" | "scroll" | "scrub";
export type GooeyTextRevealScroller =
  | string
  | HTMLElement
  | React.RefObject<HTMLElement | null>;

export interface GooeyTextRevealProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** Text-bearing elements to split into animated lines. */
  children: React.ReactNode;
  /** Controls when the reveal runs. */
  mode?: GooeyTextRevealMode;
  /** Delay before non-scrub animations begin, in seconds. */
  delay?: number;
  /** Reveal duration for each line, in seconds. */
  duration?: number;
  /** Delay between consecutive lines, in seconds. */
  stagger?: number;
  /** Starting blur measured in em units. */
  blurAmount?: number;
  /** GSAP easing expression used by the reveal tween. */
  ease?: string;
  /** ScrollTrigger start position for scroll and scrub modes. */
  start?: string;
  /** ScrollTrigger end position for scrub mode. */
  end?: string;
  /** Optional scrollable ancestor used instead of the browser viewport. */
  scroller?: GooeyTextRevealScroller;
  /** Whether a scroll reveal should only run once. */
  once?: boolean;
  /** Disables splitting and animation while preserving the content. */
  disabled?: boolean;
  /** Called after the reveal completes. */
  onComplete?: () => void;
}

const SVG_NS = "http://www.w3.org/2000/svg";
const LINE_EDGE_BLUR = 0.4;
const GOO_MATRIX = "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140";

/**
 * One filter per line: blur, then alpha threshold (the "ink" edge), then a slight
 * edge blur. The animated blur lives inside the SVG filter rather than as a CSS
 * blur on a composited child, because WebKit drops the parent's url() filter over
 * composited descendants, which left iOS Safari with a plain blur and no ink.
 */
function createLineFilter(id: string) {
  const filter = document.createElementNS(SVG_NS, "filter");
  filter.setAttribute("id", id);
  filter.setAttribute("x", "-50%");
  filter.setAttribute("y", "-50%");
  filter.setAttribute("width", "200%");
  filter.setAttribute("height", "200%");
  filter.setAttribute("color-interpolation-filters", "sRGB");

  const blur = document.createElementNS(SVG_NS, "feGaussianBlur");
  blur.setAttribute("in", "SourceGraphic");
  blur.setAttribute("stdDeviation", "0");
  blur.setAttribute("result", "blur");

  const threshold = document.createElementNS(SVG_NS, "feColorMatrix");
  threshold.setAttribute("in", "blur");
  threshold.setAttribute("type", "matrix");
  threshold.setAttribute("values", GOO_MATRIX);
  threshold.setAttribute("result", "goo");

  const edge = document.createElementNS(SVG_NS, "feGaussianBlur");
  edge.setAttribute("in", "goo");
  edge.setAttribute("stdDeviation", String(LINE_EDGE_BLUR));

  filter.append(blur, threshold, edge);
  return { filter, blur };
}

function getRevealTargets(container: HTMLDivElement) {
  const explicitTargets = Array.from(
    container.querySelectorAll<HTMLElement>("[data-gooey-reveal-item]"),
  );

  if (explicitTargets.length > 0) return explicitTargets;

  const directChildren = Array.from(container.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );

  return directChildren.length > 0 ? directChildren : [container];
}

export const GooeyTextReveal = React.forwardRef<
  HTMLDivElement,
  GooeyTextRevealProps
>(function GooeyTextReveal(
  {
    children,
    mode = "immediate",
    delay = 0,
    duration = 1.5,
    stagger = 0.1,
    blurAmount = 0.35,
    ease = "power3.out",
    start = "top 80%",
    end = "bottom 75%",
    scroller,
    once = true,
    disabled = false,
    onComplete,
    ...props
  },
  forwardedRef,
) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const defsRef = React.useRef<SVGDefsElement>(null);
  const reactId = React.useId();
  const filterId = React.useMemo(
    () => `gooey-text-reveal-${reactId.replace(/:/g, "")}`,
    [reactId],
  );
  const setContainerRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      containerRef.current = node;

      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef],
  );

  useGSAP(
    () => {
      const container = containerRef.current;
      const defs = defsRef.current;
      if (!container || !defs || disabled) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      // Server HTML hides the text (data-gooey-pending) so it doesn't flash sharp
      // before hydration; lift that once the start state is in place.
      const showContent = () => container.removeAttribute("data-gooey-pending");

      if (reducedMotion) {
        showContent();
        return;
      }

      let splits: SplitText[] = [];
      let filters: SVGFilterElement[] = [];
      let tween: gsap.core.Tween | null = null;
      let animationFrame = 0;
      let measuredWidth = container.getBoundingClientRect().width;
      let disposed = false;

      const revert = () => {
        tween?.scrollTrigger?.kill();
        tween?.kill();
        tween = null;

        splits.forEach((split) => split.revert());
        splits = [];

        filters.forEach((filter) => filter.remove());
        filters = [];
      };

      const build = () => {
        if (disposed) return;
        revert();

        const blurs: SVGFEGaussianBlurElement[] = [];
        const startBlurs: number[] = [];

        getRevealTargets(container).forEach((target) => {
          const split = SplitText.create(target, {
            type: "lines",
            linesClass: "gooey-text-reveal-line",
            aria: "auto",
          });

          split.lines.forEach((line) => {
            const lineElement = line as HTMLElement;
            const { filter, blur } = createLineFilter(
              `${filterId}-${filters.length}`,
            );
            defs.appendChild(filter);
            filters.push(filter);

            lineElement.style.display = "block";
            lineElement.style.filter = `url(#${filter.id})`;
            blurs.push(blur);
            // SVG blur is in px; convert the em-based amount per line.
            startBlurs.push(
              parseFloat(getComputedStyle(lineElement).fontSize) * blurAmount,
            );
          });

          splits.push(split);
        });

        if (blurs.length === 0) {
          showContent();
          return;
        }

        gsap.set(blurs, { attr: { stdDeviation: (i: number) => startBlurs[i] } });
        showContent();

        const animation: gsap.TweenVars = {
          attr: { stdDeviation: 0 },
          duration,
          ease,
          stagger,
          onComplete,
        };

        if (mode === "scrub") {
          const resolvedScroller =
            typeof scroller === "string" || scroller instanceof HTMLElement
              ? scroller
              : scroller?.current ?? undefined;

          animation.scrollTrigger = {
            trigger: container,
            start,
            end,
            scrub: true,
            invalidateOnRefresh: true,
            scroller: resolvedScroller,
          };
        } else if (mode === "scroll") {
          const resolvedScroller =
            typeof scroller === "string" || scroller instanceof HTMLElement
              ? scroller
              : scroller?.current ?? undefined;

          animation.delay = delay;
          animation.scrollTrigger = {
            trigger: container,
            start,
            once,
            toggleActions: once ? "play none none none" : "play none none reverse",
            invalidateOnRefresh: true,
            scroller: resolvedScroller,
          };
        } else {
          animation.delay = delay;
        }

        tween = gsap.to(blurs, animation);
      };

      build();

      if (document.fonts && document.fonts.status !== "loaded") {
        document.fonts.ready.then(() => {
          if (!disposed) build();
        });
      }

      const resizeObserver = new ResizeObserver(([entry]) => {
        const nextWidth = entry.contentRect.width;
        if (Math.abs(nextWidth - measuredWidth) < 0.5) return;

        measuredWidth = nextWidth;
        window.cancelAnimationFrame(animationFrame);
        animationFrame = window.requestAnimationFrame(build);
      });

      resizeObserver.observe(container);

      return () => {
        disposed = true;
        resizeObserver.disconnect();
        window.cancelAnimationFrame(animationFrame);
        revert();
      };
    },
    {
      scope: containerRef,
      dependencies: [
        mode,
        delay,
        duration,
        stagger,
        blurAmount,
        ease,
        start,
        end,
        scroller,
        once,
        disabled,
        onComplete,
        filterId,
        children,
      ],
    },
  );

  return (
    <>
      <div
        ref={setContainerRef}
        data-gooey-pending={disabled ? undefined : ""}
        {...props}
      >
        {children}
      </div>

      <svg
        aria-hidden="true"
        focusable="false"
        width="0"
        height="0"
        style={{ position: "absolute", pointerEvents: "none" }}
      >
        <defs ref={defsRef} />
      </svg>
    </>
  );
});

GooeyTextReveal.displayName = "GooeyTextReveal";

export default GooeyTextReveal;

'use client';

import { Fragment, useEffect, useRef, type RefObject } from 'react';
import { cn } from '@/lib/utils';
import type { LensState, PointerLens } from '@/components/ui/pointer-lens';

type ChromaticHeadlineProps = {
  text: string;
  lens: PointerLens;
  /** Element the lens is tracked over; word positions are measured against it. */
  frameRef: RefObject<HTMLElement | null>;
  /** Lens radius as a fraction of the frame height. */
  radius?: number;
  className?: string;
};

type Word = { el: HTMLElement; cx: number; cy: number; x: number; y: number };

const WORD_SELECTOR = '[data-chromatic-word]';

/**
 * Headline whose words fringe red/blue around the shared cursor lens.
 * Offsets are written as unitless --ca-x/--ca-y in [-1, 1]; CSS maps them to em,
 * so the split scales with the headline's responsive font size.
 */
export function ChromaticHeadline({ text, lens, frameRef, radius = 0.35, className }: ChromaticHeadlineProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const headline = ref.current;
    const frame = frameRef.current;
    if (!headline || !frame) return;

    let words: Word[] = [];
    let aspect = 1;
    let last: LensState | null = null;
    let measureRaf = 0;

    const apply = (s: LensState) => {
      last = s;
      const r2 = radius * radius;
      for (const w of words) {
        // Height-normalised distance so the lens stays round on wide frames.
        const dx = (w.cx - s.x) * aspect;
        const dy = w.cy - s.y;
        const len = Math.hypot(dx, dy);
        const falloff = Math.exp(-(dx * dx + dy * dy) / r2) * s.strength;
        let x = len > 1e-4 ? (dx / len) * falloff : 0;
        let y = len > 1e-4 ? (dy / len) * falloff : 0;
        x += s.vx * aspect * falloff * 40;
        y += s.vy * falloff * 40;
        const mag = Math.hypot(x, y);
        if (mag > 1) {
          x /= mag;
          y /= mag;
        }
        x = Math.round(x * 100) / 100;
        y = Math.round(y * 100) / 100;
        if (x === w.x && y === w.y) continue;
        w.x = x;
        w.y = y;
        w.el.style.setProperty('--ca-x', String(x));
        w.el.style.setProperty('--ca-y', String(y));
      }
    };

    // Query by attribute rather than refs: GooeyTextReveal's SplitText replaces these
    // nodes on font load and resize, so references would go stale.
    const measure = () => {
      measureRaf = 0;
      const box = frame.getBoundingClientRect();
      if (!box.width || !box.height) return;
      aspect = box.width / box.height;
      // SplitText leaves empty clones of the word span at line breaks; skip them.
      const els = Array.from(headline.querySelectorAll<HTMLElement>(WORD_SELECTOR)).filter((el) => el.textContent?.trim());
      words = els.map((el) => {
        const r = el.getBoundingClientRect();
        return {
          el,
          cx: (r.left + r.width / 2 - box.left) / box.width,
          cy: (r.top + r.height / 2 - box.top) / box.height,
          x: 0,
          y: 0,
        };
      });
      if (last) apply(last);
    };
    const scheduleMeasure = () => {
      if (!measureRaf) measureRaf = requestAnimationFrame(measure);
    };

    measure();
    const unsubscribe = lens.subscribe(apply);
    const ro = new ResizeObserver(scheduleMeasure);
    ro.observe(frame);
    ro.observe(headline);
    const mo = new MutationObserver(scheduleMeasure);
    mo.observe(headline, { childList: true, subtree: true });
    document.fonts?.ready.then(scheduleMeasure);

    return () => {
      unsubscribe();
      ro.disconnect();
      mo.disconnect();
      if (measureRaf) cancelAnimationFrame(measureRaf);
    };
  }, [lens, frameRef, radius]);

  const parts = text.split(' ');
  return (
    <p ref={ref} className={cn('chromatic-headline', className)}>
      {parts.map((word, i) => (
        <Fragment key={i}>
          <span className="chromatic-headline__word" data-chromatic-word="">
            {word}
          </span>
          {i < parts.length - 1 && ' '}
        </Fragment>
      ))}
    </p>
  );
}

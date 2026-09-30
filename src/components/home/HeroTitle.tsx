'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type RefObject } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GooeyTextReveal } from '@/components/ui/gooey-text-reveal';
import { PROJECTS, type ProjectSlug } from '@/lib/projects';

const HOVER_QUERY = '(hover: hover) and (pointer: fine)';

function subscribeHover(onChange: () => void) {
  const mq = window.matchMedia(HOVER_QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

/**
 * Headline whose italic phrases link to the case studies behind them. Kept free of
 * state so hovering never re-renders GooeyTextReveal (which would replay the reveal).
 */
export function HeroTitle() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <GooeyTextReveal ref={containerRef} aria="none" deepSlice={false} delay={0.15} duration={1.9} stagger={0.16}>
        <h1 className="hero-title">
          I design apps people{' '}
          <a
            className="hero-link hero-link--safey"
            href="/safey"
            data-preview="safey"
            data-index="01"
            aria-label="pay for (Safey case study)"
          >
            pay for
          </a>{' '}
          and{' '}
          <a
            className="hero-link hero-link--gudfood"
            href="/gudfood"
            data-preview="gudfood"
            data-index="02"
            aria-label="come back to (GudFood Vdoma case study)"
          >
            come back to
          </a>
          .
        </h1>
      </GooeyTextReveal>
      <HeroLinkBehaviour containerRef={containerRef} />
    </>
  );
}

function HeroLinkBehaviour({ containerRef }: { containerRef: RefObject<HTMLDivElement | null> }) {
  const router = useRouter();
  const canHover = useSyncExternalStore(subscribeHover, () => window.matchMedia(HOVER_QUERY).matches, () => false);
  const [preview, setPreview] = useState<{ slug: ProjectSlug; on: boolean }>({ slug: 'safey', on: false });
  const previewRef = useRef<HTMLDivElement>(null);

  // Handled by delegation: SplitText may re-create the anchors, which drops React handlers
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[data-preview]');
      if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      router.push(link.pathname);
    };
    container.addEventListener('click', onClick);
    return () => container.removeEventListener('click', onClick);
  }, [containerRef, router]);

  useEffect(() => {
    const container = containerRef.current;
    const card = previewRef.current;
    if (!canHover || !container || !card) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let tilt = 0;
    let visible = false;
    let raf = 0;

    const render = () => {
      raf = 0;
      const dx = targetX - x;
      const dy = targetY - y;
      x += reducedMotion ? dx : dx * 0.2;
      y += reducedMotion ? dy : dy * 0.2;
      // Lean into horizontal movement, settle back when the pointer stops
      const targetTilt = reducedMotion ? 0 : Math.max(-6, Math.min(6, dx * 0.08));
      tilt += (targetTilt - tilt) * 0.2;
      card.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
      card.style.setProperty('--tilt', `${tilt.toFixed(2)}deg`);
      if (Math.abs(dx) > 0.2 || Math.abs(dy) > 0.2 || Math.abs(tilt) > 0.05) {
        raf = requestAnimationFrame(render);
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(render);
    };

    // Below-right of the cursor, flipped when it would leave the viewport
    const aim = (e: PointerEvent) => {
      const w = card.offsetWidth;
      const h = card.offsetHeight;
      targetX = e.clientX + 28 + w > window.innerWidth - 16 ? e.clientX - 28 - w : e.clientX + 28;
      targetY = e.clientY + 28 + h > window.innerHeight - 16 ? e.clientY - 28 - h : e.clientY + 28;
    };

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[data-preview]');
      if (!link) return;
      aim(e);
      if (!visible) {
        x = targetX;
        y = targetY;
        visible = true;
      }
      const slug = link.dataset.preview as ProjectSlug;
      setPreview((p) => (p.on && p.slug === slug ? p : { slug, on: true }));
      router.prefetch(link.pathname);
      kick();
    };
    const onMove = (e: PointerEvent) => {
      if (!visible || e.pointerType !== 'mouse') return;
      aim(e);
      kick();
    };
    const onOut = (e: PointerEvent) => {
      const from = (e.target as Element).closest('a[data-preview]');
      const to = e.relatedTarget instanceof Element ? e.relatedTarget.closest('a[data-preview]') : null;
      if (!from || from === to) return;
      visible = false;
      setPreview((p) => ({ ...p, on: false }));
    };

    container.addEventListener('pointerover', onOver);
    container.addEventListener('pointermove', onMove);
    container.addEventListener('pointerout', onOut);
    return () => {
      container.removeEventListener('pointerover', onOver);
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerout', onOut);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [canHover, containerRef, router]);

  if (!canHover) return null;

  const active = PROJECTS.find((p) => p.slug === preview.slug);

  return createPortal(
    <div ref={previewRef} className={`hero-preview${preview.on ? ' is-on' : ''}`} aria-hidden="true">
      <div className="hero-preview-card">
        <div className="hero-preview-media">
          {PROJECTS.filter((p) => p.slug !== 'skvot').map((p) => (
            <Image
              key={p.slug}
              src={p.thumbnail}
              alt=""
              fill
              sizes="320px"
              data-active={p.slug === preview.slug ? '' : undefined}
            />
          ))}
        </div>
        {active && (
          <span className="hero-preview-caption">
            {active.index} — {active.name} case study
          </span>
        )}
      </div>
    </div>,
    document.body,
  );
}

'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

/** Scenes are authored on a 1200×675 frame, the card's own 16:9. */
const FRAME_W = 1200;
const FRAME_H = 675;

/**
 * Frame for a coded work-card scene. Scales the 1200×675 artboard to the card's width and
 * pauses every animation together while the card is off screen, so the layers never drift
 * apart. With reduced motion the loop holds on its opening frame.
 */
export function CardScene({
  label,
  stage,
  css,
  className,
  children,
}: {
  label: string;
  stage: [edge: string, center: string];
  /** The scene's @keyframes, from its timeline. */
  css: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_W));
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    ro.observe(el);
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="work-stage"
      role="img"
      aria-label={label}
      style={{ '--stage-edge': stage[0], '--stage-center': stage[1] } as CSSProperties}
    >
      <style>{css}</style>
      <div
        className={`card-scene${className ? ` ${className}` : ''}`}
        aria-hidden="true"
        data-paused={visible ? undefined : ''}
        style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale ?? 0})`, opacity: scale === null ? 0 : 1 }}
      >
        {children}
      </div>
    </div>
  );
}

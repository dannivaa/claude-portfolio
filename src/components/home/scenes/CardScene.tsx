'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';


/**
 * Frame for a coded work-card scene. Scales the 16:9 artboard (1200×675 unless the scene was
 * authored at its Figma size) to the card's width and
 * pauses every animation together while the card is off screen, so the layers never drift
 * apart. With reduced motion the loop holds on its opening frame.
 */
export function CardScene({
  label,
  stage,
  css,
  className,
  width = 1200,
  height = 675,
  children,
}: {
  label: string;
  /** The artboard the scene was authored on. */
  width?: number;
  height?: number;
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
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width));
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    ro.observe(el);
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, [width]);

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
        style={{ width, height, transform: `scale(${scale ?? 0})`, opacity: scale === null ? 0 : 1 }}
      >
        {children}
      </div>
    </div>
  );
}

'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Renders a fixed-size desktop screen (authored in px at its real size) and scales it
 * to the width of its container, so a 1280px admin screen stays pixel-true in a card.
 */
export function ScaledFrame({
  width,
  height,
  label,
  className,
  children,
}: {
  width: number;
  height: number;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={ref}
      className={`lx-scaled${className ? ` ${className}` : ''}`}
      role="img"
      aria-label={label}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="lx-scaled-inner"
        aria-hidden="true"
        style={{ width, height, transform: `scale(${scale ?? 0})`, opacity: scale === null ? 0 : 1 }}
      >
        {children}
      </div>
    </div>
  );
}

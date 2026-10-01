'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface CursorProps {
  children: ReactNode;
  name?: string;
  /** Chip background, any CSS colour. */
  cursorColor?: string;
  customSVG?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Cursor({
  children,
  name,
  cursorColor = 'var(--ink)',
  customSVG,
  className,
  style,
}: CursorProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [scaled, setScaled] = useState(false);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Viewport coords: the chip is portaled to <body> with position: fixed,
  // so it escapes each card's stacking context and renders above siblings.
  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    clearTimeout(exitTimer.current);
    setPos({ x: e.clientX, y: e.clientY });
    // Re-entering before the exit finished: the chip is still mounted, scale it back in
    if (mounted) setScaled(true);
    else setMounted(true);
  };

  const handleMouseLeave = () => {
    setScaled(false);
    exitTimer.current = setTimeout(() => setMounted(false), 120);
  };

  useEffect(() => () => clearTimeout(exitTimer.current), []);

  // Trigger scale-in on the frame after mount so the transition plays
  useEffect(() => {
    if (!mounted) return;
    const id = requestAnimationFrame(() => setScaled(true));
    return () => cancelAnimationFrame(id);
  }, [mounted]);

  return (
    <div
      className={className}
      style={{ position: 'relative', ...style }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {mounted && (name || customSVG) && createPortal(
        <div className="cursor-chip-anchor" style={{ left: pos.x, top: pos.y }} aria-hidden="true">
          <div
            className={`cursor-chip${scaled ? ' is-in' : ''}`}
            style={{ '--chip-bg': cursorColor } as React.CSSProperties}
          >
            {customSVG}
            {name}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

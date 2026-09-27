'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const colorMap: Record<string, string> = {
  blue:   '#3B82F6',
  sky:    '#0EA5E9',
  green:  '#22C55E',
  purple: '#A855F7',
  pink:   '#EC4899',
  yellow: '#EAB308',
  indigo: '#6366F1',
  orange: '#F97316',
  dark:   '#050c0f',
};

function resolveColor(cursorColor: string): string {
  if (cursorColor.startsWith('#')) return cursorColor;
  return colorMap[cursorColor] ?? colorMap.dark;
}

interface CursorProps {
  children: ReactNode;
  name?: string;
  cursorColor?: string;
  customSVG?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Cursor({
  children,
  name,
  cursorColor = 'dark',
  customSVG,
  className,
  style,
}: CursorProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [scaled, setScaled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Viewport coords: the chip is portaled to <body> with position: fixed,
  // so it escapes each card's stacking context and renders above siblings.
  const handleMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    clearTimeout(exitTimer.current);
    setPos({ x: e.clientX, y: e.clientY });
    setMounted(true);
  };

  const handleMouseLeave = () => {
    setScaled(false);
    exitTimer.current = setTimeout(() => setMounted(false), 200);
  };

  // Trigger scale-in on the frame after mount so the transition plays
  useEffect(() => {
    if (mounted) {
      const id = requestAnimationFrame(() => setScaled(true));
      return () => cancelAnimationFrame(id);
    } else {
      setScaled(false);
    }
  }, [mounted]);

  const color = resolveColor(cursorColor);

  return (
    <div
      ref={ref}
      className={className}
      style={{ position: 'relative', ...style }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {mounted && (name || customSVG) && createPortal(
        <div
          style={{
            position: 'fixed',
            left: pos.x,
            top: pos.y,
            transform: 'translate(0px, 28px)',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: color,
              color: '#ffffff',
              padding: '6px 16px',
              borderRadius: 9999,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "'Fixel Text', sans-serif",
              letterSpacing: '0.7px',
              lineHeight: '24px',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              transform: scaled ? 'scale(1)' : 'scale(0)',
              transformOrigin: 'left center',
              transition: scaled
                ? 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                : 'transform 0.18s ease-in',
            }}
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

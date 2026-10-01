'use client';

import { useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import { Briefcase, Drum, Guitar, Smartphone, Sparkles } from 'lucide-react';

/** Everything Danik makes, as stickers you can push around the hero. */
const STICKERS = [
  { label: 'Apps people pay for', Icon: Briefcase, tone: 'accent', x: 4, y: 18, r: -6 },
  { label: 'My own mobile apps', Icon: Smartphone, tone: 'lime', x: 27, y: 52, r: 5 },
  { label: 'Side projects', Icon: Sparkles, tone: 'pink', x: 49, y: 10, r: -3 },
  { label: 'Songs', Icon: Guitar, tone: 'orange', x: 70, y: 46, r: 7 },
  { label: 'Drums, a lot of drums', Icon: Drum, tone: 'sky', x: 82, y: 6, r: -8 },
] as const;

type Offset = { x: number; y: number };

export function HeroStickers() {
  const [offsets, setOffsets] = useState<Offset[]>(() => STICKERS.map(() => ({ x: 0, y: 0 })));
  const [dragging, setDragging] = useState<number | null>(null);
  const start = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null);

  const onDown = (i: number) => (e: PointerEvent<HTMLLIElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    start.current = { px: e.clientX, py: e.clientY, ox: offsets[i].x, oy: offsets[i].y };
    setDragging(i);
  };

  const onMove = (i: number) => (e: PointerEvent<HTMLLIElement>) => {
    if (dragging !== i || !start.current) return;
    const { px, py, ox, oy } = start.current;
    setOffsets((prev) => prev.map((o, j) => (j === i ? { x: ox + e.clientX - px, y: oy + e.clientY - py } : o)));
  };

  const onUp = () => {
    start.current = null;
    setDragging(null);
  };

  return (
    <ul className="hero-stickers" aria-label="Things I make">
      {STICKERS.map(({ label, Icon, tone, x, y, r }, i) => (
        <li
          key={label}
          className={`hero-sticker hero-sticker--${tone}${dragging === i ? ' is-dragging' : ''}`}
          style={
            {
              '--x': `${x}%`,
              '--y': `${y}%`,
              '--r': `${r}deg`,
              '--dx': `${offsets[i].x}px`,
              '--dy': `${offsets[i].y}px`,
              '--delay': `${i * -1.3}s`,
            } as CSSProperties
          }
          onPointerDown={onDown(i)}
          onPointerMove={onMove(i)}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <span className="hero-sticker-inner">
            <Icon size={18} strokeWidth={2} aria-hidden />
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}

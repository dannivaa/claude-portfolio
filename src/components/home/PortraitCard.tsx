'use client';

import { useRef, useState, type PointerEvent } from 'react';
import Image from 'next/image';

/**
 * Studio portrait that flips to a candid photo: on hover with a mouse, on tap
 * otherwise. Leans toward the pointer while hovered.
 */
export function PortraitCard() {
  const ref = useRef<HTMLButtonElement>(null);
  const [flipped, setFlipped] = useState(false);

  const onPointerMove = (e: PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== 'mouse') return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--tilt-x', `${(((e.clientY - r.top) / r.height) - 0.5) * -10}deg`);
    el.style.setProperty('--tilt-y', `${(((e.clientX - r.left) / r.width) - 0.5) * 10}deg`);
  };

  const onPointerEnter = (e: PointerEvent) => {
    if (e.pointerType === 'mouse') setFlipped(true);
  };

  const onPointerLeave = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    setFlipped(false);
    ref.current?.style.setProperty('--tilt-x', '0deg');
    ref.current?.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <button
      ref={ref}
      type="button"
      className={`portrait${flipped ? ' is-flipped' : ''}`}
      aria-pressed={flipped}
      aria-label={flipped ? 'Show studio portrait of Danylo' : 'Show candid photo of Danylo'}
      onPointerEnter={onPointerEnter}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onClick={(e) => {
        // Mouse users flip on hover; taps and keyboard toggle
        if (e.detail === 0 || !window.matchMedia('(hover: hover)').matches) setFlipped((f) => !f);
      }}
    >
      <span className="portrait-inner">
        <span className="portrait-face portrait-front">
          <Image src="/images/pfp3d.png" alt="" width={3920} height={3920} sizes="(max-width: 768px) 160px, 300px" loading="eager" />
        </span>
        <span className="portrait-face portrait-back">
          <Image src="/images/about me.png" alt="" width={2706} height={2075} sizes="(max-width: 768px) 160px, 300px" />
          <span className="portrait-caption">Off the clock, Kyiv</span>
        </span>
      </span>
    </button>
  );
}

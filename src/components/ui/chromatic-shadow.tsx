'use client';

import type { CSSProperties } from 'react';
import { Component as EtherealShadow, SHADOW_MASK_URL } from '@/components/ui/etheral-shadow';

type ChromaticShadowProps = {
  /** Hex colour of the shadow, e.g. #4695C0. */
  color: string;
  noise?: { opacity: number; scale: number };
};

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * Static EtherealShadow with a chromatic lens that follows the cursor.
 * The lens layer re-draws the shadow as three single-channel copies added together
 * (red scaled toward the cursor, blue away from it, like lateral lens aberration),
 * masked to a soft circle around the cursor. It reads the --lens-* vars that
 * createPointerLens writes on the hero card; without them it stays invisible.
 */
export function ChromaticShadow({ color, noise }: ChromaticShadowProps) {
  const [r, g, b] = hexToRgb(color);
  const mask = `url('${SHADOW_MASK_URL}')`;
  const channels: { className: string; color: string }[] = [
    { className: 'chromatic-shadow__ch chromatic-shadow__ch--r', color: `rgb(${r}, 0, 0)` },
    { className: 'chromatic-shadow__ch', color: `rgb(0, ${g}, 0)` },
    { className: 'chromatic-shadow__ch chromatic-shadow__ch--b', color: `rgb(0, 0, ${b})` },
  ];

  return (
    <EtherealShadow color={color} animation={{ scale: 0, speed: 0 }} noise={noise} sizing="fill">
      {/* Sits between the shadow and EtherealShadow's grain layer. */}
      <div className="chromatic-shadow" aria-hidden="true">
        {channels.map((ch) => (
          <div
            key={ch.className + ch.color}
            className={ch.className}
            style={{ backgroundColor: ch.color, maskImage: mask, WebkitMaskImage: mask } as CSSProperties}
          />
        ))}
      </div>
    </EtherealShadow>
  );
}

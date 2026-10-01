import type { CSSProperties } from 'react';

/**
 * Keyframes straight from a Figma motion timeline. Figma (via Motion) gives each property
 * its own values, times (0–1 of the loop) and per-segment easings; each one becomes its own
 * @keyframes on the matching individual CSS property (opacity, translate, scale, rotate), so
 * tracks with different timings stay independent and everything runs on the compositor.
 */

export type FigmaEase = 'linear' | 'easeOut' | 'easeIn' | 'easeInOut' | readonly [number, number, number, number];
export type Track = { v: readonly number[]; t: readonly number[]; e?: FigmaEase | readonly FigmaEase[] };

const NAMED = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
  easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
} as const;

const css = (e: FigmaEase) => (typeof e === 'string' ? NAMED[e] : `cubic-bezier(${e.join(', ')})`);

function easeAt(track: Track, i: number) {
  const e = track.e ?? 'linear';
  return css(typeof e === 'string' || (e.length === 4 && typeof e[0] === 'number') ? (e as FigmaEase) : (e as readonly FigmaEase[])[i] ?? 'linear');
}

function block(name: string, track: Track, value: (i: number) => string, prop: string) {
  const frames = track.t
    .map((t, i) => `${+(t * 100).toFixed(3)}%{${prop}:${value(i)};animation-timing-function:${easeAt(track, i)}}`)
    .join('');
  return `@keyframes ${name}{${frames}}`;
}

export function figmaTimeline(prefix: string, dur: number) {
  const blocks: string[] = [];
  let n = 0;
  const run = (name: string) => `${name} ${dur}s linear infinite both`;

  return {
    /** x and y, when both are given, must share one set of times (Figma keys them together). */
    layer(
      tracks: { opacity?: Track; scale?: Track; x?: Track; y?: Track; rotate?: Track },
      origin?: string,
    ): CSSProperties {
      const anims: string[] = [];
      const add = (track: Track, prop: string, value: (i: number) => string) => {
        const name = `${prefix}${n++}`;
        blocks.push(block(name, track, value, prop));
        anims.push(run(name));
      };
      if (tracks.opacity) add(tracks.opacity, 'opacity', (i) => `${tracks.opacity!.v[i]}`);
      if (tracks.scale) add(tracks.scale, 'scale', (i) => `${tracks.scale!.v[i]}`);
      if (tracks.rotate) add(tracks.rotate, 'rotate', (i) => `${tracks.rotate!.v[i]}deg`);
      if (tracks.x || tracks.y) {
        const base = (tracks.x ?? tracks.y)!;
        add(base, 'translate', (i) => `${tracks.x?.v[i] ?? 0}px ${tracks.y?.v[i] ?? 0}px`);
      }
      return { animation: anims.join(', '), transformOrigin: origin };
    },
    css: () => blocks.join('\n'),
  };
}

import type { CSSProperties } from 'react';

/**
 * A tiny keyframe timeline for the work-card scenes, modelled on Danylo's Figma motion for
 * Safey: every layer runs the same loop length, and keys are written in seconds, the way they
 * read on a Figma timeline. Only opacity and transform are ever animated, so every frame is
 * composited on the GPU and the loops hold 60fps.
 */

/** Easings lifted from the Safey timeline in Figma. */
export const EASE = {
  /** Content rising into place. */
  rise: 'cubic-bezier(0.334, 0, 0.31, 1.008)',
  /** Camera moving in. */
  camera: 'cubic-bezier(0.3, 0, 0.35, 1)',
  /** Camera settling back out. */
  cameraOut: 'cubic-bezier(0.626, 0, 0.297, 1)',
  /** A quick zoom that lands softly. */
  zoom: 'cubic-bezier(0.031, 0, 0.263, 1.031)',
  /** Crossfades between states. */
  fade: 'cubic-bezier(0.5, 0, 0.5, 1)',
  /** Toggles and selections. */
  toggle: 'cubic-bezier(0.502, 0, 0.393, 1)',
  /** Fingers on a button. */
  press: 'cubic-bezier(0, 0, 0.6, 1)',
  /** Small elements that pop in with a touch of overshoot. */
  pop: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  linear: 'linear',
} as const;

/** o opacity, x/y translate in px, s uniform scale, sx horizontal scale (bars), r rotation in degrees */
export type Pose = { o?: number; x?: number; y?: number; s?: number; sx?: number; r?: number };
/** [time in seconds, the pose to reach by then, the easing used to get there] */
export type Key = [t: number, pose: Pose, ease?: string];

type Full = Required<Pose>;
const REST: Full = { o: 1, x: 0, y: 0, s: 1, sx: 1, r: 0 };

function frame(p: Full, useO: boolean, useT: boolean) {
  const parts: string[] = [];
  if (useO) parts.push(`opacity:${+p.o.toFixed(3)}`);
  if (useT) {
    const t: string[] = [];
    if (p.x || p.y) t.push(`translate3d(${+p.x.toFixed(2)}px,${+p.y.toFixed(2)}px,0)`);
    if (p.s !== 1) t.push(`scale(${+p.s.toFixed(4)})`);
    if (p.sx !== 1) t.push(`scaleX(${+p.sx.toFixed(4)})`);
    if (p.r) t.push(`rotate(${+p.r.toFixed(2)}deg)`);
    parts.push(`transform:${t.length ? t.join(' ') : 'none'}`);
  }
  return parts.join(';');
}

/**
 * Builds one @keyframes block. Each key holds its pose until the next key starts moving,
 * which is how Figma's timeline reads: a key's easing shapes the move *into* that key.
 */
function build(name: string, dur: number, start: Pose, keys: Key[]) {
  const useO = start.o !== undefined || keys.some(([, p]) => p.o !== undefined);
  const moves = (p: Pose) => p.x !== undefined || p.y !== undefined || p.s !== undefined || p.sx !== undefined || p.r !== undefined;
  const useT = moves(start) || keys.some(([, p]) => moves(p));
  let pose: Full = { ...REST, ...start };
  // [percent, pose, easing of the segment that starts here]
  const stops: [number, Full, string][] = [[0, pose, EASE.linear]];
  for (const [t, p, ease = EASE.linear] of keys) {
    const prev = stops[stops.length - 1];
    prev[2] = ease;
    pose = { ...pose, ...p };
    stops.push([(t / dur) * 100, pose, EASE.linear]);
  }
  if (stops[stops.length - 1][0] < 100) stops.push([100, pose, EASE.linear]);
  const body = stops
    .map(([pct, p, ease]) => `${+pct.toFixed(3)}%{${frame(p, useO, useT)};animation-timing-function:${ease}}`)
    .join('');
  return `@keyframes ${name}{${body}}`;
}

/**
 * One scene's timeline. Each `layer()` call returns the inline style that runs that layer's
 * keyframes; `css()` returns every @keyframes block for a single <style> tag.
 */
export function timeline(prefix: string, dur: number) {
  const blocks: string[] = [];
  let n = 0;
  return {
    dur,
    layer(start: Pose, keys: Key[], origin?: string): CSSProperties {
      const name = `${prefix}${n++}`;
      blocks.push(build(name, dur, start, keys));
      return { animation: `${name} ${dur}s linear infinite both`, transformOrigin: origin };
    },
    css: () => blocks.join('\n'),
  };
}

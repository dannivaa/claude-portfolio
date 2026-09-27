/** Eased lens state in frame space: 0–1 coords with y down, velocity in the same units per frame. */
export type LensState = { x: number; y: number; vx: number; vy: number; strength: number };

export type PointerLens = {
  /** Starts tracking the mouse over `frame`; returns a detach function. No-op on touch or reduced motion. */
  attach: (frame: HTMLElement) => () => void;
  subscribe: (listener: (state: LensState) => void) => () => void;
};

const ENABLED_QUERY = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

/**
 * Cursor lens shared by the hero background and headline. Besides notifying
 * subscribers every frame, it writes CSS vars on the frame so pure-CSS layers can follow:
 * --lens-x/--lens-y (px), --lens-vx/--lens-vy (px), --lens-s (0–1), --lens-h (frame height, px).
 */
export function createPointerLens(): PointerLens {
  const listeners = new Set<(state: LensState) => void>();

  const attach = (frame: HTMLElement) => {
    if (!window.matchMedia(ENABLED_QUERY).matches) return () => {};

    const lens = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, vx: 0, vy: 0, strength: 0, target: 0 };
    let box = frame.getBoundingClientRect();
    let raf = 0;

    const publish = () => {
      const s = frame.style;
      s.setProperty('--lens-x', `${(lens.x * box.width).toFixed(1)}px`);
      s.setProperty('--lens-y', `${(lens.y * box.height).toFixed(1)}px`);
      s.setProperty('--lens-vx', `${(lens.vx * box.width * 0.5).toFixed(2)}px`);
      s.setProperty('--lens-vy', `${(lens.vy * box.height * 0.5).toFixed(2)}px`);
      s.setProperty('--lens-s', lens.strength.toFixed(3));
      s.setProperty('--lens-h', `${box.height.toFixed(0)}px`);
      const state = { x: lens.x, y: lens.y, vx: lens.vx, vy: lens.vy, strength: lens.strength };
      listeners.forEach((l) => l(state));
    };

    const step = () => {
      raf = 0;
      const px = lens.x;
      const py = lens.y;
      lens.x += (lens.tx - lens.x) * 0.08;
      lens.y += (lens.ty - lens.y) * 0.08;
      // Pointer velocity smears the split along the direction of travel.
      lens.vx += ((lens.x - px) * 0.6 - lens.vx) * 0.15;
      lens.vy += ((lens.y - py) * 0.6 - lens.vy) * 0.15;
      lens.strength += (lens.target - lens.strength) * 0.06;

      const settled =
        Math.abs(lens.target - lens.strength) < 0.001 &&
        Math.abs(lens.tx - lens.x) < 0.0005 &&
        Math.abs(lens.ty - lens.y) < 0.0005 &&
        Math.abs(lens.vx) + Math.abs(lens.vy) < 0.00005;
      // Snap on the last frame so everything lands exactly on the target.
      if (settled) {
        lens.strength = lens.target;
        lens.vx = 0;
        lens.vy = 0;
      }
      publish();
      if (!settled) raf = requestAnimationFrame(step);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(step);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      box = frame.getBoundingClientRect();
      const x = (e.clientX - box.left) / box.width;
      const y = (e.clientY - box.top) / box.height;
      const inside = x >= 0 && x <= 1 && y >= 0 && y <= 1;
      lens.target = inside ? 1 : 0;
      if (inside) {
        lens.tx = x;
        lens.ty = y;
      }
      kick();
    };
    const onPointerOut = (e: PointerEvent) => {
      if (e.relatedTarget) return;
      lens.target = 0;
      kick();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerout', onPointerOut);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerout', onPointerOut);
      if (raf) cancelAnimationFrame(raf);
      lens.strength = 0;
      lens.vx = 0;
      lens.vy = 0;
      publish();
    };
  };

  return {
    attach,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

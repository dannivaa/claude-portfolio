'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';

const STEP_MS = 2600;

/**
 * Looping carousel of a project's screens on its tinted stage: the centre phone
 * steps aside every few seconds and the next screen slides in. Only runs while the
 * card is on screen; holds still for reduced motion.
 */
export function WorkStage({
  screens,
  spread,
  stage,
  label,
}: {
  screens: string[];
  /** Phones visible on each side of the centre one. */
  spread: 1 | 2;
  stage: [edge: string, center: string];
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = screens.length;

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let timer: number | undefined;
    const start = () => {
      if (timer === undefined) timer = window.setInterval(() => setActive((a) => (a + 1) % count), STEP_MS);
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
    };

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), { threshold: 0.35 });
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, [count]);

  return (
    <div
      ref={ref}
      className="work-stage"
      role="img"
      aria-label={label}
      style={{ '--stage-edge': stage[0], '--stage-center': stage[1] } as CSSProperties}
    >
      {screens.map((src, i) => {
        // Signed distance from the active screen, wrapped round; beyond `spread` it's parked
        // off-stage, so the screen jumping from one end to the other is never visible
        let pos = (i - active + count) % count;
        if (pos > count / 2) pos -= count;
        const slot = Math.abs(pos) > spread ? Math.sign(pos) * (spread + 1) : pos;
        return (
          <div key={i} className="work-phone" data-pos={slot} data-spread={spread}>
            <Image src={src} alt="" width={1179} height={2556} sizes="(max-width: 768px) 160px, 240px" />
          </div>
        );
      })}
    </div>
  );
}

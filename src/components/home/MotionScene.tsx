'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

/** Scenes are authored on a 1200×600 frame and centred in a 16:9 card (1200×675). */
const FRAME_W = 1200;
const FRAME_H = 675;

/**
 * A CSS motion loop for a work card. The markup is static, generated from the
 * design canvas; this scales it to the card's width and pauses every animation
 * together while the card is off screen, so the loop never drifts out of sync.
 */
export function MotionScene({
  html,
  label,
  stage,
}: {
  html: string;
  label: string;
  stage: [edge: string, center: string];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_W));
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    ro.observe(el);
    io.observe(el);
    return () => {
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="work-stage"
      role="img"
      aria-label={label}
      style={{ '--stage-edge': stage[0], '--stage-center': stage[1] } as CSSProperties}
    >
      <div
        className="motion-scene"
        data-paused={visible ? undefined : ''}
        style={{ width: FRAME_W, height: FRAME_H, transform: `scale(${scale ?? 0})`, opacity: scale === null ? 0 : 1 }}
      >
        <div className="motion-frame" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

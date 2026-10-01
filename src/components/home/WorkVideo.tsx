'use client';

import { useEffect, useRef } from 'react';

/**
 * Danylo's exported card animation. Muted, looping, and only playing while the
 * card is on screen; with reduced motion it stays on the poster frame.
 */
export function WorkVideo({
  webm,
  mp4,
  poster,
  label,
}: {
  webm: string;
  mp4: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // React sets `muted` as a property; set it again so autoplay policies see it before play()
    video.muted = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.pause();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <div className="work-stage work-stage--video">
      <video ref={ref} className="work-video" poster={poster} muted loop playsInline preload="auto" aria-label={label}>
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
}

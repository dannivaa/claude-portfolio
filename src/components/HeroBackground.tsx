'use client';

import { useEffect, useState } from 'react';
import { ChromaticImage, type TextureSource } from '@/components/ui/chromatic-image';

type Mode = 'off' | 'pointer' | 'ambient';

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const MOUSE_QUERY = '(hover: hover) and (pointer: fine)';
const MOBILE_QUERY = '(max-width: 768px)';

const TEXTURES: TextureSource[] = [
  { src: '/images/hero-bg-1280.webp', width: 1280 },
  { src: '/images/hero-bg-2560.webp', width: 2560 },
  { src: '/images/hero-bg-3840.webp', width: 3840 },
];
const SRC_SET = TEXTURES.map((t) => `${t.src} ${t.width}w`).join(', ');

function supportsWebGL() {
  try {
    return !!document.createElement('canvas').getContext('webgl');
  } catch {
    return false;
  }
}

function resolveMode(): Mode {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (window.matchMedia(REDUCED_MOTION_QUERY).matches || saveData || !supportsWebGL()) return 'off';
  // No cursor to drive the lens on touch devices, so it drifts on its own.
  return window.matchMedia(MOUSE_QUERY).matches ? 'pointer' : 'ambient';
}

export default function HeroBackground() {
  // Starts as the plain image so SSR and the LCP paint don't wait on WebGL.
  const [mode, setMode] = useState<Mode>('off');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const queries = [REDUCED_MOTION_QUERY, MOUSE_QUERY, MOBILE_QUERY].map((q) => window.matchMedia(q));
    const update = () => {
      setMode(resolveMode());
      setIsMobile(window.matchMedia(MOBILE_QUERY).matches);
    };
    update();
    queries.forEach((q) => q.addEventListener('change', update));
    return () => queries.forEach((q) => q.removeEventListener('change', update));
  }, []);

  return (
    <ChromaticImage
      className="hero-chromatic"
      src="/images/hero-bg-2560.webp"
      srcSet={SRC_SET}
      sizes="100vw"
      textures={TEXTURES}
      mode={mode}
      intensity={isMobile ? 0.012 : 0.018}
      radius={isMobile ? 0.45 : 0.35}
      maxPixelRatio={isMobile ? 1.5 : 2}
    />
  );
}

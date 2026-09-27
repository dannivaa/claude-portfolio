'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Component as EtherealShadow } from '@/components/ui/etheral-shadow';

// three.js is only fetched when the WebGL background is actually used.
const WaveGridBackground = dynamic(
  () => import('@/components/ui/wave-grid-background').then((m) => m.WaveGridBackground),
  { ssr: false }
);

type Mode = 'pending' | 'static' | 'mobile' | 'desktop';

const MOBILE_QUERY = '(max-width: 768px)';
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function resolveMode(): Mode {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (window.matchMedia(REDUCED_MOTION_QUERY).matches || saveData || !supportsWebGL()) return 'static';
  return window.matchMedia(MOBILE_QUERY).matches ? 'mobile' : 'desktop';
}

export default function HeroBackground() {
  const [mode, setMode] = useState<Mode>('pending');

  useEffect(() => {
    const update = () => setMode(resolveMode());
    update();
    const mobile = window.matchMedia(MOBILE_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    mobile.addEventListener('change', update);
    reducedMotion.addEventListener('change', update);
    return () => {
      mobile.removeEventListener('change', update);
      reducedMotion.removeEventListener('change', update);
    };
  }, []);

  if (mode === 'pending') return null;

  if (mode === 'static') {
    return (
      <EtherealShadow
        color="#4695C0"
        animation={{ scale: 0, speed: 0 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
      />
    );
  }

  const isMobile = mode === 'mobile';
  const gridSize = isMobile ? 30 : 64;
  // Wave params are in world units; the camera pulls back as the grid grows,
  // so scale them to keep the ripple the same size on screen.
  const waveScale = gridSize / 40;

  return (
    <WaveGridBackground
      className="hero-wave-grid"
      colorBase="#0B1A22"
      colorHigh="#4695C0"
      gridSize={gridSize}
      waveSpeed={6 * waveScale}
      waveWidth={3 * waveScale}
      waveFrequency={1.2 / waveScale}
      shadows={!isMobile}
      maxPixelRatio={isMobile ? 1.5 : 2}
    />
  );
}

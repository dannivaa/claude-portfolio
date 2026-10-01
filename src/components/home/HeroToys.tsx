'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { createKit } from '@/lib/drum-synth';

/** Real screens from the case studies, shown in turn on the little phone. */
const SCREENS = [
  { src: '/images/Safey/03.png', alt: 'Safey paywall' },
  { src: '/images/GudFood/03.png', alt: 'GudFood order rating' },
  { src: '/images/Skvot/01.png', alt: 'Skvot sign-in' },
  { src: '/images/Safey/01.png', alt: 'Safey home' },
];

/** C major, up and back: a few notes for the record. */
const MELODY = [523.25, 659.25, 783.99, 1046.5, 783.99];

/**
 * Three objects above the headline, one for each thing the intro mentions: a drum
 * that plays when you hit it, a phone flipping through real app screens, and a
 * record that plays a few notes. No labels, so nothing repeats the paragraph.
 */
export function HeroToys() {
  const kit = useRef<ReturnType<typeof createKit> | null>(null);
  const [screen, setScreen] = useState(0);
  const [hit, setHit] = useState(0);
  const [spun, setSpun] = useState(0);
  const beat = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const id = window.setInterval(() => setScreen((i) => (i + 1) % SCREENS.length), 2600);
    return () => {
      window.clearInterval(id);
    };
  }, []);

  useEffect(
    () => () => {
      kit.current?.close();
    },
    [],
  );

  // The AudioContext may only start after a gesture, so it's created on the first tap
  const audio = () => (kit.current ??= createKit());

  const strike = () => {
    // kick, snare, kick, kick, snare: a tiny groove across taps
    const pattern = ['kick', 'snare', 'kick', 'kick', 'snare'] as const;
    audio().play(pattern[beat.current++ % pattern.length]);
    setHit((n) => n + 1);
  };

  const spin = () => {
    audio().melody(MELODY);
    setSpun((n) => n + 1);
  };

  return (
    <div className="hero-toys">
      <button type="button" className="toy toy--drum" onPointerDown={strike} aria-label="Hit the drum">
        <span key={hit} className={hit ? 'toy-drum is-hit' : 'toy-drum'}>
          <svg viewBox="0 0 120 112" aria-hidden="true">
            <path className="toy-drum-shell" d="M14 38v38c0 13 20.6 24 46 24s46-11 46-24V38" />
            <path className="toy-drum-band" d="M14 52c0 13 20.6 24 46 24s46-11 46-24" />
            <ellipse className="toy-drum-head" cx="60" cy="38" rx="46" ry="22" />
            <ellipse className="toy-drum-rim" cx="60" cy="38" rx="46" ry="22" />
            <g className="toy-drum-sticks">
              <rect x="70" y="-6" width="6" height="58" rx="3" transform="rotate(38 73 23)" />
              <rect x="44" y="-4" width="6" height="58" rx="3" transform="rotate(-30 47 25)" />
            </g>
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="toy toy--phone"
        onClick={() => setScreen((i) => (i + 1) % SCREENS.length)}
        aria-label="Show the next app screen"
      >
        <span className="toy-phone">
          {SCREENS.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt=""
              width={1560}
              height={3376}
              sizes="88px"
              className={i === screen ? 'is-on' : undefined}
            />
          ))}
        </span>
      </button>

      <button type="button" className="toy toy--record" onPointerDown={spin} aria-label="Play a few notes">
        <span key={spun} className={spun ? 'toy-record is-spun' : 'toy-record'}>
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="56" className="toy-record-disc" />
            <circle cx="60" cy="60" r="44" className="toy-record-groove" />
            <circle cx="60" cy="60" r="34" className="toy-record-groove" />
            <circle cx="60" cy="60" r="20" className="toy-record-label" />
            <circle cx="60" cy="60" r="3" className="toy-record-hole" />
            <path d="M60 46a14 14 0 0 1 13 9" className="toy-record-shine" />
          </svg>
        </span>
      </button>

      <p className="toy-hint" aria-hidden="true">
        tap them, sound on
      </p>
    </div>
  );
}

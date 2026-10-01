'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createKit, type Voice } from '@/lib/drum-synth';

const PADS: { voice: Voice; label: string; key: string }[] = [
  { voice: 'kick', label: 'Kick', key: 'A' },
  { voice: 'snare', label: 'Snare', key: 'S' },
  { voice: 'hat', label: 'Hi-hat', key: 'D' },
  { voice: 'tom', label: 'Tom', key: 'F' },
  { voice: 'crash', label: 'Crash', key: 'G' },
];

export function DrumKit() {
  const root = useRef<HTMLDivElement>(null);
  const kit = useRef<ReturnType<typeof createKit> | null>(null);
  const timers = useRef<Partial<Record<Voice, number>>>({});
  const [hit, setHit] = useState<Partial<Record<Voice, boolean>>>({});

  const strike = useCallback((voice: Voice) => {
    // The AudioContext can only start after a user gesture, so create it on the first hit
    kit.current ??= createKit();
    kit.current.play(voice);
    setHit((h) => ({ ...h, [voice]: true }));
    window.clearTimeout(timers.current[voice]);
    timers.current[voice] = window.setTimeout(() => setHit((h) => ({ ...h, [voice]: false })), 130);
  }, []);

  useEffect(() => {
    // Keys only play while the kit is on screen, so typing "a" elsewhere stays silent
    let visible = false;
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    if (root.current) io.observe(root.current);

    const onKey = (e: KeyboardEvent) => {
      if (!visible || e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement;
      if (target.closest('input, textarea, select, [contenteditable="true"]')) return;
      const pad = PADS.find((p) => p.key === e.key.toUpperCase());
      if (pad) strike(pad.voice);
    };
    window.addEventListener('keydown', onKey);
    const pending = timers.current;
    return () => {
      io.disconnect();
      window.removeEventListener('keydown', onKey);
      Object.values(pending).forEach((id) => window.clearTimeout(id));
      kit.current?.close();
      kit.current = null;
    };
  }, [strike]);

  return (
    <div ref={root} className="drums">
      <div className="drums-head">
        <p className="drums-title">I play drums</p>
        <p className="drums-hint">
          Tap a pad<span className="drums-keys">, or play with A S D F G</span>. Sound on.
        </p>
      </div>
      <div className="drums-pads">
        {PADS.map((pad) => (
          <button
            key={pad.voice}
            type="button"
            className={`drum-pad drum-pad--${pad.voice}${hit[pad.voice] ? ' is-hit' : ''}`}
            onPointerDown={(e) => {
              // Pointer down rather than click: drums have to respond on contact
              e.preventDefault();
              strike(pad.voice);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                strike(pad.voice);
              }
            }}
          >
            <span className="drum-pad-label">{pad.label}</span>
            <span className="drum-pad-key" aria-hidden="true">
              {pad.key}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

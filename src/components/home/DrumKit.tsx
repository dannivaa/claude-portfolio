'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Voice = 'kick' | 'snare' | 'hat' | 'tom' | 'crash';

const PADS: { voice: Voice; label: string; key: string }[] = [
  { voice: 'kick', label: 'Kick', key: 'A' },
  { voice: 'snare', label: 'Snare', key: 'S' },
  { voice: 'hat', label: 'Hi-hat', key: 'D' },
  { voice: 'tom', label: 'Tom', key: 'F' },
  { voice: 'crash', label: 'Crash', key: 'G' },
];

// Synthesised with Web Audio, so there are no samples to download.
function createKit() {
  const ctx = new AudioContext();
  const master = ctx.createGain();
  master.gain.value = 0.7;
  master.connect(ctx.destination);

  const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
  const data = noise.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

  const envelope = (peak: number, decay: number, t: number) => {
    const g = ctx.createGain();
    g.gain.setValueAtTime(peak, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + decay);
    g.connect(master);
    return g;
  };

  const tone = (type: OscillatorType, from: number, to: number, glide: number, peak: number, decay: number, t: number) => {
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(from, t);
    osc.frequency.exponentialRampToValueAtTime(to, t + glide);
    osc.connect(envelope(peak, decay, t));
    osc.start(t);
    osc.stop(t + decay + 0.05);
  };

  const hiss = (cutoff: number, peak: number, decay: number, t: number) => {
    const src = ctx.createBufferSource();
    src.buffer = noise;
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = cutoff;
    src.connect(filter);
    filter.connect(envelope(peak, decay, t));
    src.start(t);
    src.stop(t + decay + 0.05);
  };

  const play = (voice: Voice) => {
    if (ctx.state === 'suspended') ctx.resume();
    const t = ctx.currentTime;
    switch (voice) {
      case 'kick':
        tone('sine', 150, 45, 0.12, 1, 0.45, t);
        break;
      case 'snare':
        hiss(1200, 0.7, 0.22, t);
        tone('triangle', 200, 120, 0.08, 0.5, 0.12, t);
        break;
      case 'hat':
        hiss(7500, 0.35, 0.06, t);
        break;
      case 'tom':
        tone('sine', 240, 110, 0.25, 0.8, 0.4, t);
        break;
      case 'crash':
        hiss(5000, 0.45, 1.4, t);
        break;
    }
  };

  return { play, close: () => ctx.close() };
}

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

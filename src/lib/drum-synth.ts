export type Voice = 'kick' | 'snare' | 'hat' | 'tom' | 'crash';

// Synthesised with Web Audio, so there are no samples to download.
export function createKit() {
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

  /** A short plucked arpeggio, for the hero's record. Frequencies in Hz, `gap` in seconds. */
  const melody = (notes: number[], gap = 0.14) => {
    if (ctx.state === 'suspended') ctx.resume();
    const t = ctx.currentTime;
    notes.forEach((f, i) => tone('triangle', f, f * 0.995, 0.3, 0.35, 0.5, t + i * gap));
  };

  return { play, melody, close: () => ctx.close() };
}

/* eslint-disable @next/next/no-img-element -- decorative scene assets exported from Figma */
import { CardScene } from '@/components/home/scenes/CardScene';
import { figmaTimeline, type FigmaEase } from '@/components/home/scenes/figma';
import type { Project } from '@/lib/projects';

// Safey, rebuilt from Danylo's Figma motion (frame "01", 1500×844, 9.598s loop). Every track
// below is the Figma timeline as exported: values, times (fractions of the loop) and easings.
// One change: in Figma the paywall cuts from the full view to the plan toggle in a single
// millisecond; here the same move is a quick eased push-in, so the camera never jumps.

const DUR = 9.598;
const T = figmaTimeline('sf', DUR);

const CAMERA: FigmaEase = [0.3, 0, 0.35, 1];
const CAMERA_OUT: FigmaEase = [0.626, -0.002, 0.297, 1];
const RISE: FigmaEase = [0.334, 0, 0.31, 1.008];
const ZOOM: FigmaEase = [0.031, 0, 0.263, 1.031];
const FADE: FigmaEase = [0.5, 0, 0.5, 1];

/* Main screen: zoom in on "Get AI+", tap, fade out; zoom back out at the end of the loop */
const main = T.layer({
  scale: { v: [1, 2, 2, 1, 1], t: [0, 0.0749, 0.8049, 0.9083, 1], e: [CAMERA, 'linear', CAMERA_OUT, 'linear'] },
  x: { v: [0, 187, 187, 0, 0], t: [0, 0.0749, 0.2499, 0.25, 1], e: [CAMERA, 'linear', 'linear', 'linear'] },
  y: { v: [0, 484, 484, 0, 0], t: [0, 0.0749, 0.2499, 0.25, 1], e: [CAMERA, 'linear', 'linear', 'linear'] },
});
const mainContent = T.layer({
  opacity: { v: [1, 1, 0, 0, 1, 1], t: [0, 0.1235, 0.1536, 0.8049, 0.9083, 1], e: ['linear', [0, 0, 0.71, 1], 'linear', [0.63, 0, 0.3, 1], 'linear'] },
});
const getAi = T.layer({
  scale: { v: [1, 1, 0.9, 1, 1], t: [0, 0.0849, 0.1072, 0.1235, 1], e: ['linear', 'easeOut', 'easeOut', 'linear'] },
});

/* Paywall: rises in, pushes in on the plan toggle (smoothed), then on the trial button */
const paywall = T.layer({
  opacity: { v: [1, 1, 0, 0], t: [0, 0.7706, 0.8153, 1], e: ['linear', FADE, 'linear'] },
  scale: { v: [1.5, 1.5, 1, 1, 1.9, 1.9, 2.3, 2.3], t: [0, 0.1456, 0.2592, 0.283, 0.323, 0.4027, 0.4443, 1], e: ['linear', RISE, 'linear', ZOOM, 'linear', ZOOM, 'linear'] },
  y: { v: [0, 0, -464, -464, -736, -736], t: [0, 0.283, 0.323, 0.4027, 0.4443, 1], e: ['linear', ZOOM, 'linear', ZOOM, 'linear'] },
});
const text = T.layer({
  opacity: { v: [0, 0, 1, 1], t: [0, 0.1456, 0.2318, 1], e: ['linear', RISE, 'linear'] },
  y: { v: [40, 40, 0, 0], t: [0, 0.1536, 0.2441, 1], e: ['linear', RISE, 'linear'] },
});
const list = T.layer({
  opacity: { v: [0, 0, 1, 1], t: [0, 0.1664, 0.2526, 1], e: ['linear', RISE, 'linear'] },
  y: { v: [40, 40, 0, 0], t: [0, 0.1745, 0.265, 1], e: ['linear', RISE, 'linear'] },
});
const toggle = T.layer({
  opacity: { v: [0, 0, 1, 1], t: [0, 0.1872, 0.2735, 1], e: ['linear', RISE, 'linear'] },
  scale: { v: [1, 1, 0.99, 1, 1], t: [0, 0.3252, 0.344, 0.3614, 1], e: ['linear', [0, 0, 0.4, 1], [0, 0, 0.4, 1], 'linear'] },
  y: { v: [40, 40, 0, 0], t: [0, 0.1953, 0.2858, 1], e: ['linear', RISE, 'linear'] },
});
const toggleThumb = T.layer({ x: { v: [0, 0, 171, 171], t: [0, 0.3298, 0.3614, 1], e: ['linear', [0.502, 0, 0.393, 1], 'linear'] } });
const monthly = T.layer({ opacity: { v: [1, 1, 0.75, 0.75], t: [0, 0.3298, 0.3614, 1], e: ['linear', [0, 0, 0.4, 1], 'linear'] } });
const yearly = T.layer({ opacity: { v: [0.75, 0.75, 1, 1], t: [0, 0.3379, 0.3614, 1], e: ['linear', [0, 0, 0.401, 1], 'linear'] } });
const trial = T.layer({
  opacity: { v: [0, 0, 1, 1], t: [0, 0.2081, 0.2943, 1], e: ['linear', RISE, 'linear'] },
  y: { v: [16, 16, -24, -24], t: [0, 0.2161, 0.3067, 1], e: ['linear', RISE, 'linear'] },
});
const trialPress = T.layer({
  scale: { v: [1, 1, 0.95, 1, 1], t: [0, 0.4648, 0.4844, 0.5039, 1], e: ['linear', [0, 0, 0.608, 1], [0, 0, 0.61, 1], 'linear'] },
});
const startLabel = T.layer({ opacity: { v: [1, 1, 0, 0], t: [0, 0.4844, 0.5169, 1], e: ['linear', FADE, 'linear'] } });
const processing = T.layer({
  opacity: { v: [0, 0, 1, 1, 0, 0], t: [0, 0.5169, 0.5524, 0.6767, 0.707, 1], e: ['linear', FADE, 'linear', FADE, 'linear'] },
});
const spinner = T.layer({ rotate: { v: [-360, -360, 0, 0], t: [0, 0.5222, 0.6767, 1] } });
const success = T.layer({ opacity: { v: [0, 0, 1, 1], t: [0, 0.707, 0.7378, 1], e: ['linear', FADE, 'linear'] } });

const CHIPS = [
  { label: 'Romance', icon: 'romance', width: 107 },
  { label: 'Sport', icon: 'sport', width: 84 },
  { label: 'Vampire', icon: 'vampire', width: 99 },
];

const FEATURES: [name: string, free: boolean][] = [
  ['Basic chat model', true],
  ['Video calls', true],
  ['Unlimited messages', true],
  ['No ads', false],
  ['Voice messages', false],
  ['No slow mode', false],
  ['Better intelligence', false],
  ['Longer responses', false],
];

const A = '/images/motion/safey';

export function SafeyScene({ project, label }: { project: Project; label: string }) {
  return (
    <CardScene label={label} stage={project.stage} css={T.css()} className="sfy" width={1500} height={844}>
      <img className="sfy-bg" src={`${A}/bg.svg`} alt="" />

      <div className="sfy-main" style={main}>
        <div className="sfy-main-content" style={mainContent}>
          <img className="sfy-glow" src={`${A}/glow.svg`} alt="" />
          <span className="sfy-stack sfy-stack--back" />
          <span className="sfy-stack sfy-stack--mid" />

          <div className="sfy-photo">
            <img className="sfy-photo-img" src={`${A}/emily.jpg`} alt="" />
            <span className="sfy-photo-shade" />
            <div className="sfy-photo-info">
              <p className="sfy-name">
                Emily
                <img src={`${A}/name-icon-1.svg`} alt="" />
                <img src={`${A}/name-icon-2.svg`} alt="" />
              </p>
              <p className="sfy-age">Age: 25</p>
              <p className="sfy-bio">Loves reading, cozy time spending and deep conversations</p>
              <span className="sfy-chat">
                <img src={`${A}/message-circle.svg`} alt="" />
              </span>
            </div>
          </div>

          <div className="sfy-header">
            <span className="sfy-logo">Safey</span>
            <span className="sfy-getai" style={getAi}>
              Get AI+
            </span>
            <span className="sfy-bell">
              <img src={`${A}/bell.svg`} alt="" />
            </span>
          </div>

          <div className="sfy-chips">
            <span className="sfy-chip is-on" style={{ width: 56 }}>
              All
            </span>
            {CHIPS.map((c) => (
              <span key={c.label} className="sfy-chip" style={{ width: c.width }}>
                <img src={`${A}/${c.icon}.svg`} alt="" />
                {c.label}
              </span>
            ))}
          </div>

          <div className="sfy-tabs">
            <span className="sfy-tab is-on">
              <img src={`${A}/home-smile.svg`} alt="" />
              Home
            </span>
            <span className="sfy-tab">
              <img src={`${A}/message-chat-circle.svg`} alt="" />
              Chat
            </span>
            <span className="sfy-tab">
              <img src={`${A}/user-03.svg`} alt="" />
              Profile
            </span>
          </div>
        </div>
      </div>

      <div className="sfy-pay" style={paywall}>
        <div className="sfy-text" style={text}>
          <p className="sfy-title">Unlock AI+</p>
          <p className="sfy-sub">First 3 days free, then $6,99/month. Billed annually.</p>
        </div>

        <div className="sfy-list" style={list}>
          <div className="sfy-list-panel">
            <div className="sfy-list-head">
              <span>Free</span>
              <span>AI+</span>
            </div>
            {FEATURES.map(([name, free], i) => (
              <div key={name} className="sfy-row">
                <span>{name}</span>
                <span className="sfy-row-marks">
                  <img src={free ? `${A}/${i === 0 ? 'check' : 'check-2'}.svg` : `${A}/minus.svg`} alt="" />
                  <img src={`${A}/${i === 0 || i === 2 ? 'check' : 'check-2'}.svg`} alt="" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="sfy-toggle" style={toggle}>
          <span className="sfy-toggle-thumb" style={toggleThumb} />
          <div className="sfy-plan sfy-plan--month" style={monthly}>
            <span className="sfy-price">$9,99</span>
            <span className="sfy-per">/month</span>
            <span className="sfy-plan-name">Monthly</span>
          </div>
          <div className="sfy-plan sfy-plan--year" style={yearly}>
            <span className="sfy-plan-name">Yearly</span>
            <span className="sfy-price">$125</span>
            <span className="sfy-per">/year</span>
            <span className="sfy-month">
              $6,99 <span>/month</span>
            </span>
          </div>
          <span className="sfy-badge">33% OFF</span>
        </div>

        <div className="sfy-trial" style={trial}>
          <div className="sfy-trial-btn" style={trialPress}>
            <span className="sfy-trial-label" style={startLabel}>
              Start 3-day free trial
            </span>
            <span className="sfy-trial-label" style={processing}>
              <img className="sfy-spinner" src={`${A}/spinner.svg`} alt="" style={spinner} />
              Processing
            </span>
            <span className="sfy-trial-label" style={success}>
              Payment successful!
            </span>
          </div>
        </div>
      </div>
    </CardScene>
  );
}

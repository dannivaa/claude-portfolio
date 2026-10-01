import { Check } from 'lucide-react';
import { CardScene } from '@/components/home/scenes/CardScene';
import { EASE, timeline, type Key, type Pose } from '@/components/home/scenes/timeline';
import type { Project } from '@/lib/projects';

// GudFood: the order lands, the camera pulls back, the rating sheet rises, five stars,
// two tags, Done, a thank-you, and the loop fades back to the order on its way.
// Beats follow the Safey timeline: open close-up, tap, staged rise, zoom onto the action.

const T = timeline('gf', 9.6);
const RESET = 8.12; // everything snaps back while the stage is empty

const back = (pose: Pose): Key => [RESET + 0.01, pose];

const cam = T.layer({ s: 1.75 }, [
  [1.6, {}],
  [2.4, { s: 1, y: -210 }, EASE.camera],
  [7.7, {}],
  [8.05, { o: 0 }, EASE.fade],
  [RESET, { s: 1.6, y: 0 }],
  [8.95, { o: 1, s: 1.75 }, EASE.rise],
]);

const fill = T.layer({ sx: 0.667 }, [[0.45, {}], [1.1, { sx: 1 }, EASE.toggle], [RESET, {}], back({ sx: 0.667 })], '0 50%');
const lastDot = T.layer({ o: 0, s: 0.4 }, [[1.0, {}], [1.3, { o: 1, s: 1 }, EASE.pop], [RESET, {}], back({ o: 0, s: 0.4 })]);
const outOld = T.layer({}, [[1.12, {}], [1.32, { o: 0, y: -8 }, EASE.fade], [RESET, {}], back({ o: 1, y: 0 })]);
const inNew = T.layer({ o: 0, y: 8 }, [[1.2, {}], [1.42, { o: 1, y: 0 }, EASE.fade], [RESET, {}], back({ o: 0, y: 8 })]);

const sheet = T.layer({ o: 0, s: 1.16, y: 90 }, [
  [2.05, {}],
  [2.85, { o: 1, y: 21 }, EASE.rise],
  [5.7, {}],
  [6.3, { s: 1.6, y: -149 }, EASE.zoom],
  [7.7, {}],
  [8.05, { o: 0 }, EASE.fade],
  back({ o: 0, s: 1.16, y: 90 }),
]);

const rise = (at: number, from = 32) =>
  T.layer({ o: 0, y: from }, [[at, {}], [at + 0.7, { o: 1, y: 0 }, EASE.rise], [RESET, {}], back({ o: 0, y: from })]);

const title = rise(2.2);
const starsRow = rise(2.35);
const stars = [0, 1, 2, 3, 4].map((i) =>
  T.layer({ o: 0, s: 0.4 }, [[3.0 + i * 0.13, {}], [3.28 + i * 0.13, { o: 1, s: 1 }, EASE.pop], [RESET, {}], back({ o: 0, s: 0.4 })]),
);
const helper = rise(3.7, 12);
const TAGS = ['Clear communication', 'Tasty', 'Fast delivery', 'Smooth experience', 'Other'];
const tagIn = TAGS.map((_, i) => rise(3.85 + i * 0.07, 20));
const PICKED: Record<number, number> = { 1: 4.75, 2: 5.2 };
const tagPress = TAGS.map((_, i) =>
  PICKED[i]
    ? T.layer({}, [[PICKED[i], {}], [PICKED[i] + 0.14, { s: 0.94 }, EASE.press], [PICKED[i] + 0.32, { s: 1 }, EASE.press]])
    : undefined,
);
const tagOn = TAGS.map((_, i) =>
  PICKED[i]
    ? T.layer({ o: 0 }, [[PICKED[i] + 0.08, {}], [PICKED[i] + 0.26, { o: 1 }, EASE.fade], [RESET, {}], back({ o: 0 })])
    : undefined,
);
const button = rise(4.2, 20);
const press = T.layer({}, [[6.45, {}], [6.62, { s: 0.95 }, EASE.press], [6.82, { s: 1 }, EASE.press]]);
const doneOut = T.layer({}, [[6.72, {}], [6.92, { o: 0, y: -10 }, EASE.fade], [RESET, {}], back({ o: 1, y: 0 })]);
const doneIn = T.layer({ o: 0, y: 10 }, [[6.82, {}], [7.08, { o: 1, y: 0 }, EASE.fade], [RESET, {}], back({ o: 0, y: 10 })]);

const STEPS = ['Accepted', 'Preparing', 'On the way', 'Delivered'];

export function GudFoodScene({ project, label }: { project: Project; label: string }) {
  return (
    <CardScene label={label} stage={project.stage} css={T.css()} className="scg">
      <div className="scg-cam" style={cam}>
        <div className="scg-card">
          <div className="scg-card-top">
            {/* eslint-disable-next-line @next/next/no-img-element -- decorative scene asset */}
            <img className="scg-logo" src="/images/motion/hanh.png" alt="" />
            <div>
              <p className="scg-name">Hanh cafe &amp; market</p>
              <p className="scg-sub">21.08.25 · 7 items</p>
            </div>
            <span className="scg-status">
              <span className="scg-status-a" style={outOld}>
                {/* eslint-disable-next-line @next/next/no-img-element -- decorative scene asset */}
                <img src="/images/motion/truck.svg" alt="" />
                On the way
              </span>
              <span className="scg-status-b" style={inNew}>
                <Check size={13} strokeWidth={2.75} />
                Delivered
              </span>
            </span>
          </div>
          <div className="scg-track">
            <span className="scg-rail" />
            <span className="scg-fill" style={fill} />
            {STEPS.map((s, i) => (
              <span key={s} className="scg-step" style={{ left: `${(i / 3) * 100}%` }}>
                <i className={i < 3 ? 'is-on' : undefined} />
                {i === 3 && <i className="is-on scg-step-last" style={lastDot} />}
                <span>{s}</span>
              </span>
            ))}
          </div>
          <p className="scg-eta">
            <span style={outOld}>
              Estimated arrival <b>5–10 min</b>
            </span>
            <span style={inNew}>
              Delivered at <b>14:32</b>
            </span>
          </p>
        </div>
      </div>

      <div className="scg-sheet" style={sheet}>
        <p className="scg-sheet-title" style={title}>
          How was your order?
        </p>
        <div className="scg-stars" style={starsRow}>
          {stars.map((style, i) => (
            <span key={i} className="scg-star">
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative scene asset */}
              <img src="/images/motion/star-off.svg" alt="" />
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative scene asset */}
              <img src="/images/motion/star-on.svg" alt="" className="scg-star-on" style={style} />
            </span>
          ))}
        </div>
        <p className="scg-helper" style={helper}>
          Happy to hear that! What did you like?
        </p>
        <div className="scg-tags">
          {TAGS.map((tag, i) => (
            <span key={tag} style={tagIn[i]}>
              <span className="scg-tag" style={tagPress[i]}>
                {tag}
                {tagOn[i] && (
                  <span className="scg-tag-on" style={tagOn[i]}>
                    {tag}
                  </span>
                )}
              </span>
            </span>
          ))}
        </div>
        <div style={button}>
          <span className="scg-done" style={press}>
            <span style={doneOut}>Done</span>
            <span className="scg-done-thanks" style={doneIn}>
              <Check size={18} strokeWidth={2.75} />
              Thanks for the feedback!
            </span>
          </span>
        </div>
      </div>
    </CardScene>
  );
}

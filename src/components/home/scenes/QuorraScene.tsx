import '@/styles/admin-concept.css';
import { ArrowRight, Check, Clock, CornerDownLeft, Lock, Send } from 'lucide-react';
import { CardScene } from '@/components/home/scenes/CardScene';
import { EASE, timeline, type Key, type Pose } from '@/components/home/scenes/timeline';
import { Pair } from '@/components/case-study/admin/AdminConcept';
import type { Project } from '@/lib/projects';

// Quorra: the queue up close, a tap on the next order, the order rises and its four checks
// tick through, the camera closes in on "Review and send", the confirmation asks for the
// card's last four digits, and the payout goes out. Same beats and easings as Safey.

const T = timeline('qr', 9.6);
const RESET = 8.12;
const back = (pose: Pose): Key => [RESET + 0.01, pose];

const queue = T.layer({ s: 1.85, y: 20 }, [
  [0.95, {}],
  [1.45, { s: 1.98 }, EASE.camera],
  [1.7, { o: 0 }, EASE.fade],
  [RESET, { s: 1.7, y: 20 }],
  [8.95, { o: 1, s: 1.85 }, EASE.rise],
]);
const rowPress = T.layer({}, [[1.0, {}], [1.17, { s: 0.97 }, EASE.press], [1.38, { s: 1 }, EASE.press]]);

const order = T.layer({ o: 0, s: 1.32, y: 90 }, [
  [1.6, {}],
  [2.4, { o: 1, y: 20 }, EASE.rise],
  [3.7, {}],
  [4.3, { s: 1.8, y: -170 }, EASE.zoom],
  [4.75, {}],
  [5.05, { o: 0 }, EASE.fade],
  back({ o: 0, s: 1.32, y: 90 }),
]);
const rise = (at: number, from = 28) =>
  T.layer({ o: 0, y: from }, [[at, {}], [at + 0.7, { o: 1, y: 0 }, EASE.rise], [RESET, {}], back({ o: 0, y: from })]);
const orderHead = rise(1.75, 20);
const orderChecks = rise(1.95);
const orderBar = rise(2.15, 20);
const ticks = [0, 1, 2, 3].map((i) =>
  T.layer({ o: 0, s: 0.3 }, [[2.65 + i * 0.22, {}], [2.92 + i * 0.22, { o: 1, s: 1 }, EASE.pop], [RESET, {}], back({ o: 0, s: 0.3 })]),
);
const allPassed = T.layer({ o: 0 }, [[3.55, {}], [3.8, { o: 1 }, EASE.fade], [RESET, {}], back({ o: 0 })]);
const reviewPress = T.layer({}, [[4.36, {}], [4.52, { s: 0.95 }, EASE.press], [4.72, { s: 1 }, EASE.press]]);

const modal = T.layer({ o: 0, s: 1.55, y: 90 }, [
  [4.8, {}],
  [5.55, { o: 1, y: 10 }, EASE.rise],
  [7.75, {}],
  [8.05, { o: 0 }, EASE.fade],
  back({ o: 0, s: 1.55, y: 90 }),
]);
const digits = [0, 1, 2, 3].map((i) =>
  T.layer({ o: 0, s: 0.4 }, [[5.7 + i * 0.16, {}], [5.92 + i * 0.16, { o: 1, s: 1 }, EASE.pop], [RESET, {}], back({ o: 0, s: 0.4 })]),
);
const matches = T.layer({ o: 0, x: -6 }, [[6.35, {}], [6.57, { o: 1, x: 0 }, EASE.fade], [RESET, {}], back({ o: 0, x: -6 })]);
const sendPress = T.layer({}, [[6.7, {}], [6.85, { s: 0.95 }, EASE.press], [7.03, { s: 1 }, EASE.press]]);
const sendOut = T.layer({}, [[6.93, {}], [7.1, { o: 0, y: -8 }, EASE.fade], [RESET, {}], back({ o: 1, y: 0 })]);
const sendIn = T.layer({ o: 0, y: 8 }, [[7.01, {}], [7.23, { o: 1, y: 0 }, EASE.fade], [RESET, {}], back({ o: 0, y: 8 })]);

const QUEUE = [
  { from: 'USDT', amount: '2,400.00 USDT', client: 'Olena Kovalenko', age: '2m', sla: 'ok', state: 'Ready', tone: 'ok' },
  { from: 'BTC', amount: '0.0510 BTC', client: 'Taras Melnyk', age: '4m', sla: 'ok', state: 'Flagged', tone: 'danger' },
  { from: 'USDT', amount: '880.00 USDT', client: 'Andrii Savchuk', age: '9m', sla: 'warn', state: 'New', tone: 'neutral' },
  { from: 'ETH', amount: '1.2000 ETH', client: 'Sofiia Lysenko', age: '11m', sla: 'warn', state: 'New', tone: 'neutral' },
];

const CHECKS = [
  ['Incoming transfer', '20 / 20 confirmations'],
  ['KYC', 'Verified · Tier 2'],
  ['AML screening', 'Clear'],
  ['Recipient name', 'Matches card holder'],
];

export function QuorraScene({ project, label }: { project: Project; label: string }) {
  return (
    <CardScene label={label} stage={project.stage} css={T.css()} className="scq">
      <div className="scq-panel scq-queue" style={queue}>
        <div className="ac-tabs scq-tabs">
          <span className="is-on">
            Mine <i className="num">5</i>
          </span>
          <span>
            All <i className="num">14</i>
          </span>
          <span>
            Flagged <i className="num">2</i>
          </span>
        </div>
        {QUEUE.map((q, i) => (
          <div key={q.amount} className={`ac-row${i === 0 ? ' is-selected' : ''}`} style={i === 0 ? rowPress : undefined}>
            <Pair from={q.from} to="UAH" />
            <span className="ac-row-main">
              <span className="ac-row-top">
                <b className="num">{q.amount}</b>
                <span className={`ac-age ac-age--${q.sla} num`}>
                  <Clock size={11} />
                  {q.age}
                </span>
              </span>
              <span className="ac-row-bottom">
                {q.client}
                <span className={`ac-state ac-state--${q.tone}`}>{q.state}</span>
              </span>
            </span>
          </div>
        ))}
      </div>

      <div className="scq-panel scq-order" style={order}>
        <div style={orderHead}>
          <p className="ac-order-id">Order 48213</p>
          <p className="scq-amount num">
            2,400.00 USDT <ArrowRight size={18} className="ac-dim" /> ₴99,480.00
          </p>
          <p className="ac-order-sub">
            <Pair from="USDT" to="UAH" />
            Tessel · rate 41.45 · to Visa •••• 4417
          </p>
        </div>
        <div className="scq-checks" style={orderChecks}>
          <p className="ac-sec-title">
            Checks
            <span className="ac-ok num" style={allPassed}>
              4 / 4 passed
            </span>
          </p>
          <ul>
            {CHECKS.map(([name, detail], i) => (
              <li key={name}>
                <span className="scq-tick">
                  <span className="ac-tick" style={ticks[i]}>
                    <Check size={10} strokeWidth={3} />
                  </span>
                </span>
                {name}
                <small>{detail}</small>
              </li>
            ))}
          </ul>
        </div>
        <div className="ac-sendbar scq-bar" style={orderBar}>
          <span className="ac-sendbar-text">
            Sending <b className="num">₴99,480.00</b>
          </span>
          <span className="ac-btn ac-btn--go" style={reviewPress}>
            Review and send
            <kbd>
              ⌘<CornerDownLeft size={10} />
            </kbd>
          </span>
        </div>
      </div>

      <div className="scq-panel scq-modal" style={modal}>
        <div className="ac-modal-head">
          <span className="ac-modal-icon">
            <Lock size={16} />
          </span>
          <div>
            <p className="ac-modal-title">Confirm payout</p>
            <p className="ac-modal-sub">A sent payout can&rsquo;t be recalled.</p>
          </div>
        </div>
        <div className="ac-modal-amount scq-modal-amount">
          <span className="ac-modal-label">You&rsquo;re sending</span>
          <b className="num">₴99,480.00</b>
          <span className="ac-modal-to">Olena Kovalenko · Visa •••• 4417</span>
        </div>
        <div className="ac-confirm">
          <p>Type the last 4 digits of the card</p>
          <div className="ac-otp num">
            {['4', '4', '1', '7'].map((d, i) => (
              <span key={i} className="scq-otp-box">
                <span className="scq-otp-digit" style={digits[i]}>
                  {d}
                </span>
              </span>
            ))}
            <span className="ac-otp-match" style={matches}>
              <Check size={13} strokeWidth={2.5} /> Matches
            </span>
          </div>
        </div>
        <span className="ac-btn ac-btn--go ac-btn--lg scq-send" style={sendPress}>
          <span className="scq-send-a" style={sendOut}>
            <Send size={13} />
            Send ₴99,480.00
          </span>
          <span className="scq-send-b" style={sendIn}>
            <Check size={15} strokeWidth={2.75} />
            Payout sent
          </span>
        </span>
      </div>
    </CardScene>
  );
}

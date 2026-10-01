import '@/styles/admin-concept.css';
import type { CSSProperties, ReactNode } from 'react';
import {
  Activity,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  Check,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock,
  Copy,
  CornerDownLeft,
  CreditCard,
  Ellipsis,
  Inbox,
  LayoutDashboard,
  ListFilter,
  Lock,
  Pause,
  Plus,
  Search,
  Send,
  Settings,
  ShieldCheck,
  TriangleAlert,
  Users,
  Wallet,
} from 'lucide-react';
import { ScaledFrame } from '@/components/case-study/admin/ScaledFrame';

// Concept recreations of an exchange back office, built for the portfolio. The shipped
// design stays under NDA: product names, people and values here are all invented.

const W = 1152;
const H = 720;

type Page = 'overview' | 'orders' | 'payouts' | 'clients' | 'wallets' | 'market-maker' | 'settings';

const NAV: { group?: string; items: { id: Page; label: string; icon: typeof Wallet; count?: number }[] }[] = [
  {
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'orders', label: 'Orders', icon: Inbox, count: 14 },
      { id: 'payouts', label: 'Payouts', icon: Send },
      { id: 'clients', label: 'Clients', icon: Users },
    ],
  },
  {
    group: 'Treasury',
    items: [
      { id: 'wallets', label: 'Wallets', icon: Wallet },
      { id: 'market-maker', label: 'Market maker', icon: Activity },
    ],
  },
  { group: 'Workspace', items: [{ id: 'settings', label: 'Settings', icon: Settings }] },
];

/** Two overlapping coin marks for a trading pair. */
export function Pair({ from, to }: { from: string; to: string }) {
  return (
    <span className="ac-pair" aria-hidden="true">
      <span className={`ac-coin ac-coin--${from.toLowerCase()}`}>{from.slice(0, 1)}</span>
      <span className={`ac-coin ac-coin--${to.toLowerCase()}`}>{to === 'UAH' ? '₴' : to.slice(0, 1)}</span>
    </span>
  );
}

function Shell({
  active,
  crumbs,
  actions,
  children,
}: {
  active: Page;
  crumbs: string[];
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="ac-app">
      <aside className="ac-side">
        <div className="ac-ws">
          <span className="ac-mark" />
          <span className="ac-ws-name">Quorra</span>
          <ChevronDown size={13} className="ac-dim" />
          <span className="ac-ws-icons">
            <Search size={14} />
            <Plus size={14} />
          </span>
        </div>
        {NAV.map((g, i) => (
          <nav key={g.group ?? i} className="ac-nav">
            {g.group && <p className="ac-nav-group">{g.group}</p>}
            {g.items.map(({ id, label, icon: Icon, count }) => (
              <span key={id} className={`ac-nav-item${id === active ? ' is-active' : ''}`}>
                <Icon size={15} strokeWidth={1.8} />
                {label}
                {count !== undefined && <span className="ac-nav-count">{count}</span>}
              </span>
            ))}
          </nav>
        ))}
        <div className="ac-shift">
          <div className="ac-shift-row">
            <span>Your queue</span>
            <b className="num">9 / 14</b>
          </div>
          <span className="ac-shift-bar">
            <i style={{ width: '64%' }} />
          </span>
        </div>
        <div className="ac-me">
          <span className="ac-avatar ac-avatar--m">MH</span>
          <span className="ac-me-text">
            Mira Holub
            <span>Finance</span>
          </span>
          <Settings size={14} className="ac-dim" />
        </div>
      </aside>
      <div className="ac-panel">
        <header className="ac-top">
          <span className="ac-crumbs">
            {crumbs.map((c, i) => (
              <span key={c} className={i === crumbs.length - 1 ? 'is-last' : undefined}>
                {i > 0 && <ChevronRight size={13} className="ac-dim" />}
                {c}
              </span>
            ))}
          </span>
          <span className="ac-top-right">
            <span className="ac-cmd">
              <Search size={13} />
              Search
              <kbd>⌘K</kbd>
            </span>
            <Bell size={15} strokeWidth={1.8} className="ac-dim" />
            {actions}
          </span>
        </header>
        <div className="ac-body">{children}</div>
      </div>
    </div>
  );
}

/** Catmull-Rom points to a smooth cubic Bézier path. */
function smooth(pts: [number, number][]) {
  return pts
    .map((p, i) => {
      if (i === 0) return `M${p[0]} ${p[1]}`;
      const p0 = pts[i - 2] ?? pts[i - 1];
      const p1 = pts[i - 1];
      const p3 = pts[i + 1] ?? p;
      const c1 = [p1[0] + (p[0] - p0[0]) / 6, p1[1] + (p[1] - p0[1]) / 6];
      const c2 = [p[0] - (p3[0] - p1[0]) / 6, p[1] - (p3[1] - p1[1]) / 6];
      return `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p[0]} ${p[1]}`;
    })
    .join(' ');
}

/* ───────────────────────── Overview ───────────────────────── */

const HOURS = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
const COMPLETED = [12, 18, 25, 31, 34, 38, 44, 47, 42, 45, 38, 30, 22];
const CH = { w: 520, h: 168, max: 50 };
const chartPts = COMPLETED.map((v, i): [number, number] => [
  Math.round((i * CH.w) / (COMPLETED.length - 1)),
  Math.round(CH.h - (v / CH.max) * CH.h),
]);
const PIN = 7;

const ATTENTION = [
  { tone: 'danger', icon: TriangleAlert, title: 'Name mismatch on payout', meta: 'Order 48212 · BTC → UAH', time: '2m' },
  { tone: 'warn', icon: Clock, title: 'Waiting longer than 15 min', meta: 'Order 48190 · USDT → UAH', time: '18m' },
  { tone: 'warn', icon: Wallet, title: 'ETH hot wallet below threshold', meta: 'Tessel · 41.2 of 60 ETH', time: '26m' },
  { tone: 'info', icon: ShieldCheck, title: 'Manual AML review requested', meta: 'Client C-18440', time: '1h' },
] as const;

const STAGES = [
  { label: 'New', value: 6, cls: 'new' },
  { label: 'Checking', value: 4, cls: 'check' },
  { label: 'Ready to send', value: 3, cls: 'ready' },
  { label: 'Sending', value: 1, cls: 'send' },
];

function OverviewScreen() {
  const line = smooth(chartPts);
  const [px, py] = chartPts[PIN];
  return (
    <Shell
      active="overview"
      crumbs={['Overview']}
      actions={
        <span className="ac-btn ac-btn--primary">
          <Inbox size={13} />
          Open queue
        </span>
      }
    >
      <div className="ac-head">
        <div>
          <h1>Good afternoon, Mira</h1>
          <p>Tuesday, 14 October · 14 orders open across 2 exchanges</p>
        </div>
        <div className="ac-seg">
          <span className="is-on">Today</span>
          <span>7 days</span>
          <span>30 days</span>
        </div>
      </div>

      <div className="ac-kpis">
        <div>
          <span className="ac-kpi-label">Open orders</span>
          <b className="num">14</b>
          <span className="ac-delta ac-delta--warn">+3 in the last hour</span>
        </div>
        <div>
          <span className="ac-kpi-label">Median completion</span>
          <b className="num">3m 42s</b>
          <span className="ac-delta">Target under 5m</span>
        </div>
        <div>
          <span className="ac-kpi-label">Sent today</span>
          <b className="num">₴18.4M</b>
          <span className="ac-delta ac-delta--up">312 payouts</span>
        </div>
        <div>
          <span className="ac-kpi-label">Flagged</span>
          <b className="num">2</b>
          <span className="ac-delta ac-delta--danger">Needs review</span>
        </div>
      </div>

      <div className="ac-ov-grid">
        <section className="ac-card ac-chart-card">
          <div className="ac-card-head">
            <p>Completed orders</p>
            <span className="ac-legend">
              <i /> Orders per hour
            </span>
          </div>
          <div className="ac-chart">
            <div className="ac-chart-y num">
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>
            <svg viewBox={`0 0 ${CH.w} ${CH.h}`} preserveAspectRatio="none" className="ac-chart-svg">
              <defs>
                <linearGradient id="ac-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#12a571" stopOpacity="0.22" />
                  <stop offset="1" stopColor="#12a571" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" x2={CH.w} y1={CH.h / 2} y2={CH.h / 2} className="ac-grid" />
              <line x1="0" x2={CH.w} y1="0.5" y2="0.5" className="ac-grid" />
              <path d={`${line} L${CH.w} ${CH.h} L0 ${CH.h} Z`} fill="url(#ac-fill)" />
              <path d={line} className="ac-line" />
              <line x1={px} x2={px} y1="0" y2={CH.h} className="ac-cursor" />
            </svg>
            <span className="ac-dot" style={{ left: `${(px / CH.w) * 100}%`, top: `${(py / CH.h) * 100}%` }} />
            <div className="ac-tip" style={{ left: `${(px / CH.w) * 100}%` }}>
              <span>15:00</span>
              <b className="num">47 orders</b>
              <span className="num">Median 3m 18s</span>
            </div>
            <div className="ac-chart-x num">
              {HOURS.filter((_, i) => i % 2 === 0).map((h) => (
                <span key={h}>{h}:00</span>
              ))}
            </div>
          </div>
        </section>

        <section className="ac-card ac-attn">
          <div className="ac-card-head">
            <p>Needs attention</p>
            <span className="ac-chip ac-chip--danger">4</span>
          </div>
          <ul>
            {ATTENTION.map(({ tone, icon: Icon, title, meta, time }) => (
              <li key={title}>
                <span className={`ac-ico ac-ico--${tone}`}>
                  <Icon size={13} strokeWidth={2} />
                </span>
                <span className="ac-attn-text">
                  {title}
                  <small>{meta}</small>
                </span>
                <span className="ac-attn-time num">{time}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="ac-card ac-stages">
          <div className="ac-card-head">
            <p>Queue by stage</p>
            <span className="ac-muted num">14 open</span>
          </div>
          <div className="ac-stack">
            {STAGES.map((s) => (
              <span key={s.cls} className={`ac-stack-${s.cls}`} style={{ flex: s.value }} />
            ))}
          </div>
          <ul className="ac-stage-legend">
            {STAGES.map((s) => (
              <li key={s.cls}>
                <i className={`ac-stack-${s.cls}`} />
                {s.label}
                <b className="num">{s.value}</b>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Shell>
  );
}

/* ───────────────────────── Orders ───────────────────────── */

type QueueItem = { id: string; from: string; to: string; amount: string; client: string; age: string; sla: 'ok' | 'warn' | 'late'; state: string; selected?: boolean };

const QUEUE: QueueItem[] = [
  { id: '48213', from: 'USDT', to: 'UAH', amount: '2,400.00 USDT', client: 'Olena Kovalenko', age: '2m', sla: 'ok', state: 'Ready', selected: true },
  { id: '48212', from: 'BTC', to: 'UAH', amount: '0.0510 BTC', client: 'Taras Melnyk', age: '4m', sla: 'ok', state: 'Flagged' },
  { id: '48210', from: 'UAH', to: 'USDT', amount: '₴150,000.00', client: 'Iryna Bondar', age: '6m', sla: 'ok', state: 'Checking' },
  { id: '48207', from: 'USDT', to: 'UAH', amount: '880.00 USDT', client: 'Andrii Savchuk', age: '9m', sla: 'warn', state: 'New' },
  { id: '48205', from: 'ETH', to: 'UAH', amount: '1.2000 ETH', client: 'Sofiia Lysenko', age: '11m', sla: 'warn', state: 'New' },
  { id: '48190', from: 'USDT', to: 'UAH', amount: '5,000.00 USDT', client: 'Maksym Rudenko', age: '18m', sla: 'late', state: 'New' },
];

const STATE_TONE: Record<string, string> = { Ready: 'ok', Flagged: 'danger', Checking: 'info', New: 'neutral' };

const CHECKS = [
  { label: 'Incoming transfer', detail: '20 / 20 confirmations' },
  { label: 'KYC', detail: 'Verified · Tier 2' },
  { label: 'AML screening', detail: 'Clear · 14:02' },
  { label: 'Recipient name', detail: 'Matches card holder' },
];

function OrderDetail() {
  return (
    <div className="ac-order">
      <div className="ac-order-head">
        <div>
          <p className="ac-order-id">
            Order 48213 <Copy size={12} className="ac-dim" />
          </p>
          <h1 className="num">
            2,400.00 USDT <ArrowRight size={18} className="ac-dim" /> ₴99,480.00
          </h1>
          <p className="ac-order-sub">
            <Pair from="USDT" to="UAH" />
            Tessel · rate 41.45 · created 14:02
          </p>
        </div>
        <span className="ac-order-head-right">
          <span className="ac-chip ac-chip--ok">
            <CircleCheck size={12} />
            Ready to send
          </span>
          <span className="ac-avatar ac-avatar--m ac-avatar--sm">MH</span>
          <span className="ac-icon-btn">
            <Ellipsis size={14} />
          </span>
        </span>
      </div>

      <div className="ac-order-grid">
        <section className="ac-sec">
          <p className="ac-sec-title">Client</p>
          <dl className="ac-kv">
            <div>
              <dt>Name</dt>
              <dd>Olena Kovalenko</dd>
            </div>
            <div>
              <dt>Client ID</dt>
              <dd className="num">
                C-20931 <Copy size={11} className="ac-dim" />
              </dd>
            </div>
            <div>
              <dt>History</dt>
              <dd className="num">23 orders · no disputes</dd>
            </div>
          </dl>
        </section>
        <section className="ac-sec">
          <p className="ac-sec-title">Payout</p>
          <dl className="ac-kv">
            <div>
              <dt>Method</dt>
              <dd>
                <CreditCard size={13} className="ac-dim" /> Visa debit
              </dd>
            </div>
            <div>
              <dt>Card</dt>
              <dd className="num">
                •••• 4417 <Copy size={11} className="ac-dim" />
              </dd>
            </div>
            <div>
              <dt>Holder</dt>
              <dd>
                OLENA KOVALENKO <Check size={13} className="ac-ok" />
              </dd>
            </div>
          </dl>
        </section>
        <section className="ac-sec">
          <p className="ac-sec-title">Incoming</p>
          <dl className="ac-kv">
            <div>
              <dt>Network</dt>
              <dd>TRON · TRC-20</dd>
            </div>
            <div>
              <dt>Tx hash</dt>
              <dd className="num">
                TXq7…9fK2 <ArrowUpRight size={12} className="ac-dim" />
              </dd>
            </div>
            <div>
              <dt>Received</dt>
              <dd className="num">2,400.00 USDT</dd>
            </div>
          </dl>
        </section>
        <section className="ac-sec ac-checks">
          <p className="ac-sec-title">
            Checks <span className="ac-ok num">4 / 4</span>
          </p>
          <ul>
            {CHECKS.map((c) => (
              <li key={c.label}>
                <span className="ac-tick">
                  <Check size={10} strokeWidth={3} />
                </span>
                {c.label}
                <small>{c.detail}</small>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="ac-activity">
        <p className="ac-sec-title">Activity</p>
        <ol>
          <li>
            <span className="ac-act-dot" />
            Order created by client
            <small className="num">14:02:08</small>
          </li>
          <li>
            <span className="ac-act-dot" />
            2,400.00 USDT received on TRON
            <small className="num">14:02:41</small>
          </li>
          <li>
            <span className="ac-act-dot" />
            KYC, AML and name checks passed automatically
            <small className="num">14:03:02</small>
          </li>
          <li className="is-me">
            <span className="ac-avatar ac-avatar--m ac-avatar--xs">MH</span>
            Mira Holub picked up the order
            <small className="num">14:04:15</small>
          </li>
        </ol>
      </section>

      <div className="ac-sendbar">
        <span className="ac-sendbar-text">
          <ShieldCheck size={15} className="ac-ok" />
          <span>
            All checks passed · <b className="num">₴99,480.00</b> to •••• 4417
          </span>
        </span>
        <span className="ac-btn">
          <Pause size={13} />
          Hold
        </span>
        <span className="ac-btn ac-btn--go">
          Review and send
          <kbd>
            ⌘<CornerDownLeft size={10} />
          </kbd>
        </span>
      </div>
    </div>
  );
}

function OrdersScreen({ dim = false }: { dim?: boolean }) {
  return (
    <Shell
      active="orders"
      crumbs={['Orders', 'Tessel', '48213']}
      actions={
        <span className="ac-avatars">
          <span className="ac-avatar ac-avatar--a">AS</span>
          <span className="ac-avatar ac-avatar--b">DK</span>
          <span className="ac-avatar ac-avatar--m">MH</span>
        </span>
      }
    >
      <div className={`ac-orders${dim ? ' is-dim' : ''}`}>
        <div className="ac-list">
          <div className="ac-tabs">
            <span className="is-on">
              Mine <i className="num">5</i>
            </span>
            <span>
              All <i className="num">14</i>
            </span>
            <span>
              Flagged <i className="num">2</i>
            </span>
            <ListFilter size={14} className="ac-dim ac-tabs-filter" />
          </div>
          {QUEUE.map((q) => (
            <div key={q.id} className={`ac-row${q.selected ? ' is-selected' : ''}`}>
              <Pair from={q.from} to={q.to} />
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
                  <span className={`ac-state ac-state--${STATE_TONE[q.state]}`}>{q.state}</span>
                </span>
              </span>
            </div>
          ))}
        </div>
        <OrderDetail />
      </div>
    </Shell>
  );
}

/* ───────────────────────── Confirm payout ───────────────────────── */

function ConfirmScreen() {
  return (
    <div className="ac-modal-wrap">
      <OrdersScreen dim />
      <div className="ac-scrim" />
      <div className="ac-modal">
        <div className="ac-modal-head">
          <span className="ac-modal-icon">
            <Lock size={16} />
          </span>
          <div>
            <p className="ac-modal-title">Confirm payout</p>
            <p className="ac-modal-sub">Funds leave as soon as you confirm. A sent payout can’t be recalled.</p>
          </div>
        </div>

        <div className="ac-modal-amount">
          <span className="ac-modal-label">You’re sending</span>
          <b className="num">₴99,480.00</b>
          <span className="ac-modal-to">
            <span className="ac-avatar ac-avatar--c ac-avatar--sm">OK</span>
            Olena Kovalenko · Visa •••• 4417
          </span>
        </div>

        <dl className="ac-modal-rows">
          <div>
            <dt>From</dt>
            <dd>Tessel · UAH settlement account</dd>
          </div>
          <div>
            <dt>Order</dt>
            <dd className="num">48213 · 2,400.00 USDT at 41.45</dd>
          </div>
          <div>
            <dt>Checks</dt>
            <dd className="ac-ok">
              <CircleCheck size={13} /> 4 of 4 passed
            </dd>
          </div>
        </dl>

        <div className="ac-confirm">
          <p>Type the last 4 digits of the card</p>
          <div className="ac-otp num">
            <span className="is-ok">4</span>
            <span className="is-ok">4</span>
            <span className="is-ok">1</span>
            <span className="is-ok is-last">7</span>
            <span className="ac-otp-match">
              <Check size={13} strokeWidth={2.5} /> Matches
            </span>
          </div>
        </div>

        <div className="ac-modal-foot">
          <span className="ac-btn">Cancel</span>
          <span className="ac-btn ac-btn--go ac-btn--lg">
            <Send size={13} />
            Send ₴99,480.00
          </span>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Market maker ───────────────────────── */

const MID = [61, 57, 59, 52, 49, 51, 45, 47, 42, 46, 41, 38, 42, 36, 40, 34, 37, 33, 35, 31];
const MM = { w: 520, h: 132 };
const mmX = (i: number) => Math.round((i * MM.w) / (MID.length - 1));
const mmY = (v: number) => Math.round(18 + ((v - 30) / 32) * 96);
const midPts = MID.map((v, i): [number, number] => [mmX(i), mmY(v)]);
const askPts = MID.map((v, i): [number, number] => [mmX(i), mmY(v) - 11]);
const bidPts = MID.map((v, i): [number, number] => [mmX(i), mmY(v) + 11]);

const BOOK_ASK = [
  { p: '42.02', s: '18,400', d: 0.42 },
  { p: '41.95', s: '24,900', d: 0.58 },
  { p: '41.89', s: '31,200', d: 0.74 },
  { p: '41.83', s: '25,000', d: 0.6 },
  { p: '41.77', s: '12,500', d: 0.32 },
];
const BOOK_BID = [
  { p: '41.45', s: '12,500', d: 0.34 },
  { p: '41.39', s: '25,000', d: 0.62 },
  { p: '41.32', s: '33,800', d: 0.82 },
  { p: '41.26', s: '21,700', d: 0.52 },
  { p: '41.19', s: '15,100', d: 0.38 },
];

function Slider({ label, value, pos }: { label: string; value: string; pos: number }) {
  return (
    <div className="ac-slider">
      <span className="ac-slider-row">
        {label}
        <b className="num">{value}</b>
      </span>
      <span className="ac-slider-track" style={{ '--pos': pos } as CSSProperties}>
        <i />
        <span />
      </span>
    </div>
  );
}

function MarketMakerScreen() {
  const askBand = `${smooth(askPts)} L${MM.w} ${bidPts[bidPts.length - 1][1]} ${smooth([...bidPts].reverse()).replace(/^M[^C]*/, '')} Z`;
  return (
    <Shell
      active="market-maker"
      crumbs={['Treasury', 'Market maker']}
      actions={
        <span className="ac-btn ac-btn--danger">
          <Pause size={13} />
          Pause quoting
        </span>
      }
    >
      <div className="ac-head ac-head--tight">
        <div className="ac-mm-title">
          <h1>Market maker</h1>
          <span className="ac-pill-select">
            <Pair from="USDT" to="UAH" />
            USDT / UAH
            <ChevronDown size={13} className="ac-dim" />
          </span>
        </div>
        <span className="ac-live">
          <span className="ac-toggle is-on">
            <i />
          </span>
          Quoting
          <span className="ac-muted num">for 6h 12m</span>
        </span>
      </div>

      <div className="ac-mm">
        <section className="ac-card ac-mm-chart">
          <div className="ac-card-head">
            <p>
              Mid price <b className="num">41.61</b> <span className="ac-delta ac-delta--up num">+0.42%</span>
            </p>
            <span className="ac-legend">
              <i /> Mid <i className="is-band" /> Quoted band
            </span>
          </div>
          <svg viewBox={`0 0 ${MM.w} ${MM.h}`} preserveAspectRatio="none" className="ac-mm-svg">
            <line x1="0" x2={MM.w} y1="20" y2="20" className="ac-grid" />
            <line x1="0" x2={MM.w} y1="66" y2="66" className="ac-grid" />
            <line x1="0" x2={MM.w} y1="112" y2="112" className="ac-grid" />
            <path d={askBand} className="ac-band" />
            <path d={smooth(midPts)} className="ac-line" />
          </svg>
          <div className="ac-chart-x num">
            <span>09:00</span>
            <span>11:00</span>
            <span>13:00</span>
            <span>15:00</span>
          </div>
        </section>

        <section className="ac-card ac-book">
          <div className="ac-card-head">
            <p>Live quotes</p>
            <span className="ac-muted num">Spread 0.77%</span>
          </div>
          <div className="ac-book-rows">
            {BOOK_ASK.map((q) => (
              <span key={q.p} className="ac-q ac-q--ask" style={{ '--d': q.d } as CSSProperties}>
                <b className="num">{q.p}</b>
                <span className="num">{q.s}</span>
              </span>
            ))}
            <span className="ac-q-mid num">
              41.61 <ArrowLeftRight size={11} className="ac-dim" />
            </span>
            {BOOK_BID.map((q) => (
              <span key={q.p} className="ac-q ac-q--bid" style={{ '--d': q.d } as CSSProperties}>
                <b className="num">{q.p}</b>
                <span className="num">{q.s}</span>
              </span>
            ))}
          </div>
        </section>

        <section className="ac-card ac-params">
          <div className="ac-card-head">
            <p>Parameters</p>
            <span className="ac-muted">Applies on save</span>
          </div>
          <Slider label="Bid spread" value="0.35%" pos={0.35} />
          <Slider label="Ask spread" value="0.40%" pos={0.4} />
          <Slider label="Max order" value="25,000 USDT" pos={0.5} />
        </section>

        <section className="ac-card ac-inv">
          <div className="ac-card-head">
            <p>Inventory</p>
            <span className="ac-chip ac-chip--ok">In band</span>
          </div>
          <b className="ac-inv-value num">612,400 USDT</b>
          <span className="ac-inv-band">
            <i className="ac-inv-safe" />
            <i className="ac-inv-target" />
            <i className="ac-inv-now" />
          </span>
          <span className="ac-inv-scale num">
            <span>200k</span>
            <span>Target 500k</span>
            <span>900k</span>
          </span>
        </section>

        <section className="ac-card ac-log">
          <div className="ac-card-head">
            <p>Changes</p>
          </div>
          <ul>
            <li>
              <span className="ac-avatar ac-avatar--b ac-avatar--xs">DK</span>
              <span>
                Bid spread <b className="num">0.40 → 0.35%</b>
                <small>4 min ago</small>
              </span>
            </li>
            <li>
              <span className="ac-avatar ac-avatar--b ac-avatar--xs">DK</span>
              <span>
                Max order <b className="num">20k → 25k</b>
                <small>1 h ago</small>
              </span>
            </li>
            <li>
              <span className="ac-avatar ac-avatar--a ac-avatar--xs">AS</span>
              <span>
                Quoting <b>turned on</b>
                <small>6 h ago</small>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </Shell>
  );
}

/* ───────────────────────── Wallets ───────────────────────── */

type WalletRow = { asset: string; name: string; network: string; kind: string; balance: string; value: string; free: number; trend: number[]; status: 'ok' | 'warn' | 'sync' };

const WALLETS: WalletRow[] = [
  { asset: 'USDT', name: 'Tether', network: 'TRON · TRC-20', kind: 'Hot', balance: '1,284,500.00', value: '₴53.3M', free: 0.93, trend: [8, 9, 7, 10, 11, 10, 12], status: 'ok' },
  { asset: 'USDT', name: 'Tether', network: 'Ethereum · ERC-20', kind: 'Hot', balance: '412,880.50', value: '₴17.1M', free: 0.96, trend: [9, 8, 9, 8, 10, 9, 9], status: 'ok' },
  { asset: 'ETH', name: 'Ether', network: 'Ethereum', kind: 'Hot', balance: '96.7300', value: '₴12.6M', free: 0.43, trend: [12, 11, 9, 8, 7, 6, 5], status: 'warn' },
  { asset: 'BTC', name: 'Bitcoin', network: 'Bitcoin', kind: 'Cold', balance: '18.4210', value: '₴31.9M', free: 1, trend: [7, 8, 8, 9, 9, 10, 10], status: 'ok' },
  { asset: 'USDC', name: 'USD Coin', network: 'Solana', kind: 'Hot', balance: '96,400.00', value: '₴4.0M', free: 0.98, trend: [9, 9, 10, 9, 10, 10, 11], status: 'ok' },
  { asset: 'TRX', name: 'Tron', network: 'TRON', kind: 'Hot', balance: '84,210.00', value: '₴0.9M', free: 1, trend: [8, 9, 8, 9, 8, 9, 9], status: 'ok' },
  { asset: 'UAH', name: 'Hryvnia', network: 'Settlement account', kind: 'Fiat', balance: '12,640,000.00', value: '₴12.6M', free: 0.95, trend: [10, 12, 9, 11, 8, 10, 9], status: 'sync' },
];

const WALLET_STATUS = { ok: ['ok', 'Healthy'], warn: ['warn', 'Low'], sync: ['info', 'Syncing'] } as const;

const ALLOC = [
  { label: 'USDT', share: 55.6, cls: 'usdt' },
  { label: 'BTC', share: 25.4, cls: 'btc' },
  { label: 'ETH', share: 10, cls: 'eth' },
  { label: 'UAH', share: 9, cls: 'uah' },
];

function Spark({ data, tone }: { data: number[]; tone: string }) {
  const pts = data.map((v, i): [number, number] => [i * 12, 16 - v]);
  return (
    <svg viewBox="0 0 72 14" className={`ac-spark ac-spark--${tone}`} aria-hidden="true">
      <path d={smooth(pts)} />
    </svg>
  );
}

function WalletsScreen() {
  return (
    <Shell
      active="wallets"
      crumbs={['Treasury', 'Wallets']}
      actions={
        <span className="ac-btn ac-btn--primary">
          <ArrowLeftRight size={13} />
          Transfer
        </span>
      }
    >
      <div className="ac-head ac-head--tight">
        <div>
          <p className="ac-kpi-label">Total under custody</p>
          <h1 className="ac-big num">₴127,480,000</h1>
        </div>
        <div className="ac-seg">
          <span className="is-on">All</span>
          <span>Hot</span>
          <span>Cold</span>
          <span>Fiat</span>
        </div>
      </div>

      <div className="ac-alloc">
        {ALLOC.map((a) => (
          <span key={a.cls} className={`ac-alloc-${a.cls}`} style={{ flex: a.share }} />
        ))}
      </div>
      <ul className="ac-alloc-legend">
        {ALLOC.map((a) => (
          <li key={a.cls}>
            <i className={`ac-alloc-${a.cls}`} />
            {a.label}
            <span className="num">{a.share}%</span>
          </li>
        ))}
      </ul>

      <div className="ac-table">
        <div className="ac-tr ac-th">
          <span>Asset</span>
          <span>Type</span>
          <span>7 days</span>
          <span className="r">Balance</span>
          <span className="r">Available</span>
          <span>Status</span>
          <span />
        </div>
        {WALLETS.map((w) => {
          const [tone, label] = WALLET_STATUS[w.status];
          return (
            <div key={`${w.asset}-${w.network}`} className={`ac-tr${w.status === 'warn' ? ' is-warn' : ''}`}>
              <span className="ac-asset">
                <span className={`ac-coin ac-coin--lg ac-coin--${w.asset.toLowerCase()}`}>{w.asset === 'UAH' ? '₴' : w.asset.slice(0, 1)}</span>
                <span>
                  <span>
                    {w.asset} <em>{w.name}</em>
                  </span>
                  <small>{w.network}</small>
                </span>
              </span>
              <span>
                <span className="ac-tag">{w.kind}</span>
              </span>
              <span>
                <Spark data={w.trend} tone={w.status === 'warn' ? 'warn' : 'ok'} />
              </span>
              <span className="r num ac-bal">
                {w.balance}
                <small>{w.value}</small>
              </span>
              <span className="r">
                <span className="ac-free" style={{ '--free': w.free } as CSSProperties}>
                  <span className="num">{Math.round(w.free * 100)}%</span>
                  <i />
                </span>
              </span>
              <span>
                <span className={`ac-chip ac-chip--${tone}`}>
                  <i />
                  {label}
                </span>
              </span>
              <span className="r">
                {w.status === 'warn' ? (
                  <span className="ac-btn ac-btn--sm">Top up</span>
                ) : (
                  <Ellipsis size={14} className="ac-dim" />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </Shell>
  );
}

/* ───────────────────────── Exports ───────────────────────── */

const frame = (label: string, screen: ReactNode) => (
  <ScaledFrame width={W} height={H} label={label} className="ac-window">
    {screen}
  </ScaledFrame>
);

export const AdminOrders = () =>
  frame('Concept: order queue beside one order, with client, payout, incoming transfer and checks on one screen', <OrdersScreen />);

export const AdminConfirm = () =>
  frame('Concept: payout confirmation that asks for the last four card digits before funds leave', <ConfirmScreen />);

export const AdminMarketMaker = () =>
  frame('Concept: market maker with mid price and quoted band, live quotes, parameters, inventory and change history', <MarketMakerScreen />);

export const AdminWallets = () =>
  frame('Concept: wallets with total custody, allocation by asset and a table of balances, trends and status', <WalletsScreen />);


/** Component specimens from the concept screens, in flowing HTML so the board reflows on mobile. */
export function AdminParts() {
  return (
    <div className="ac-parts">
      <div className="ac-part">
        <p className="ac-part-label">Actions</p>
        <div className="ac-part-row">
          <span className="ac-btn ac-btn--primary">
            <ArrowLeftRight size={13} />
            Transfer
          </span>
          <span className="ac-btn">
            <Pause size={13} />
            Hold
          </span>
          <span className="ac-btn ac-btn--go">
            Review and send
            <kbd>
              ⌘<CornerDownLeft size={10} />
            </kbd>
          </span>
          <span className="ac-btn ac-btn--danger">Pause quoting</span>
        </div>
      </div>
      <div className="ac-part">
        <p className="ac-part-label">Status</p>
        <div className="ac-part-row">
          <span className="ac-chip ac-chip--ok">
            <CircleCheck size={12} />
            Ready to send
          </span>
          <span className="ac-state ac-state--danger">Flagged</span>
          <span className="ac-state ac-state--info">Checking</span>
          <span className="ac-age ac-age--late num">
            <Clock size={11} />
            18m
          </span>
          <span className="ac-chip ac-chip--warn">
            <i />
            Low
          </span>
        </div>
      </div>
      <div className="ac-part">
        <p className="ac-part-label">Inputs</p>
        <div className="ac-part-row">
          <div className="ac-seg">
            <span className="is-on">Today</span>
            <span>7 days</span>
            <span>30 days</span>
          </div>
          <span className="ac-cmd ac-cmd--wide">
            <Search size={13} />
            Search orders, clients, tx hashes
            <kbd>⌘K</kbd>
          </span>
          <span className="ac-toggle is-on">
            <i />
          </span>
          <div className="ac-otp ac-otp--sm num">
            <span className="is-ok">4</span>
            <span className="is-ok">4</span>
            <span className="is-ok">1</span>
            <span className="is-ok">7</span>
          </div>
        </div>
      </div>
      <div className="ac-part">
        <p className="ac-part-label">Feedback</p>
        <div className="ac-part-row">
          <span className="ac-toast">
            <span className="ac-tick">
              <Check size={10} strokeWidth={3} />
            </span>
            Payout sent to •••• 4417
            <span className="ac-muted num">₴99,480.00</span>
          </span>
          <span className="ac-avatars">
            <span className="ac-avatar ac-avatar--a">AS</span>
            <span className="ac-avatar ac-avatar--b">DK</span>
            <span className="ac-avatar ac-avatar--m">MH</span>
          </span>
        </div>
      </div>
    </div>
  );
}

import '@/styles/lyxonn-concept.css';
import type { CSSProperties, ReactNode } from 'react';
import {
  Activity,
  ArrowDownLeft,
  ArrowRight,
  Check,
  Copy,
  Inbox,
  ArrowLeftRight,
  ArrowUpRight,
  Bell,
  ChevronDown,
  Pause,
  Search,
  Settings,
  Wallet,
} from 'lucide-react';
import { ScaledFrame } from '@/components/case-study/lyxonn/ScaledFrame';

// Concept recreations of the Lyxonn admin panel, built for the portfolio. The shipped
// design stays under NDA: every name, value and layout here is illustrative.

const W = 1280;
const H = 690;

type Page = 'orders' | 'wallets' | 'market-maker' | 'settings';

const NAV: { id: Page; label: string; icon: typeof Wallet }[] = [
  { id: 'orders', label: 'Orders', icon: Inbox },
  { id: 'wallets', label: 'Wallets', icon: Wallet },
  { id: 'market-maker', label: 'Market maker', icon: Activity },
  { id: 'settings', label: 'Settings', icon: Settings },
];

function Shell({ active, crumb, children }: { active: Page; crumb: string; children: ReactNode }) {
  return (
    <div className="lx-app">
      <aside className="lx-side">
        <div className="lx-brand">
          <span className="lx-logo">L</span>
          <span>Lyxonn</span>
          <span className="lx-brand-tag">Admin</span>
        </div>
        <button type="button" className="lx-space" tabIndex={-1}>
          <span className="lx-space-mark">K</span>
          Karbovanets
          <ChevronDown size={14} />
        </button>
        <nav className="lx-nav">
          {NAV.map(({ id, label, icon: Icon }) => (
            <span key={id} className={`lx-nav-item${id === active ? ' is-active' : ''}`}>
              <Icon size={16} strokeWidth={1.75} />
              {label}
              {id === 'orders' && <span className="lx-count">14</span>}
            </span>
          ))}
        </nav>
        <div className="lx-me">
          <span className="lx-avatar">OP</span>
          <span className="lx-me-text">
            Operator
            <span>Signed in</span>
          </span>
        </div>
      </aside>
      <div className="lx-body">
        <header className="lx-top">
          <span className="lx-crumb">
            Karbovanets <span>/</span> {crumb}
          </span>
          <span className="lx-search">
            <Search size={14} />
            Search or jump to
            <kbd>⌘K</kbd>
          </span>
          <span className="lx-env">
            <i />
            Live
          </span>
          <Bell size={16} strokeWidth={1.75} className="lx-bell" />
        </header>
        <main className="lx-main">{children}</main>
      </div>
    </div>
  );
}

type QueueItem = { id: string; pair: string; amount: string; age: string; state: 'ready' | 'check' | 'new'; selected?: boolean };

const QUEUE: QueueItem[] = [
  { id: '48213', pair: 'USDT → UAH', amount: '2,400 USDT', age: '2 min', state: 'ready', selected: true },
  { id: '48212', pair: 'BTC → UAH', amount: '0.0510 BTC', age: '4 min', state: 'check' },
  { id: '48210', pair: 'UAH → USDT', amount: '150,000 UAH', age: '6 min', state: 'new' },
  { id: '48207', pair: 'USDT → UAH', amount: '880 USDT', age: '9 min', state: 'new' },
  { id: '48205', pair: 'ETH → UAH', amount: '1.2000 ETH', age: '11 min', state: 'new' },
  { id: '48201', pair: 'USDT → UAH', amount: '5,000 USDT', age: '14 min', state: 'new' },
];

const QUEUE_CHIP = {
  ready: { cls: 'ok', label: 'Ready' },
  check: { cls: 'warn', label: 'Check' },
  new: { cls: 'new', label: 'New' },
} as const;

const CHECKS = [
  'Incoming transfer confirmed, 20 of 20 blocks',
  'KYC verified',
  'AML screening clear',
  'Card holder matches the client',
];

function OrdersScreen() {
  return (
    <Shell active="orders" crumb="Orders">
      <div className="lx-orders">
        <div className="lx-queue">
          <div className="lx-queue-head">
            <p className="lx-card-title">Queue</p>
            <span className="lx-bar-note">14 open</span>
          </div>
          {QUEUE.map((q) => (
            <div key={q.id} className={`lx-qi${q.selected ? ' is-selected' : ''}`}>
              <span className="lx-qi-top">
                #{q.id}
                <span className={`lx-chip lx-chip--${QUEUE_CHIP[q.state].cls}`}>
                  <i />
                  {QUEUE_CHIP[q.state].label}
                </span>
              </span>
              <span className="lx-qi-pair">{q.pair}</span>
              <span className="lx-qi-meta num">
                {q.amount}
                <span>{q.age}</span>
              </span>
            </div>
          ))}
        </div>

        <section className="lx-order">
          <div className="lx-order-head">
            <div>
              <h1>Order #48213</h1>
              <p>USDT → UAH · created 2 min ago</p>
            </div>
            <span className="lx-chip lx-chip--ok">
              <i />
              Ready to send
            </span>
          </div>

          <div className="lx-order-grid">
            <div className="lx-card">
              <p className="lx-card-title">Client</p>
              <dl className="lx-kv">
                <div>
                  <dt>Name</dt>
                  <dd>Olena Kovalenko</dd>
                </div>
                <div>
                  <dt>Client ID</dt>
                  <dd className="num">
                    C-20931 <Copy size={12} />
                  </dd>
                </div>
                <div>
                  <dt>Orders</dt>
                  <dd className="num">23 completed</dd>
                </div>
              </dl>
            </div>
            <div className="lx-card">
              <p className="lx-card-title">Amounts</p>
              <div className="lx-flow num">
                <span>
                  2,400.00
                  <small>USDT in</small>
                </span>
                <ArrowRight size={16} />
                <span>
                  99,480.00
                  <small>UAH out</small>
                </span>
              </div>
              <dl className="lx-kv lx-kv--row">
                <div>
                  <dt>Rate</dt>
                  <dd className="num">41.45</dd>
                </div>
                <div>
                  <dt>Fee</dt>
                  <dd className="num">0.00</dd>
                </div>
              </dl>
            </div>
            <div className="lx-card">
              <p className="lx-card-title">Payout</p>
              <dl className="lx-kv">
                <div>
                  <dt>Method</dt>
                  <dd>Bank card</dd>
                </div>
                <div>
                  <dt>Card</dt>
                  <dd className="num">
                    4149 •••• •••• 4417 <Copy size={12} />
                  </dd>
                </div>
                <div>
                  <dt>Holder</dt>
                  <dd>OLENA KOVALENKO</dd>
                </div>
              </dl>
            </div>
            <div className="lx-card">
              <p className="lx-card-title">Checks</p>
              <ul className="lx-checks">
                {CHECKS.map((c) => (
                  <li key={c}>
                    <span>
                      <Check size={11} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lx-card lx-card--wide">
              <p className="lx-card-title">Timeline</p>
              <ol className="lx-steps">
                <li className="is-done">
                  Order created
                  <small>14:02</small>
                </li>
                <li className="is-done">
                  Transfer detected
                  <small>14:02</small>
                </li>
                <li className="is-done">
                  Confirmations complete
                  <small>14:03</small>
                </li>
                <li className="is-now">
                  Funds sent
                  <small>Waiting on you</small>
                </li>
              </ol>
            </div>
          </div>

          <div className="lx-send">
            <p>
              Sending <b className="num">99,480.00 UAH</b> to card ending <b className="num">4417</b>
            </p>
            <span className="lx-btn">Hold</span>
            <span className="lx-btn lx-btn--primary">
              Send 99,480.00 UAH
              <ArrowRight size={14} />
            </span>
          </div>
        </section>
      </div>
    </Shell>
  );
}

type WalletRow = {
  asset: string;
  network: string;
  kind: 'Hot' | 'Cold' | 'Fiat';
  balance: string;
  available: string;
  /** Share of the balance that is free to move, 0–1. */
  free: number;
  status: 'Healthy' | 'Low balance' | 'Syncing';
  selected?: boolean;
};

const WALLETS: WalletRow[] = [
  { asset: 'USDT', network: 'TRON · TRC-20', kind: 'Hot', balance: '1,284,500.00', available: '1,190,200.00', free: 0.93, status: 'Healthy' },
  { asset: 'USDT', network: 'Ethereum · ERC-20', kind: 'Hot', balance: '412,880.50', available: '398,000.00', free: 0.96, status: 'Healthy' },
  { asset: 'ETH', network: 'Ethereum', kind: 'Hot', balance: '96.7300', available: '41.2000', free: 0.43, status: 'Low balance', selected: true },
  { asset: 'BTC', network: 'Bitcoin', kind: 'Cold', balance: '18.4210', available: '18.4210', free: 1, status: 'Healthy' },
  { asset: 'UAH', network: 'Bank account', kind: 'Fiat', balance: '12,640,000', available: '11,980,000', free: 0.95, status: 'Syncing' },
  { asset: 'TRX', network: 'TRON', kind: 'Hot', balance: '84,210', available: '84,210', free: 1, status: 'Healthy' },
];

const STATUS_CLASS = { Healthy: 'ok', 'Low balance': 'warn', Syncing: 'sync' } as const;

function WalletsScreen() {
  return (
    <Shell active="wallets" crumb="Wallets">
      <div className="lx-page-head">
        <div>
          <h1>Wallets</h1>
          <p>6 wallets · 4 networks</p>
        </div>
        <div className="lx-seg">
          <span className="is-on">All</span>
          <span>Hot</span>
          <span>Cold</span>
          <span>Fiat</span>
        </div>
        <span className="lx-btn lx-btn--primary">
          <ArrowLeftRight size={14} />
          Transfer
        </span>
      </div>

      <div className="lx-wallets">
        <div className="lx-table">
          <div className="lx-tr lx-th">
            <span>Asset</span>
            <span>Type</span>
            <span className="num">Balance</span>
            <span className="num">Available</span>
            <span>Status</span>
          </div>
          {WALLETS.map((w) => (
            <div key={`${w.asset}-${w.network}`} className={`lx-tr${w.selected ? ' is-selected' : ''}`}>
              <span className="lx-asset">
                <span className={`lx-coin lx-coin--${w.asset.toLowerCase()}`}>{w.asset.slice(0, 1)}</span>
                <span>
                  {w.asset}
                  <small>{w.network}</small>
                </span>
              </span>
              <span className="lx-kind">{w.kind}</span>
              <span className="num">{w.balance}</span>
              <span className="num lx-avail">
                {w.available}
                <span className="lx-meter" style={{ '--free': w.free } as CSSProperties} />
              </span>
              <span className={`lx-chip lx-chip--${STATUS_CLASS[w.status]}`}>
                <i />
                {w.status}
              </span>
            </div>
          ))}
        </div>

        <aside className="lx-panel">
          <div className="lx-panel-head">
            <span className="lx-coin lx-coin--eth">E</span>
            <div>
              <p className="lx-panel-title">ETH · Hot wallet</p>
              <p className="lx-panel-sub">Ethereum mainnet</p>
            </div>
            <span className="lx-chip lx-chip--warn">
              <i />
              Low balance
            </span>
          </div>
          <div className="lx-split">
            <div>
              <span>Available</span>
              <strong>41.20</strong>
            </div>
            <div>
              <span>Reserved</span>
              <strong>55.53</strong>
            </div>
          </div>
          <div className="lx-bar">
            <span style={{ width: '43%' }} />
            <i style={{ left: '62%' }} />
          </div>
          <p className="lx-bar-note">Rebalance threshold: 60 ETH available</p>
          <span className="lx-btn lx-btn--primary lx-btn--block">Top up from cold storage</span>
          <p className="lx-panel-label">Recent movements</p>
          <ul className="lx-moves">
            <li>
              <ArrowUpRight size={14} />
              <span>
                Withdrawal batch
                <small>12 min ago</small>
              </span>
              <b>−14.80</b>
            </li>
            <li>
              <ArrowDownLeft size={14} />
              <span>
                Deposit sweep
                <small>48 min ago</small>
              </span>
              <b className="is-in">+6.25</b>
            </li>
            <li>
              <ArrowUpRight size={14} />
              <span>
                Withdrawal batch
                <small>1 h ago</small>
              </span>
              <b>−9.10</b>
            </li>
          </ul>
        </aside>
      </div>
    </Shell>
  );
}

const ASKS = [
  { price: '42.02', size: '18,400', depth: 0.42 },
  { price: '41.95', size: '24,900', depth: 0.58 },
  { price: '41.89', size: '31,200', depth: 0.73 },
  { price: '41.83', size: '25,000', depth: 0.6 },
  { price: '41.77', size: '12,500', depth: 0.32 },
];

const BIDS = [
  { price: '41.45', size: '12,500', depth: 0.34 },
  { price: '41.39', size: '25,000', depth: 0.62 },
  { price: '41.32', size: '33,800', depth: 0.8 },
  { price: '41.26', size: '21,700', depth: 0.52 },
  { price: '41.19', size: '15,100', depth: 0.38 },
];

// Mid price over the session and the quoted band around it, in chart coordinates.
const MID = [62, 58, 60, 54, 50, 52, 46, 48, 44, 47, 42, 40, 43, 38, 41, 36, 39, 35];
const toPath = (pts: number[], dy: number) =>
  pts.map((y, i) => `${i ? 'L' : 'M'}${(i * 400) / (pts.length - 1)} ${y + dy}`).join(' ');

function MarketMakerScreen() {
  return (
    <Shell active="market-maker" crumb="Market maker">
      <div className="lx-page-head">
        <div>
          <h1>Market maker</h1>
          <p>Automated quoting for Karbovanets pairs</p>
        </div>
        <div className="lx-seg">
          <span className="is-on">USDT/UAH</span>
          <span>BTC/UAH</span>
          <span>ETH/UAH</span>
        </div>
        <span className="lx-mode">
          <span className="lx-toggle is-on">
            <i />
          </span>
          Mode on
          <span className="lx-chip lx-chip--ok">
            <i />
            Quoting
          </span>
        </span>
      </div>

      <div className="lx-mm">
        <div className="lx-mm-col">
          <section className="lx-card">
            <p className="lx-card-title">Pricing</p>
            <dl className="lx-fields">
              <div>
                <dt>Reference</dt>
                <dd>
                  Composite index <ChevronDown size={13} />
                </dd>
              </div>
              <div>
                <dt>Mid price</dt>
                <dd className="num">41.60</dd>
              </div>
              <div>
                <dt>Bid spread</dt>
                <dd className="lx-input num">0.35%</dd>
              </div>
              <div>
                <dt>Ask spread</dt>
                <dd className="lx-input num">0.40%</dd>
              </div>
            </dl>
          </section>
          <section className="lx-card">
            <p className="lx-card-title">Inventory band</p>
            <div className="lx-band">
              <span className="lx-band-fill" />
              <span className="lx-band-target" />
              <span className="lx-band-now" />
            </div>
            <div className="lx-band-scale num">
              <span>200k</span>
              <span>Target 500k</span>
              <span>900k</span>
            </div>
            <p className="lx-bar-note">Holding 612,400 USDT, inside the band</p>
          </section>
          <section className="lx-card lx-card--row">
            <div>
              <p className="lx-card-title">Pause all quoting</p>
              <p className="lx-bar-note">Cancels open orders on every pair</p>
            </div>
            <span className="lx-btn lx-btn--danger">
              <Pause size={14} />
              Pause
            </span>
          </section>
        </div>

        <section className="lx-card lx-book">
          <div className="lx-book-head">
            <p className="lx-card-title">Live quotes</p>
            <span className="lx-bar-note">Spread 0.75%</span>
          </div>
          <svg className="lx-chart" viewBox="0 0 400 100" preserveAspectRatio="none">
            <path className="lx-chart-band" d={`${toPath(MID, -9)} L400 ${MID[MID.length - 1] + 9} ${MID.map((y, i) => `L${400 - (i * 400) / (MID.length - 1)} ${MID[MID.length - 1 - i] + 9}`).join(' ')} Z`} />
            <path className="lx-chart-line" d={toPath(MID, 0)} />
          </svg>
          <div className="lx-ladder">
            {ASKS.map((q) => (
              <div key={q.price} className="lx-q lx-q--ask" style={{ '--depth': q.depth } as CSSProperties}>
                <span className="num">{q.price}</span>
                <span className="num">{q.size}</span>
              </div>
            ))}
            <div className="lx-mid num">
              41.60 <span>mid</span>
            </div>
            {BIDS.map((q) => (
              <div key={q.price} className="lx-q lx-q--bid" style={{ '--depth': q.depth } as CSSProperties}>
                <span className="num">{q.price}</span>
                <span className="num">{q.size}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="lx-card lx-log">
          <p className="lx-card-title">Change log</p>
          <ul>
            <li>
              <b>Bid spread</b> 0.40% → 0.35%
              <small>Operator · 4 min ago</small>
            </li>
            <li>
              <b>Max order</b> 20k → 25k USDT
              <small>Operator · 1 h ago</small>
            </li>
            <li>
              <b>Mode</b> off → on
              <small>Operator · 3 h ago</small>
            </li>
          </ul>
        </section>
      </div>
    </Shell>
  );
}

export function LyxonnOrders() {
  return (
    <ScaledFrame width={W} height={H} label="Concept: an order queue beside one order with client, amounts, payout and checks on a single screen" className="lx-window">
      <OrdersScreen />
    </ScaledFrame>
  );
}

export function LyxonnWallets() {
  return (
    <ScaledFrame width={W} height={H} label="Concept: wallet balances per asset and network, with a detail panel for a low-balance hot wallet" className="lx-window">
      <WalletsScreen />
    </ScaledFrame>
  );
}

export function LyxonnMarketMaker() {
  return (
    <ScaledFrame width={W} height={H} label="Concept: market maker mode with pricing, inventory band, a pause control and live quotes" className="lx-window">
      <MarketMakerScreen />
    </ScaledFrame>
  );
}

/** The work card and case study hero: the order screen as a window on the project's stage. */
export function LyxonnCard({ label, stage }: { label: string; stage: [edge: string, center: string] }) {
  return (
    <div className="work-stage lx-stage" style={{ '--stage-edge': stage[0], '--stage-center': stage[1] } as CSSProperties}>
      <div className="lx-stage-window">
        <ScaledFrame width={W} height={H} label={label} className="lx-window">
          <OrdersScreen />
        </ScaledFrame>
      </div>
    </div>
  );
}

const TOKENS = [
  { name: 'Ink', value: '#0E1311' },
  { name: 'Muted', value: '#66706B' },
  { name: 'Line', value: '#E4E8E6' },
  { name: 'Surface', value: '#F5F7F6' },
  { name: 'Brand', value: '#0F7A5C' },
  { name: 'Positive', value: '#12A150' },
  { name: 'Warning', value: '#C27A06' },
  { name: 'Negative', value: '#D93F3F' },
];

/** A concept token and component sheet, laid out in real HTML so it reflows on mobile. */
export function LyxonnSystem() {
  return (
    <div className="lx-sys">
      <div className="lx-sys-block">
        <p className="lx-sys-label">Colour</p>
        <ul className="lx-swatches">
          {TOKENS.map((t) => (
            <li key={t.name}>
              <span style={{ background: t.value }} />
              {t.name}
              <small>{t.value}</small>
            </li>
          ))}
        </ul>
      </div>
      <div className="lx-sys-block">
        <p className="lx-sys-label">Type</p>
        <ul className="lx-type">
          <li>
            <span className="lx-type-a">Wallets</span>
            <small>Page title · 24/32</small>
          </li>
          <li>
            <span className="lx-type-b">Live quotes</span>
            <small>Card title · 15/20</small>
          </li>
          <li>
            <span className="lx-type-c num">1,284,500.00</span>
            <small>Figures · 14/20, tabular</small>
          </li>
        </ul>
      </div>
      <div className="lx-sys-block">
        <p className="lx-sys-label">Components</p>
        <div className="lx-parts">
          <span className="lx-btn lx-btn--primary">Transfer</span>
          <span className="lx-btn">Export</span>
          <span className="lx-btn lx-btn--danger">Pause</span>
          <span className="lx-chip lx-chip--ok">
            <i />
            Healthy
          </span>
          <span className="lx-chip lx-chip--warn">
            <i />
            Low balance
          </span>
          <span className="lx-chip lx-chip--sync">
            <i />
            Syncing
          </span>
          <span className="lx-toggle is-on">
            <i />
          </span>
          <span className="lx-input num">0.35%</span>
        </div>
      </div>
    </div>
  );
}

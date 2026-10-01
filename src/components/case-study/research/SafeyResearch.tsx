import { CsFigure } from '@/components/case-study/CaseStudy';

/** Downloads and revenue for the last month, from Danylo's competitor teardown. */
const COMPETITORS = [
  { name: 'CHAI', downloads: 300_000, revenue: 2_000_000, label: '300k downloads · $2M revenue' },
  { name: 'Replika', downloads: 50_000, revenue: 200_000, label: '50k downloads · $200k revenue' },
  { name: 'Grok', downloads: 5_000_000, revenue: 17_000_000, label: '5M downloads · $17M revenue' },
  { name: 'Character AI', downloads: 400_000, revenue: 900_000, label: '400k downloads · $900k revenue' },
  { name: 'PolyBuzz', downloads: 500_000, revenue: 1_000_000, label: '500k downloads · $1M revenue' },
  { name: 'HiWaifu', downloads: 50_000, revenue: 20_000, label: '50k downloads · $20k revenue' },
]
  .map((c) => ({ ...c, rpd: c.revenue / c.downloads }))
  .sort((a, b) => b.rpd - a.rpd);

const MAX_RPD = COMPETITORS[0].rpd;

/** Ranked by monetization efficiency, not raw revenue: Grok earns most but converts each download worse than CHAI. */
export function SafeyRevenueChart() {
  return (
    <CsFigure
      eyebrow="Competitor analysis"
      title="Revenue per download, last month"
      caption="Six AI companion apps, picked as the top earners and most downloaded in the category. CHAI became the reference for Safey’s paywall."
    >
      <ol className="viz-bars">
        {COMPETITORS.map((c, i) => (
          <li key={c.name} className={i === 0 ? 'viz-bar-row is-lead' : 'viz-bar-row'}>
            <div className="viz-bar-name">
              <span>{c.name}</span>
              <span className="viz-bar-sub">{c.label}</span>
            </div>
            <div className="viz-bar-track" aria-hidden="true">
              <span className="viz-bar" style={{ width: `${(c.rpd / MAX_RPD) * 100}%` }} />
            </div>
            <span className="viz-bar-value">${c.rpd.toFixed(2)}</span>
          </li>
        ))}
      </ol>
    </CsFigure>
  );
}

const PAYWALLS = [
  { app: 'CHAI', when: 'Right after sign-in', plans: 'Monthly, yearly', tiers: 2, push: 'Yearly discount + 3-day trial on yearly only' },
  { app: 'Replika', when: 'Between setup and unlocking the app', plans: 'Yearly only', tiers: 3, push: 'No trial, no monthly option' },
  { app: 'Grok', when: 'Right after sign-up', plans: 'Monthly, yearly', tiers: 1, push: 'Free trial on the monthly plan' },
  { app: 'Character AI', when: 'Only when the user goes looking', plans: 'Monthly, yearly', tiers: 1, push: 'Discount on yearly' },
  { app: 'HiWaifu', when: 'Only when the user goes looking', plans: 'Monthly, 3 mo, 6 mo, yearly', tiers: 2, push: 'Trial on the low tier, deepest discount on yearly' },
  { app: 'PolyBuzz', when: 'Only when the user goes looking', plans: 'Monthly, yearly', tiers: 3, push: 'Monthly offer when you try to close it' },
];

export function SafeyPaywallMatrix() {
  return (
    <CsFigure
      eyebrow="Paywall teardown"
      title="When the paywall shows up, and how each app pushes the upgrade"
      caption="Every top performer leads users toward the yearly plan through a trial, a discount or both. Safey keeps the trial on yearly only, the way CHAI does."
    >
      <div className="viz-table-scroll">
        <table className="viz-table">
          <thead>
            <tr>
              <th scope="col">App</th>
              <th scope="col">Paywall appears</th>
              <th scope="col">Plans</th>
              <th scope="col">Tiers</th>
              <th scope="col">Push to pay</th>
            </tr>
          </thead>
          <tbody>
            {PAYWALLS.map((p) => (
              <tr key={p.app}>
                <th scope="row">{p.app}</th>
                <td>{p.when}</td>
                <td>{p.plans}</td>
                <td>
                  <span className="viz-tiers" aria-label={`${p.tiers} ${p.tiers === 1 ? 'tier' : 'tiers'}`}>
                    {[1, 2, 3].map((n) => (
                      <span key={n} className={n <= p.tiers ? 'is-on' : undefined} />
                    ))}
                  </span>
                </td>
                <td>{p.push}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CsFigure>
  );
}

const PATTERNS = [
  {
    label: 'Recurring',
    body: 'Straight after setup, a catalogue of companions. Chats in several formats, text and calls. The paywall only when you want more.',
  },
  {
    label: 'Unusual',
    body: 'Voice messages (HiWaifu, Replika), building your own companion (Replika, PolyBuzz), animated emotions while chatting (Replika only).',
  },
  {
    label: 'Takeaway',
    body: 'The catalogue is the norm and the features barely differ. Any personalisation or a more engaging setup is what stands out.',
  },
];

export function SafeyPatterns() {
  return (
    <CsFigure eyebrow="Patterns" title="What the category repeats, and where it breaks the mould">
      <div className="viz-cols">
        {PATTERNS.map((p) => (
          <div key={p.label} className="viz-col">
            <p className="viz-col-label">{p.label}</p>
            <p className="viz-col-body">{p.body}</p>
          </div>
        ))}
      </div>
    </CsFigure>
  );
}

const METRICS = [
  { name: 'Trial start rate', body: 'How many people who see the paywall start the 3-day trial.' },
  { name: 'Trial → paid, yearly', body: 'The number the whole model is built to move.' },
  { name: 'Paywall drop-off', body: 'Kept at a healthy level for the niche, not pushed to zero.' },
  { name: 'Refund rate', body: 'Filters out people who forgot to cancel after the trial.' },
];

export function SafeyMetrics() {
  return (
    <CsFigure
      eyebrow="Measurement plan"
      title="What to watch after launch"
      caption="RevenueCat’s benchmarks show roughly 90% of users leaving at a soft paywall, so drop-off is read against the category, not against zero."
    >
      <ul className="viz-metrics">
        {METRICS.map((m, i) => (
          <li key={m.name}>
            <span className="viz-metric-index">0{i + 1}</span>
            <p className="viz-metric-name">{m.name}</p>
            <p className="viz-metric-body">{m.body}</p>
          </li>
        ))}
      </ul>
    </CsFigure>
  );
}

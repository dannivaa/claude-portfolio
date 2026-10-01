import { CsFigure } from '@/components/case-study/CaseStudy';

/** Downloads and revenue for the last month, from Danylo's competitor teardown. */
const COMPETITORS = [
  { name: 'CHAI', downloads: '300k', revenue: '$2M', rpd: 2_000_000 / 300_000 },
  { name: 'Replika', downloads: '50k', revenue: '$200k', rpd: 200_000 / 50_000 },
  { name: 'Grok', downloads: '5M', revenue: '$17M', rpd: 17_000_000 / 5_000_000 },
  { name: 'Character AI', downloads: '400k', revenue: '$900k', rpd: 900_000 / 400_000 },
  { name: 'PolyBuzz', downloads: '500k', revenue: '$1M', rpd: 1_000_000 / 500_000 },
  { name: 'HiWaifu', downloads: '50k', revenue: '$20k', rpd: 20_000 / 50_000 },
].sort((a, b) => b.rpd - a.rpd);

const LEAD = COMPETITORS[0];
const LAST = COMPETITORS[COMPETITORS.length - 1];

/** Monetization efficiency, not raw revenue: Grok earns most but turns each download into less than CHAI. */
export function SafeyRevenueChart() {
  return (
    <CsFigure
      tag="Competitor analysis"
      title="Revenue per download, last month"
      caption="Six AI companion apps, picked as the category’s top earners and most downloaded. Ranked by what each download is worth, CHAI leads by a distance."
    >
      <div className="sf-rpd">
        <div className="sf-rpd-hero">
          <p className="sf-rpd-label">The reference</p>
          <p className="sf-rpd-number">${LEAD.rpd.toFixed(2)}</p>
          <p className="sf-rpd-note">
            per download at {LEAD.name}, {Math.round(LEAD.rpd / LAST.rpd)}× {LAST.name}. Safey’s paywall logic starts here.
          </p>
        </div>
        <ol className="sf-cols" aria-label="Revenue per download by app">
          {COMPETITORS.map((c, i) => (
            <li key={c.name} className={i === 0 ? 'is-lead' : undefined}>
              <span className="sf-col-value">${c.rpd.toFixed(2)}</span>
              <span className="sf-col-bar" style={{ height: `${(c.rpd / LEAD.rpd) * 100}%` }} aria-hidden="true" />
              <span className="sf-col-name">{c.name}</span>
              <span className="sf-col-sub">
                {c.downloads} · {c.revenue}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </CsFigure>
  );
}

/** Where in the journey each competitor first shows its paywall, and the one lever it pulls to sell the upgrade. */
const MOMENTS = [
  {
    when: 'Right after sign-up',
    apps: [
      { app: 'CHAI', push: '3-day trial, yearly only', lead: true },
      { app: 'Grok', push: 'Trial on monthly' },
    ],
  },
  {
    when: 'Between setup and unlock',
    apps: [{ app: 'Replika', push: 'Yearly only, no trial' }],
  },
  {
    when: 'Only when you go looking',
    apps: [
      { app: 'Character AI', push: 'Yearly discount' },
      { app: 'HiWaifu', push: '4 plans, trial on the low tier' },
      { app: 'PolyBuzz', push: 'Offer when you try to close' },
    ],
  },
];

export function SafeyPaywallMatrix() {
  return (
    <CsFigure
      tag="Paywall teardown"
      title="When each app asks you to pay"
      caption="The best earners ask early and steer people to the yearly plan with a trial or a discount. Safey keeps the trial on yearly only, the way CHAI does."
    >
      <ol className="sf-moments">
        {MOMENTS.map((m, i) => (
          <li key={m.when} className="sf-moment">
            <p className="sf-moment-when">
              <span>{i + 1}</span>
              {m.when}
            </p>
            <ul>
              {m.apps.map((a) => (
                <li key={a.app} className={'lead' in a && a.lead ? 'sf-app is-lead' : 'sf-app'}>
                  <p className="sf-app-name">{a.app}</p>
                  <p className="sf-app-push">{a.push}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
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
    body: 'The catalogue is the norm and the features barely differ. Personalisation, or a more engaging setup, is what stands out.',
  },
];

export function SafeyPatterns() {
  return (
    <CsFigure tag="Patterns" title="What the category repeats, and where it breaks the mould">
      <div className="sf-patterns">
        {PATTERNS.map((p, i) => (
          <div key={p.label} className={i === PATTERNS.length - 1 ? 'sf-pattern is-key' : 'sf-pattern'}>
            <span className="sf-pattern-n">0{i + 1}</span>
            <p className="sf-pattern-label">{p.label}</p>
            <p className="sf-pattern-body">{p.body}</p>
          </div>
        ))}
      </div>
    </CsFigure>
  );
}

const JOURNEY = ['Sees the paywall', 'Starts the 3-day trial', 'Pays for the year', 'Stays subscribed'];
const METRICS = ['Trial start rate', 'Trial → paid, yearly', 'Refund rate'];

export function SafeyMetrics() {
  return (
    <CsFigure
      tag="Measurement plan"
      title="One metric for every step from paywall to paying"
      caption="Drop-off is read against the category, not against zero: RevenueCat’s benchmarks show roughly 90% of people leaving at a soft paywall. Refunds catch anyone who forgot to cancel the trial."
    >
      <div className="sf-journey">
        <ol className="sf-journey-steps">
          {JOURNEY.map((step, i) => (
            <li key={step}>
              <span className="sf-journey-dot">{i + 1}</span>
              <span className="sf-journey-step">{step}</span>
              {i < METRICS.length && <span className="sf-journey-metric">{METRICS[i]}</span>}
            </li>
          ))}
        </ol>
        <p className="sf-journey-exit">
          <span aria-hidden="true">↳</span> Leaves at the paywall: <strong>paywall drop-off</strong>
        </p>
      </div>
    </CsFigure>
  );
}

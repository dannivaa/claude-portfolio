import { CsFigure } from '@/components/case-study/CaseStudy';

/** From the business ask down to the one question the interviews had to answer. */
const LADDER = [
  { label: 'Business challenge', value: 'Grow LTV with a loyalty programme' },
  { label: 'Problem', value: 'Make loyalty a reason to place the next order' },
  { label: 'Research goal', value: 'Uncover customers’ needs and barriers' },
  { label: 'Research question', value: 'What drives the decision to buy frozen food?' },
];

const QUESTIONS = [
  'Why do you buy frozen food? What makes you reach for it?',
  'What could stop you, or worries you, when buying frozen food?',
  'What matters most for you to become a regular customer of a frozen food service or store?',
  'Tell me about a service with a reward system you enjoy. Why does it work for you?',
  'Have you ever ordered frozen food for delivery? What was good and what wasn’t?',
];

export function GudFoodBrief() {
  return (
    <CsFigure
      tag="Research plan"
      title="From a business ask to five interview questions"
      caption="Written after meeting the GudFood product team, so every question traced back to the business problem."
    >
      <div className="gf-plan">
        <ol className="gf-ladder">
          {LADDER.map((step) => (
            <li key={step.label}>
              <p className="gf-ladder-k">{step.label}</p>
              <p className="gf-ladder-v">{step.value}</p>
            </li>
          ))}
        </ol>
        <div className="gf-guide">
          <p className="gf-guide-title">Interview guide</p>
          <ol>
            {QUESTIONS.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </div>
      </div>
    </CsFigure>
  );
}

/** Notes from the affinity map, translated from Ukrainian, grouped the way the original board was. */
const CLUSTERS = [
  {
    tone: 'value',
    icon: '💚',
    label: 'What they value',
    notes: [
      'Speed. People are glad to see you, and it’s affordable and right next to home.',
      'Halya Baluvana is always nearby. If I’m wondering what to cook, I just pop in.',
      'It really does cut cooking time. Those fish cutlets used to be a whole process.',
    ],
  },
  {
    tone: 'pain',
    icon: '🚩',
    label: 'Pain points',
    notes: [
      'No free time, and no energy to cook.',
      'Delivery that arrives the day after tomorrow is too long to wait.',
      'You have to order a thousand hryvnias’ worth for delivery to pay off.',
    ],
  },
  {
    tone: 'habit',
    icon: '👀',
    label: 'Habits',
    notes: ['It depends on the season. In summer I eat less, more salads.', 'I browse there once or twice a month to see what’s new.'],
  },
  {
    tone: 'fear',
    icon: '😰',
    label: 'Fears',
    notes: ['With the blackouts you can’t stock up in advance.', 'I’m not sure a pizza I bake at home will turn out like the café’s.'],
  },
  {
    tone: 'idea',
    icon: '✏️',
    label: 'Ideas',
    notes: [
      'Promo codes and perks are what keep me spending there.',
      'Positioning matters. The dishes have to feel interesting.',
      'Show the products offline so I can check the quality first.',
    ],
  },
] as const;

export function GudFoodAffinity() {
  return (
    <CsFigure
      tag="Synthesis"
      title="Affinity map of the interviews"
      caption={
        <>
          &ldquo;Delivery isn&rsquo;t 70 hryvnias, it&rsquo;s 100&ndash;150 because of the dry ice, and I&rsquo;m only
          buying cutlets for 200. It&rsquo;s out of proportion.&rdquo; One respondent, on why a single order never
          made sense.
        </>
      }
    >
      <div className="gf-board">
        {CLUSTERS.map((c) => (
          <section key={c.label} className={`gf-cluster gf-cluster--${c.tone}`} aria-label={c.label}>
            <p className="gf-cluster-label">
              <span aria-hidden="true">{c.icon}</span>
              {c.label}
            </p>
            <ul>
              {c.notes.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </CsFigure>
  );
}

const PERSONA_TAGS = [
  { tone: 'value', label: 'Goals', items: ['Save time on cooking', 'Food that tastes good', 'Something for “emergency days”'] },
  { tone: 'idea', label: 'Fears', items: ['Taste fades in storage', 'A blackout means throwing food away'] },
  { tone: 'pain', label: 'Pains', items: ['No energy to cook', 'Slower than Loko or Glovo', 'Big orders just to justify delivery'] },
] as const;

const PERSONA_SAYS = [
  'I usually buy frozen dishes that would be hard to make at home.',
  'Swamped at work today, but good thing there are dumplings in the freezer.',
  'I’ll look at what the store has and decide there.',
];

const PERSONA_HABITS = [
  { label: 'Does', items: ['Buys frozen food often', 'Stocks up on dishes she’s tried and liked', 'Goes to the store for something unplanned'] },
  { label: 'Feels', items: ['Calm when she doesn’t have to think about what to eat', 'Happy when the food is tasty'] },
];

export function GudFoodPersona() {
  return (
    <CsFigure tag="Persona" title="Sofia, built from the interview patterns">
      <div className="gf-persona">
        <div className="gf-persona-card">
          <div className="gf-persona-banner" aria-hidden="true" />
          <span className="gf-persona-avatar" aria-hidden="true">
            S
          </span>
          <p className="gf-persona-name">Sofia, 29</p>
          <p className="gf-persona-role">Software developer</p>
          <p className="gf-persona-bio">
            Work leaves no time to cook, so frozen food is a perfect match, as long as she can get it fast and cook it
            straight away.
          </p>
          <div className="gf-persona-tags">
            {PERSONA_TAGS.map((g) => (
              <div key={g.label}>
                <p className="gf-persona-k">{g.label}</p>
                <ul className={`gf-tags gf-tags--${g.tone}`}>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="gf-persona-voice">
          <p className="gf-persona-k">Says and thinks</p>
          <ul className="gf-bubbles">
            {PERSONA_SAYS.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
          {PERSONA_HABITS.map((g) => (
            <div key={g.label} className="gf-persona-list">
              <p className="gf-persona-k">{g.label}</p>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </CsFigure>
  );
}

const BINS = [
  {
    label: 'Design can fix',
    key: true,
    items: [
      { name: 'Offline alternatives win', note: 'A trust and value-perception problem' },
      { name: 'Trust gap', note: 'No social proof or feedback anywhere in the app' },
    ],
  },
  {
    label: 'Handed to the business',
    items: [
      { name: 'Delivery cost friction', note: 'Pricing model' },
      { name: 'Shrinking assortment', note: 'Logistics coverage outside Kyiv' },
    ],
  },
];

export function GudFoodBarriers() {
  return (
    <CsFigure
      tag="Scoping"
      title="Four barriers, sorted by who can fix them"
      caption="Only the two on the left became design work. The other two went back to the business with the evidence attached."
    >
      <div className="gf-bins">
        {BINS.map((bin) => (
          <div key={bin.label} className={bin.key ? 'gf-bin is-key' : 'gf-bin'}>
            <p className="gf-bin-label">
              {bin.label}
              <span>{bin.items.length}</span>
            </p>
            {bin.items.map((b) => (
              <div key={b.name} className="gf-bin-card">
                <p>{b.name}</p>
                <span>{b.note}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </CsFigure>
  );
}

import { CsFigure } from '@/components/case-study/CaseStudy';

const BRIEF = [
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
      eyebrow="Research plan"
      title="From a business ask to interview questions"
      caption="Written after meeting the GudFood product team, so every question traced back to the business problem."
    >
      <div className="viz-split">
        <dl className="viz-brief">
          {BRIEF.map((b) => (
            <div key={b.label}>
              <dt>{b.label}</dt>
              <dd>{b.value}</dd>
            </div>
          ))}
        </dl>
        <div>
          <p className="viz-col-label">Interview guide</p>
          <ol className="viz-questions">
            {QUESTIONS.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </div>
      </div>
    </CsFigure>
  );
}

/** Notes from the affinity map, translated from Ukrainian; one cluster per colour on the original board. */
const CLUSTERS = [
  {
    tone: 'value',
    label: 'What they value',
    notes: [
      'Speed. People are glad to see you, and it’s affordable and right next to home.',
      'Halya Baluvana is always nearby. If I’m wondering what to cook, I just pop in and buy everything.',
      'It really does cut cooking time. Those fish cutlets used to be a whole process.',
    ],
  },
  {
    tone: 'pain',
    label: 'Pain points',
    notes: [
      'No free time, and no energy to cook.',
      'Delivery that arrives the day after tomorrow is too long to wait.',
      'You have to order a thousand hryvnias’ worth for delivery to pay off.',
    ],
  },
  {
    tone: 'habit',
    label: 'Habits',
    notes: [
      'It depends on the season. In summer I eat less, more salads.',
      'I browse there once or twice a month to see what’s new.',
    ],
  },
  {
    tone: 'fear',
    label: 'Fears',
    notes: [
      'With the blackouts you can’t stock up in advance.',
      'I’m not sure a pizza I bake at home will turn out like the one at the café.',
    ],
  },
  {
    tone: 'idea',
    label: 'Ideas',
    notes: [
      'Promo codes and perks are what keep me spending there.',
      'Positioning matters. The dishes have to feel interesting.',
      'Show the products offline somewhere so I can check the quality first.',
    ],
  },
] as const;

export function GudFoodAffinity() {
  return (
    <CsFigure
      eyebrow="Synthesis"
      title="Affinity map of the interviews"
      caption={
        <>
          &ldquo;Delivery isn&rsquo;t 70 hryvnias, it&rsquo;s 100&ndash;150 because of the dry ice, and I&rsquo;m only
          buying cutlets for 200. It&rsquo;s out of proportion.&rdquo; One respondent, on why a single order never
          made sense.
        </>
      }
    >
      <div className="viz-affinity">
        {CLUSTERS.map((c) => (
          <section key={c.label} className={`viz-cluster viz-cluster--${c.tone}`} aria-label={c.label}>
            <p className="viz-cluster-label">
              {c.label}
              <span>{c.notes.length}</span>
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

const PERSONA = [
  { label: 'Goals', items: ['Save time on cooking', 'Food that tastes good', 'Something that keeps for “emergency days”'] },
  { label: 'Fears', items: ['Taste fades the longer it’s stored', 'A blackout means throwing food away'] },
  {
    label: 'Pains',
    items: [
      'Not always in the mood or energy to cook',
      'Delivery takes longer than Loko or Glovo',
      'Has to order a lot to justify the delivery fee',
    ],
  },
];

const PERSONA_VOICE = [
  {
    label: 'Says',
    items: [
      '“I usually buy frozen dishes that would be hard to make at home.”',
      '“It’s great I can make something really tasty in no time.”',
    ],
  },
  {
    label: 'Thinks',
    items: [
      '“Swamped at work today, but good thing there are dumplings in the freezer.”',
      '“I’ll look at what the store has and decide there.”',
    ],
  },
  {
    label: 'Does',
    items: ['Buys frozen food often', 'Stocks up on dishes she has tried and liked', 'Goes to the store to buy something unplanned'],
  },
  { label: 'Feels', items: ['Calm when she doesn’t have to think about what to eat', 'Happy when the food is tasty'] },
];

export function GudFoodPersona() {
  return (
    <CsFigure eyebrow="Persona" title="Sofia, built from the interview patterns">
      <div className="viz-persona">
        <div className="viz-persona-id">
          <span className="viz-persona-avatar" aria-hidden="true">
            S
          </span>
          <div>
            <p className="viz-persona-name">Sofia, 29</p>
            <p className="viz-persona-bio">
              Software developer. Work leaves no time to cook, so frozen food is a perfect match, as long as she can get
              it fast and cook it straight away.
            </p>
          </div>
        </div>
        <div className="viz-persona-grid">
          {PERSONA.map((g) => (
            <div key={g.label}>
              <p className="viz-col-label">{g.label}</p>
              <ul className="viz-chips">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="viz-persona-grid viz-persona-grid--voice">
          {PERSONA_VOICE.map((g) => (
            <div key={g.label}>
              <p className="viz-col-label">{g.label}</p>
              <ul className="viz-lines">
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

const BARRIERS = {
  design: [
    { name: 'Offline alternatives win', note: 'A trust and value-perception problem' },
    { name: 'Trust gap', note: 'No social proof or feedback anywhere in the app' },
  ],
  business: [
    { name: 'Delivery cost friction', note: 'Pricing model' },
    { name: 'Shrinking assortment', note: 'Logistics coverage outside Kyiv' },
  ],
};

export function GudFoodBarriers() {
  return (
    <CsFigure
      eyebrow="Scoping"
      title="Four barriers, sorted by who can fix them"
      caption="Only the two on the left became design work. The other two went back to the business with the evidence attached."
    >
      <div className="viz-sort">
        <div className="viz-sort-col is-design">
          <p className="viz-col-label">Design can fix</p>
          {BARRIERS.design.map((b) => (
            <div key={b.name} className="viz-sort-card">
              <p>{b.name}</p>
              <span>{b.note}</span>
            </div>
          ))}
        </div>
        <div className="viz-sort-col">
          <p className="viz-col-label">Handed to the business</p>
          {BARRIERS.business.map((b) => (
            <div key={b.name} className="viz-sort-card">
              <p>{b.name}</p>
              <span>{b.note}</span>
            </div>
          ))}
        </div>
      </div>
    </CsFigure>
  );
}

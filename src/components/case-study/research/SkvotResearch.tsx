import Image from 'next/image';
import { CsFigure } from '@/components/case-study/CaseStudy';

const STAGES = ['App goals', 'Moodboard', 'Analysis', 'Design concept'];

const GOALS = [
  'Give students one place for every important interaction with their course.',
  'Steer more people toward Skvot itself, not just the course they bought.',
];

export function SkvotProcess() {
  return (
    <CsFigure tag="Process" title="Four stages, two goals the app had to serve">
      <ol className="sk-stages">
        {STAGES.map((s, i) => (
          <li key={s}>
            <span className="sk-stage-n" aria-hidden="true">
              #{i + 1}
            </span>
            <span className="sk-stage-name">{s}</span>
          </li>
        ))}
      </ol>
      <div className="sk-goals">
        {GOALS.map((g, i) => (
          <div key={g} className="sk-goal">
            <p className="sk-goal-tag">Goal 0{i + 1}</p>
            <p className="sk-goal-body">{g}</p>
          </div>
        ))}
      </div>
    </CsFigure>
  );
}

const MOODBOARD = Array.from({ length: 12 }, (_, i) => `/images/Skvot/moodboard/${String(i + 1).padStart(2, '0')}.jpg`);

export function SkvotMoodboard() {
  return (
    <CsFigure
      tag="Moodboard"
      title="Poster type, collage and street style"
      caption="The brand already lives in pop culture, so the references came from posters, zines and streetwear rather than other learning apps."
    >
      <div className="sk-mood">
        {MOODBOARD.map((src) => (
          <div key={src} className="sk-mood-tile">
            <Image src={src} alt="" width={540} height={672} sizes="(max-width: 768px) 33vw, 160px" />
          </div>
        ))}
      </div>
    </CsFigure>
  );
}

type Rating = 'good' | 'minor' | 'poor' | 'none';

const RATING_LABEL: Record<Rating, string> = {
  good: 'Solid',
  minor: 'Rough edges',
  poor: 'Hurts use',
  none: 'Missing',
};

const RATING_NOTE: Record<Rating, string> = {
  good: 'Good UX/UI, no notes',
  minor: 'Unpolished, not critical',
  poor: 'Poorly done, gets in the way',
  none: 'The product doesn’t have it',
};

const COMPETITORS = ['Prjctr', 'Mate Academy', 'Beetroot Academy', 'KAMA', 'Skillshare'];

const FEATURES: { name: string; ratings: Rating[] }[] = [
  { name: 'Personal cabinet', ratings: ['minor', 'good', 'none', 'none', 'good'] },
  { name: 'Navigation', ratings: ['minor', 'good', 'good', 'poor', 'minor'] },
  { name: 'Course library', ratings: ['good', 'none', 'good', 'good', 'good'] },
  { name: 'Course page', ratings: ['good', 'poor', 'minor', 'minor', 'none'] },
  { name: 'Homepage', ratings: ['good', 'good', 'poor', 'minor', 'good'] },
  { name: 'Video lectures', ratings: ['poor', 'none', 'none', 'none', 'minor'] },
];

export function SkvotCompetitors() {
  return (
    <CsFigure
      tag="Competitor analysis"
      title="Where each learning platform’s UX holds up"
      caption="Prjctr is still the main rival, and now it’s clear where it falls short. Skvot’s edge is everything around the course: content, collabs and podcasts."
    >
      <table className="sk-matrix">
        <thead>
          <tr>
            <th scope="col">
              <span className="visually-hidden">Feature</span>
            </th>
            {COMPETITORS.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {FEATURES.map((f) => (
            <tr key={f.name}>
              <th scope="row">{f.name}</th>
              {f.ratings.map((r, i) => (
                <td key={COMPETITORS[i]} data-label={COMPETITORS[i]}>
                  <span className={`sk-cell sk-cell--${r}`}>{RATING_LABEL[r]}</span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="sk-legend">
        {(Object.keys(RATING_LABEL) as Rating[]).map((r) => (
          <li key={r}>
            <span className={`sk-swatch sk-cell--${r}`} aria-hidden="true" />
            <strong>{RATING_LABEL[r]}</strong> {RATING_NOTE[r]}
          </li>
        ))}
      </ul>
    </CsFigure>
  );
}

const HOME_BLOCKS = [
  { n: 1, label: 'Week roadmap', kind: 'key' },
  { n: 2, label: 'Content', kind: 'content' },
  { n: 3, label: 'Course #1', kind: 'course' },
  { n: 4, label: 'Content', kind: 'content' },
  { n: 5, label: 'Content', kind: 'content' },
  { n: 6, label: 'Course #2', kind: 'course' },
  { n: 7, label: 'Filters', kind: 'util' },
  { n: 8, label: 'End of page', kind: 'util' },
] as const;

const LEGEND = [
  { kind: 'key', label: 'What’s next this week' },
  { kind: 'course', label: 'Enrolled courses' },
  { kind: 'content', label: 'Culture: articles, podcasts, courses' },
  { kind: 'util', label: 'Utility' },
];

export function SkvotHomeStructure() {
  return (
    <CsFigure
      tag="Information architecture"
      title="Homepage: schedule first, culture woven through"
      caption="Courses are interleaved with Culture content, so the feed keeps pointing students back to Skvot beyond the course they’re on."
    >
      <div className="sk-ia">
        <ul className="sk-ia-notes sk-ia-notes--left" aria-label="Top bar, left">
          <li>Profile</li>
          <li>Course tabs</li>
          <li>Schedule</li>
        </ul>
        <ol className="sk-ia-phone">
          <li className="sk-ia-bar" aria-hidden="true">
            <span className="sk-ia-dot" />
            <span className="sk-ia-pill" />
            <span className="sk-ia-dot" />
            <span className="sk-ia-dot" />
          </li>
          {HOME_BLOCKS.map((b) => (
            <li key={b.n} className={`sk-ia-block sk-ia-block--${b.kind}`}>
              <span className="sk-ia-n">{b.n}</span>
              {b.label}
            </li>
          ))}
        </ol>
        <ul className="sk-ia-notes" aria-label="Top bar, right">
          <li>Notifications</li>
          <li>Search</li>
          <li>Date and time</li>
        </ul>
      </div>
      <ul className="sk-legend">
        {LEGEND.map((l) => (
          <li key={l.kind}>
            <span className={`sk-swatch sk-key--${l.kind}`} aria-hidden="true" />
            {l.label}
          </li>
        ))}
      </ul>
    </CsFigure>
  );
}

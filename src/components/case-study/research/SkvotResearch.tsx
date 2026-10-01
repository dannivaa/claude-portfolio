import Image from 'next/image';
import { CsFigure } from '@/components/case-study/CaseStudy';

const STAGES = ['App goals', 'Moodboard & references', 'Analysis', 'Design concept'];

const GOALS = [
  'Give students one place for every important interaction with their course.',
  'Steer more people toward Skvot itself, not just the course they bought.',
];

export function SkvotProcess() {
  return (
    <CsFigure eyebrow="Process" title="Four stages, two goals the app had to serve">
      <ol className="viz-stages">
        {STAGES.map((s, i) => (
          <li key={s}>
            <span>#{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>
      <div className="viz-goals">
        {GOALS.map((g, i) => (
          <div key={g} className="viz-goal">
            <p className="viz-col-label">Goal {i + 1}</p>
            <p className="viz-goal-body">{g}</p>
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
      eyebrow="Moodboard"
      title="Poster type, collage and street style"
      caption="The brand already lives in pop culture, so the references came from posters, zines and streetwear rather than other learning apps."
      bare
    >
      <div className="viz-mood">
        {MOODBOARD.map((src) => (
          <div key={src} className="viz-mood-tile">
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
      eyebrow="Competitor analysis"
      title="Where each learning platform’s UX holds up"
      caption="Prjctr is still the main rival, and now it’s clear where it falls short. Skvot’s edge is everything around the course: content, collabs and podcasts."
    >
      <div className="viz-table-scroll">
        <table className="viz-table viz-matrix">
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
                  <td key={COMPETITORS[i]}>
                    <span className={`viz-rating viz-rating--${r}`}>{RATING_LABEL[r]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="viz-legend">
        <li>
          <span className="viz-rating viz-rating--good">Solid</span> Good UX/UI, no notes
        </li>
        <li>
          <span className="viz-rating viz-rating--minor">Rough edges</span> Unpolished, not critical
        </li>
        <li>
          <span className="viz-rating viz-rating--poor">Hurts use</span> Poorly done, gets in the way
        </li>
        <li>
          <span className="viz-rating viz-rating--none">Missing</span> The product doesn’t have it
        </li>
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

export function SkvotHomeStructure() {
  return (
    <CsFigure
      eyebrow="Information architecture"
      title="Homepage structure: schedule first, culture woven through"
      caption="Courses are interleaved with Culture content, so the feed keeps pointing students back to Skvot beyond the course they’re on."
    >
      <div className="viz-ia">
        <div className="viz-ia-notes viz-ia-notes--left" aria-hidden="true">
          <span>Profile</span>
          <span>Course tabs</span>
          <span>Schedule</span>
        </div>
        <ol className="viz-ia-phone">
          <li className="viz-ia-bar">
            <span className="viz-ia-dot" />
            <span className="viz-ia-pill" />
            <span className="viz-ia-dot" />
            <span className="viz-ia-dot" />
          </li>
          {HOME_BLOCKS.map((b) => (
            <li key={b.n} className={`viz-ia-block viz-ia-block--${b.kind}`}>
              <span className="viz-ia-n">{b.n}</span>
              {b.label}
            </li>
          ))}
        </ol>
        <div className="viz-ia-notes" aria-hidden="true">
          <span>Notifications</span>
          <span>Search</span>
          <span>Date and time</span>
        </div>
      </div>
      <ul className="viz-legend">
        <li>
          <span className="viz-key viz-key--key" /> What’s next this week
        </li>
        <li>
          <span className="viz-key viz-key--course" /> Enrolled courses
        </li>
        <li>
          <span className="viz-key viz-key--content" /> Culture: articles, podcasts, courses
        </li>
        <li>
          <span className="viz-key viz-key--util" /> Utility
        </li>
      </ul>
    </CsFigure>
  );
}

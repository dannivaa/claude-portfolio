import type { Metadata } from 'next';
import '@/styles/editorial.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'Builds | Danylo Ivanov',
};

const BUILDS = [
  {
    title: 'Design vacancy scout bot',
    body: 'A Telegram bot that watches DOU and Djinni for design vacancies and scores how well each one fits.',
    stack: ['Telegram bot', 'Railway'],
  },
  {
    title: 'USDT-to-EUR Siri Shortcut',
    body: 'One recurring currency calculation, reduced to a single tap.',
    stack: ['Siri Shortcuts'],
  },
  {
    title: 'Community contributions tracker',
    body: 'A Notion system that keeps track of financial contributions for a community.',
    stack: ['Notion'],
  },
  {
    title: 'This portfolio',
    body: 'Designed and art-directed by Danylo. Roughly 80% of the code was executed by Claude Code, with every decision reviewed along the way.',
    stack: ['Next.js', 'Claude Code', 'Vercel'],
  },
];

export default function BuildsPage() {
  return (
    <div className="ed-page">
      <SiteHeader />

      <main>
        <section className="ed-hero ed-hero--page ed-hero--single">
          <div className="ed-hero__main">
            <p className="ed-label ed-rise" style={{ animationDelay: '0.05s' }}>
              Builds
            </p>
            <h1 className="ed-hero__title ed-rise" style={{ animationDelay: '0.15s' }}>
              Find the step that repeats. Write the rules. <em>Let the tool do it.</em>
            </h1>
          </div>
        </section>

        <section className="ed-section">
          <ol className="ed-builds">
            {BUILDS.map((b, i) => (
              <li key={b.title} className="ed-build">
                <span className="ed-build__num">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="ed-build__title">{b.title}</h2>
                <p className="ed-build__body">{b.body}</p>
                <p className="ed-meta ed-build__stack">
                  {b.stack.map((s, j) => (
                    <span key={s}>
                      {j > 0 && <span className="ed-meta__dot" aria-hidden="true"> · </span>}
                      {s}
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

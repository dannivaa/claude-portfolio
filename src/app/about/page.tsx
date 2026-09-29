import type { Metadata } from 'next';
import Image from 'next/image';
import '@/styles/editorial.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = {
  title: 'About | Danylo Ivanov',
};

const FACTS = [
  { label: 'Based in', value: 'Kyiv, Ukraine' },
  { label: 'Experience', value: 'Two years, commercial' },
  { label: 'Currently', value: 'Lyxonn, Homecrowd' },
  { label: 'Languages', value: 'Ukrainian (native), English (B2)' },
  { label: 'Open to', value: 'Remote, hybrid in Kyiv' },
  { label: 'Off-hours', value: 'Drums, songwriting, manga, anime, cooking' },
];

export default function AboutPage() {
  return (
    <div className="ed-page">
      <SiteHeader />

      <main>
        <section className="ed-hero ed-hero--page">
          <div className="ed-hero__main">
            <p className="ed-label ed-rise" style={{ animationDelay: '0.05s' }}>
              About
            </p>
            <h1 className="ed-hero__title ed-rise" style={{ animationDelay: '0.15s' }}>
              Designer, builder, <em>drummer.</em>
            </h1>
            <div className="ed-prose ed-rise" style={{ animationDelay: '0.3s' }}>
              <p>
                Sole product designer at Lyxonn, a crypto exchange: iOS, Android, web and the admin panels behind them,
                from discovery to developer handoff, QA and iteration after launch. Since late August 2026 also designing
                at Homecrowd, an early-stage product, working directly with the founder.
              </p>
              <p>
                Research comes before screens. Interviews and usability tests decide what stays, and often what goes.
                When a request is vague, the questions keep coming until the goal is clear.
              </p>
              <p>
                Outside of design: drums, writing songs, reading manga, anime and cooking. Also a steady habit of
                building small tools for things done by hand one time too many.
              </p>
            </div>
          </div>

          <aside className="ed-hero__side ed-rise" style={{ animationDelay: '0.45s' }} aria-label="Facts">
            <dl className="ed-facts">
              {FACTS.map(({ label, value }) => (
                <div key={label} className="ed-facts__row">
                  <dt className="ed-label">{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section className="ed-section ed-about-media">
          <figure className="ed-about-media__photo">
            <Image
              src="/images/about me.png"
              alt="Danylo Ivanov"
              width={2706}
              height={2075}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </figure>
          <div className="ed-about-media__side">
            <p className="ed-label">On repeat while building</p>
            <iframe
              title="Spotify playlist"
              src="https://open.spotify.com/embed/playlist/2l4YUpAEfKwN8IJsKLgYOY?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="ed-about-media__player"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

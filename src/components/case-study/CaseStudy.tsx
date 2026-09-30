import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { GooeyTextReveal } from '@/components/ui/gooey-text-reveal';
import { getNextProject, type Project } from '@/lib/projects';

export type Screen = { src: string; alt: string; width: number; height: number };
type Fact = { label: string; value: string };
type Stat = { value: string; label: string };

function stageStyle(project: Project) {
  return { '--stage-edge': project.stage[0], '--stage-center': project.stage[1] } as CSSProperties;
}

const PHONE_SIZES = '(max-width: 768px) 200px, 280px';

function Phone({ screen, eager }: { screen: Screen; eager?: boolean }) {
  return (
    <figure className="cs-phone">
      <Image
        src={screen.src}
        alt={screen.alt}
        width={screen.width}
        height={screen.height}
        sizes={PHONE_SIZES}
        loading={eager ? 'eager' : undefined}
      />
    </figure>
  );
}

export function CsHeader({ project, facts }: { project: Project; facts: Fact[] }) {
  return (
    <section className="cs-head">
      <div className="shell">
        <FadeInMount>
          <Link className="cs-back" href="/#projects">
            <ArrowLeft size={14} strokeWidth={2} aria-hidden />
            All work
          </Link>
          <p className="kicker cs-eyebrow">
            <span className="kicker-index">{project.index}</span>
            {project.name} · {project.category} · {project.year}
          </p>
        </FadeInMount>

        <GooeyTextReveal delay={0.1} duration={1.9} stagger={0.16}>
          <h1 className="cs-title">{project.title}</h1>
        </GooeyTextReveal>

        <FadeInMount delay={0.6}>
          <p className="cs-lede">{project.summary}</p>
        </FadeInMount>

        <FadeInMount delay={0.75}>
          <dl className="cs-facts">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </FadeInMount>
      </div>
    </section>
  );
}

/** Tinted panel with the project's key screens, in the colours of its thumbnail. */
export function CsStage({ project, screens }: { project: Project; screens: Screen[] }) {
  return (
    <section className="cs-stage-section" aria-label={`${project.name} key screens`}>
      <div className="shell">
        <FadeInMount delay={0.85}>
          <div className="cs-stage" style={stageStyle(project)}>
            <div className="cs-phones">
              {screens.map((screen) => (
                <Phone key={screen.src} screen={screen} eager />
              ))}
            </div>
          </div>
        </FadeInMount>
      </div>
    </section>
  );
}

export function CsSummary({ items }: { items: { label: string; body: string }[] }) {
  return (
    <section className="section" aria-labelledby="cs-summary-title">
      <div className="shell">
        <FadeIn>
          <h2 id="cs-summary-title" className="kicker">
            The short version
          </h2>
          <div className="cs-tldr">
            {items.map((item, i) => (
              <div key={item.label} className="cs-tldr-item">
                <h3 className="cs-tldr-label">
                  <span className="cs-tldr-index">0{i + 1}</span>
                  {item.label}
                </h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function CsStats({ items }: { items: Stat[] }) {
  return (
    <section className="section cs-stats-section" aria-label="Key numbers">
      <div className="shell">
        <FadeIn>
          <dl className="cs-stats">
            {items.map((stat) => (
              <div key={stat.value}>
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

export function CsArticle({ children }: { children: ReactNode }) {
  return (
    <section className="section">
      <div className="shell">
        <div className="cs-article">{children}</div>
      </div>
    </section>
  );
}

export function CsBlock({ index, label, children }: { index: string; label: string; children: ReactNode }) {
  return (
    <FadeIn>
      <section className="cs-block" aria-labelledby={`cs-${label.toLowerCase()}`}>
        <h2 id={`cs-${label.toLowerCase()}`} className="cs-block-label">
          <span className="cs-block-index">{index}</span>
          {label}
        </h2>
        <div className="cs-prose">{children}</div>
      </section>
    </FadeIn>
  );
}

export function CsGallery({ project, rows }: { project: Project; rows: Screen[][] }) {
  return (
    <section className="section" aria-labelledby="cs-gallery-title">
      <div className="shell">
        <FadeIn>
          <h2 id="cs-gallery-title" className="kicker cs-gallery-kicker">
            More screens
          </h2>
        </FadeIn>
        <FadeIn>
          <div className="cs-stage cs-stage--gallery" style={stageStyle(project)}>
            {rows.map((row, i) => (
              <div key={i} className="cs-phones">
                {row.map((screen) => (
                  <Phone key={screen.src} screen={screen} />
                ))}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function CsNext({ project }: { project: Project }) {
  const next = getNextProject(project.slug);
  return (
    <section className="section" aria-label="Next case study">
      <div className="shell">
        <FadeIn>
          <Link href={`/${next.slug}`} className="cs-next">
            <div className="cs-next-copy">
              <p className="kicker">
                <span className="kicker-index">Next</span>
                {next.index} · {next.name}
              </p>
              <p className="cs-next-title">{next.title}</p>
              <p className="cs-next-desc">{next.summary}</p>
              <span className="work-arrow cs-next-arrow" aria-hidden="true">
                <ArrowUpRight size={18} strokeWidth={1.75} />
              </span>
            </div>
            <div className="cs-next-media">
              <Image src={next.thumbnail} alt="" width={2112} height={1308} sizes="(max-width: 768px) calc(100vw - 32px), 560px" />
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

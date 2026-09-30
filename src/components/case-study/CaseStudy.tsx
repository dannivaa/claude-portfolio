import type { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { GooeyTextReveal } from '@/components/ui/gooey-text-reveal';
import { getNextProject, type Project } from '@/lib/projects';

export type Screen = { src: string; alt: string; width: number; height: number };
type Fact = { label: string; value: string };

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
      <div className="wrap">
        <FadeInMount>
          <Link className="cs-back" href="/#projects">
            <ArrowLeft size={16} strokeWidth={2} aria-hidden />
            All work
          </Link>
          <p className="cs-project">
            {project.name} · {project.category}
          </p>
        </FadeInMount>

        <GooeyTextReveal delay={0.1} duration={1.9} stagger={0.16}>
          <h1 className="cs-title">{project.title}</h1>
        </GooeyTextReveal>

        <FadeInMount delay={0.6}>
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
      <div className="wrap">
        <FadeInMount delay={0.75}>
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
    <section className="cs-summary" aria-label="Summary">
      <div className="wrap">
        <FadeIn>
          <dl className="cs-psr">
            {items.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.body}</dd>
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
    <div className="cs-article">
      <div className="wrap">{children}</div>
    </div>
  );
}

export function CsBlock({ label, children }: { label: string; children: ReactNode }) {
  const id = `cs-${label.toLowerCase()}`;
  return (
    <FadeIn>
      <section className="cs-block" aria-labelledby={id}>
        <h2 id={id} className="cs-block-label">
          {label}
        </h2>
        <div className="cs-prose">{children}</div>
      </section>
    </FadeIn>
  );
}

export function CsGallery({ project, rows }: { project: Project; rows: Screen[][] }) {
  return (
    <section className="cs-gallery" aria-label={`More ${project.name} screens`}>
      <div className="wrap">
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
    <section className="cs-next-section" aria-label="Next case study">
      <div className="wrap">
        <FadeIn>
          <Link href={`/${next.slug}`} className="cs-next">
            <div className="cs-next-media">
              <Image src={next.thumbnail} alt="" width={2112} height={1308} sizes="(max-width: 768px) calc(100vw - 32px), 320px" />
            </div>
            <div className="cs-next-copy">
              <span className="cs-next-label">Next case study</span>
              <span className="cs-next-title">{next.title}</span>
            </div>
            <ArrowRight className="cs-next-arrow" size={24} strokeWidth={1.75} aria-hidden />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

import '@/styles/work-motion.css';
import { Children, isValidElement, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getNextProject, type Project } from '@/lib/projects';
import { CsToc, type TocItem } from '@/components/case-study/CsToc';
import { WorkVideo } from '@/components/home/WorkVideo';
import { MotionScene } from '@/components/home/MotionScene';
import { GUDFOOD_SCENE } from '@/components/home/motion/gudfood-scene';
import { SKVOT_SCENE } from '@/components/home/motion/skvot-scene';

const SCENES = { gudfood: GUDFOOD_SCENE, skvot: SKVOT_SCENE };

export type Screen = { src: string; alt: string; width: number; height: number };
type Fact = { label: string; value: string };

/** The project's palette as CSS variables, for the facts row and the research visuals. */
function brandStyle(project: Project) {
  return {
    '--cs-primary': project.brand.primary,
    '--cs-secondary': project.brand.secondary,
    '--cs-soft': project.brand.soft,
    '--cs-c1': project.stage[0],
    '--cs-c2': project.stage[1],
  } as CSSProperties;
}

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

export function CsHeader({ project }: { project: Project }) {
  return (
    <section className="cs-head">
      <p className="cs-project">
        {project.name} · {project.status} {project.year}
      </p>
      <h1 className="cs-title">{project.title}</h1>
    </section>
  );
}

/**
 * Project facts under the screens: Role, Timeline and Status share one ruled row,
 * Scope runs underneath as tags. Scope arrives as one "A · B · C" string.
 */
export function CsFacts({ project, facts }: { project: Project; facts: Fact[] }) {
  const scope = facts.find((f) => f.label === 'Scope');
  const rest = facts.filter((f) => f !== scope);
  return (
    <section className="cs-facts" aria-label="Project facts">
      <dl className="cs-facts-row">
        {rest.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
        <div>
          <dt>Status</dt>
          <dd className="cs-facts-status">
            <span aria-hidden="true" />
            {project.status} {project.year}
          </dd>
        </div>
      </dl>
      {scope && (
        <div className="cs-facts-scope">
          <p className="cs-facts-label">Scope</p>
          <ul>
            {scope.value.split(' · ').map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

/** The homepage card's media, full width under the title: Danylo's video or the CSS motion loop. */
export function CsHeroMedia({ project }: { project: Project }) {
  const { card } = project;
  return (
    <div className="cs-hero-media">
      {'video' in card ? (
        <WorkVideo {...card.video} label={`${project.name}: ${project.summary}`} />
      ) : (
        <MotionScene html={SCENES[card.scene]} label={project.summary} stage={project.stage} />
      )}
    </div>
  );
}

const sectionId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-');

/**
 * One chapter of the story, Rachel's way: a small label, a statement headline, a
 * short paragraph, then whatever shows it (points, flows, research artefacts).
 */
export function CsSection({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  const id = sectionId(label);
  return (
    <section id={id} className="cs-section" aria-labelledby={`${id}-title`}>
      <p className="cs-section-label">{label}</p>
      <h2 id={`${id}-title`} className="cs-section-title">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function CsText({ children }: { children: ReactNode }) {
  return <div className="cs-prose">{children}</div>;
}

/** Two to three short points under a section: a title and a line each. */
export function CsPoints({ label, items }: { label?: string; items: { title: string; body: string }[] }) {
  return (
    <div className="cs-points-wrap">
      {label && <p className="cs-points-label">{label}</p>}
      <ul className={`cs-points cs-points--${Math.min(items.length, 3)}`}>
        {items.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Core flows: each screen on its own tinted stage with a title and a line underneath. */
export function CsFlows({ project, items }: { project: Project; items: { screen: Screen; title: string; body: string }[] }) {
  return (
    <ul className="cs-flows">
      {items.map((item) => (
        <li key={item.screen.src} className="cs-flow">
          <div className="cs-flow-stage" style={stageStyle(project)}>
            <Phone screen={item.screen} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

/** Research artefacts and screen rows sit in a column under the section text. */
export function CsVisuals({ children }: { children: ReactNode }) {
  return <div className="cs-visuals">{children}</div>;
}

/**
 * A research artefact on a tinted panel: a small mono tag in the corner (the way
 * Rachel labels hers), a title, the artefact itself, and an optional caption.
 */
export function CsFigure({
  tag,
  title,
  caption,
  children,
}: {
  tag: string;
  title?: string;
  caption?: ReactNode;
  children: ReactNode;
}) {
  return (
    <figure className="cs-fig">
      <div className="cs-fig-panel">
        <p className="cs-fig-tag">{tag}</p>
        {title && <p className="cs-fig-title">{title}</p>}
        {children}
      </div>
      {caption && <figcaption className="cs-fig-caption">{caption}</figcaption>}
    </figure>
  );
}

/** A row of screens set inside a story section, on the same tinted stage as the hero screens. */
export function CsScreens({ project, screens, caption }: { project: Project; screens: Screen[]; caption?: string }) {
  return (
    <figure className="cs-screens">
      <div className="cs-stage cs-stage--inline" style={stageStyle(project)}>
        <div className="cs-phones">
          {screens.map((screen) => (
            <Phone key={screen.src} screen={screen} />
          ))}
        </div>
      </div>
      {caption && <figcaption className="cs-fig-caption">{caption}</figcaption>}
    </figure>
  );
}

function CsNext({ project }: { project: Project }) {
  const next = getNextProject(project.slug);
  return (
    <section className="cs-next-section" aria-label="Next case study">
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
    </section>
  );
}

/** Contents entries, one per CsSection passed to CsLayout. */
function tocFrom(children: ReactNode): TocItem[] {
  return Children.toArray(children).flatMap((child) =>
    isValidElement<{ label?: string }>(child) && child.type === CsSection && child.props.label
      ? [{ id: sectionId(child.props.label), label: child.props.label }]
      : [],
  );
}

/**
 * Case study page frame: back link and a sticky contents list in a narrow left column,
 * everything else (header, screens, story, next project) in the column beside it.
 */
export function CsLayout({ project, children }: { project: Project; children: ReactNode }) {
  return (
    <div className="wrap cs-layout" data-project={project.slug} style={brandStyle(project)}>
      <aside className="cs-side">
        <div className="cs-side-inner">
          <Link className="cs-back" href="/#projects">
            <ArrowLeft size={16} strokeWidth={2} aria-hidden />
            All work
          </Link>
          <CsToc items={tocFrom(children)} />
        </div>
      </aside>
      <div className="cs-content">
        {children}
        <CsNext project={project} />
      </div>
    </div>
  );
}

import { Children, isValidElement, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getNextProject, type Project } from '@/lib/projects';
import { CsToc, type TocItem } from '@/components/case-study/CsToc';

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
      <p className="cs-project">
        {project.name} · {project.status} {project.year}
      </p>

      <h1 className="cs-title">{project.title}</h1>

      <dl className="cs-facts">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

/** Tinted panel with the project's key screens, in the colours of its thumbnail. */
export function CsStage({ project, screens }: { project: Project; screens: Screen[] }) {
  return (
    <section className="cs-stage-section" aria-label={`${project.name} key screens`}>
      <div className="cs-stage" style={stageStyle(project)}>
        <div className="cs-phones">
          {screens.map((screen) => (
            <Phone key={screen.src} screen={screen} eager />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CsSummary({ items }: { items: { label: string; body: string }[] }) {
  return (
    <section id="overview" className="cs-summary" aria-label="Overview">
      <dl className="cs-psr">
        {items.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const blockId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export function CsArticle({ children }: { children: ReactNode }) {
  return <div className="cs-article">{children}</div>;
}

export function CsBlock({ label, children }: { label: string; children: ReactNode }) {
  const id = blockId(label);
  return (
    <section id={id} className="cs-block" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="cs-block-label">
        {label}
      </h2>
      <div className="cs-prose">{children}</div>
    </section>
  );
}

export function CsGallery({ project, rows }: { project: Project; rows: Screen[][] }) {
  return (
    <section id="screens" className="cs-gallery" aria-label={`More ${project.name} screens`}>
      <div className="cs-stage cs-stage--gallery" style={stageStyle(project)}>
        {rows.map((row, i) => (
          <div key={i} className="cs-phones">
            {row.map((screen) => (
              <Phone key={screen.src} screen={screen} />
            ))}
          </div>
        ))}
      </div>
    </section>
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

/** Contents entries for the page's sections, read from the elements passed to CsLayout. */
function tocFrom(children: ReactNode): TocItem[] {
  return Children.toArray(children).flatMap((child): TocItem[] => {
    if (!isValidElement<{ children?: ReactNode }>(child)) return [];
    if (child.type === CsSummary) return [{ id: 'overview', label: 'Overview' }];
    if (child.type === CsGallery) return [{ id: 'screens', label: 'Screens' }];
    if (child.type === CsArticle)
      return Children.toArray(child.props.children).flatMap((block) =>
        isValidElement<{ label?: string }>(block) && block.props.label
          ? [{ id: blockId(block.props.label), label: block.props.label }]
          : [],
      );
    return [];
  });
}

/**
 * Case study page frame: back link and a sticky contents list in a narrow left column,
 * everything else (header, screens, story, next project) in the column beside it.
 */
export function CsLayout({ project, children }: { project: Project; children: ReactNode }) {
  return (
    <div className="wrap cs-layout">
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

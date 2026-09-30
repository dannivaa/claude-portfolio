import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Lock } from 'lucide-react';
import ClickSpark from '@/components/ClickSpark';
import { Cursor } from '@/components/ui/custom-cursor';
import { UPCOMING, type Project } from '@/lib/projects';

// Cursor-chip icons: each viewBox is cropped to its stroke bounds (path extents +1 for half the
// 2px stroke) so the chip's gap and padding measure from visible ink, not the 24×24 safe area.

// Paths span 3–21 × 6–18.
const eyeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="13.125" height="9.1875" viewBox="2 5 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  </svg>
);

// Paths span 5–19 × 3–21.
const lockIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="13.125" viewBox="4 2 16 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  </svg>
);

const CARD_SIZES = '(max-width: 768px) calc(100vw - 32px), (max-width: 1328px) calc(50vw - 72px), 584px';

export function WorkCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/${project.slug}`}
      className="work-card work-card--link"
      aria-label={`${project.title} — ${project.name} case study`}
    >
      <ClickSpark sparkColor={project.accent} sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
        <Cursor name="View case study" customSVG={eyeIcon} cursorColor={project.accent} style={{ borderRadius: 16 }}>
          <div className="work-media">
            <Image src={project.thumbnail} alt={project.thumbnailAlt} width={2112} height={1308} sizes={CARD_SIZES} />
          </div>
        </Cursor>
      </ClickSpark>
      <div className="work-body">
        <div className="work-meta">
          <span>
            <span className="work-meta-index">{project.index}</span>
            {project.name}
          </span>
          <span>
            {project.category} · {project.year}
          </span>
        </div>
        <h3 className="work-title">
          {project.title}
          <span className="work-arrow" aria-hidden="true">
            <ArrowUpRight size={18} strokeWidth={1.75} />
          </span>
        </h3>
        <p className="work-desc">{project.summary}</p>
      </div>
    </Link>
  );
}

export function UpcomingCard() {
  return (
    <article className="work-card work-card--soon">
      <ClickSpark sparkColor={UPCOMING.accent} sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
        <Cursor name="Working on it…" customSVG={lockIcon} cursorColor={UPCOMING.accent} style={{ borderRadius: 16 }}>
          <div className="work-media">
            <span className="work-badge">
              <Lock size={11} strokeWidth={2.25} aria-hidden />
              In progress
            </span>
            <Image src={UPCOMING.thumbnail} alt={UPCOMING.thumbnailAlt} width={2112} height={1308} sizes={CARD_SIZES} />
          </div>
        </Cursor>
      </ClickSpark>
      <div className="work-body">
        <div className="work-meta">
          <span>
            <span className="work-meta-index">{UPCOMING.index}</span>
            Next case study
          </span>
          <span>Coming soon</span>
        </div>
        <h3 className="work-title">{UPCOMING.title}</h3>
      </div>
    </article>
  );
}

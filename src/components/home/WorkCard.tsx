import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ClickSpark from '@/components/ClickSpark';
import { Cursor } from '@/components/ui/custom-cursor';
import { WorkStage } from '@/components/home/WorkStage';
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

const CARD_SIZES = '(max-width: 1264px) calc(100vw - 48px), 1200px';

export function WorkCard({ project }: { project: Project }) {
  return (
    <Link href={`/${project.slug}`} className="work-card work-card--link">
      <ClickSpark sparkColor={project.accent} sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
        <Cursor name="View case study" customSVG={eyeIcon} cursorColor={project.accent} style={{ borderRadius: 24 }}>
          <WorkStage
            screens={project.cardScreens}
            spread={project.cardSpread}
            stage={project.stage}
            label={`${project.name} app screens`}
          />
        </Cursor>
      </ClickSpark>
      <div className="work-body">
        <div>
          <h3 className="work-title">{project.title}</h3>
          <p className="work-meta">
            {project.name} · {project.category}
          </p>
        </div>
        <span className="work-cta" aria-hidden="true">
          View case study
          <ArrowRight size={16} strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}

export function UpcomingCard() {
  return (
    <article className="work-card work-card--soon">
      <ClickSpark sparkColor={UPCOMING.accent} sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
        <Cursor name="Working on it…" customSVG={lockIcon} cursorColor={UPCOMING.accent} style={{ borderRadius: 24 }}>
          <div className="work-media">
            <span className="work-badge">Coming soon</span>
            <Image src={UPCOMING.thumbnail} alt={UPCOMING.thumbnailAlt} width={2112} height={1308} sizes={CARD_SIZES} />
          </div>
        </Cursor>
      </ClickSpark>
      <div className="work-body">
        <div>
          <h3 className="work-title">{UPCOMING.title}</h3>
          <p className="work-meta">Case study in progress</p>
        </div>
      </div>
    </article>
  );
}

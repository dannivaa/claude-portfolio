import Link from 'next/link';
import ClickSpark from '@/components/ClickSpark';
import { Cursor } from '@/components/ui/custom-cursor';
import { WorkVideo } from '@/components/home/WorkVideo';
import { ProjectScene } from '@/components/home/scenes';
import type { Project } from '@/lib/projects';

// Cursor-chip icon: the viewBox is cropped to its stroke bounds (paths span 3–21 × 6–18,
// +1 for half the 2px stroke) so the chip's gap and padding measure from visible ink.
const eyeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="13.125" height="9.1875" viewBox="2 5 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  </svg>
);

const SCENE_LABELS = {
  gudfood: 'GudFood: the order is delivered, the rating sheet rises, five stars and two tags, and Done turns into a thank-you',
  skvot: 'Skvot: the week roadmap, the task with a deadline opens, the switch moves to homework and the deadline gains a day',
};

export function WorkCard({ project }: { project: Project }) {
  const { card } = project;
  return (
    <Link href={`/${project.slug}`} className="work-card">
      <ClickSpark sparkColor="#14203a" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
        <Cursor name="View case study" customSVG={eyeIcon} cursorColor="var(--accent)" style={{ borderRadius: 16 }}>
          {'video' in card ? (
            <WorkVideo {...card.video} label={`${project.name}: ${project.summary}`} />
          ) : 'concept' in card ? (
            <ProjectScene project={project} label={`${project.name}: concept recreation of an order being checked and paid out`} />
          ) : (
            <ProjectScene project={project} label={SCENE_LABELS[card.scene]} />
          )}
        </Cursor>
      </ClickSpark>
      <div className="work-body">
        <h3 className="work-title">{project.title}</h3>
        <p className="work-meta">
          {project.name} · {project.status} {project.year}
        </p>
      </div>
    </Link>
  );
}

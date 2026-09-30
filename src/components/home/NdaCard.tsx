import { Cursor } from '@/components/ui/custom-cursor';
import type { NdaWork } from '@/lib/projects';

// Cursor-chip icon, viewBox cropped to its stroke bounds like the eye icon on WorkCard
const lockIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="10.5" height="13.125" viewBox="4 2 16 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', flexShrink: 0 }}>
    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6" />
    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  </svg>
);

/**
 * Work under NDA: no screens and no link, just a blurred silhouette of the surface
 * (a phone or a browser window) so the card holds its place in the grid.
 */
export function NdaCard({ work }: { work: NdaWork }) {
  return (
    <article className="work-card work-card--nda">
      <Cursor name="Under NDA" customSVG={lockIcon} cursorColor="var(--blue)" style={{ borderRadius: 16 }}>
        <div className="work-stage nda-stage" role="img" aria-label={`${work.company}: work under NDA`}>
          <div className={`nda-surface nda-surface--${work.surface}`} aria-hidden="true">
            <span className="nda-bar nda-bar--head" />
            <span className="nda-block" />
            <span className="nda-bar" />
            <span className="nda-bar nda-bar--short" />
            <span className="nda-block nda-block--low" />
            <span className="nda-bar nda-bar--cta" />
          </div>
        </div>
      </Cursor>
      <div className="work-body">
        <h3 className="work-title">{work.title}</h3>
        <p className="work-meta">
          {work.company} · Under NDA {work.year}
        </p>
      </div>
    </article>
  );
}

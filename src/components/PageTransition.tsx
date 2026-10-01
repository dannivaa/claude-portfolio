import { ViewTransition, type ReactNode } from 'react';

/**
 * Crossfades page content on navigation (React's <ViewTransition> on top of the
 * browser View Transitions API): the old page lifts away, the new one settles in.
 * It has to wrap each page, not the layout, because layouts persist across routes.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div className="page-transition">{children}</div>
    </ViewTransition>
  );
}

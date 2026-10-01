'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { useLenis } from 'lenis/react';

export type TocItem = { id: string; label: string };

/**
 * Sticky "on this page" list beside the case study article. The section crossing the
 * upper third of the viewport is the active one; an accent bar slides to its link.
 */
export function CsToc({ items }: { items: TocItem[] }) {
  const lenis = useLenis();
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLOListElement>(null);
  const [bar, setBar] = useState<{ top: number; height: number } | null>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    // A thin band a third of the way down the viewport: whichever section covers it is "current"
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-33% 0px -66% 0px' },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    const link = listRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (link) setBar({ top: link.offsetTop, height: link.offsetHeight });
  }, [active]);

  return (
    <nav className="cs-toc" aria-label="On this page">
      <ol ref={listRef} className="cs-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-id={item.id}
              aria-current={active === item.id ? 'location' : undefined}
              onClick={(e) => {
                e.preventDefault();
                // Lenis honours the block's scroll-margin-top, which lines it up with this list
                lenis?.scrollTo(`#${item.id}`);
                history.replaceState(null, '', `#${item.id}`);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
      {bar && (
        <span
          className="cs-toc-bar"
          aria-hidden="true"
          style={{ '--bar-top': `${bar.top}px`, '--bar-h': `${bar.height}px` } as CSSProperties}
        />
      )}
    </nav>
  );
}

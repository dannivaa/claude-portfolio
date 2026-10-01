'use client';

import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

/**
 * Sticky "on this page" list beside the case study article. The section crossing the
 * upper third of the viewport is the current one; its link turns from muted to ink.
 */
export function CsToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

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

  return (
    <nav className="cs-toc" aria-label="On this page">
      <ol className="cs-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

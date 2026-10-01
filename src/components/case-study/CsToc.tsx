'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';

export type TocItem = { id: string; label: string };

/**
 * Sticky "on this page" list beside the case study article. The section crossing the
 * upper third of the viewport is the current one; its link turns from muted to ink.
 * Clicking a link glides to its section rather than jumping.
 */
export function CsToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  // While a click-scroll is under way, keep the clicked item lit instead of every section it passes
  const gliding = useRef(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    // A thin band a third of the way down the viewport: whichever section covers it is "current"
    const io = new IntersectionObserver(
      (entries) => {
        if (gliding.current) return;
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: '-33% 0px -66% 0px' },
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  const glideTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gliding.current = true;
    setActive(id);
    const done = () => {
      gliding.current = false;
      window.removeEventListener('scrollend', done);
    };
    window.addEventListener('scrollend', done);
    window.setTimeout(done, 1200); // browsers without scrollend
    target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav className="cs-toc" aria-label="On this page">
      <ol className="cs-toc-list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? 'location' : undefined}
              onClick={(e) => glideTo(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

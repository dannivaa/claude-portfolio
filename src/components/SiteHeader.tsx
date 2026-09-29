'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CV_URL, EMAIL } from '@/lib/site';

const NAV = [
  { href: '/', label: 'Work' },
  { href: '/builds', label: 'Builds' },
  { href: '/about', label: 'About' },
];

const kyivTime = () =>
  new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Kyiv', hour: '2-digit', minute: '2-digit' }).format(new Date());

// Kyiv local time, so remote teams can see the time zone at a glance.
// Rendered only after mount to avoid a server/client mismatch.
function KyivClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(kyivTime());
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="ed-header__clock" aria-label="Local time in Kyiv">
      Kyiv <span className="ed-header__time">{time ?? '--:--'}</span>
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="ed-header">
      <Link href="/" className="ed-header__name">
        Danylo Ivanov
        <span className="ed-header__role">Product designer</span>
      </Link>

      <nav className="ed-header__nav" aria-label="Main">
        {NAV.map(({ href, label }) => (
          <Link key={href} href={href} className="ed-header__link" aria-current={pathname === href ? 'page' : undefined}>
            {label}
          </Link>
        ))}
        <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="ed-header__link">
          Resume<span aria-hidden="true"> ↗</span>
        </a>
      </nav>

      <div className="ed-header__right">
        <KyivClock />
        <a href={`mailto:${EMAIL}`} className="ed-header__cta">
          Let&rsquo;s talk
        </a>
      </div>
    </header>
  );
}

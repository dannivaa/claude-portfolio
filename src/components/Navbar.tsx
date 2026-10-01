'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_SECTIONS = [{ id: 'projects', label: 'Work' }];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="wrap wrap--wide">
        <Link
          href="/"
          className="nav-brand"
          onClick={(e) => {
            // Already home: jump to the top instead of a no-op navigation
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo(0, 0);
              history.replaceState(null, '', '/');
            }
          }}
        >
          <span className="nav-avatar">
            <Image src="/images/pfp3d.png" alt="" width={3920} height={3920} sizes="40px" loading="eager" />
          </span>
          Danylo Ivanov
        </Link>

        <nav className="nav-links" aria-label="Sections">
          {NAV_SECTIONS.map(({ id, label }) => (
            <Link key={id} href={`/#${id}`}>
              {label}
            </Link>
          ))}
          <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
            About
          </Link>
        </nav>

        <Link className="btn btn-primary" href="/contact">
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import { PROJECTS } from '@/lib/projects';

// The homepage is the work page, and a case study is part of it
const WORK_PATHS = new Set(['/', ...PROJECTS.map((p) => `/${p.slug}`)]);

export default function Navbar() {
  const pathname = usePathname();

  // Already home: jump to the top instead of a no-op navigation
  const toTopIfHome = (e: MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo(0, 0);
      history.replaceState(null, '', '/');
    }
  };

  return (
    <header className="nav" style={{ viewTransitionName: 'site-header' }}>
      <div className="wrap wrap--wide">
        <Link href="/" className="nav-brand" onClick={toTopIfHome}>
          <span className="nav-avatar">
            <Image src="/images/pfp3d.png" alt="" width={3920} height={3920} sizes="40px" loading="eager" />
          </span>
          <span className="nav-name">
            Danylo Ivanov
            <span className="nav-role">Product designer</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Sections">
          <Link href="/" aria-current={WORK_PATHS.has(pathname) ? 'page' : undefined} onClick={toTopIfHome}>
            Work
          </Link>
          <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
            About
          </Link>
          <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

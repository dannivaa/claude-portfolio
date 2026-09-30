'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

const NAV_SECTIONS = [
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
];

export default function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();

  return (
    <header className="nav">
      <div className="wrap">
        <Link
          href="/"
          className="nav-brand"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              lenis?.scrollTo(0);
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
            <Link
              key={id}
              href={`/#${id}`}
              scroll={false}
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  lenis?.scrollTo(`#${id}`, { offset: -72 });
                }
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link className="btn btn-primary" href="/contact">
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}

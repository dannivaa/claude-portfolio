'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { ArrowUpRight } from 'lucide-react';
import { RESUME_URL } from '@/lib/site';

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
      <div className="shell">
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
            <Image src="/images/pfp3d.png" alt="" width={3920} height={3920} sizes="32px" loading="eager" />
          </span>
          <span>
            Danylo Ivanov<span className="nav-role"> · Product Designer</span>
          </span>
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
                  lenis?.scrollTo(`#${id}`);
                }
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-ghost nav-resume" href={RESUME_URL} target="_blank" rel="noreferrer noopener">
            Resume
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden />
          </a>
          <Link className="btn btn-primary" href="/contact">
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}

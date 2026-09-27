'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { useLenis } from 'lenis/react';

const NAV_SECTIONS = [
  { id: 'projects', label: 'My work' },
  { id: 'experience', label: 'Experience' },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link
          href="/"
          className="navbar-avatar"
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              lenis?.scrollTo(0);
            }
          }}
        >
          <img src="/images/pfp3d.png" alt="Avatar" />
        </Link>
        <div className="navbar-links">
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
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-cta" onClick={() => router.push('/contact')}>
          <span className="navbar-cta-label">Let&apos;s talk</span>
          <div className="navbar-cta-hover">
            <span>Let&apos;s talk</span>
            <ArrowRight size={20} />
          </div>
          <div className="navbar-cta-blob"></div>
        </button>
      </div>
    </nav>
  );
}

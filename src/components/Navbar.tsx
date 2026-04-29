'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  variant?: 'home' | 'case-study';
}

export default function Navbar({ variant = 'home' }: NavbarProps) {
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/" className="navbar-avatar">
          <img src="/pfp-updated.png" alt="Avatar" />
        </Link>
        <div className="navbar-links">
          {variant === 'home' ? (
            <>
              <a href="#projects">My work</a>
              <a href="#experience">Experience</a>
            </>
          ) : (
            <Link href="/">About me</Link>
          )}
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

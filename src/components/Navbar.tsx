import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  variant?: 'home' | 'case-study';
}

export default function Navbar({ variant = 'home' }: NavbarProps) {
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
              <a href="#testimonials">Testimonials</a>
            </>
          ) : (
            <Link href="/">About me</Link>
          )}
        </div>
      </div>
      <div className="navbar-right">
        <button className="navbar-cta">
          Let&apos;s talk
          <ArrowRight size={20} />
        </button>
      </div>
    </nav>
  );
}

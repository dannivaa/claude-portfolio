import Link from 'next/link';

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
        <a href="#" className="navbar-cta">
          Let&apos;s talk
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}

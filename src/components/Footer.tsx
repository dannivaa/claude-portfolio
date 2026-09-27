'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { Link001 } from '@/components/ui/skiper-ui/skiper40';


const EMAIL = 'danyloivanovv@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/danyloivanovv/?skipRedirect=true';
const INSTAGRAM_URL = 'https://www.instagram.com/dan_ivaa/';

const NOW_ITEMS = [
  { label: 'Designing at', value: 'Lyxonn' },
  { label: 'Based in', value: 'Kyiv, Ukraine' },
];

const SOCIAL_LINKS = [
  { label: 'Email', href: `mailto:${EMAIL}`, external: false },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'Instagram', href: INSTAGRAM_URL, external: true },
];

export default function Footer() {
  return (
    <FadeIn>
    <footer className="cs-footer">
      {/* Connect block */}
      <div className="connect-block">
        <div className="connect-block-grid">
          {/* Left — Contact */}
          <div className="connect-col">
            <h3 className="connect-col-label">Contact</h3>

            <ul className="connect-socials">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link001
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    className="connect-link"
                  >
                    {link.label}
                  </Link001>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Now */}
          <div className="connect-col">
            <h3 className="connect-col-label">Now</h3>

            <dl className="connect-now-list">
              {NOW_ITEMS.map((item) => (
                <div key={item.label} className="connect-now-item">
                  <dt className="connect-now-label">{item.label}</dt>
                  <dd className="connect-now-value">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="connect-bottom">
          <span className="connect-copy">© 2026 Danylo Ivanov</span>
          <span className="connect-built">Fully vibe-coded with Claude Code</span>
        </div>
      </div>
    </footer>
    </FadeIn>
  );
}

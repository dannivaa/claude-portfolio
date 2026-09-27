'use client';

import { useId } from 'react';
import { FadeIn } from '@/components/ui/fade-in';
import { Link001 } from '@/components/ui/skiper-ui/skiper40';


const EMAIL = 'danyloivanovv@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/danyloivanovv/?skipRedirect=true';
const INSTAGRAM_URL = 'https://www.instagram.com/dan_ivaa/';
const HOMECROWD_URL = 'https://gethomecrowd.com/';

const SOCIAL_LINKS = [
  { label: 'Email', href: `mailto:${EMAIL}`, external: false },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'Instagram', href: INSTAGRAM_URL, external: true },
];

export default function Footer() {
  // Same alpha-threshold "goo" filter as the hero's GooeyTextReveal; the blur
  // it resolves is driven by CSS so it can play forward and in reverse on hover
  const gooFilterId = `ua-goo-${useId().replace(/:/g, '')}`;

  return (
    <FadeIn>
    <footer className="cs-footer">
      <div className="connect-block">
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

        <ul className="connect-meta">
          <li>
            Working at
            <Link001 href={HOMECROWD_URL} className="connect-link">
              Homecrowd
            </Link001>
          </li>
          <li>
            Based in
            <span className="connect-meta-value connect-ukraine">Kyiv, Ukraine</span>
          </li>
        </ul>

        {/* Revealed while "Kyiv, Ukraine" is hovered */}
        <span className="connect-ukraine-banner" aria-hidden>
          <span
            className="connect-ukraine-goo"
            style={{ filter: `url(#${gooFilterId}) blur(0.4px)` }}
          >
            <span className="connect-ukraine-text">Stand with Ukraine</span>
          </span>
        </span>

        <svg aria-hidden focusable="false" width="0" height="0" className="connect-ukraine-defs">
          <defs>
            <filter id={gooFilterId} x="-50%" y="-50%" width="200%" height="200%">
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </footer>
    </FadeIn>
  );
}

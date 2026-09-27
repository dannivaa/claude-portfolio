'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { Link001 } from '@/components/ui/skiper-ui/skiper40';


const EMAIL = 'danyloivanovv@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/danyloivanovv/?skipRedirect=true';
const INSTAGRAM_URL = 'https://www.instagram.com/dan_ivaa/';

const META_ITEMS = ['Working at Homecrowd', 'Based in Kyiv, Ukraine'];

const SOCIAL_LINKS = [
  { label: 'Email', href: `mailto:${EMAIL}`, external: false },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'Instagram', href: INSTAGRAM_URL, external: true },
];

export default function Footer() {
  return (
    <FadeIn>
    <footer className="cs-footer">
      <div className="connect-block">
        <ul className="connect-meta">
          {META_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

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
    </footer>
    </FadeIn>
  );
}

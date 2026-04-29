'use client';

import '@/styles/style.css';
import '@/styles/contact.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';

const EMAIL = 'danyloivanovv@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/danyloivanovv/?skipRedirect=true';
const INSTAGRAM_URL = 'https://www.instagram.com/dan_ivaa/';
const CV_URL = 'https://drive.google.com/file/d/18xcqEFFbm7c3aLR7aRaWbhls1EpI-XwU/view?usp=sharing';

const CARDS = [
  {
    label: 'Learn more',
    text: 'View CV',
    href: CV_URL,
    external: true,
    icon: { src: '/drive.svg', alt: 'Google Drive' },
  },
  {
    label: 'Get in touch',
    text: EMAIL,
    href: `mailto:${EMAIL}`,
    external: false,
    icon: { src: '/gmail.svg', alt: 'Gmail' },
  },
  {
    label: 'Connect',
    text: 'LinkedIn',
    href: LINKEDIN_URL,
    external: true,
    icon: { src: '/linkedin.svg', alt: 'LinkedIn' },
  },
  {
    label: 'Follow',
    text: 'Instagram',
    href: INSTAGRAM_URL,
    external: true,
    icon: { src: '/instagram.svg', alt: 'Instagram' },
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar variant="case-study" />

      <FadeIn><main className="contact-main">
        <div className="contact-section">
          <div className="contact-grid-wrapper">
            <div className="contact-grid">
              {CARDS.map((card) => (
                <a
                  key={card.label}
                  className="contact-card"
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noreferrer noopener' : undefined}
                  aria-label={`${card.label} — ${card.text}`}
                >
                  <div className="contact-card-top">
                    <span className="contact-card-label">{card.label}</span>
                    <span className="contact-card-arrow" aria-hidden>
                      <ArrowUpRight size={24} strokeWidth={2} />
                    </span>
                  </div>
                  <div className="contact-card-bottom">
                    <div className="contact-card-icon">
                      <img src={card.icon.src} alt={card.icon.alt} />
                    </div>
                    <span className="contact-card-text">{card.text}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main></FadeIn>

      <Footer />
    </>
  );
}

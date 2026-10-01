import type { Metadata } from 'next';
import '@/styles/contact.css';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { KyivTime } from '@/components/KyivTime';
import { EMAIL, INSTAGRAM_URL, LINKEDIN_URL, RESUME_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Danylo Ivanov, product designer in Kyiv — email, LinkedIn, resume and Instagram.',
};

const CHANNELS = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { label: 'LinkedIn', value: 'Full work history', href: LINKEDIN_URL, external: true },
  { label: 'Resume', value: 'Opens in Google Drive', href: RESUME_URL, external: true },
  { label: 'Instagram', value: 'Life outside of design', href: INSTAGRAM_URL, external: true },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <main>
          {/* Title and a line on the left, the ways to reach me as a ruled list on the right */}
          <section className="contact">
            <div className="wrap wrap--wide contact-grid">
              <div className="contact-intro">
                <h1 className="contact-title">Let&rsquo;s talk.</h1>
                <p className="contact-lede">
                  Hiring, building something, or just want to talk design? Email is the fastest way to reach me.
                </p>
                <p className="contact-local">
                  <span className="contact-local-dot" aria-hidden="true" />
                  Kyiv, Ukraine
                  <KyivTime className="contact-time" suffix=" local time" />
                </p>
              </div>

              <ul className="contact-list">
                {CHANNELS.map((channel) => (
                  <li key={channel.label}>
                    <a
                      className="contact-row"
                      href={channel.href}
                      target={channel.external ? '_blank' : undefined}
                      rel={channel.external ? 'noreferrer noopener' : undefined}
                    >
                      <span className="contact-label">{channel.label}</span>
                      <span className="contact-value">{channel.value}</span>
                      <ArrowUpRight className="contact-arrow" size={28} strokeWidth={1.5} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}

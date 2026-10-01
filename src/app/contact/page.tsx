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

const REASONS = [
  { label: 'Hiring', value: 'You want a designer who doesn’t stop at good enough' },
  {
    label: 'Building',
    value: 'Bringing AI into your product, sharpening a flow that underperforms, or a problem that needs an unexpected answer',
  },
];

const CHANNELS = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, external: false, icon: '/icons/gmail.svg' },
  { label: 'LinkedIn', value: 'Full work history', href: LINKEDIN_URL, external: true, icon: '/icons/linkedin.svg' },
  { label: 'Resume', value: 'Opens in Google Drive', href: RESUME_URL, external: true, icon: '/icons/drive.svg' },
  { label: 'Instagram', value: 'Life outside of design', href: INSTAGRAM_URL, external: true, icon: '/icons/instagram.svg' },
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
                  Email is the fastest way to reach me. Good reasons to write:
                </p>
                <dl className="contact-reasons">
                  {REASONS.map((reason) => (
                    <div key={reason.label}>
                      <dt>{reason.label}</dt>
                      <dd>{reason.value}</dd>
                    </div>
                  ))}
                </dl>
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
                      {/* eslint-disable-next-line @next/next/no-img-element -- tiny local SVG icons */}
                      <img className="contact-icon" src={channel.icon} alt="" width={48} height={48} />
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

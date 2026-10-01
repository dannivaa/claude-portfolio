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
  { label: 'Hiring', value: 'You’re looking for a product designer' },
  { label: 'Building', value: 'Onboarding, payments, KYC or a paywall that needs to convert' },
  { label: 'Talking shop', value: 'Design, product thinking, or what you’re working on' },
];

const CHANNELS = [
  { label: 'LinkedIn', value: 'Full work history', href: LINKEDIN_URL, icon: '/icons/linkedin.svg' },
  { label: 'Resume', value: 'Opens in Google Drive', href: RESUME_URL, icon: '/icons/drive.svg' },
  { label: 'Instagram', value: 'Life outside of design', href: INSTAGRAM_URL, icon: '/icons/instagram.svg' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <main>
          {/* Same split as the homepage hero: title left, the reasons to write on the right */}
          <section className="contact-hero">
            <div className="wrap wrap--wide contact-hero-grid">
              <h1 className="contact-title">Let&rsquo;s talk.</h1>
              <div>
                <p className="contact-lede">Email is the fastest way to reach me. Everything else is below.</p>
                <dl className="contact-reasons">
                  {REASONS.map((reason) => (
                    <div key={reason.label}>
                      <dt>{reason.label}</dt>
                      <dd>{reason.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section className="contact-channels" aria-label="Contact channels">
            <div className="wrap wrap--wide">
              {/* The address itself is the call to action, set large on the accent */}
              <a className="contact-mail" href={`mailto:${EMAIL}`}>
                <span className="contact-mail-label">Email</span>
                <span className="contact-mail-address">{EMAIL}</span>
                <ArrowUpRight className="contact-mail-arrow" strokeWidth={1.5} aria-hidden />
              </a>

              <ul className="contact-list">
                {CHANNELS.map((channel) => (
                  <li key={channel.label}>
                    <a className="contact-row" href={channel.href} target="_blank" rel="noreferrer noopener">
                      {/* eslint-disable-next-line @next/next/no-img-element -- tiny local SVG icons */}
                      <img className="contact-icon" src={channel.icon} alt="" width={44} height={44} />
                      <span className="contact-label">{channel.label}</span>
                      <span className="contact-value">{channel.value}</span>
                      <ArrowUpRight className="contact-arrow" size={22} strokeWidth={1.75} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="contact-local">
                <span className="contact-local-dot" aria-hidden="true" />
                Kyiv, Ukraine
                <KyivTime className="contact-time" suffix=" local time" />
              </p>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}

import type { Metadata } from 'next';
import '@/styles/contact.css';
import { ArrowUpRight, CalendarDays } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { KyivTime } from '@/components/KyivTime';
import { CalBookingLink } from '@/components/CalBooking';
import { CAL_LINK, CAL_URL, EMAIL, INSTAGRAM_URL, LINKEDIN_URL, RESUME_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a 30-minute intro call with Danylo Ivanov, product designer in Kyiv, or reach him by email, LinkedIn or Instagram.',
};

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
        <main className="contact">
          {/* The home page's hero pattern: headline left, the why and the how on its baseline right */}
          <section className="wrap wrap--wide contact-hero">
            <h1 className="contact-title">
              <span>Got a problem</span>
              <span>worth obsessing over?</span>
            </h1>
            <div className="contact-intro">
              <p className="contact-lede">
                <strong>Hiring a designer, or bringing AI into your product?</strong> Book a 30-minute intro call, or
                write to me if that&rsquo;s easier.
              </p>
              <p className="contact-local">
                <span className="contact-local-dot" aria-hidden="true" />
                Kyiv, Ukraine
                <KyivTime className="contact-time" suffix=" local time" />
              </p>
            </div>
          </section>

          {/* Every way to reach me in one row, the call first: all of it visible without scrolling */}
          <section className="wrap wrap--wide" aria-label="Ways to get in touch">
            <ul className="contact-channels">
              <li>
                <CalBookingLink calLink={CAL_LINK} href={CAL_URL} className="contact-channel contact-channel--call">
                  <span className="contact-icon contact-icon--call" aria-hidden="true">
                    <CalendarDays size={20} strokeWidth={1.75} />
                  </span>
                  <span className="contact-channel-text">
                    <span className="contact-label">Book an intro call</span>
                    <span className="contact-value">30 min on Google Meet</span>
                  </span>
                  <ArrowUpRight className="contact-arrow" size={20} strokeWidth={1.75} aria-hidden />
                </CalBookingLink>
              </li>
              {CHANNELS.map((channel) => (
                <li key={channel.label}>
                  <a
                    className="contact-channel"
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noreferrer noopener' : undefined}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- tiny local SVG icons */}
                    <img className="contact-icon" src={channel.icon} alt="" width={40} height={40} />
                    <span className="contact-channel-text">
                      <span className="contact-label">{channel.label}</span>
                      <span className="contact-value">{channel.value}</span>
                    </span>
                    <ArrowUpRight className="contact-arrow" size={20} strokeWidth={1.75} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </PageTransition>
    </>
  );
}

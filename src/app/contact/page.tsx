import type { Metadata } from 'next';
import '@/styles/contact.css';
import { ArrowUpRight, Clock, Globe, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { KyivTime } from '@/components/KyivTime';
import { CalBooking } from '@/components/CalBooking';
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
                <strong>Hiring a designer, or bringing AI into your product?</strong> Pick a time for a 30-minute intro
                call below, or write to me if that&rsquo;s easier.
              </p>
              <p className="contact-local">
                <span className="contact-local-dot" aria-hidden="true" />
                Kyiv, Ukraine
                <KyivTime className="contact-time" suffix=" local time" />
              </p>
            </div>
          </section>

          {/* Booking happens here, not on another site: the call's details in the site's own type,
              Cal.com's calendar beside them */}
          <section className="wrap wrap--wide contact-cal" aria-labelledby="contact-book">
            <div className="contact-cal-info">
              <h2 id="contact-book" className="contact-heading">
                Book an intro call
              </h2>
              <p className="contact-cal-desc">
                Let&rsquo;s get to know each other. Tell me what you&rsquo;re trying to solve and I&rsquo;ll see where I
                can help.
              </p>
              <ul className="contact-cal-facts">
                <li>
                  <Clock size={18} strokeWidth={1.75} aria-hidden />
                  30 minutes
                </li>
                <li>
                  <Video size={18} strokeWidth={1.75} aria-hidden />
                  Google Meet
                </li>
                <li>
                  <Globe size={18} strokeWidth={1.75} aria-hidden />
                  Times shown in your time zone
                </li>
              </ul>
              <p className="contact-cal-fallback">
                Calendar not loading?{' '}
                <a href={CAL_URL} target="_blank" rel="noreferrer noopener">
                  Open it on Cal.com
                </a>
              </p>
            </div>
            <div className="contact-cal-box">
              <CalBooking calLink={CAL_LINK} />
            </div>
          </section>

          <section className="wrap wrap--wide contact-direct" aria-labelledby="contact-direct">
            <h2 id="contact-direct" className="contact-heading">
              Or reach me directly
            </h2>
            <ul className="contact-channels">
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

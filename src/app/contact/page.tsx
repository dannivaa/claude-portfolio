import type { Metadata } from 'next';
import '@/styles/contact.css';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { CopyEmail } from '@/components/CopyEmail';
import { KyivTime } from '@/components/KyivTime';
import { EMAIL, INSTAGRAM_URL, LINKEDIN_URL, RESUME_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Danylo Ivanov, product designer in Kyiv — email, LinkedIn, resume and Instagram.',
};

const CHANNELS = [
  { label: 'Email', value: 'Write to me directly', href: `mailto:${EMAIL}`, external: false, icon: '/icons/gmail.svg' },
  { label: 'LinkedIn', value: 'Full work history', href: LINKEDIN_URL, external: true, icon: '/icons/linkedin.svg' },
  { label: 'Resume', value: 'Opens in Google Drive', href: RESUME_URL, external: true, icon: '/icons/drive.svg' },
  { label: 'Instagram', value: 'Life outside of design', href: INSTAGRAM_URL, external: true, icon: '/icons/instagram.svg' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="contact-hero">
          <div className="wrap">
            <h1 className="contact-title">Let&rsquo;s talk.</h1>
            <p className="contact-lede">Hiring, working on something, or want to talk shop? Reach me wherever suits you.</p>
          </div>
        </section>

        <section className="contact-channels" aria-label="Contact channels">
          <div className="wrap">
            <ul className="contact-list">
              {CHANNELS.map((channel) => (
                <li key={channel.label} className="contact-item">
                  <a
                    className="contact-row"
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noreferrer noopener' : undefined}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- tiny local SVG icons */}
                    <img className="contact-icon" src={channel.icon} alt="" width={44} height={44} />
                    <span className="contact-label">{channel.label}</span>
                    <span className="contact-value">{channel.value}</span>
                    <ArrowUpRight className="contact-arrow" size={22} strokeWidth={1.75} aria-hidden />
                  </a>
                  {channel.label === 'Email' && <CopyEmail className="btn btn-secondary btn-copy contact-copy" compact />}
                </li>
              ))}
            </ul>
            <p className="contact-local">
              Kyiv, Ukraine
              <KyivTime className="contact-time" suffix=" local time" />
            </p>
          </div>
        </section>
      </main>

    </>
  );
}

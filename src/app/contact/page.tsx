import type { Metadata } from 'next';
import '@/styles/contact.css';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { GooeyTextReveal } from '@/components/ui/gooey-text-reveal';
import { CopyEmail } from '@/components/CopyEmail';
import { KyivTime } from '@/components/KyivTime';
import { EMAIL, INSTAGRAM_URL, LINKEDIN_URL, RESUME_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Danylo Ivanov, product designer in Kyiv — email, LinkedIn, resume and Instagram.',
};

const CHANNELS = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, external: false, icon: '/icons/gmail.svg' },
  { label: 'LinkedIn', value: 'in/danyloivanovv', href: LINKEDIN_URL, external: true, icon: '/icons/linkedin.svg' },
  { label: 'Resume', value: 'View on Google Drive', href: RESUME_URL, external: true, icon: '/icons/drive.svg' },
  { label: 'Instagram', value: '@dan_ivaa', href: INSTAGRAM_URL, external: true, icon: '/icons/instagram.svg' },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="contact-hero">
          <div className="shell">
            <FadeInMount>
              <p className="kicker">Contact</p>
            </FadeInMount>
            <GooeyTextReveal delay={0.1} duration={1.9} stagger={0.16}>
              <h1 className="contact-title">
                Let&rsquo;s <em>talk</em>.
              </h1>
            </GooeyTextReveal>
            <FadeInMount delay={0.5}>
              <p className="contact-lede">
                Hiring, building something new, or just want to talk shop? Pick whichever channel suits you.
              </p>
            </FadeInMount>
          </div>
        </section>

        <section className="section contact-channels" aria-label="Contact channels">
          <div className="shell">
            <FadeIn>
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
                      <span className="work-arrow contact-arrow" aria-hidden="true">
                        <ArrowUpRight size={18} strokeWidth={1.75} />
                      </span>
                    </a>
                    {channel.label === 'Email' && <CopyEmail className="btn btn-ghost btn-copy contact-copy" compact />}
                  </li>
                ))}
              </ul>
              <p className="contact-local">
                Kyiv, Ukraine
                <KyivTime className="contact-time" suffix=" local time" />
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer cta={false} />
    </>
  );
}

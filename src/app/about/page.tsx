import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Danylo Ivanov, product designer in Kyiv: how he works, where he has worked, and the drums, songs, books and manga outside of design.',
};

/** field: what the company does, so a recruiter knows the domain without looking it up. */
type Job = { title: string; field: string; type: string; period: string; summary?: string };

/** Matches the CV and LinkedIn role for role: a mismatch reads as hiding something. */
const EXPERIENCE: Job[] = [
  {
    title: 'Product Designer at Lyxonn',
    field: 'Fintech',
    type: 'Part-time',
    period: '2025 — Present',
    summary:
      'Designed payments and KYC flows for mobile and web. Drove conversion work through UX research, usability testing and validated hypotheses. Built and maintained the design system in Figma.',
  },
  {
    title: 'UX/UI Designer at Cake Alliance',
    field: 'Digital agency',
    type: 'Full-time',
    period: '2024 — 2025',
    summary:
      'Designed mobile-first and responsive interfaces, informed by user research, competitive analysis and usability testing. Worked on the design system and handed off to developers.',
  },
  {
    title: 'UX/UI Designer at GudFood Vdoma',
    field: 'Food delivery',
    type: 'Freelance',
    period: '2024',
    summary:
      'Interviewed stakeholders and customers to find out why people didn’t order twice. Designed a feedback system and redesigned the core screens of a frozen-food delivery app shipping to 26 cities.',
  },
  {
    title: 'UX/UI Designer at Skvot',
    field: 'Edtech',
    type: 'Freelance',
    period: '2024',
    summary:
      'Took the first mobile app for Ukraine’s largest pop-culture school from competitor research to UI. Cut homework submission after research showed students and lecturers wouldn’t use it on a phone.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageTransition>
        {/* The home page grid throughout: photo and bio side by side, then each section with its
            heading in the left half and its content from the halfway line, like a CV */}
        <main className="about">
          <div className="wrap wrap--wide">
            <h1 className="visually-hidden">About Danylo Ivanov</h1>

            <section className="about-intro" aria-label="Bio">
              <figure className="about-photo">
                <Image
                  src="/images/about me.png"
                  alt="Danylo holding a pizza at a restaurant in Kyiv"
                  fill
                  sizes="(max-width: 768px) calc(100vw - 32px), 50vw"
                  preload
                />
              </figure>

              <div className="about-bio">
                <p>
                  My name is Danylo Ivanov, and I&rsquo;m a product designer in Kyiv, obsessed with craft. I start with
                  data, what&rsquo;s actually happening, before I move. Then I talk to users, learn what they need and
                  build something that matters.
                </p>
                <p>
                  I automate the boring parts of my own work with AI and spend the time I get back on craft. The products
                  I design get the same care: AI where it earns its place, and a lot of iterations until a flow feels
                  obvious. You can see how that plays out in my <Link href="/">work</Link>.
                </p>
                <p>
                  Outside of design I play drums and write my own songs. I build my own apps, read constantly, books
                  and manga, cook and watch anime. It&rsquo;s how I stay sane.
                </p>
              </div>
            </section>

            <section className="about-row" aria-labelledby="about-experience">
              <h2 id="about-experience" className="about-heading">
                Experience
              </h2>
              <ol className="about-list">
                {EXPERIENCE.map((job) => (
                  <li key={job.title}>
                    <p className="about-item-title">{job.title}</p>
                    {job.summary && <p className="about-item-summary">{job.summary}</p>}
                    <p className="about-item-meta">
                      {job.field} <span aria-hidden="true">·</span> {job.type} <span aria-hidden="true">·</span>{' '}
                      {job.period}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="about-row" aria-labelledby="about-music">
              <h2 id="about-music" className="about-heading">
                Music
              </h2>
              <div className="about-row-body">
                <p className="about-lede">Music keeps me going. This is the playlist I build things to.</p>
                <iframe
                  className="about-playlist"
                  title="Danylo’s go-to playlist for building things on Spotify"
                  src="https://open.spotify.com/embed/playlist/2l4YUpAEfKwN8IJsKLgYOY?utm_source=generator"
                  width="100%"
                  height="480"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
                <p className="about-colophon">
                  Built with love.
                  <br />
                  Last updated October 2026
                </p>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { DrumKit } from '@/components/home/DrumKit';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Danylo Ivanov, product designer in Kyiv: how he works, where he has worked, and the drums, songs, books and manga outside of design.',
};

type Job = { title: string; type: string; period: string };

/** Years only: the list shows the path, not who I'm working for right now. */
const EXPERIENCE: Job[] = [
  { title: 'Product Designer at Homecrowd', type: 'Full-time', period: '2026' },
  { title: 'Product Designer at Lyxonn', type: 'Part-time', period: '2025 — 2026' },
  { title: 'UX/UI Designer at Cake Alliance', type: 'Full-time', period: '2024 — 2025' },
  { title: 'UX/UI Designer at GudFood Vdoma', type: 'Freelance', period: '2024' },
  { title: 'UX/UI Designer at Skvot', type: 'Freelance', period: '2024' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <PageTransition>
        {/* One narrow reading column: photo, a short bio, then ruled lists the way a CV reads */}
        <main className="about">
          <div className="about-col">
            <h1 className="visually-hidden">About Danylo Ivanov</h1>

            <figure className="about-photo">
              <Image
                src="/images/about me.png"
                alt="Danylo holding a pizza at a restaurant in Kyiv"
                width={2706}
                height={2075}
                sizes="(max-width: 768px) calc(100vw - 32px), 640px"
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
                Monotone tasks kill my drive, so I hand the manual, repetitive parts to AI and keep my time for the
                creative work. The same goes for the products I design: AI where it earns its place, and a lot of
                iterations until a flow feels obvious. You can see how that plays out in my <Link href="/">work</Link>.
              </p>
              <p>
                Outside of design I play drums and write my own songs. I build my own apps, read constantly, books and
                manga, cook and watch anime. It&rsquo;s how I stay sane.
              </p>
            </div>

            <section className="about-section" aria-labelledby="about-experience">
              <h2 id="about-experience" className="about-heading">
                Experience
              </h2>
              <ol className="about-list">
                {EXPERIENCE.map((job) => (
                  <li key={job.title}>
                    <p className="about-item-title">{job.title}</p>
                    <p className="about-item-meta">
                      {job.type} <span aria-hidden="true">·</span> {job.period}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="about-section" aria-labelledby="about-music">
              <h2 id="about-music" className="about-heading">
                Music
              </h2>
              <p className="about-lede">
                Music keeps me going. This is the playlist I build things to, and a kit you can play below.
              </p>
              <iframe
                className="about-playlist"
                title="Danylo’s go-to playlist for building things on Spotify"
                src="https://open.spotify.com/embed/playlist/2l4YUpAEfKwN8IJsKLgYOY?utm_source=generator"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
              <DrumKit />
            </section>

            <p className="about-colophon">
              Set in Geist. Designed and built by Danylo with Next.js.
              <br />
              Last updated October 2026
            </p>
          </div>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DrumKit } from '@/components/home/DrumKit';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Danylo Ivanov, product designer in Kyiv: how he works, and the drums, songs, books and manga outside of design.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="about-hero">
          <div className="wrap about-hero-grid">
            <div>
              <h1 className="about-title">Hey, I&rsquo;m Danylo.</h1>
              <div className="about-copy">
                <p>
                  I&rsquo;m a Product Designer who solves real problems for real people. I start with data —
                  what&rsquo;s actually happening — before I move. Then I talk to users, learn what they need, and
                  build something that matters.
                </p>
                <p>
                  Outside of design, I play drums and write my own songs. I spend a lot of time with the people who
                  matter to me. I read constantly — books, manga, whatever pulls me in. I cook, watch anime, build
                  things. It&rsquo;s how I stay sane.
                </p>
                <p className="about-copy-last">I notice things. I ask questions. I care about getting it right.</p>
              </div>
            </div>
            <div className="about-photo">
              <Image
                src="/images/about me.png"
                alt="Danylo holding a pizza at a restaurant in Kyiv"
                width={2706}
                height={2075}
                sizes="(max-width: 768px) calc(100vw - 32px), 440px"
                preload
              />
              <span className="about-photo-caption">Off the clock, Kyiv</span>
            </div>
          </div>
        </section>

        <section className="section" aria-label="Outside of design">
          <div className="wrap about-extras">
            <DrumKit />
            <div className="about-playlist">
              <p className="about-playlist-title">On repeat</p>
              <p className="about-playlist-hint">My go-to playlist for building things</p>
              <iframe
                title="Danylo’s go-to playlist for building things on Spotify"
                src="https://open.spotify.com/embed/playlist/2l4YUpAEfKwN8IJsKLgYOY?utm_source=generator"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

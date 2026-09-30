import Link from 'next/link';
import Image from 'next/image';
import '@/styles/work-motion.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { GooeyTextReveal } from '@/components/ui/gooey-text-reveal';
import { WorkCard } from '@/components/home/WorkCard';
import { NdaCard } from '@/components/home/NdaCard';
import { NDA_WORK, WORK_ORDER, getProject } from '@/lib/projects';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        {/* Headline left, intro right on the headline's baseline: the two-column grid the work below follows */}
        <section className="hero">
          <div className="wrap wrap--wide hero-grid">
            {/* deepSlice off: the photo pill sits inside the first line and must stay whole */}
            <GooeyTextReveal deepSlice={false} delay={0.15} duration={1.9} stagger={0.16}>
              <h1 className="hero-title">
                <span className="hero-phrase">
                  Creative mind,{' '}
                  <span className="hero-pill">
                    <Image src="/images/pfp3d.png" alt="" width={3920} height={3920} sizes="180px" preload />
                  </span>
                </span>{' '}
                <span className="hero-phrase">product brain.</span>
              </h1>
            </GooeyTextReveal>
            <FadeInMount delay={0.7}>
              <p className="hero-lede">
                <strong>Hi, I&rsquo;m Danik.</strong> I design apps people pay for and come back to, right now at
                Lyxonn in Kyiv. Off the clock I play drums, write songs and read way too much manga.{' '}
                <Link href="/about">More about me</Link>
              </p>
            </FadeInMount>
          </div>
        </section>

        {/* WORK */}
        <section id="projects" className="section work-section" aria-label="Selected work">
          <div className="wrap wrap--wide">
            <div className="work-grid">
              {WORK_ORDER.map((item) =>
                item.kind === 'project' ? (
                  <FadeIn key={item.slug}>
                    <WorkCard project={getProject(item.slug)} />
                  </FadeIn>
                ) : (
                  <FadeIn key={item.key}>
                    <NdaCard work={NDA_WORK[item.key]} />
                  </FadeIn>
                ),
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

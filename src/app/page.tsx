import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { GooeyTextReveal } from '@/components/ui/gooey-text-reveal';
import { WorkCard, UpcomingCard } from '@/components/home/WorkCard';
import { CopyEmail } from '@/components/CopyEmail';
import { PROJECTS } from '@/lib/projects';
import { RESUME_URL } from '@/lib/site';

const EXPERIENCE = [
  { company: 'Lyxonn', role: 'Product Designer', type: 'Full-time', period: 'Sep 2025 – Present' },
  { company: 'Cake Alliance', role: 'UX/UI Designer', type: 'Full-time', period: 'Jul 2024 – Sep 2025' },
  { company: 'GudFood Vdoma', role: 'Product Designer', type: 'Freelance', period: 'Sep – Nov 2024', caseStudy: '/gudfood' },
  { company: 'SKVOT', role: 'UX/UI Designer', type: 'Full-time', period: 'Feb – May 2024', caseStudy: '/skvot' },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            {/* deepSlice off: the nowrap phrases never span lines, so SplitText mustn't slice them */}
            <GooeyTextReveal deepSlice={false} delay={0.15} duration={1.9} stagger={0.16}>
              <h1 className="hero-title">
                I design apps people <span className="nowrap">pay for</span> and{' '}
                <span className="nowrap">come back to.</span>
              </h1>
            </GooeyTextReveal>
            <FadeInMount delay={0.7}>
              <p className="hero-lede">
                Product designer at Lyxonn, based in Kyiv. Mostly mobile: onboarding, payments, KYC and paywalls.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={RESUME_URL} target="_blank" rel="noreferrer noopener">
                  View resume
                  <ArrowUpRight size={16} strokeWidth={2} aria-hidden />
                </a>
                <CopyEmail className="btn btn-secondary btn-copy" />
              </div>
            </FadeInMount>
          </div>
        </section>

        {/* WORK */}
        <section id="projects" className="section" aria-labelledby="work-title">
          <div className="wrap">
            <h2 id="work-title" className="section-title">
              Selected work
            </h2>
            <div className="work-grid">
              {PROJECTS.map((project, i) => (
                <FadeIn key={project.slug} delay={i % 2 ? 0.08 : 0}>
                  <WorkCard project={project} />
                </FadeIn>
              ))}
              <FadeIn delay={0.08}>
                <UpcomingCard />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title" className="section-title">
              Experience
            </h2>
            <FadeIn>
              <ol className="xp-list">
                {EXPERIENCE.map((job) => (
                  <li key={job.company} className="xp-row">
                    <h3 className="xp-org">{job.company}</h3>
                    <p className="xp-role">
                      {job.role} <span>· {job.type}</span>
                      {job.caseStudy && (
                        <Link className="xp-case" href={job.caseStudy}>
                          Case study
                        </Link>
                      )}
                    </p>
                    <p className="xp-when">{job.period}</p>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section" aria-labelledby="about-title">
          <div className="wrap">
            <FadeIn>
              <div className="about-grid">
                <div className="about-copy">
                  <h2 id="about-title" className="section-title">
                    Hey, I&rsquo;m Danylo.
                  </h2>
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
                  <p>I notice things. I ask questions. I care about getting it right.</p>
                  <div className="about-spotify">
                    <p className="about-spotify-label">My go-to playlist for building things</p>
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
                <div className="about-photo-wrap">
                  <div className="about-photo">
                    <Image
                      src="/images/about me.png"
                      alt="Danylo holding a pizza at a restaurant in Kyiv"
                      width={2706}
                      height={2075}
                      sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1264px) 48vw, 568px"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

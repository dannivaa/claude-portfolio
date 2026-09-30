import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { HeroTitle } from '@/components/home/HeroTitle';
import { WorkCard, UpcomingCard } from '@/components/home/WorkCard';
import { KyivTime } from '@/components/KyivTime';
import { PROJECTS } from '@/lib/projects';
import { RESUME_URL } from '@/lib/site';

const EXPERIENCE = [
  {
    company: 'Lyxonn',
    period: 'Sep 2025 – Present',
    role: 'Product Designer',
    type: 'Full-time',
    scope: ['Mobile & Web Design', 'Conversion Optimization', 'UX Research', 'Usability Testing', 'UX Architecture', 'Payments & KYC Flows', 'Design Systems', 'Hypothesis Validation'],
  },
  {
    company: 'Cake Alliance',
    period: 'Jul 2024 – Sep 2025',
    role: 'UX/UI Designer',
    type: 'Full-time',
    scope: ['Mobile-first UI Design', 'Responsive Interfaces', 'Design Systems', 'User Research', 'Competitive Analysis', 'Usability Testing', 'Product Collaboration', 'Developer Handoff'],
  },
  {
    company: 'GudFood Vdoma',
    period: 'Sep – Nov 2024',
    role: 'Product Designer',
    type: 'Freelance',
    scope: ['UX Research', 'Stakeholder Interviews', 'Hypothesis Generation', 'UI Redesign', 'Prototyping'],
    caseStudy: '/gudfood',
  },
  {
    company: 'SKVOT',
    period: 'Feb – May 2024',
    role: 'UX/UI Designer',
    type: 'Full-time',
    scope: ['End-to-end UX/UI', 'Mobile User Flows', 'Wireframing', 'High-fidelity UI', 'Interactive Prototypes', 'Onboarding Design', 'Usability Testing'],
    caseStudy: '/skvot',
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="shell">
            <FadeInMount delay={0.05}>
              <div className="hero-kicker">
                <span className="hero-kicker-photo">
                  <Image src="/images/pfp3d.png" alt="Portrait of Danylo Ivanov" width={3920} height={3920} sizes="48px" loading="eager" />
                </span>
                <span className="hero-kicker-text">
                  <span className="hero-kicker-name">Danylo Ivanov</span>
                  <span className="hero-kicker-role">Product Designer in Kyiv, Ukraine</span>
                </span>
              </div>
            </FadeInMount>

            <HeroTitle />

            <FadeInMount delay={0.75}>
              <div className="hero-foot">
                <p className="hero-lede">
                  I start with the data, talk to the people behind it, and design the flows where products win or
                  lose users — onboarding, payments, KYC and paywalls.
                </p>
                <div className="hero-actions">
                  <Link className="btn btn-primary" href="/contact">
                    Let&apos;s talk
                    <ArrowRight size={16} strokeWidth={2} aria-hidden />
                  </Link>
                  <a className="btn btn-ghost" href={RESUME_URL} target="_blank" rel="noreferrer noopener">
                    View resume
                    <ArrowUpRight size={15} strokeWidth={2} aria-hidden />
                  </a>
                </div>
              </div>
            </FadeInMount>

            <FadeInMount delay={0.9}>
              <dl className="hero-meta">
                <div>
                  <dt>Now</dt>
                  <dd>Product Designer at Lyxonn</dd>
                </div>
                <div>
                  <dt>Before</dt>
                  <dd>Cake Alliance, GudFood Vdoma, SKVOT</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>Mobile products, conversion, retention</dd>
                </div>
                <div>
                  <dt>Based in</dt>
                  <dd>
                    Kyiv, Ukraine
                    <KyivTime className="hero-time" />
                  </dd>
                </div>
              </dl>
            </FadeInMount>
          </div>
        </section>

        {/* WORK */}
        <section id="projects" className="section" aria-labelledby="work-title">
          <div className="shell">
            <FadeIn>
              <div className="sec-head">
                <div>
                  <p className="kicker">
                    <span className="kicker-index">01</span>Work
                  </p>
                  <h2 id="work-title" className="sec-title">
                    Selected case studies
                  </h2>
                </div>
                <p className="sec-aside">
                  Each one starts with a business problem and ends with the metric it&rsquo;s meant to move.
                </p>
              </div>
            </FadeIn>

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
          <div className="shell">
            <FadeIn>
              <div className="sec-head">
                <div>
                  <p className="kicker">
                    <span className="kicker-index">02</span>Experience
                  </p>
                  <h2 id="experience-title" className="sec-title">
                    Where I&rsquo;ve worked
                  </h2>
                </div>
                <div className="sec-aside">
                  <p>Full-time and freelance roles, from 0→1 apps to conversion work on live products.</p>
                  <a className="text-link" href={RESUME_URL} target="_blank" rel="noreferrer noopener">
                    Full resume
                    <ArrowUpRight size={15} strokeWidth={2} aria-hidden />
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <ol className="xp-list">
                {EXPERIENCE.map((job) => (
                  <li key={job.company} className="xp-row">
                    <p className="xp-when">{job.period}</p>
                    <h3 className="xp-org">{job.company}</h3>
                    <div className="xp-detail">
                      <p className="xp-role">
                        {job.role}
                        <span className="xp-type">{job.type}</span>
                        {job.caseStudy && (
                          <Link className="text-link xp-case" href={job.caseStudy}>
                            Case study
                            <ArrowUpRight size={14} strokeWidth={2} aria-hidden />
                          </Link>
                        )}
                      </p>
                      <ul className="xp-scope" aria-label={`Scope at ${job.company}`}>
                        {job.scope.map((item) => (
                          <li key={item} className="chip">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section" aria-labelledby="about-title">
          <div className="shell">
            <FadeIn>
              <div className="sec-head">
                <div>
                  <p className="kicker">
                    <span className="kicker-index">03</span>About
                  </p>
                  <h2 id="about-title" className="sec-title">
                    Hey, I&rsquo;m Danylo.
                  </h2>
                </div>
              </div>
            </FadeIn>

            <div className="about-grid">
              <FadeIn className="about-photo-wrap">
                <div className="about-photo">
                  <Image
                    src="/images/about me.png"
                    alt="Danylo holding a pizza at a tiled Kyiv restaurant"
                    width={2706}
                    height={2075}
                    sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1328px) 44vw, 540px"
                  />
                </div>
              </FadeIn>

              <FadeIn className="about-copy">
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
                <p className="about-quote">I notice things. I ask questions. I care about getting it right.</p>
              </FadeIn>

              <FadeIn className="about-details" delay={0.08}>
                <dl className="about-facts">
                  <div>
                    <dt>Based in</dt>
                    <dd>Kyiv, Ukraine</dd>
                  </div>
                  <div>
                    <dt>Now</dt>
                    <dd>Product Designer at Lyxonn</dd>
                  </div>
                  <div>
                    <dt>Off the clock</dt>
                    <dd>Drums, songwriting, manga, anime, cooking</dd>
                  </div>
                </dl>
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
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

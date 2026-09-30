import Link from 'next/link';
import Image from 'next/image';
import '@/styles/work-motion.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { GooeyTextReveal } from '@/components/ui/gooey-text-reveal';
import { WorkCard } from '@/components/home/WorkCard';
import { PROJECTS } from '@/lib/projects';

/** Months are counted from Feb 2024, the left edge of the timeline; "now" is its right edge. */
const TIMELINE_MONTHS = 32;
const YEAR_MARKS = [
  { label: '2024', month: 0 },
  { label: '2025', month: 11 },
  { label: '2026', month: 23 },
];

const EXPERIENCE = [
  {
    company: 'Lyxonn',
    role: 'Product Designer',
    type: 'Full-time',
    period: 'Sep 2025 – Present',
    from: 19,
    to: TIMELINE_MONTHS,
    current: true,
  },
  {
    company: 'Cake Alliance',
    role: 'UX/UI Designer',
    type: 'Full-time',
    period: 'Jul 2024 – Sep 2025',
    from: 5,
    to: 20,
  },
  {
    company: 'GudFood Vdoma',
    role: 'Product Designer',
    type: 'Freelance',
    period: 'Sep – Nov 2024',
    caseStudy: '/gudfood',
    from: 7,
    to: 10,
  },
  {
    company: 'SKVOT',
    role: 'UX/UI Designer',
    type: 'Full-time',
    period: 'Feb – May 2024',
    caseStudy: '/skvot',
    from: 0,
    to: 3.5,
  },
];

const pct = (month: number) => `${(month / TIMELINE_MONTHS) * 100}%`;

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
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
        <section id="projects" className="section" aria-label="Selected work">
          <div className="wrap">
            <div className="work-grid">
              {PROJECTS.map((project) => (
                <FadeIn key={project.slug}>
                  <WorkCard project={project} />
                </FadeIn>
              ))}
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
              {/* Desktop: roles as bars on a Feb 2024 → now axis, scaled to their real length */}
              <div className="xp-timeline">
                {/* Year gridlines share the lanes' inset, so bars and years line up */}
                <div className="xp-axis" aria-hidden="true">
                  {YEAR_MARKS.map((mark) => (
                    <span key={mark.label} className="xp-year" style={{ left: pct(mark.month) }}>
                      {mark.label}
                    </span>
                  ))}
                  <span className="xp-now">Now</span>
                </div>
                <ol className="xp-lanes">
                  {EXPERIENCE.map((job) => {
                    // Lanes that start past the midpoint hang their label off the bar's end so it can't overflow
                    const late = job.from > TIMELINE_MONTHS / 2;
                    return (
                      <li key={job.company} className={`xp-lane${late ? ' xp-lane--end' : ''}`}>
                        <p className="xp-label" style={late ? undefined : { marginLeft: pct(job.from) }}>
                          <span className="xp-label-org">{job.company}</span>
                          <span className="xp-label-meta">
                            {job.role} · {job.type} · {job.period}
                          </span>
                          {job.caseStudy && (
                            <Link className="xp-case" href={job.caseStudy}>
                              Case study
                            </Link>
                          )}
                        </p>
                        <span
                          className={`xp-bar${job.current ? ' xp-bar--current' : ''}`}
                          style={{ left: pct(job.from), width: pct(job.to - job.from) }}
                          aria-hidden="true"
                        />
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Tablet and mobile: the same roles as a list */}
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
      </main>

      <Footer />
    </>
  );
}

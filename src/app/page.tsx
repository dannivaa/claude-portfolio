import Link from 'next/link';
import Image from 'next/image';
import '@/styles/work-motion.css';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { WorkCard } from '@/components/home/WorkCard';
import { NdaCard } from '@/components/home/NdaCard';
import { NDA_WORK, WORK_ORDER, getProject } from '@/lib/projects';

type Job = { company: string; role: string; type: string; period: string; caseStudy?: string };

/** Current roles are grouped apart from past work. */
const EXPERIENCE: { label: string; current?: boolean; jobs: Job[] }[] = [
  {
    label: 'Now',
    current: true,
    jobs: [
      { company: 'Homecrowd', role: 'Product Designer', type: 'Full-time', period: 'Sep 2026 – Now' },
      { company: 'Lyxonn', role: 'Product Designer', type: 'Part-time', period: 'Sep 2025 – Now' },
    ],
  },
  {
    label: 'Before',
    jobs: [
      { company: 'Cake Alliance', role: 'UX/UI Designer', type: 'Full-time', period: 'Jul 2024 – Sep 2025' },
      { company: 'GudFood Vdoma', role: 'UX/UI Designer', type: 'Freelance', period: 'Sep – Nov 2024', caseStudy: '/gudfood' },
      { company: 'Skvot', role: 'UX/UI Designer', type: 'Freelance', period: 'Feb – May 2024', caseStudy: '/skvot' },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <main>
          {/* HERO */}
          {/* Headline left, intro right on the headline's baseline: the two-column grid the work below follows */}
          <section className="hero">
            <div className="wrap wrap--wide hero-grid">
              <h1 className="hero-title">
                <span className="hero-phrase">
                  Creative mind,{' '}
                  <span className="hero-pill">
                    <Image src="/images/pfp3d.png" alt="" width={3920} height={3920} sizes="180px" preload />
                  </span>
                </span>{' '}
                <span className="hero-phrase">product brain.</span>
              </h1>
              <p className="hero-lede">
                <strong>Hi, I&rsquo;m Danik.</strong> I design apps people pay for and come back to, right now at
                Homecrowd and Lyxonn. Off the clock I play drums, write songs and read way too much manga.{' '}
                <Link href="/about">More about me</Link>
              </p>
            </div>
          </section>

          {/* WORK */}
          <section id="projects" className="section work-section" aria-label="Selected work">
            <div className="wrap wrap--wide">
              <div className="work-grid">
                {WORK_ORDER.map((item) =>
                  item.kind === 'project' ? (
                    <WorkCard key={item.slug} project={getProject(item.slug)} />
                  ) : (
                    <NdaCard key={item.key} work={NDA_WORK[item.key]} />
                  ),
                )}
              </div>
            </div>
          </section>

          {/* EXPERIENCE: one ruled line per role, the way the work grid captions read */}
          <section id="experience" className="section" aria-labelledby="experience-title">
            <div className="wrap wrap--wide">
              <h2 id="experience-title" className="section-title">
                Experience
              </h2>
              {EXPERIENCE.map((group) => (
                <div key={group.label} className={`xp-group${group.current ? ' xp-group--now' : ''}`}>
                  <p className="xp-group-label">
                    {group.current && <span className="xp-live" aria-hidden="true" />}
                    {group.label}
                  </p>
                  <ol className="xp-list">
                    {group.jobs.map((job) => (
                      <li key={job.company} className="xp-row">
                        <p className="xp-when">{job.period}</p>
                        <h3 className="xp-org">{job.company}</h3>
                        <p className="xp-role">
                          {job.role} <span>· {job.type}</span>
                        </p>
                        {job.caseStudy ? (
                          <Link className="xp-case" href={job.caseStudy}>
                            Case study
                          </Link>
                        ) : (
                          <span className="xp-case xp-case--none">Under NDA</span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

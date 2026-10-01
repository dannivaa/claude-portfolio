import Link from 'next/link';
import '@/styles/work-motion.css';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { WorkCard } from '@/components/home/WorkCard';
import { NdaCard } from '@/components/home/NdaCard';
import { NDA_WORK, WORK_ORDER, getProject } from '@/lib/projects';

type Job = { company: string; role: string; type: string; period: string; caseStudy?: string };

/** Years only: the list shows the path, not who I'm working for right now. */
const EXPERIENCE: Job[] = [
  { company: 'Homecrowd', role: 'Product Designer', type: 'Full-time', period: '2026' },
  { company: 'Lyxonn', role: 'Product Designer', type: 'Part-time', period: '2025 – 2026', caseStudy: '/lyxonn' },
  { company: 'Cake Alliance', role: 'UX/UI Designer', type: 'Full-time', period: '2024 – 2025' },
  { company: 'GudFood Vdoma', role: 'UX/UI Designer', type: 'Freelance', period: '2024', caseStudy: '/gudfood' },
  { company: 'Skvot', role: 'UX/UI Designer', type: 'Freelance', period: '2024', caseStudy: '/skvot' },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <main>
          {/* HERO */}
          {/* Headline left, intro right on its baseline: the two-column grid the work below follows */}
          <section className="hero">
            <div className="wrap wrap--wide hero-grid">
              <h1 className="hero-title">
                <span className="hero-line">Creative mind,</span>
                <span className="hero-line">product brain.</span>
              </h1>
              <p className="hero-lede">
                <strong>Hi, I&rsquo;m Danik, and I just love making things.</strong> By day I&rsquo;m a product designer.
                After hours I build my own mobile apps and side projects, write songs and play a lot of drums.
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
              <ol className="xp-list">
                {EXPERIENCE.map((job) => (
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
          </section>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

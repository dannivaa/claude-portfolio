import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { WorkCard } from '@/components/home/WorkCard';
import { PROJECTS } from '@/lib/projects';

/** field: what the company does, so a recruiter knows the domain without looking it up. */
type Job = { company: string; field: string; role: string; type: string; period: string };

/** Matches the CV and LinkedIn role for role: a mismatch reads as hiding something. */
const EXPERIENCE: Job[] = [
  { company: 'Lyxonn', field: 'Crypto & fintech', role: 'Product Designer', type: 'Part-time', period: '2025 – Present' },
  { company: 'Cake Alliance', field: 'Digital agency', role: 'UX/UI Designer', type: 'Full-time', period: '2024 – 2025' },
  { company: 'GudFood Vdoma', field: 'Food delivery', role: 'UX/UI Designer', type: 'Freelance', period: '2024' },
  { company: 'Skvot', field: 'Edtech', role: 'UX/UI Designer', type: 'Freelance', period: '2024' },
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
                <span className="hero-line">I&rsquo;m Danylo,</span>
                <span className="hero-line">a product designer</span>
                <span className="hero-line">obsessed with craft.</span>
              </h1>
              <p className="hero-lede">
                <strong>I use AI to move faster</strong> on research synthesis, prototypes and specs, so more of my time
                goes into the details that actually ship. After hours I build my own apps, write songs and play a lot of&nbsp;drums.
              </p>
            </div>
          </section>

          {/* WORK */}
          <section id="projects" className="section work-section" aria-label="Selected work">
            <div className="wrap wrap--wide">
              <div className="work-grid">
                {PROJECTS.map((project) => (
                  <WorkCard key={project.slug} project={project} />
                ))}
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
                    <h3 className="xp-org">
                      {job.company} <span>· {job.field}</span>
                    </h3>
                    <p className="xp-role">
                      {job.role} <span>· {job.type}</span>
                    </p>
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

import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { WorkCard } from '@/components/home/WorkCard';
import { PROJECTS } from '@/lib/projects';

type Job = { company: string; role: string; type: string; period: string };

/** Years only: the list shows the path, not who I'm working for right now. */
const EXPERIENCE: Job[] = [
  { company: 'Homecrowd', role: 'Product Designer', type: 'Full-time', period: '2026' },
  { company: 'Lyxonn', role: 'Product Designer', type: 'Part-time', period: '2025 – 2026' },
  { company: 'Cake Alliance', role: 'UX/UI Designer', type: 'Full-time', period: '2024 – 2025' },
  { company: 'GudFood Vdoma', role: 'UX/UI Designer', type: 'Freelance', period: '2024' },
  { company: 'Skvot', role: 'UX/UI Designer', type: 'Freelance', period: '2024' },
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
                <strong>Monotone tasks kill my drive, and my creative work goes with&nbsp;it.</strong> I hand the manual,
                repetitive parts to AI, which leaves more room for creativity and craft. After hours I build my own apps,
                write songs and play a lot of drums.
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
                    <h3 className="xp-org">{job.company}</h3>
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

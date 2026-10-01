import '@/styles/work-motion.css';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { WorkCard } from '@/components/home/WorkCard';
import { PROJECTS } from '@/lib/projects';

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
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

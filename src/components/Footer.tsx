import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { CopyEmail } from '@/components/CopyEmail';
import { ConnectBar } from '@/components/ConnectBar';
import { EMAIL, RESUME_URL } from '@/lib/site';

export default function Footer({ cta = true }: { cta?: boolean }) {
  return (
    <footer className="site-footer">
      {cta && (
        <section className="section" aria-labelledby="footer-cta-title">
          <div className="shell">
            <FadeIn>
              <p className="kicker">Contact</p>
              <h2 id="footer-cta-title" className="footer-cta-title">
                Let&rsquo;s build something people <em>come back to</em>.
              </h2>
              <div className="footer-cta-row">
                <p className="footer-cta-lede">
                  Hiring, building something new, or just want to talk shop? My inbox is open.
                </p>
                <div className="footer-cta-actions">
                  <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
                    Email me
                    <ArrowRight size={16} strokeWidth={2} aria-hidden />
                  </a>
                  <CopyEmail />
                  <a className="btn btn-ghost" href={RESUME_URL} target="_blank" rel="noreferrer noopener">
                    Resume
                    <ArrowUpRight size={15} strokeWidth={2} aria-hidden />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <div className="shell footer-bottom">
        <ConnectBar />
        <div className="footer-colophon">
          <span>&copy; {new Date().getFullYear()} Danylo Ivanov</span>
          <span>Designed and built in Kyiv &middot; Set in Fixel and Newsreader</span>
        </div>
      </div>
    </footer>
  );
}

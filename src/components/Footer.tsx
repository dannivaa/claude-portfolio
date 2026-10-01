import { ArrowUpRight } from 'lucide-react';
import { ConnectBar } from '@/components/ConnectBar';
import { CopyEmail } from '@/components/CopyEmail';
import { EMAIL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap wrap--wide">
        {/* Sign-off: the email is the one thing a visitor needs at the end of the page */}
        <div className="footer-signoff">
          <p className="footer-kicker">Got something worth building? Say hi.</p>
          <div className="footer-mail">
            <a className="footer-email" href={`mailto:${EMAIL}`}>
              {EMAIL}
              <ArrowUpRight className="footer-email-arrow" strokeWidth={1.75} aria-hidden />
            </a>
            <CopyEmail className="btn btn-secondary btn-copy footer-copy" compact />
          </div>
        </div>
        <ConnectBar />
      </div>
    </footer>
  );
}

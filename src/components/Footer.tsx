import { ConnectBar } from '@/components/ConnectBar';
import { Link001 } from '@/components/ui/skiper-ui/skiper40';
import { EMAIL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap wrap--wide">
        {/* Sign-off: the email is the one thing a visitor needs at the end of the page */}
        <div className="footer-signoff">
          <p className="footer-kicker">Got something worth building? Say hi.</p>
          <Link001 href={`mailto:${EMAIL}`} target="_self" className="footer-email">
            {EMAIL}
          </Link001>
        </div>
        <ConnectBar />
      </div>
    </footer>
  );
}

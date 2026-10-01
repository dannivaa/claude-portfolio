import { ConnectBar } from '@/components/ConnectBar';
import { Link001 } from '@/components/ui/skiper-ui/skiper40';
import { EMAIL } from '@/lib/site';

/** Site footer. The home page drops the email sign-off and keeps only the links bar. */
export default function Footer({ signoff = true }: { signoff?: boolean }) {
  return (
    <footer className={signoff ? 'site-footer' : 'site-footer site-footer--bare'}>
      <div className="wrap wrap--wide">
        {/* Sign-off: the email is the one thing a visitor needs at the end of the page */}
        {signoff && (
          <div className="footer-signoff">
            <p className="footer-kicker">Got something worth building? Say hi.</p>
            <Link001 href={`mailto:${EMAIL}`} target="_self" className="footer-email">
              {EMAIL}
            </Link001>
          </div>
        )}
        <ConnectBar />
      </div>
    </footer>
  );
}

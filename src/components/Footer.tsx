import { FadeIn } from '@/components/ui/fade-in';
import { ConnectBar } from '@/components/ConnectBar';

export default function Footer() {
  return (
    <FadeIn>
      <footer className="site-footer">
        <div className="wrap">
          <ConnectBar />
        </div>
      </footer>
    </FadeIn>
  );
}

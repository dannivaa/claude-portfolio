import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="nf-main">
        <div className="shell">
          <p className="kicker">404</p>
          <h1 className="nf-title">
            Nothing here, <em>yet</em>.
          </h1>
          <p className="nf-copy">This page doesn&rsquo;t exist. The case studies do — they&rsquo;re a click away.</p>
          <div>
            <Link className="btn btn-primary" href="/#projects">
              <ArrowLeft size={16} strokeWidth={2} aria-hidden />
              Back to the work
            </Link>
          </div>
        </div>
      </main>
      <Footer cta={false} />
    </>
  );
}

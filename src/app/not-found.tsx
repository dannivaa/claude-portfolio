import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="nf-main">
          <div className="wrap">
            <h1 className="nf-title">Page not found</h1>
            <p className="nf-copy">This page doesn&rsquo;t exist, but the case studies do.</p>
            <div>
              <Link className="btn btn-primary" href="/#projects">
                <ArrowLeft size={16} strokeWidth={2} aria-hidden />
                Back to the work
              </Link>
            </div>
          </div>
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}

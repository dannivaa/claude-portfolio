import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'SKVOT Mobile App | Danylo Ivanov',
};

export default function SkvotCaseStudy() {
  return (
    <>
      <Navbar variant="case-study" />

      <main className="cs-main">

        {/* HERO */}
        <section className="cs-hero">
          <div className="cs-hero-inner">

            <div className="cs-hero-title-area">
              <p className="cs-project-name">Skvot</p>
              <h1 className="cs-title">A bridge between student and lecturer</h1>
            </div>

            <div className="cs-hero-content">

              {/* Left: Problem / Solution / Result */}
              <div className="cs-text-sections">
                <div className="cs-text-section">
                  <h3 className="cs-section-heading">Problem</h3>
                  <p className="cs-section-body">The web platform had outdated flows and no mobile app — neither did any competitor. Students relied on Telegram and email to communicate with lecturers. There was no native mobile solution in the market.</p>
                </div>
                <div className="cs-text-section">
                  <h3 className="cs-section-heading">Solution</h3>
                  <p className="cs-section-body">A 4-tab native app shaped entirely by research: a weekly schedule and content feed, a full culture library, a My Courses hub with grades and instructor feedback, and a direct chat replacing Telegram.</p>
                </div>
                <div className="cs-text-section">
                  <h3 className="cs-section-heading">Result</h3>
                  <p className="cs-section-body">0→1 concept delivered in 4 weeks. The research-driven decision to cut homework submission for students and keep lecturer grading is the strongest proof of product thinking — building the right thing, not just the obvious thing.</p>
                </div>
              </div>

              {/* Right: Metadata card */}
              <div className="cs-meta-card">
                <div className="cs-meta-row">
                  <span className="cs-meta-label">Role</span>
                  <div className="cs-meta-values">
                    <span>UX/UI Designer (Mobile) — Solo</span>
                  </div>
                </div>
                <div className="cs-meta-divider"></div>
                <div className="cs-meta-row">
                  <span className="cs-meta-label">Team</span>
                  <span className="cs-meta-value">1 Designer, 1 Mentor</span>
                </div>
                <div className="cs-meta-divider"></div>
                <div className="cs-meta-row">
                  <span className="cs-meta-label">Timeline</span>
                  <span className="cs-meta-value">Mar — Apr 2024</span>
                </div>
                <div className="cs-meta-divider"></div>
                <div className="cs-meta-row">
                  <span className="cs-meta-label">Scope</span>
                  <div className="cs-meta-scope">
                    <div className="cs-meta-scope-col">
                      <span>UX Research</span>
                      <span>Competitor Analysis</span>
                      <span>Wireframing</span>
                    </div>
                    <div className="cs-meta-scope-col">
                      <span>UI Design</span>
                      <span>Prototyping</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="cs-gallery">
          <div className="cs-gallery-inner">
            <div className="cs-image-card">
              <img src="https://www.figma.com/api/mcp/asset/43035999-dece-4aee-8afe-6c5fc076e241" alt="" />
            </div>
            <div className="cs-image-card">
              <img src="https://www.figma.com/api/mcp/asset/cdb32618-d3b5-41c5-90e2-bb8f2ae53868" alt="" />
            </div>
            <div className="cs-image-card">
              <img src="https://www.figma.com/api/mcp/asset/55088ca6-6199-494e-80f4-ef531af7636f" alt="" />
            </div>
            <div className="cs-image-card">
              <img src="https://www.figma.com/api/mcp/asset/a5e3450b-3cf8-4764-a62a-0b5c4e0464a9" alt="" />
            </div>
            <div className="cs-image-card">
              <img src="https://www.figma.com/api/mcp/asset/e86241f9-eb17-4689-a536-da44a33a15b0" alt="" />
            </div>
            <div className="cs-image-card">
              <img src="https://www.figma.com/api/mcp/asset/fd41f1ad-e7df-4940-bea6-d6b201655191" alt="" />
            </div>
            <div className="cs-image-card">
              <img src="https://www.figma.com/api/mcp/asset/2dc67a8e-6835-4078-85e3-27a7067ad747" alt="" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cs-cta-wrapper">
          <div className="cs-cta-inner">
            <div className="cs-cta-badge">
              <span className="cs-cta-dot"></span>
              Available to work with you
            </div>
            <h2 className="cs-cta-title">Let&apos;s design next one together</h2>
            <a href="#" className="cs-cta-btn">
              Let&apos;s talk
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

      </main>
    </>
  );
}

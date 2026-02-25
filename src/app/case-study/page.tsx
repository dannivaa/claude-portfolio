import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'GudFood Vdoma | Danylo Ivanov',
};

export default function CaseStudy() {
  return (
    <>
      <Navbar variant="case-study" />

      <main className="cs-main">

        {/* HERO */}
        <section className="cs-hero">
          <div className="cs-hero-inner">

            <div className="cs-hero-title-area">
              <p className="cs-project-name">GudFood Vdoma</p>
              <h1 className="cs-title">Designing for the second order</h1>
            </div>

            <div className="cs-hero-content">

              {/* Left: Problem / Solution / Result */}
              <div className="cs-text-sections">
                <div className="cs-text-section">
                  <h3 className="cs-section-heading">Problem</h3>
                  <p className="cs-section-body">Customers ordered once or twice and didn&apos;t return. The app had no feedback system — the team had zero structured data on why people left. The UI felt dated compared to Glovo and Bolt Food.</p>
                </div>
                <div className="cs-text-section">
                  <h3 className="cs-section-heading">Solution</h3>
                  <p className="cs-section-body">A closed-loop feedback system: post-order star ratings with quick-feedback tags, dish-level reviews that build social proof, and aggregated restaurant ratings that surface quality issues. Paired with a full UI refresh across all core screens.</p>
                </div>
                <div className="cs-text-section">
                  <h3 className="cs-section-heading">Result</h3>
                  <p className="cs-section-body">Concept validated by the GudFood Vdoma product team as aligned with their product roadmap.</p>
                </div>
              </div>

              {/* Right: Metadata card */}
              <div className="cs-meta-card">
                <div className="cs-meta-row">
                  <span className="cs-meta-label">Role</span>
                  <div className="cs-meta-values">
                    <span>Product Designer — Solo</span>
                  </div>
                </div>
                <div className="cs-meta-divider"></div>
                <div className="cs-meta-row">
                  <span className="cs-meta-label">Team</span>
                  <span className="cs-meta-value">1 Designer, 1 Mentor, GudFood stakeholders</span>
                </div>
                <div className="cs-meta-divider"></div>
                <div className="cs-meta-row">
                  <span className="cs-meta-label">Timeline</span>
                  <span className="cs-meta-value">Sep — Nov 2024</span>
                </div>
                <div className="cs-meta-divider"></div>
                <div className="cs-meta-row">
                  <span className="cs-meta-label">Scope</span>
                  <div className="cs-meta-scope">
                    <div className="cs-meta-scope-col">
                      <span>Stakeholder Interviews</span>
                      <span>UX Research</span>
                      <span>Hypothesis Generation</span>
                    </div>
                    <div className="cs-meta-scope-col">
                      <span>UI Redesign</span>
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

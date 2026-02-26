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
              <h1 className="cs-title">The loop that brought users back</h1>
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

            {/* Row 1: 3 phones – home screens before/after */}
            <div className="cs-image-card">
              <div className="cs-phones-row">
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/3589214e-d38e-4381-b297-1f1500ce950f" alt="" />
                </div>
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/675c55de-387e-4ef7-bd1a-3ac181639e71" alt="" />
                </div>
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/ecbb3086-e711-4457-adc9-e18164b2b3e6" alt="" />
                </div>
              </div>
            </div>

            {/* Row 2: 2 phones – restaurant & menu */}
            <div className="cs-image-card">
              <div className="cs-phones-row">
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/5fa0d034-3108-4539-b970-0a8026d2951a" alt="" />
                </div>
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/966c48c5-01a6-429c-86b1-a23915927525" alt="" />
                </div>
              </div>
            </div>

            {/* Row 3: 2 phones + 1 cropped – checkout flow, bottom-aligned */}
            <div className="cs-image-card">
              <div className="cs-phones-row cs-phones-row--bottom">
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/6633d117-29c7-4ea5-83a9-bdbb8ad0b3ed" alt="" />
                </div>
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/8732f21c-e843-4203-aa2e-a4ce5340b800" alt="" />
                </div>
                <div className="cs-phone-frame cs-phone-frame--short">
                  <img src="https://www.figma.com/api/mcp/asset/7dc84c95-106d-4cf5-a91c-91da0b879e27" alt="" />
                </div>
              </div>
            </div>

            {/* Row 4: 1 modal frame + 2 stacked UI cards */}
            <div className="cs-image-card">
              <div className="cs-phones-row">
                <div className="cs-screenshot-main">
                  <img src="https://www.figma.com/api/mcp/asset/94761692-eb78-4b9a-ae68-086e3f1742b1" alt="" />
                </div>
                <div className="cs-stacked-group">
                  <div className="cs-stacked-frame">
                    <img src="https://www.figma.com/api/mcp/asset/3360c133-0e8b-4128-a5f7-a7a333e1126c" alt="" />
                  </div>
                  <div className="cs-stacked-frame">
                    <img src="https://www.figma.com/api/mcp/asset/8c003d1e-1a55-40b8-a93a-5d33ebbd4de4" alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: 2 phones + 1 shorter – orders & history, bottom-aligned */}
            <div className="cs-image-card">
              <div className="cs-phones-row cs-phones-row--bottom">
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/c8c0af4d-7b11-411e-a298-55524a1d5f1d" alt="" />
                </div>
                <div className="cs-phone-frame">
                  <img src="https://www.figma.com/api/mcp/asset/f84a35ca-1d2a-4e04-afb2-6cbeb7a4b18d" alt="" />
                </div>
                <div className="cs-phone-frame cs-phone-frame--medium">
                  <img src="https://www.figma.com/api/mcp/asset/7fba1376-1138-4c0a-ae95-44754fbc9e9e" alt="" />
                </div>
              </div>
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

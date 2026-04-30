'use client';

import '@/styles/style.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { Component } from '@/components/ui/etheral-shadow';
import { MagicText } from '@/components/ui/magic-text';
import { FadeIn } from '@/components/ui/fade-in';
import { SplitText } from '@/components/ui/split-text';
import { useRouter } from 'next/navigation';
import { Cursor } from '@/components/ui/custom-cursor';
import ClickSpark from '@/components/ClickSpark';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar variant="home" />

      <main>
        <article>

        {/* HERO */}
        <section className="hero-wrapper">
          <div className="hero-card">
            <div className="hero-bg">
              <Component
                color="#4695C0"
                animation={{ scale: 0, speed: 0 }}
                noise={{ opacity: 1, scale: 1.2 }}
                sizing="fill"
              />
            </div>
            <p className="hero-headline">Product Designer crafting solutions that drive business wins.</p>
          </div>
        </section>

        {/* WORKED WITH */}
        <FadeIn className="worked-with">
          <span className="worked-with-label">I worked with:</span>

          {/* lyxonn */}
          <div style={{ height: '40px', width: '126.511px', position: 'relative', flexShrink: 0 }}>
            <img src="https://www.figma.com/api/mcp/asset/75fb4730-728d-4b65-ac52-c54ca9bab1d5" alt="lyxonn" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} />
          </div>

          {/* cake */}
          <div style={{ height: '40px', width: '77.871px', position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', top: 0, right: 0, bottom: '0.03%', left: 0,
              WebkitMaskImage: "url('https://www.figma.com/api/mcp/asset/27543362-3eda-499c-ad2a-7877243ed6ff')",
              maskImage: "url('https://www.figma.com/api/mcp/asset/27543362-3eda-499c-ad2a-7877243ed6ff')",
              maskSize: '77.871px 39.989px', maskRepeat: 'no-repeat', maskPosition: '0 0'
            }}>
              <img src="https://www.figma.com/api/mcp/asset/8cdce95c-d28b-4e31-81e4-40046d10bd35" alt="cake" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} />
            </div>
          </div>

          {/* gudfood */}
          <div style={{ height: '40px', width: '79.452px', position: 'relative', flexShrink: 0, overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '7.81%', right: '54.9%', bottom: '7.89%', left: '2.83%' }}><img src="https://www.figma.com/api/mcp/asset/fb21b04c-2cc0-4cb8-b520-43fb5ef1ff65" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '59.04%', right: '97.1%', bottom: '30.68%', left: '2.71%' }}><img src="https://www.figma.com/api/mcp/asset/b92d1d01-48a4-49b3-8eb6-da112afd0655" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '2.32%', right: '52.12%', bottom: '2.24%', left: '0.02%' }}><img src="https://www.figma.com/api/mcp/asset/e5a24fb3-94c1-401c-ad7f-3463b9a65959" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '28.49%', right: '81.98%', bottom: '47.4%', left: '12.14%' }}><img src="https://www.figma.com/api/mcp/asset/fbc8279f-d1f0-4e63-922b-24e9467ec3d5" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '7.67%', right: '75.66%', bottom: '84.93%', left: '20.28%' }}><img src="https://www.figma.com/api/mcp/asset/68ffe0a5-3a7a-483a-8a7a-37d9acb3ae25" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '9.18%', right: '65.93%', bottom: '78.63%', left: '29.45%' }}><img src="https://www.figma.com/api/mcp/asset/e5617987-ceee-493d-8c6e-8d0c7b8991cc" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '25.34%', right: '91.44%', bottom: '57.81%', left: '4.34%' }}><img src="https://www.figma.com/api/mcp/asset/9bac2d5c-842e-4a64-89f1-53c93a52f172" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '34.66%', right: '72.46%', bottom: '41.1%', left: '21.72%' }}><img src="https://www.figma.com/api/mcp/asset/f7996556-2c83-4bb0-b6df-03133232c895" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '40.82%', right: '62.88%', bottom: '34.93%', left: '31.31%' }}><img src="https://www.figma.com/api/mcp/asset/357b0b21-a659-4b50-b697-a909dcf326d0" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '49.73%', right: '54.9%', bottom: '26.03%', left: '39.66%' }}><img src="https://www.figma.com/api/mcp/asset/a8bbc202-708b-4434-9ac4-82c54aaf69eb" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '10.68%', right: '82.67%', bottom: '70.68%', left: '11.52%' }}><img src="https://www.figma.com/api/mcp/asset/d39af0c0-1d63-4248-9f14-f1da8ecc209e" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '11.51%', right: '73.08%', bottom: '64.38%', left: '21.1%' }}><img src="https://www.figma.com/api/mcp/asset/eee92281-6c83-47fc-9d53-74d415a0f0c0" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '17.67%', right: '63.51%', bottom: '58.08%', left: '30.69%' }}><img src="https://www.figma.com/api/mcp/asset/cdbbb40e-df63-406b-afd8-8f235518c172" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '28.9%', right: '55.79%', bottom: '51.92%', left: '39.66%' }}><img src="https://www.figma.com/api/mcp/asset/b27d2d0c-c944-4c27-8b68-e4647c87feee" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '68.49%', right: '90.82%', bottom: '14.11%', left: '4%' }}><img src="https://www.figma.com/api/mcp/asset/cfacd319-d627-4c71-a85f-00f7e98341d0" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '74.79%', right: '81.23%', bottom: '7.67%', left: '12.97%' }}><img src="https://www.figma.com/api/mcp/asset/e2da752c-113a-4e27-bb60-14bd642b9fbe" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '80.96%', right: '71.72%', bottom: '8.36%', left: '22.62%' }}><img src="https://www.figma.com/api/mcp/asset/19b7b3ef-fca9-40bd-bef9-8bd5a836bcef" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '45.34%', right: '91.44%', bottom: '30.55%', left: '2.76%' }}><img src="https://www.figma.com/api/mcp/asset/b4594ed3-0033-47e7-973d-6bd712f8ba11" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '51.51%', right: '81.91%', bottom: '24.25%', left: '12.28%' }}><img src="https://www.figma.com/api/mcp/asset/38c7465b-abbb-4835-9fea-ff5dfe6b9340" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '57.81%', right: '72.39%', bottom: '18.08%', left: '21.79%' }}><img src="https://www.figma.com/api/mcp/asset/96b9a163-f856-4f43-9cba-9a2f957eca7e" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '63.97%', right: '62.8%', bottom: '12.88%', left: '31.38%' }}><img src="https://www.figma.com/api/mcp/asset/3e10e359-20ff-4425-a35d-e00b84da5878" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
            <div style={{ position: 'absolute', top: '3.15%', right: 0, bottom: '3.42%', left: '37.38%' }}><img src="https://www.figma.com/api/mcp/asset/48a1d363-bd7a-4d23-881f-7d132f8673ce" alt="" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} /></div>
          </div>

          {/* SKVOT */}
          <div style={{ height: '40px', width: '113.746px', position: 'relative', flexShrink: 0 }}>
            <img src="https://www.figma.com/api/mcp/asset/e12c4a62-5247-4282-8fd7-641cd6cf43b7" alt="SKVOT" style={{ position: 'absolute', width: '100%', height: '100%', display: 'block' }} />
          </div>
        </FadeIn>

        {/* PROJECTS */}
        <section id="projects" className="projects-wrapper">
          <FadeIn>
          <div className="projects-section">
            <div className="project-cards">

              {/* Card: Safey */}
              <div className="card-default" onClick={() => router.push('/safey')} style={{ cursor: 'pointer' }}>
                <ClickSpark sparkColor="#228bcc" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
                  <Cursor name="Open Safey" cursorColor="#228bcc" style={{ borderRadius: 24 }}>
                    <div className="card-image">
                      <img src="/images/Safey/card-image-safey.png" alt="Safey AI Companion" />
                    </div>
                  </Cursor>
                </ClickSpark>
                <div className="card-footer">
                  <span className="card-title">Designing a monetization strategy for an AI companion app</span>
                </div>
              </div>

              {/* Card: GudFood */}
              <div className="card-default" onClick={() => router.push('/case-study')} style={{ cursor: 'pointer' }}>
                <ClickSpark sparkColor="#ea6406" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
                  <Cursor name="Open GudFood" cursorColor="#ea6406" style={{ borderRadius: 24 }}>
                    <div className="card-image">
                      <img src="/images/GudFood/card-image-gudfood.png" alt="The loop that brought users back" />
                    </div>
                  </Cursor>
                </ClickSpark>
                <div className="card-footer">
                  <span className="card-title">The loop that brought users back</span>
                </div>
              </div>

              {/* Card: SKVOT */}
              <div className="card-default" onClick={() => router.push('/skvot')} style={{ cursor: 'pointer' }}>
                <ClickSpark sparkColor="#121212" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
                  <Cursor name="Open Skvot" cursorColor="#121212" style={{ borderRadius: 24 }}>
                    <div className="card-image">
                      <img src="/images/Skvot/card-image-skvot.png" alt="SKVOT Mobile App" />
                    </div>
                  </Cursor>
                </ClickSpark>
                <div className="card-footer">
                  <span className="card-title">A bridge between student and lecturer</span>
                </div>
              </div>

              {/* Card: Soon */}
              <div className="card-soon">
                <ClickSpark sparkColor="#8a0dd7" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
                  <Cursor name="Gotta wait..." cursorColor="#8a0dd7" style={{ borderRadius: 24 }}>
                    <div className="card-image">
                      <img src="/images/card-image-comingsoon-v0.png" alt="One Behavioral Change, Measurable Impact" />
                    </div>
                  </Cursor>
                </ClickSpark>
                <div className="card-footer">
                  <span className="card-title">One Behavioral Change, Measurable Impact</span>
                  <div className="card-badge"><span>Case Study Soon</span></div>
                </div>
              </div>

            </div>
          </div>
          </FadeIn>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="experience-section">
          <FadeIn>
          <div className="experience-grid">

            {/* Card 1 */}
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-company">Lyxonn</div>
                <div className="exp-date">Sep 2025 – Present</div>
              </div>
              <div className="exp-rows">
                <div className="exp-row">
                  <span className="exp-label">Role</span>
                  <div className="exp-value">
                    <span className="exp-value-main">Product Designer</span>
                    <span className="exp-value-sub">Full-time</span>
                  </div>
                </div>
                <div className="exp-divider"></div>
                <div className="exp-row">
                  <span className="exp-label">Scope</span>
                  <div className="exp-scope-list">
                    <span className="exp-scope-item">Mobile & Web Design</span>
                    <span className="exp-scope-item">Conversion Optimization</span>
                    <span className="exp-scope-item">UX Research</span>
                    <span className="exp-scope-item">Usability Testing</span>
                    <span className="exp-scope-item">UX Architecture</span>
                    <span className="exp-scope-item">Payments & KYC Flows</span>
                    <span className="exp-scope-item">Design Systems</span>
                    <span className="exp-scope-item">Hypothesis Validation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-company">Cake Alliance</div>
                <div className="exp-date">Jul 2024 – Sep 2025</div>
              </div>
              <div className="exp-rows">
                <div className="exp-row">
                  <span className="exp-label">Role</span>
                  <div className="exp-value">
                    <span className="exp-value-main">UX/UI Designer</span>
                    <span className="exp-value-sub">Full-time</span>
                  </div>
                </div>
                <div className="exp-divider"></div>
                <div className="exp-row">
                  <span className="exp-label">Scope</span>
                  <div className="exp-scope-list">
                    <span className="exp-scope-item">Mobile-first UI Design</span>
                    <span className="exp-scope-item">Responsive Interfaces</span>
                    <span className="exp-scope-item">Design Systems</span>
                    <span className="exp-scope-item">User Research</span>
                    <span className="exp-scope-item">Competitive Analysis</span>
                    <span className="exp-scope-item">Usability Testing</span>
                    <span className="exp-scope-item">Product Collaboration</span>
                    <span className="exp-scope-item">Developer Handoff</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-company">GudFood Vdoma</div>
                <div className="exp-date">Sep – Nov 2024</div>
              </div>
              <div className="exp-rows">
                <div className="exp-row">
                  <span className="exp-label">Role</span>
                  <div className="exp-value">
                    <span className="exp-value-main">Product Designer</span>
                    <span className="exp-value-sub">Freelance</span>
                  </div>
                </div>
                <div className="exp-divider"></div>
                <div className="exp-row">
                  <span className="exp-label">Scope</span>
                  <div className="exp-scope-list">
                    <span className="exp-scope-item">UX Research</span>
                    <span className="exp-scope-item">Stakeholder Interviews</span>
                    <span className="exp-scope-item">Hypothesis Generation</span>
                    <span className="exp-scope-item">UI Redesign</span>
                    <span className="exp-scope-item">Prototyping</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="exp-card">
              <div className="exp-card-header">
                <div className="exp-company">Skvot</div>
                <div className="exp-date">Feb 2024 – May 2024</div>
              </div>
              <div className="exp-rows">
                <div className="exp-row">
                  <span className="exp-label">Role</span>
                  <div className="exp-value">
                    <span className="exp-value-main">UX/UI Designer</span>
                    <span className="exp-value-sub">Full-time</span>
                  </div>
                </div>
                <div className="exp-divider"></div>
                <div className="exp-row">
                  <span className="exp-label">Scope</span>
                  <div className="exp-scope-list">
                    <span className="exp-scope-item">End-to-end UX/UI</span>
                    <span className="exp-scope-item">Mobile User Flows</span>
                    <span className="exp-scope-item">Wireframing</span>
                    <span className="exp-scope-item">High-fidelity UI</span>
                    <span className="exp-scope-item">Interactive Prototypes</span>
                    <span className="exp-scope-item">Onboarding Design</span>
                    <span className="exp-scope-item">Usability Testing</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          </FadeIn>
        </section>

        {/* TESTIMONIALS — hidden */}

        {/* ABOUT */}
        <section className="about-wrapper">
          <FadeIn>
          <div className="about-card about-card--light">
            <div className="about-text-col">
              <span className="about-eyebrow">About me</span>
              <h2 className="about-headline">Hey, I&rsquo;m Danylo.</h2>
              <p className="about-body">I&rsquo;m a Product Designer focused on solving real problems for real people. I always start with data—understanding what&rsquo;s actually happening before I move. Then comes the people: talking to users, learning what they need, and building something that matters.<br/><br/>Outside of design, I&rsquo;m a drummer writing my own songs, spend a lot of time with people who mean everything to me, and I&rsquo;m constantly reading—books, manga, whatever pulls my attention. I cook, I watch anime, I build things because that&rsquo;s how I stay sane.<br/><br/>I notice things. I ask questions. I care about getting it right.</p>
              <div className="about-spotify">
                <p className="about-spotify-label">My go-to playlist for building things</p>
                <iframe
                  src="https://open.spotify.com/embed/playlist/2l4YUpAEfKwN8IJsKLgYOY?utm_source=generator"
                  width="100%"
                  height="152"
                  frameBorder={0}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="about-photo-col">
              <img className="about-photo" src="/images/about me.png" alt="Danylo Ivanov" />
            </div>
          </div>
          </FadeIn>
        </section>

        </article>
      </main>

      {/* "Let's talk" CTA — homepage only, sits between main and footer */}
      <FadeIn className="hp-banner">
        <Link className="hp-banner-cta" href="/contact" aria-label="Let's talk — open contact page">
          <span className="hp-banner-cta-text">Let&rsquo;s talk</span>
          <span className="hp-banner-cta-arrow" aria-hidden>
            <ArrowRight size={48} strokeWidth={2.25} />
          </span>
        </Link>
      </FadeIn>

      <Footer />
    </>
  );
}

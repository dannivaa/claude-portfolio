'use client';

import '@/styles/style.css';
import Navbar from '@/components/Navbar';
import { Component } from '@/components/ui/etheral-shadow';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar variant="home" />

      <main>

        {/* HERO */}
        <section className="hero-wrapper">
          <div className="hero-card">
            <div className="hero-bg">
              <Component
                color="#4695C0"
                animation={{ scale: 100, speed: 90 }}
                noise={{ opacity: 1, scale: 1.2 }}
                sizing="fill"
              />
            </div>
            <p className="hero-headline">Product Designer translating user insights into products that actually work.</p>
          </div>
        </section>

        {/* WORKED WITH */}
        <div className="worked-with">
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
        </div>

        {/* PROJECTS */}
        <section id="projects" className="projects-wrapper">
          <div className="projects-section">
            <div className="project-cards">

              {/* Card: Soon */}
              <div className="card-soon">
                <div className="card-image">
                  <img src="https://www.figma.com/api/mcp/asset/2ee2001c-9848-42ef-875c-c5283827dc5b" alt="Enhancing reading and memorising" />
                </div>
                <div className="card-footer">
                  <span className="card-title">Enhancing reading and memorising</span>
                  <div className="card-badge"><span>Case Study Soon</span></div>
                </div>
              </div>

              {/* Card: Default (with hover) */}
              <div className="card-default" onClick={() => router.push('/case-study')} style={{ cursor: 'pointer' }}>
                <div className="card-image">
                  <img src="https://www.figma.com/api/mcp/asset/35030000-7ef2-49f0-9d76-4eef4cceac01" alt="Designing for the second order" />
                </div>
                <div className="card-footer">
                  <span className="card-title">Designing for the second order</span>
                </div>
              </div>

              {/* Card: Default 2 */}
              <div className="card-default">
                <div className="card-image">
                  <img src="https://www.figma.com/api/mcp/asset/3dc7a7ac-1274-471c-8ea2-744befe1f7c5" alt="Enhancing reading and memorising" />
                </div>
                <div className="card-footer">
                  <span className="card-title">Enhancing reading and memorising</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="experience-section">
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
                  <span className="exp-label">Key Projects</span>
                  <div className="exp-value">
                    <span className="exp-value-main" style={{ fontSize: '14.9px', letterSpacing: '-0.596px', lineHeight: '24px' }}>WIP</span>
                    <span className="exp-value-sub">To be announced</span>
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
                    <span className="exp-value-main">Product Designer</span>
                    <span className="exp-value-sub">Full-time</span>
                  </div>
                </div>
                <div className="exp-divider"></div>
                <div className="exp-row">
                  <span className="exp-label">Key Projects</span>
                  <div className="exp-value">
                    <span className="exp-value-main" style={{ fontSize: '14.9px', letterSpacing: '-0.596px', lineHeight: '24px' }}>WIP</span>
                    <span className="exp-value-sub">To be announced</span>
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
                <div className="exp-company">Skvot Mobile App</div>
                <div className="exp-date">Feb 2024 – May 2024</div>
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
                  <span className="exp-label">Key Projects</span>
                  <div className="exp-value">
                    <span className="exp-value-main" style={{ fontSize: '14.9px', letterSpacing: '-0.596px', lineHeight: '24px' }}>WIP</span>
                    <span className="exp-value-sub">To be announced</span>
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
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="testimonials-wrapper">
          <div className="testimonials-section">
            <div className="testimonials-track-container">
              <div className="testimonials-track" id="testimonialsTrack">

                <div className="testimonial-slide">
                  <div className="testimonial-body">
                    <p className="testimonial-text">Damian is one of the best designers I have worked with. He is very pragmatic and he values engineering input in the early iterations of the design phase and I found that extremely efficient. He is very open to giving and receiving feedback and he also iterates on feedback very quickly. He is very thorough when it comes to UX and UI designing. His deep understanding of UX and UI, coupled with a strong empathy for customer needs, ensures that the entire team is aligned with user perspectives.</p>
                  </div>
                  <div className="testimonial-divider"></div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <img src="https://www.figma.com/api/mcp/asset/9120d13f-98b8-468b-8459-fa577fea8164" alt="Ashwini Dhananjeyan" />
                    </div>
                    <div className="testimonial-author-info">
                      <span className="testimonial-name">Ashwini Dhananjeyan</span>
                      <span className="testimonial-role">Engineering Manager at Miro</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-slide">
                  <div className="testimonial-body">
                    <p className="testimonial-text">Damian is one of the best designers I have worked with. He is very pragmatic and he values engineering input in the early iterations of the design phase and I found that extremely efficient. He is very open to giving and receiving feedback and he also iterates on feedback very quickly. He is very thorough when it comes to UX and UI designing. His deep understanding of UX and UI, coupled with a strong empathy for customer needs, ensures that the entire team is aligned with user perspectives.</p>
                  </div>
                  <div className="testimonial-divider"></div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <img src="https://www.figma.com/api/mcp/asset/9120d13f-98b8-468b-8459-fa577fea8164" alt="Ashwini Dhananjeyan" />
                    </div>
                    <div className="testimonial-author-info">
                      <span className="testimonial-name">Ashwini Dhananjeyan</span>
                      <span className="testimonial-role">Engineering Manager at Miro</span>
                    </div>
                  </div>
                </div>

                <div className="testimonial-slide">
                  <div className="testimonial-body">
                    <p className="testimonial-text">Damian is one of the best designers I have worked with. He is very pragmatic and he values engineering input in the early iterations of the design phase and I found that extremely efficient. He is very open to giving and receiving feedback and he also iterates on feedback very quickly. He is very thorough when it comes to UX and UI designing. His deep understanding of UX and UI, coupled with a strong empathy for customer needs, ensures that the entire team is aligned with user perspectives.</p>
                  </div>
                  <div className="testimonial-divider"></div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      <img src="https://www.figma.com/api/mcp/asset/9120d13f-98b8-468b-8459-fa577fea8164" alt="Ashwini Dhananjeyan" />
                    </div>
                    <div className="testimonial-author-info">
                      <span className="testimonial-name">Ashwini Dhananjeyan</span>
                      <span className="testimonial-role">Engineering Manager at Miro</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* MANIFESTO */}
        <section className="manifesto-wrapper">
          <div className="manifesto-inner">
            <div className="manifesto-section">
              <div className="manifesto-text">
                <p>I hold two core beliefs that guide my approach to creating exceptional products.</p>
                <p>Firstly, I believe that great products are built and grown by embracing speed. The sooner we release a usable piece of a product, the sooner we can gather feedback to learn if we&apos;re aiming for the right goal and direction. Too often, the industry—and especially big tech—moves too slowly, falling into the complacency trap of ideating and polishing for months before the first user experiences a feature. This approach burns heaps of money as we dance around the campfire of self-satisfaction. The harsh reality is that a product or feature means nothing until it encounters its first user. Today, with all the available tools to prototype and reach customers, there&apos;s nothing stopping us from obtaining customer validation faster. Product design should be the function that enables or leads this effort.</p>
                <p>The future of tech is neither slow nor lonely. Let&apos;s embrace speed and collaboration to build the next generation of groundbreaking products.</p>
              </div>
            </div>
            <div className="manifesto-border"></div>
          </div>
        </section>

      </main>
    </>
  );
}

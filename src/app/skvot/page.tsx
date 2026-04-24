import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import { FadeIn } from '@/components/ui/fade-in';

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
              <p className="cs-project-name">SKVOT</p>
              <h1 className="cs-title">A bridge between student and lecturer</h1>
            </div>

            {/* Naked phone strip */}
            <div className="cs-phones-naked">
              <div className="cs-phone-naked">
                <img src="/day 2 onboarding.png" alt="App screen 1" />
              </div>
              <div className="cs-phone-naked">
                <img src="/day 2 home.png" alt="App screen 2" />
              </div>
              <div className="cs-phone-naked">
                <img src="/day 3 paywall.png" alt="App screen 3" />
              </div>
            </div>

            {/* Problem / Solution / Result rows */}
            <div className="cs-psr-rows">
              <div className="cs-psr-row">
                <span className="cs-psr-label">Problem</span>
                <p className="cs-section-body">The web platform had outdated flows and no mobile app — neither did any competitor. Students relied on Telegram and email to communicate with lecturers. There was no native mobile solution in the market.</p>
              </div>
              <div className="cs-psr-row">
                <span className="cs-psr-label">Solution</span>
                <p className="cs-section-body">A 4-tab native app shaped entirely by research: a weekly schedule and content feed, a full culture library, a My Courses hub with grades and instructor feedback, and a direct chat replacing Telegram.</p>
              </div>
              <div className="cs-psr-row">
                <span className="cs-psr-label">Result</span>
                <p className="cs-section-body">0→1 concept delivered in 4 weeks. The research-driven decision to cut homework submission for students and keep lecturer grading is the strongest proof of product thinking — building the right thing, not just the obvious thing.</p>
              </div>
            </div>

            {/* Metadata bar */}
            <div className="cs-meta-bar">
              <div className="cs-meta-bar-item">
                <span className="cs-meta-label">Role</span>
                <span className="cs-meta-value">UX/UI Designer (Mobile) — Solo</span>
              </div>
              <div className="cs-meta-bar-divider" />
              <div className="cs-meta-bar-item">
                <span className="cs-meta-label">Team</span>
                <span className="cs-meta-value">1 Designer, 1 Mentor</span>
              </div>
              <div className="cs-meta-bar-divider" />
              <div className="cs-meta-bar-item">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">Mar — Apr 2024</span>
              </div>
              <div className="cs-meta-bar-divider" />
              <div className="cs-meta-bar-item">
                <span className="cs-meta-label">Scope</span>
                <span className="cs-meta-value">UX Research · Competitor Analysis · Wireframing · UI Design · Prototyping</span>
              </div>
            </div>

          </div>
        </section>

        {/* CONTENT SECTIONS */}
        <div className="cs-content-sections">
          <div className="cs-content-sections-inner">

            {/* Background */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Background</span>
              <div className="cs-content-body">
                <p>SKVOT is Ukraine&apos;s largest pop-culture education platform — offering courses across design, film, music, and creative careers. The entire product lived on web. There was no mobile app, and no competitor had one either. This was a 0→1 opportunity in an uncontested space, with no existing mobile playbook to follow.</p>
              </div>
            </div>
            </FadeIn>

            {/* Discovery */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Discovery</span>
              <div className="cs-content-body">
                <p>Before designing a single screen, one question had to be answered: should the app include homework submission and grading? It seemed like an obvious feature for an education product. Research said otherwise.</p>
                <p><strong>82%</strong> of students submit homework in formats incompatible with mobile — PSD, AI, Figma links. Three out of four students physically cannot submit their work through a phone.</p>
                <p><strong>28 of 34</strong> lecturers cannot open student homework files on a smartphone. Yet the majority of them want to give grades and feedback via mobile — because typing text and assigning scores works fine on a phone.</p>
                <p>The decision: cut homework submission for students entirely. Build grading and feedback tools for lecturers. Research eliminated a near-zero-adoption feature and redirected scope before a single screen was designed.</p>
              </div>
            </div>
            </FadeIn>

            {/* Solution */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Solution</span>
              <div className="cs-content-body">
                <p><strong>Chat</strong> — Students were context-switching between three separate places to complete one learning loop: watching a lecture on the website, messaging on Telegram, and checking feedback inside a personal cabinet. Chat brings all of that into one native experience — direct messaging between students, lecturers, and support, without ever leaving the app.</p>
                <p><strong>Culture</strong> — SKVOT&apos;s web platform scattered content across disconnected sections. Courses lived in one place, articles in another, podcasts somewhere else. Culture consolidates the full content library — courses, articles, podcasts, video guides — under one brand-aligned tab.</p>
                <p><strong>My Courses</strong> — Enrolled courses, lecture lists, assignment status, instructor grades and feedback — all accessible without leaving the app. Lecturers can grade and respond directly from mobile. The hypothesis: faster feedback turnaround keeps students engaged and reduces drop-off between assignments.</p>
                <p><strong>Homepage</strong> — Weekly schedule at the top, latest content feed below. Students know what&apos;s next without digging. Minimal top navigation — profile, search, notifications only.</p>
              </div>
            </div>
            </FadeIn>

            {/* Result */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Result</span>
              <div className="cs-content-body">
                <p>Each decision maps to a metric the product would track post-launch.</p>
                <p><strong>Daily Active Users</strong> — SKVOT had zero mobile presence before this. A native app opens DAU as a trackable metric for the first time.</p>
                <p><strong>Course completion rate</strong> — Chat removes the communication friction that causes students to disengage mid-course. Faster lecturer feedback means fewer students falling through the gaps between assignments.</p>
                <p><strong>Content consumption</strong> — The Culture tab consolidates what was previously scattered. Easier discovery means more sessions that go beyond just the enrolled course.</p>
                <p><strong>Feedback turnaround time</strong> — Mobile-accessible grading for lecturers reduces the time between submission and response. The design removes the device barrier that 28 of 34 lecturers faced.</p>
              </div>
            </div>
            </FadeIn>

          </div>
        </div>

        {/* GALLERY */}
        <section className="cs-gallery">
          <FadeIn>
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
          </FadeIn>
        </section>

        {/* CTA */}
        <section className="cs-cta-wrapper">
          <FadeIn>
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
          </FadeIn>
        </section>

      </main>
    </>
  );
}

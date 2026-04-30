import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { SplitText } from '@/components/ui/split-text';

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
              <p className="cs-project-name"><SplitText text="SKVOT" /></p>
              <h1 className="cs-title"><SplitText text="A bridge between student and lecturer" delay={0.3} /></h1>
            </div>

            {/* Naked phone strip */}
            <div className="cs-phones-naked">
              <FadeInMount delay={0.8}>
                <div className="cs-phone-naked">
                  <img src="/images/Skvot/01.png" alt="SKVOT screen 1" />
                </div>
              </FadeInMount>
              <FadeInMount delay={0.95}>
                <div className="cs-phone-naked">
                  <img src="/images/Skvot/02.png" alt="SKVOT screen 2" />
                </div>
              </FadeInMount>
              <FadeInMount delay={1.1}>
                <div className="cs-phone-naked">
                  <img src="/images/Skvot/03.png" alt="SKVOT screen 3" />
                </div>
              </FadeInMount>
            </div>

            {/* Problem / Solution / Result rows */}
            <FadeIn>
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
            </FadeIn>

            {/* Metadata bar */}
            <FadeIn>
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
            </FadeIn>

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

        {/* SCREENSHOTS — bottom */}
        <section className="cs-hero">
          <div className="cs-hero-inner">
            <FadeIn>
              <div className="cs-phones-naked">
                <div className="cs-phone-naked"><img src="/images/Skvot/04.png" alt="" /></div>
                <div className="cs-phone-naked"><img src="/images/Skvot/05.png" alt="" /></div>
                <div className="cs-phone-naked"><img src="/images/Skvot/06.png" alt="" /></div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="cs-phones-naked">
                <div className="cs-phone-naked"><img src="/images/Skvot/07.png" alt="" /></div>
                <div className="cs-phone-naked"><img src="/images/Skvot/08.png" alt="" /></div>
                <div className="cs-phone-naked"><img src="/images/Skvot/09.png" alt="" /></div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

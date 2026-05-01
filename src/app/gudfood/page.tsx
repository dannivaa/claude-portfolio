import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { SplitText } from '@/components/ui/split-text';

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
              <p className="cs-project-name"><SplitText text="GudFood Vdoma" /></p>
              <h1 className="cs-title"><SplitText text="The loop that brought users back" delay={0.3} /></h1>
            </div>

            {/* Naked phone strip */}
            <div className="cs-phones-naked">
              <FadeInMount delay={0.8}>
                <div className="cs-phone-naked">
                  <img src="/images/GudFood/01.png" alt="GudFood screen 1" />
                </div>
              </FadeInMount>
              <FadeInMount delay={0.95}>
                <div className="cs-phone-naked">
                  <img src="/images/GudFood/02.png" alt="GudFood screen 2" />
                </div>
              </FadeInMount>
              <FadeInMount delay={1.1}>
                <div className="cs-phone-naked">
                  <img src="/images/GudFood/03.png" alt="GudFood screen 3" />
                </div>
              </FadeInMount>
            </div>

            {/* Problem / Solution / Result rows */}
            <FadeIn>
              <div className="cs-psr-rows">
                <div className="cs-psr-row">
                  <span className="cs-psr-label">Problem</span>
                  <p className="cs-section-body">Customers ordered once or twice and didn&apos;t return. The app had no feedback system — the team had zero structured data on why people left. The UI felt dated compared to Glovo and Bolt Food.</p>
                </div>
                <div className="cs-psr-row">
                  <span className="cs-psr-label">Solution</span>
                  <p className="cs-section-body">A closed-loop feedback system: post-order star ratings with quick-feedback tags, dish-level reviews that build social proof, and aggregated restaurant ratings that surface quality issues. Paired with a full UI refresh across all core screens.</p>
                </div>
                <div className="cs-psr-row">
                  <span className="cs-psr-label">Result</span>
                  <p className="cs-section-body">Concept validated by the GudFood Vdoma product team as aligned with their product roadmap.</p>
                </div>
              </div>
            </FadeIn>

            {/* Metadata bar */}
            <FadeIn>
              <div className="cs-meta-bar">
                <div className="cs-meta-bar-item">
                  <span className="cs-meta-label">Role</span>
                  <span className="cs-meta-value">Product Designer</span>
                </div>
                <div className="cs-meta-bar-divider" />
                <div className="cs-meta-bar-item">
                  <span className="cs-meta-label">Timeline</span>
                  <span className="cs-meta-value">Sep — Nov 2024</span>
                </div>
                <div className="cs-meta-bar-divider" />
                <div className="cs-meta-bar-item">
                  <span className="cs-meta-label">Scope</span>
                  <span className="cs-meta-value">Stakeholder Interviews · UX Research · Hypothesis Generation · UI Redesign · Prototyping</span>
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
                <p>GudFood Vdoma is a Ukrainian frozen food delivery service — both a D2C brand and a restaurant marketplace — delivering to 26 cities across Ukraine. The product had an existing iOS app but was struggling with retention. Customers ordered once or twice and didn&apos;t come back.</p>
                <p>Before talking to users, I met with the GudFood product team to understand the business context and eliminate assumptions before defining my research questions. The team knew users were churning. They had no structured data on why. No feedback mechanism existed in the app — no ratings, no reviews, no complaint resolution. The business was making product decisions without any signal from its customers.</p>
                <p>That gap defined the project.</p>
              </div>
            </div>
            </FadeIn>

            {/* Discovery */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Discovery</span>
              <div className="cs-content-body">
                <p>I interviewed 7 participants — a deliberate mix of GudFood customers, competitors&apos; customers, and non-users of frozen food delivery. Existing users adapt to friction over time. Non-users show you what&apos;s actually blocking growth. The most valuable insights came from people who had never ordered from GudFood at all.</p>
                <p>Four barriers to reordering emerged:</p>
                <ol>
                  <li><strong>Delivery cost friction</strong> — 100–150₴ delivery on a single 200₴ item feels disproportionate. The math doesn&apos;t justify a casual purchase.</li>
                  <li><strong>Offline alternatives win</strong> — Halya Baluvan is physically nearby. No planning, no waiting, no delivery fee. Convenience beats everything.</li>
                  <li><strong>Trust gap</strong> — Users doubt that a frozen dish reheated at home will match restaurant quality at a similar price. The uncertainty kills the decision.</li>
                  <li><strong>Shrinking assortment</strong> — Marketplace items were decreasing. Not all dishes ship outside Kyiv.</li>
                </ol>
                <p>Barriers one and four — delivery cost and shrinking assortment — are operations problems. Design can&apos;t fix pricing models or logistics coverage. Those were noted and handed back to the business.</p>
                <p>Barriers two and three were addressable through design. The offline alternative problem pointed to a trust and value perception issue. The trust gap pointed directly at the absence of social proof and user feedback in the app.</p>
                <p>No feedback mechanism existed anywhere in the product. One respondent had submitted a complaint through Glovo and never received any acknowledgment. Another was promised a bonus item that never arrived — with no channel to follow up. Users had no voice, and the business had no data. Without a feedback loop, there was no way to identify which dishes underperformed, which restaurant partners had quality issues, or what specifically drove churn.</p>
              </div>
            </div>
            </FadeIn>

            {/* Solution */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Solution</span>
              <div className="cs-content-body">
                <p>The core intervention was a three-touchpoint feedback loop designed to work for both users and the business simultaneously.</p>
                <p><strong>Post-order rating</strong> — A bottom sheet appears after delivery: star rating, quick-feedback tags (Clear communications, Fast resolution, Smooth experience), and an optional text field. Under 10 seconds to complete. Low friction was non-negotiable — a complex feedback form gets ignored.</p>
                <p><strong>Dish-level reviews</strong> — Each product page surfaces reviews from other customers: name, rating, comment. This directly addresses the trust gap. Users unsure whether a frozen dish will taste as good as the restaurant version now have social proof to inform that decision.</p>
                <p><strong>Aggregated restaurant ratings</strong> — Marketplace restaurant cards display ratings calculated from individual dish reviews. This gives users a reliable quality signal when browsing and creates accountability pressure on underperforming partners.</p>
                <p>The feedback system only works if users trust the app enough to engage with it. The full UI redesign brought the experience in line with what users expect from mature delivery platforms like Glovo and Bolt Food — without erasing GudFood&apos;s own identity.</p>
                <p>Homepage, product detail, orders &amp; tracking, profile, and support were all rebuilt around what a new user needs to see first — and what a returning user needs to act on quickly.</p>
              </div>
            </div>
            </FadeIn>

            {/* Result */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Result</span>
              <div className="cs-content-body">
                <p>The primary metric this design targets is repeat order rate.</p>
                <p>GudFood&apos;s core problem was users ordering once or twice and not returning. Every design decision in this project maps back to moving that number.</p>
                <p>The feedback system is the primary lever. Dish-level reviews and aggregated restaurant ratings close the trust gap that was blocking reorders — users can now make confident purchase decisions based on other customers&apos; experience. Post-order ratings give the business the data it needs to identify and fix quality issues that were previously invisible.</p>
                <p>The hypothesis: a structured feedback loop, combined with a modernized UI that meets user expectations from mature delivery platforms, drives a <strong>10–15% improvement in repeat order rate within the first 90 days post-launch.</strong></p>
                <p>The concept was presented to the GudFood Vdoma product team and validated as aligned with their product roadmap. Not shipped into production — but the direction was confirmed as the right next step.</p>
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
                <div className="cs-phone-naked"><img src="/images/GudFood/04.png" alt="" /></div>
                <div className="cs-phone-naked"><img src="/images/GudFood/05.png" alt="" /></div>
                <div className="cs-phone-naked"><img src="/images/GudFood/06.png" alt="" /></div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="cs-phones-naked">
                <div className="cs-phone-naked"><img src="/images/GudFood/07.png" alt="" /></div>
                <div className="cs-phone-naked"><img src="/images/GudFood/08.png" alt="" /></div>
                <div className="cs-phone-naked"><img src="/images/GudFood/09.png" alt="" /></div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

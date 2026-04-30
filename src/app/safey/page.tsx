import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FadeIn } from '@/components/ui/fade-in';
import { FadeInMount } from '@/components/ui/fade-in-mount';
import { SplitText } from '@/components/ui/split-text';

export const metadata: Metadata = {
  title: 'Safey AI Companion | Danylo Ivanov',
};

export default function SafeyCaseStudy() {
  return (
    <>
      <Navbar variant="case-study" />

      <main className="cs-main">

        {/* HERO */}
        <section className="cs-hero">
          <div className="cs-hero-inner">

            <div className="cs-hero-title-area">
              <p className="cs-project-name"><SplitText text="Safey" /></p>
              <h1 className="cs-title"><SplitText text="Designing a monetization strategy for an AI companion app" delay={0.3} /></h1>
            </div>

            {/* Naked phone strip */}
            <div className="cs-phones-naked">
              <FadeInMount delay={0.8}>
                <div className="cs-phone-naked">
                  <img src="/images/day 2 onboarding.png" alt="App screen 1" />
                </div>
              </FadeInMount>
              <FadeInMount delay={0.95}>
                <div className="cs-phone-naked">
                  <img src="/images/day 2 home.png" alt="App screen 2" />
                </div>
              </FadeInMount>
              <FadeInMount delay={1.1}>
                <div className="cs-phone-naked">
                  <img src="/images/day 3 paywall.png" alt="App screen 3" />
                </div>
              </FadeInMount>
            </div>

            {/* Problem / Solution / Result rows */}
            <FadeIn>
              <div className="cs-psr-rows">
                <div className="cs-psr-row">
                  <span className="cs-psr-label">Problem</span>
                  <p className="cs-section-body">The AI companion market is growing rapidly but is visually and emotionally undifferentiated. Every competitor looks and feels the same — generic UI, interchangeable feature sets, no distinctive identity. Most products treat monetization as an afterthought.</p>
                </div>
                <div className="cs-psr-row">
                  <span className="cs-psr-label">Solution</span>
                  <p className="cs-section-body">A subscription-only model with a distinctive brand identity, a paywall built on competitor revenue-per-download analysis, and a warm visual identity designed to own emotional territory no competitor had claimed.</p>
                </div>
                <div className="cs-psr-row">
                  <span className="cs-psr-label">Result</span>
                  <p className="cs-section-body">Concept targeting 15–20% free-to-paid conversion rate, built on market data from 6 competitors and anchored to the CHAI paywall model — the category&apos;s most efficient monetizer at $6.67 per download.</p>
                </div>
              </div>
            </FadeIn>

            {/* Metadata bar */}
            <FadeIn>
              <div className="cs-meta-bar">
                <div className="cs-meta-bar-item">
                  <span className="cs-meta-label">Role</span>
                  <span className="cs-meta-value">Product Designer — Solo</span>
                </div>
                <div className="cs-meta-bar-divider" />
                <div className="cs-meta-bar-item">
                  <span className="cs-meta-label">Timeline</span>
                  <span className="cs-meta-value">3-day design sprint · 2024</span>
                </div>
                <div className="cs-meta-bar-divider" />
                <div className="cs-meta-bar-item">
                  <span className="cs-meta-label">Platform</span>
                  <span className="cs-meta-value">iOS</span>
                </div>
                <div className="cs-meta-bar-divider" />
                <div className="cs-meta-bar-item">
                  <span className="cs-meta-label">Scope</span>
                  <span className="cs-meta-value">Product Audit · Competitor Research · Brand Identity · Paywall Design</span>
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
                <p>Safey is an AI companion app built around a single mission: solving social isolation. The target audience is ages 15–35 — introverts, people afraid of new connections, anyone who needs a space to be heard without judgment. The name itself signals the core value proposition: safety, warmth, a place to be yourself.</p>
                <p>The AI companion market is growing rapidly but is visually and emotionally undifferentiated. Every competitor looks and feels the same — generic UI, interchangeable feature sets, no distinctive identity. Most products treat monetization as an afterthought, presenting paywalls without strategy or brand alignment.</p>
                <p>That created two clear opportunities: <strong>a distinctive brand identity</strong> nobody in the space had claimed, and <strong>an optimized monetization model</strong> built on what actually works in the market rather than guesswork.</p>
              </div>
            </div>
            </FadeIn>

            {/* Discovery */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Discovery</span>
              <div className="cs-content-body">
                <p>Before designing Safey&apos;s monetization, I used and audited Replika — the most conceptually similar product in the space and the second most efficient monetizer in the category at $4.00 revenue per download.</p>
                <p>The audit revealed one critical weakness: Replika offers annual subscription only, with no free trial and no monthly option. Users are asked for maximum commitment before experiencing any premium value. And one genuine strength: deep AI personalization — the more the companion feels tailored to the individual user, the stronger the perceived value and the reason to pay.</p>
                <p>Six competitors were analyzed and ranked by revenue per download — not raw revenue, but monetization efficiency. CHAI leads at <strong>$6.67 per download</strong> and became the primary reference for Safey&apos;s paywall logic.</p>
                <p>Key patterns across top performers: free trials attached to yearly plans, two tiers only, a monthly + yearly toggle, and feature comparison tables at the moment of decision.</p>
              </div>
            </div>
            </FadeIn>

            {/* Solution */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Solution</span>
              <div className="cs-content-body">
                <p><strong>Subscription model</strong> — In AI companion apps, all core value is interdependent. Voice calls, shared photos, AI personality customization, unlimited messaging — none work as standalone purchases. They only make sense as a bundle. Transactional monetization would fragment the value proposition. Subscription is the model that matches the product architecture.</p>
                <p><strong>Brand identity</strong> — A blue and orange palette chosen to convey warmth and closeness. Handwritten and sketch illustration style for all visual elements, reinforcing the personal and human feel. In a category where products are functionally similar, a distinctive emotional identity is a growth lever.</p>
                <p><strong>Free trial attached to yearly plan only</strong> — If the product delivers real value, users who experience premium during a free trial will commit to the annual plan rather than downgrade. It&apos;s a confidence bet on product quality.</p>
                <p><strong>Two tiers only (Free vs AI+)</strong> — Multi-tier structures create decision paralysis. HiWaifu&apos;s four-plan structure correlates with the lowest revenue per download in the dataset at $0.40.</p>
                <p><strong>Monthly + yearly toggle with 33% discount badge</strong> — Directly addresses Replika&apos;s core weakness. Users who won&apos;t commit annually upfront have a lower-friction entry point. The badge anchors the yearly plan as the obvious choice without removing the monthly option entirely.</p>
                <p><strong>Feature comparison table</strong> — Surfaces the value gap between Free and AI+ at the exact moment the user is deciding whether to pay. Borrowed from CHAI&apos;s conversion logic — the market&apos;s most efficient monetizer.</p>
              </div>
            </div>
            </FadeIn>

            {/* Result */}
            <FadeIn>
            <div className="cs-content-section">
              <span className="cs-content-label">Result</span>
              <div className="cs-content-body">
                <p>The primary metric this design targets is free-to-paid conversion rate.</p>
                <p>Every decision in this project — the subscription model, the brand identity, the paywall structure — is aimed at a single outcome: getting users from free to paying.</p>
                <p>The hypothesis: a paywall built on market data, combined with a brand identity that creates emotional distinctiveness in an undifferentiated market, drives a <strong>15–20% free-to-paid conversion rate</strong> — in line with top performers in the AI companion category.</p>
                <p>The supporting logic: the free trial removes the commitment barrier that makes Replika&apos;s conversion inefficient, two clean tiers eliminate decision paralysis, brand identity increases trust and perceived quality before the paywall is even seen, and the feature comparison table closes the value gap at the moment of decision.</p>
              </div>
            </div>
            </FadeIn>

          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

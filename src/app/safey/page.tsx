import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { CsArticle, CsFacts, CsLayout, CsBlock, CsHeader, CsStage, CsSummary } from '@/components/case-study/CaseStudy';
import { getProject } from '@/lib/projects';
import { SafeyMetrics, SafeyPatterns, SafeyPaywallMatrix, SafeyRevenueChart } from '@/components/case-study/research/SafeyResearch';

const project = getProject('safey');

export const metadata: Metadata = {
  title: `${project.name}: ${project.title}`,
  description: project.summary,
};

export default function SafeyCaseStudy() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <main className="cs-main">
          <CsLayout project={project}>
            <CsHeader project={project} />

            <CsStage
              project={project}
              screens={[
                { src: '/images/Safey/01.png', alt: 'Safey home: companion cards filtered by Romance, Sport and Vampire', width: 1560, height: 3376 },
                { src: '/images/Safey/02.png', alt: 'Safey onboarding: “Find someone you can get close with”', width: 1560, height: 3376 },
                { src: '/images/Safey/03.png', alt: 'Safey AI+ paywall with a Free versus AI+ feature table and monthly or yearly plans', width: 1560, height: 3376 },
              ]}
            />

            <CsFacts
              project={project}
              facts={[
                { label: 'Role', value: 'Product Designer' },
                { label: 'Timeline', value: 'March — May 2026' },
                { label: 'Scope', value: 'Product Audit · Competitor Research · Brand Identity · Paywall Design' },
              ]}
            />

            <CsSummary
              items={[
                {
                  label: 'Problem',
                  body: 'The AI companion market is growing rapidly but is visually and emotionally undifferentiated. Every competitor looks and feels the same — generic UI, interchangeable feature sets, no distinctive identity. Most products treat monetization as an afterthought.',
                },
                {
                  label: 'Solution',
                  body: 'A subscription-only model with a distinctive brand identity, a paywall built on competitor revenue-per-download analysis, and a warm visual identity designed to own emotional territory no competitor had claimed.',
                },
                {
                  label: 'Result',
                  body: 'Concept targeting 15–20% free-to-paid conversion rate, built on market data from 6 competitors and anchored to the CHAI paywall model — the category’s most efficient monetizer at $6.67 per download.',
                },
              ]}
            />


            <CsArticle>
              <CsBlock label="Background">
                <p>Safey is an AI companion app built around a single mission: solving social isolation. The target audience is ages 15–35 — introverts, people afraid of new connections, anyone who needs a space to be heard without judgment. The name itself signals the core value proposition: safety, warmth, a place to be yourself.</p>
                <p>The AI companion market is growing rapidly but is visually and emotionally undifferentiated. Every competitor looks and feels the same — generic UI, interchangeable feature sets, no distinctive identity. Most products treat monetization as an afterthought, presenting paywalls without strategy or brand alignment.</p>
                <p>That created two clear opportunities: <strong>a distinctive brand identity</strong> nobody in the space had claimed, and <strong>an optimized monetization model</strong> built on what actually works in the market rather than guesswork.</p>
              </CsBlock>

              <CsBlock
                label="Discovery"
                visuals={
                  <>
                    <SafeyRevenueChart />
                    <SafeyPaywallMatrix />
                    <SafeyPatterns />
                  </>
                }
              >
                <p>Before designing Safey&rsquo;s monetization, I used and audited Replika — the most conceptually similar product in the space and the second most efficient monetizer in the category at $4.00 revenue per download.</p>
                <p>The audit revealed one critical weakness: Replika offers annual subscription only, with no free trial and no monthly option. Users are asked for maximum commitment before experiencing any premium value. And one genuine strength: deep AI personalization — the more the companion feels tailored to the individual user, the stronger the perceived value and the reason to pay.</p>
                <p>Six competitors were analyzed and ranked by revenue per download — not raw revenue, but monetization efficiency. CHAI leads at <strong>$6.67 per download</strong> and became the primary reference for Safey&rsquo;s paywall logic.</p>
                <p>Key patterns across top performers: free trials attached to yearly plans, two tiers only, a monthly + yearly toggle, and feature comparison tables at the moment of decision.</p>
              </CsBlock>

              <CsBlock label="Solution">
                <p><strong>Subscription model</strong> — In AI companion apps, all core value is interdependent. Voice calls, shared photos, AI personality customization, unlimited messaging — none work as standalone purchases. They only make sense as a bundle. Transactional monetization would fragment the value proposition. Subscription is the model that matches the product architecture.</p>
                <p><strong>Brand identity</strong> — A blue and orange palette chosen to convey warmth and closeness. Handwritten and sketch illustration style for all visual elements, reinforcing the personal and human feel. In a category where products are functionally similar, a distinctive emotional identity is a growth lever.</p>
                <p><strong>Free trial attached to yearly plan only</strong> — If the product delivers real value, users who experience premium during a free trial will commit to the annual plan rather than downgrade. It&rsquo;s a confidence bet on product quality.</p>
                <p><strong>Two tiers only (Free vs AI+)</strong> — Multi-tier structures create decision paralysis. HiWaifu&rsquo;s four-plan structure correlates with the lowest revenue per download in the dataset at $0.40.</p>
                <p><strong>Monthly + yearly toggle with 33% discount badge</strong> — Directly addresses Replika&rsquo;s core weakness. Users who won&rsquo;t commit annually upfront have a lower-friction entry point. The badge anchors the yearly plan as the obvious choice without removing the monthly option entirely.</p>
                <p><strong>Feature comparison table</strong> — Surfaces the value gap between Free and AI+ at the exact moment the user is deciding whether to pay. Borrowed from CHAI&rsquo;s conversion logic — the market&rsquo;s most efficient monetizer.</p>
              </CsBlock>

              <CsBlock
                label="Result"
                visuals={
                  <>
                    <SafeyMetrics />
                  </>
                }
              >
                <p>The primary metric this design targets is free-to-paid conversion rate.</p>
                <p>Every decision in this project — the subscription model, the brand identity, the paywall structure — is aimed at a single outcome: getting users from free to paying.</p>
                <p>The hypothesis: a paywall built on market data, combined with a brand identity that creates emotional distinctiveness in an undifferentiated market, drives a <strong>15–20% free-to-paid conversion rate</strong> — in line with top performers in the AI companion category.</p>
                <p>The supporting logic: the free trial removes the commitment barrier that makes Replika&rsquo;s conversion inefficient, two clean tiers eliminate decision paralysis, brand identity increases trust and perceived quality before the paywall is even seen, and the feature comparison table closes the value gap at the moment of decision.</p>
              </CsBlock>
            </CsArticle>
          </CsLayout>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import {
  CsFacts,
  CsFlows,
  CsHeader,
  CsHeroMedia,
  CsLayout,
  CsPoints,
  CsSection,
  CsText,
  CsVisuals,
  type Screen,
} from '@/components/case-study/CaseStudy';
import { getProject } from '@/lib/projects';
import { SafeyMetrics, SafeyPatterns, SafeyPaywallMatrix, SafeyRevenueChart } from '@/components/case-study/research/SafeyResearch';

const project = getProject('safey');

export const metadata: Metadata = {
  title: `${project.name}: ${project.title}`,
  description: project.summary,
};

const screen = (n: number, alt: string): Screen => ({ src: `/images/Safey/0${n}.png`, alt, width: 1560, height: 3376 });

export default function SafeyCaseStudy() {
  return (
    <>
      <Navbar />

      <PageTransition>
        <main className="cs-main">
          <CsLayout project={project}>
            <CsHeader project={project} />
            <CsHeroMedia project={project} />
            <CsFacts
              project={project}
              facts={[
                { label: 'Role', value: 'Product Designer' },
                { label: 'Timeline', value: 'March — May 2026' },
                { label: 'Scope', value: 'Product Audit · Competitor Research · Brand Identity · Paywall Design' },
              ]}
            />

            <CsSection label="Overview" title="How does an AI companion stand out, and earn, in a market where every app looks the same?">
              <CsText>
                <p>Safey is an AI companion app built around a single mission: solving social isolation. It&rsquo;s for people aged 15–35 — introverts, people afraid of new connections, anyone who needs a space to be heard without judgment. The name itself is the promise: safety, warmth, a place to be yourself.</p>
              </CsText>
              <CsPoints
                items={[
                  { title: 'Product audit', body: 'Used and audited Replika, the closest product in the space.' },
                  { title: 'Competitor research', body: 'Six competitors ranked by what each download is worth.' },
                  { title: 'Brand and paywall', body: 'A warm identity and a paywall built on what actually converts.' },
                ]}
              />
            </CsSection>

            <CsSection label="Problem" title="Every AI companion looks and feels the same.">
              <CsText>
                <p>The AI companion market is growing rapidly but is visually and emotionally undifferentiated. Generic UI, interchangeable feature sets, no distinctive identity.</p>
                <p>Most products treat monetization as an afterthought, presenting paywalls without strategy or brand alignment.</p>
              </CsText>
            </CsSection>

            <CsSection label="Opportunity" title="Own the emotional territory, and monetize like the best in the category.">
              <CsPoints
                items={[
                  { title: 'A distinctive identity', body: 'Nobody in the space had claimed warmth and closeness as a brand.' },
                  { title: 'Monetization from data', body: 'A model built on what works in the market, not on guesswork.' },
                ]}
              />
            </CsSection>

            <CsSection label="Solution" title="A subscription app with a warm identity and a paywall built on the category’s best earner.">
              <CsText>
                <p>In an AI companion, all core value is interdependent. Voice calls, shared photos, personality customization, unlimited messaging: none of them work as standalone purchases. Subscription is the model that matches the product.</p>
              </CsText>
            </CsSection>

            <CsSection label="Core flows" title="From the first hello to the paywall.">
              <CsFlows
                project={project}
                items={[
                  {
                    screen: screen(2, 'Safey onboarding: “Find someone you can get close with”'),
                    title: 'Onboarding',
                    body: 'Sets the tone: someone to get close with, in a warm, hand-drawn style.',
                  },
                  {
                    screen: screen(1, 'Safey home: companion cards filtered by Romance, Sport and Vampire'),
                    title: 'Choosing a companion',
                    body: 'A catalogue of personalities, filtered by what you’re into.',
                  },
                  {
                    screen: screen(3, 'Safey AI+ paywall with a Free versus AI+ feature table and monthly or yearly plans'),
                    title: 'The AI+ paywall',
                    body: 'Free vs AI+ side by side, with a monthly and a yearly plan.',
                  },
                ]}
              />
            </CsSection>

            <CsSection label="Research" title="Ranking competitors by what each download is worth.">
              <CsText>
                <p>Before designing the monetization, I used and audited Replika, the most conceptually similar product and the second most efficient monetizer in the category at $4.00 per download.</p>
                <p>Then six competitors were ranked by revenue per download: not raw revenue, but monetization efficiency. CHAI leads at <strong>$6.67 per download</strong> and became the primary reference for Safey&rsquo;s paywall logic.</p>
              </CsText>
              <CsVisuals>
                <SafeyRevenueChart />
                <SafeyPaywallMatrix />
                <SafeyPatterns />
              </CsVisuals>
            </CsSection>

            <CsSection label="Key insights" title="People pay for commitment they’ve tried, and for a companion that feels like theirs.">
              <CsPoints
                items={[
                  {
                    title: 'Don’t ask for everything up front',
                    body: 'Replika sells annual only, with no trial and no monthly plan: maximum commitment before any value.',
                  },
                  {
                    title: 'Personal is what people pay for',
                    body: 'The more the companion feels tailored to you, the stronger the reason to subscribe.',
                  },
                  {
                    title: 'Simple beats plentiful',
                    body: 'HiWaifu’s four-plan structure sits at the bottom of the dataset at $0.40 per download.',
                  },
                ]}
              />
            </CsSection>

            <CsSection label="Design decisions" title="Every paywall decision traces back to the data.">
              <CsPoints
                items={[
                  {
                    title: 'Free trial on the yearly plan only',
                    body: 'If the product delivers, people who try premium commit to the year rather than downgrade.',
                  },
                  { title: 'Two tiers: Free and AI+', body: 'Multi-tier structures create decision paralysis.' },
                  {
                    title: 'Monthly + yearly, with a 33% badge',
                    body: 'A lower-friction way in, while the badge anchors yearly as the obvious choice.',
                  },
                  {
                    title: 'A feature comparison table',
                    body: 'Shows the gap between Free and AI+ at the exact moment of decision, the way CHAI does.',
                  },
                  {
                    title: 'A warm blue and orange identity',
                    body: 'Hand-drawn illustration and a palette chosen for closeness, in a category that all looks alike.',
                  },
                ]}
              />
            </CsSection>

            <CsSection label="Outcome" title="A hypothesis with a bar to clear: beat the freemium median.">
              <CsText>
                <p>Safey is a concept, so there is no result yet. What it has is a hypothesis, and a public benchmark to test it against.</p>
                <p>Freemium apps convert a median <strong>2.1%</strong> of downloads to paid within 35 days, according to RevenueCat&rsquo;s <a href="https://www.revenuecat.com/state-of-subscription-apps" target="_blank" rel="noreferrer">State of Subscription Apps 2026</a>. Hard paywalls reach 10.7%, but Safey keeps a free tier, so 2.1% is the honest comparison.</p>
              </CsText>
              <CsPoints
                items={[
                  { title: 'Benchmark: 2.1%', body: 'Median download-to-paid conversion for freemium apps, measured at day 35.' },
                  {
                    title: 'Hypothesis: above the median',
                    body: 'Two tiers, the trial on the yearly plan and a comparison table at the moment of decision lift Safey past 2.1%.',
                  },
                  {
                    title: 'Guardrail: churn',
                    body: 'AI apps churn about 30% faster in the same report, so a conversion only counts if the subscriber stays.',
                  },
                ]}
              />
              <CsVisuals>
                <SafeyMetrics />
              </CsVisuals>
            </CsSection>
          </CsLayout>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

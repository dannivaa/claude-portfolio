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
  CsScreens,
  CsSection,
  CsText,
  CsVisuals,
  type Screen,
} from '@/components/case-study/CaseStudy';
import { getProject } from '@/lib/projects';
import { GudFoodAffinity, GudFoodBarriers, GudFoodBrief, GudFoodPersona } from '@/components/case-study/research/GudFoodResearch';

const project = getProject('gudfood');

export const metadata: Metadata = {
  title: `${project.name}: ${project.title}`,
  description: project.summary,
};

const screen = (n: number, alt: string): Screen => ({ src: `/images/GudFood/0${n}.png`, alt, width: 1179, height: 2556 });

export default function GudFoodCaseStudy() {
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
                { label: 'Role', value: 'UX/UI Designer' },
                { label: 'Timeline', value: 'Sep — Nov 2024' },
                { label: 'Scope', value: 'Stakeholder Interviews · UX Research · Hypothesis Generation · UI Redesign · Prototyping' },
              ]}
            />

            <CsSection label="Overview" title="Why don’t customers come back after their first order?">
              <CsText>
                <p>GudFood Vdoma is a Ukrainian frozen food delivery service, both a D2C brand and a restaurant marketplace, delivering to 26 cities. The app was struggling with retention: customers ordered once or twice and didn&rsquo;t come back.</p>
              </CsText>
              <CsPoints
                items={[
                  { title: 'Stakeholder interviews', body: 'Started with the product team to understand the business before the research.' },
                  { title: 'User research', body: 'Interviews with customers and, more importantly, with people who had never ordered.' },
                  { title: 'UI redesign', body: 'A feedback system and a full refresh of the core screens.' },
                ]}
              />
            </CsSection>

            <CsSection label="Problem" title="The business was making decisions without a signal from its customers.">
              <CsText>
                <p>The team knew users were churning. They had no structured data on why. No feedback mechanism existed in the app: no ratings, no reviews, no complaint resolution.</p>
                <p>One respondent had complained through Glovo and never heard back. Another was promised a bonus item that never arrived, with no channel to follow up. Users had no voice, and the business had no data.</p>
              </CsText>
            </CsSection>

            <CsSection label="Research" title="Talking to the people who never ordered.">
              <CsText>
                <p>I interviewed 4 people, a deliberate mix: two who had never ordered from GudFood, one who knew the brand but had reservations, and one existing customer. Existing users adapt to friction over time. Non-users show you what&rsquo;s actually blocking growth.</p>
              </CsText>
              <CsVisuals>
                <GudFoodBrief />
                <GudFoodAffinity />
                <GudFoodPersona />
              </CsVisuals>
            </CsSection>

            <CsSection label="Key insights" title="Four barriers stood between a first order and a second.">
              <CsPoints
                items={[
                  { title: 'Delivery cost friction', body: '100–150₴ delivery on a single 200₴ item doesn’t justify a casual purchase.' },
                  { title: 'Offline alternatives win', body: 'Halya Baluvana is nearby: no planning, no waiting, no delivery fee.' },
                  { title: 'A trust gap', body: 'People doubt a frozen dish reheated at home will match the restaurant.' },
                  { title: 'A shrinking assortment', body: 'Marketplace items were decreasing, and not all dishes ship outside Kyiv.' },
                ]}
              />
              <CsVisuals>
                <GudFoodBarriers />
              </CsVisuals>
            </CsSection>

            <CsSection label="Solution" title="A feedback loop that works for users and the business at once.">
              <CsText>
                <p>Three touchpoints: rate the order, read reviews before buying, and see how each restaurant performs. The feedback system only works if people trust the app, so the core screens were rebuilt to the standard people expect from Glovo and Bolt Food, without losing GudFood&rsquo;s identity.</p>
              </CsText>
            </CsSection>

            <CsSection label="Core flows" title="Rate, read, choose with confidence.">
              <CsFlows
                project={project}
                items={[
                  {
                    screen: screen(3, 'Post-order rating sheet: “How was your order?” with stars and quick-feedback tags'),
                    title: 'Post-order rating',
                    body: 'Stars, quick-feedback tags and an optional note, in under 10 seconds.',
                  },
                  {
                    screen: screen(4, 'Dish page for a chicken salad with rating, weight, ingredients and recipe'),
                    title: 'Dish-level reviews',
                    body: 'Social proof on every product page, right where the trust gap bites.',
                  },
                  {
                    screen: screen(7, 'Marketplace with rated restaurant cards: top Asian spots and pizza'),
                    title: 'Restaurant ratings',
                    body: 'Ratings built from dish reviews put pressure on underperforming partners.',
                  },
                ]}
              />
              <CsVisuals>
                <CsScreens
                  project={project}
                  caption="The rest of the refresh: checkout, live tracking and past orders with one-tap reorder."
                  screens={[
                    screen(5, 'Checkout with address, courier or postal delivery, and Apple Pay'),
                    screen(6, 'Active order tracking from accepted to delivered with an estimated arrival'),
                    screen(2, 'Past orders, each with Rate order and Order again actions'),
                  ]}
                />
              </CsVisuals>
            </CsSection>

            <CsSection label="Design decisions" title="Design took the two barriers it could fix, and handed back the two it couldn’t.">
              <CsPoints
                items={[
                  { title: 'Low friction or no feedback', body: 'Under 10 seconds to rate. A complex form gets ignored.' },
                  { title: 'Social proof where the doubt is', body: 'Reviews on the dish page answer “will it taste as good?”' },
                  { title: 'Operations go back to operations', body: 'Delivery pricing and logistics were documented and handed to the business.' },
                ]}
              />
            </CsSection>

            <CsSection label="Outcome" title="Aimed at one number: repeat orders.">
              <CsText>
                <p>The hypothesis: a structured feedback loop, together with a UI that meets expectations set by mature delivery apps, drives a <strong>10–15% improvement in repeat order rate within the first 90 days</strong> after launch.</p>
                <p>The concept was presented to the GudFood Vdoma product team and validated as aligned with their roadmap. It wasn&rsquo;t shipped, but the direction was confirmed as the right next step.</p>
              </CsText>
            </CsSection>
          </CsLayout>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

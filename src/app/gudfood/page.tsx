import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import { CsArticle, CsLayout, CsBlock, CsGallery, CsHeader, CsStage, CsSummary, type Screen } from '@/components/case-study/CaseStudy';
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
            <CsHeader
              project={project}
              facts={[
                { label: 'Role', value: 'UX/UI Designer' },
                { label: 'Timeline', value: 'Sep — Nov 2024' },
                { label: 'Scope', value: 'Stakeholder Interviews · UX Research · Hypothesis Generation · UI Redesign · Prototyping' },
              ]}
            />

            <CsStage
              project={project}
              screens={[
                screen(1, 'GudFood home: delivery address, search, cuisine categories, a first-order discount and a winter sale'),
                screen(2, 'Past orders, each with Rate order and Order again actions'),
                screen(3, 'Post-order rating sheet: “How was your order?” with stars and quick-feedback tags'),
              ]}
            />

            <CsSummary
              items={[
                {
                  label: 'Problem',
                  body: 'Customers ordered once or twice and didn’t return. The app had no feedback system — the team had zero structured data on why people left. The UI felt dated compared to Glovo and Bolt Food.',
                },
                {
                  label: 'Solution',
                  body: 'A closed-loop feedback system: post-order star ratings with quick-feedback tags, dish-level reviews that build social proof, and aggregated restaurant ratings that surface quality issues. Paired with a full UI refresh across all core screens.',
                },
                {
                  label: 'Result',
                  body: 'Concept validated by the GudFood Vdoma product team as aligned with their product roadmap.',
                },
              ]}
            />


            <CsArticle>
              <CsBlock
                label="Background"
                visuals={
                  <>
                    <GudFoodBrief />
                  </>
                }
              >
                <p>GudFood Vdoma is a Ukrainian frozen food delivery service — both a D2C brand and a restaurant marketplace — delivering to 26 cities across Ukraine. The product had an existing iOS app but was struggling with retention. Customers ordered once or twice and didn&rsquo;t come back.</p>
                <p>Before talking to users, I met with the GudFood product team to understand the business context and eliminate assumptions before defining my research questions. The team knew users were churning. They had no structured data on why. No feedback mechanism existed in the app — no ratings, no reviews, no complaint resolution. The business was making product decisions without any signal from its customers.</p>
                <p>That gap defined the project.</p>
              </CsBlock>

              <CsBlock
                label="Discovery"
                visuals={
                  <>
                    <GudFoodAffinity />
                    <GudFoodPersona />
                    <GudFoodBarriers />
                  </>
                }
              >
                <p>I interviewed 4 people — a deliberate mix: two who had never ordered from GudFood, one who knew the brand but had reservations, and one existing app customer. Existing users adapt to friction over time. Non-users show you what&rsquo;s actually blocking growth. The most valuable insights came from people who had never ordered from GudFood at all.</p>
                <p>Four barriers to reordering emerged:</p>
                <ol>
                  <li><span><strong>Delivery cost friction</strong> — 100–150₴ delivery on a single 200₴ item feels disproportionate. The math doesn&rsquo;t justify a casual purchase.</span></li>
                  <li><span><strong>Offline alternatives win</strong> — Halya Baluvan is physically nearby. No planning, no waiting, no delivery fee. Convenience beats everything.</span></li>
                  <li><span><strong>Trust gap</strong> — Users doubt that a frozen dish reheated at home will match restaurant quality at a similar price. The uncertainty kills the decision.</span></li>
                  <li><span><strong>Shrinking assortment</strong> — Marketplace items were decreasing. Not all dishes ship outside Kyiv.</span></li>
                </ol>
                <p>Barriers one and four — delivery cost and shrinking assortment — are operations problems. Design can&rsquo;t fix pricing models or logistics coverage. Those were noted and handed back to the business.</p>
                <p>Barriers two and three were addressable through design. The offline alternative problem pointed to a trust and value perception issue. The trust gap pointed directly at the absence of social proof and user feedback in the app.</p>
                <p>No feedback mechanism existed anywhere in the product. One respondent had submitted a complaint through Glovo and never received any acknowledgment. Another was promised a bonus item that never arrived — with no channel to follow up. Users had no voice, and the business had no data. Without a feedback loop, there was no way to identify which dishes underperformed, which restaurant partners had quality issues, or what specifically drove churn.</p>
              </CsBlock>

              <CsBlock label="Solution">
                <p>The core intervention was a three-touchpoint feedback loop designed to work for both users and the business simultaneously.</p>
                <p><strong>Post-order rating</strong> — A bottom sheet appears after delivery: star rating, quick-feedback tags (Clear communications, Fast resolution, Smooth experience), and an optional text field. Under 10 seconds to complete. Low friction was non-negotiable — a complex feedback form gets ignored.</p>
                <p><strong>Dish-level reviews</strong> — Each product page surfaces reviews from other customers: name, rating, comment. This directly addresses the trust gap. Users unsure whether a frozen dish will taste as good as the restaurant version now have social proof to inform that decision.</p>
                <p><strong>Aggregated restaurant ratings</strong> — Marketplace restaurant cards display ratings calculated from individual dish reviews. This gives users a reliable quality signal when browsing and creates accountability pressure on underperforming partners.</p>
                <p>The feedback system only works if users trust the app enough to engage with it. The full UI redesign brought the experience in line with what users expect from mature delivery platforms like Glovo and Bolt Food — without erasing GudFood&rsquo;s own identity.</p>
                <p>Homepage, product detail, orders &amp; tracking, profile, and support were all rebuilt around what a new user needs to see first — and what a returning user needs to act on quickly.</p>
              </CsBlock>

              <CsBlock label="Result">
                <p>The primary metric this design targets is repeat order rate.</p>
                <p>GudFood&rsquo;s core problem was users ordering once or twice and not returning. Every design decision in this project maps back to moving that number.</p>
                <p>The feedback system is the primary lever. Dish-level reviews and aggregated restaurant ratings close the trust gap that was blocking reorders — users can now make confident purchase decisions based on other customers&rsquo; experience. Post-order ratings give the business the data it needs to identify and fix quality issues that were previously invisible.</p>
                <p>The hypothesis: a structured feedback loop, combined with a modernized UI that meets user expectations from mature delivery platforms, drives a <strong>10–15% improvement in repeat order rate within the first 90 days post-launch.</strong></p>
                <p>The concept was presented to the GudFood Vdoma product team and validated as aligned with their product roadmap. Not shipped into production — but the direction was confirmed as the right next step.</p>
              </CsBlock>
            </CsArticle>

            <CsGallery
              project={project}
              rows={[
                [
                  screen(4, 'Dish page for a chicken salad with rating, weight, ingredients and recipe'),
                  screen(5, 'Checkout with address, courier or postal delivery, and Apple Pay'),
                  screen(6, 'Active order tracking from accepted to delivered with an estimated arrival'),
                ],
                [
                  screen(7, 'Marketplace with rated restaurant cards: top Asian spots and pizza'),
                  screen(8, 'Restaurant menu for Hanh cafe & market, filtered to soups'),
                  screen(9, 'Profile with order count, favourites, payment methods, discounts and support'),
                ],
              ]}
            />
          </CsLayout>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

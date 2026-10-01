import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import {
  CsFacts,
  CsFigure,
  CsGap,
  CsHeader,
  CsHeroMedia,
  CsLayout,
  CsNote,
  CsPoints,
  CsSection,
  CsText,
  CsVisuals,
} from '@/components/case-study/CaseStudy';
import { LyxonnMarketMaker, LyxonnOrders, LyxonnSystem, LyxonnWallets } from '@/components/case-study/lyxonn/LyxonnConcept';
import { getProject } from '@/lib/projects';

const project = getProject('lyxonn');

export const metadata: Metadata = {
  title: `${project.name}: ${project.title}`,
  description: project.summary,
  // Kept out of search while the page still carries marked gaps (CsGap)
  robots: { index: false },
};

export default function LyxonnCaseStudy() {
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
                { label: 'Role', value: 'Sole Product Designer' },
                { label: 'Timeline', value: '2025 – 2026' },
                { label: 'Scope', value: 'Flow Optimization · Screen Consolidation · Market Maker Mode · Wallets · Design System' },
              ]}
            />
            <CsNote>
              <strong>Every screen on this page is a concept recreation.</strong> The shipped design stays under NDA, so
              these were built from scratch for the portfolio, and the names and values in them are illustrative. The
              facts in the text are real.
            </CsNote>

            <CsSection label="Overview" title="An order queue where funds move, and mistakes don’t get a second try.">
              <CsText>
                <p>
                  Lyxonn is a crypto exchanger running regulated flows, KYC and AML among them. Its admin panel is an
                  internal tool with 60+ users, and at its core is the finance team that processes exchange orders: scan
                  the order, gather every relevant piece of data, process it and send the funds to the end user.
                </p>
                <p>
                  Funds move, so the work has zero tolerance for error. That makes the panel a different product from the
                  consumer app, with a different mental model and a different measure of success.
                </p>
              </CsText>
              <CsPoints
                items={[
                  { title: 'Sole product designer', body: 'No studio on this project. Every decision in it is mine.' },
                  { title: 'Optimization, not a rewrite', body: 'Existing flows improved step by step instead of a full redesign.' },
                  { title: 'Fewer screens per order', body: 'Screens consolidated around the order the finance team is working on.' },
                ]}
              />
            </CsSection>

            <CsSection label="Problem" title="Slow completions, and a finance team that said so.">
              <CsText>
                <p>
                  Orders took too long to complete, and the finance team complained about it. For the people sending
                  funds, every extra step is time spent on an order that can&rsquo;t afford a mistake.
                </p>
              </CsText>
              <CsGap
                title="Diagnosis"
                items={[
                  'Where the time went: which steps or screens slowed an order down',
                  'How the problem was diagnosed: observation, interviews, complaint review',
                ]}
              />
            </CsSection>

            <CsSection label="Approach" title="Optimize the flows people already know, instead of rebuilding them.">
              <CsText>
                <p>
                  The panel was improved incrementally rather than redesigned from scratch, and screens were consolidated
                  so that one order needs less moving around.
                </p>
              </CsText>
              <CsVisuals>
                <CsFigure
                  tag="Concept · Order processing"
                  title="One order, one screen: client, amounts, payout and checks together"
                  caption="Concept recreation, values illustrative. The queue stays in view, every check sits next to the data it checks, and the send button repeats the exact amount it will move."
                >
                  <LyxonnOrders />
                </CsFigure>
              </CsVisuals>
              <CsGap
                title="Approach details"
                items={[
                  'Why incremental over a full redesign: the constraint or risk behind it',
                  'Which screens were merged, and what was removed',
                ]}
              />
            </CsSection>

            <CsSection label="Design decisions" title="What was cut, and why.">
              <CsGap
                title="Decisions and constraints"
                items={[
                  'Key decisions, and what was removed or simplified',
                  'Tradeoffs made along the way',
                  'Constraints: regulatory, engineering',
                ]}
              />
            </CsSection>

            <CsSection label="Related work" title="Two more surfaces for Karbovanets, the exchange product.">
              <CsText>
                <p>
                  Alongside the order flows: a Market Maker mode and a Wallets page for Karbovanets, both inside the same
                  admin panel.
                </p>
              </CsText>
              <CsVisuals>
                <CsFigure
                  tag="Concept · Market Maker mode"
                  title="One switch, the parameters behind it, and a way to stop"
                  caption="Concept recreation, values illustrative. Pricing, the inventory band and a pause control sit next to live quotes, and every change lands in a log."
                >
                  <LyxonnMarketMaker />
                </CsFigure>
                <CsFigure
                  tag="Concept · Wallets"
                  title="Balances per asset and network, with health in the row"
                  caption="Concept recreation, values illustrative. A wallet’s state reads from the table itself, and details open beside it instead of on a new page."
                >
                  <LyxonnWallets />
                </CsFigure>
              </CsVisuals>
              <CsGap title="Shareable screens" items={['Which shipped screens, if any, can be shown under NDA']} />
            </CsSection>

            <CsSection label="Design system" title="One system in Figma, more than one product surface.">
              <CsText>
                <p>
                  The design system behind the work is built and maintained in Figma, and it spans product surfaces
                  rather than serving the admin panel alone.
                </p>
              </CsText>
              <CsVisuals>
                <CsFigure
                  tag="Concept · Design system"
                  title="Tokens and components the concept screens are built from"
                  caption="A concept sheet for the screens on this page. The real system stays in Figma under NDA."
                >
                  <LyxonnSystem />
                </CsFigure>
              </CsVisuals>
            </CsSection>

            <CsSection label="Outcome" title="Fewer complaints from the people doing the work.">
              <CsText>
                <p>
                  Qualitative: complaints from the finance team went down after the changes.
                </p>
              </CsText>
              <CsGap
                title="Measured outcomes"
                items={[
                  '~35% faster completion: confirm how it was measured, and what exactly got faster',
                  'Error rate before and after',
                ]}
              />
            </CsSection>
          </CsLayout>
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}

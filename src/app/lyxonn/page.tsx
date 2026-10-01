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
import { AdminConfirm, AdminMarketMaker, AdminOrders, AdminParts, AdminWallets } from '@/components/case-study/admin/AdminConcept';
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
                { label: 'Role', value: 'Product Designer' },
                { label: 'Timeline', value: '2025 – 2026' },
                { label: 'Scope', value: 'Flow Optimization · Screen Consolidation · Market Maker Mode · Wallets · Design System' },
              ]}
            />
            <CsNote>
              <strong>Every screen on this page is a concept recreation.</strong> The shipped design stays under NDA, so
              these were built from scratch for the portfolio: product names, people and values in them are invented. The
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
                  { title: 'Every decision mine', body: 'No studio on this project: product design was mine end to end.' },
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
                  title="One order, one screen: client, payout, incoming transfer and checks together"
                  caption="Concept recreation. The queue stays in view with time-in-queue on every row, each check sits next to the data it checks, and the order moves on from a single bar at the bottom."
                >
                  <AdminOrders />
                </CsFigure>
                <CsFigure
                  tag="Concept · Confirm payout"
                  title="Speed everywhere else, one deliberate pause where funds leave"
                  caption="Concept recreation. The amount and recipient are restated in full, and typing the card’s last four digits is the one step that can’t be skipped before an irreversible transfer."
                >
                  <AdminConfirm />
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

            <CsSection label="Related work" title="Two more surfaces for a second exchange product.">
              <CsText>
                <p>
                  Alongside the order flows: a Market Maker mode and a Wallets page for the company&rsquo;s second
                  exchange product, both inside the same admin panel.
                </p>
              </CsText>
              <CsVisuals>
                <CsFigure
                  tag="Concept · Market Maker mode"
                  title="One switch, the parameters behind it, and a way to stop"
                  caption="Concept recreation. Mid price and the quoted band sit above the parameters that shape them, live quotes run alongside, and every change is signed and logged."
                >
                  <AdminMarketMaker />
                </CsFigure>
                <CsFigure
                  tag="Concept · Wallets"
                  title="Custody at a glance, and the one wallet that needs action"
                  caption="Concept recreation. Allocation sits above the table, health and free balance read from each row, and only the wallet below threshold gets an action."
                >
                  <AdminWallets />
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
                  tag="Concept · Components"
                  title="The pieces the concept screens are built from"
                  caption="Component specimens from the screens above. The real system stays in Figma under NDA."
                >
                  <AdminParts />
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

import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import Footer from '@/components/Footer';
import {
  CsFacts,
  CsFigure,
  CsHeader,
  CsHeroMedia,
  CsLayout,
  CsNote,
  CsPoints,
  CsSection,
  CsText,
  CsVisuals,
} from '@/components/case-study/CaseStudy';
import { AdminConfirm, AdminMarketMaker, AdminOrders, AdminWallets } from '@/components/case-study/admin/AdminConcept';
import { getProject } from '@/lib/projects';

const project = getProject('quorra');

export const metadata: Metadata = {
  title: `${project.name}: ${project.title}`,
  description: project.summary,
};

export default function QuorraCaseStudy() {
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
                { label: 'Timeline', value: '2026' },
                { label: 'Scope', value: 'Flow Optimization · Screen Consolidation · Market Maker Mode · Wallets · Design System' },
              ]}
            />
            <CsNote>
              <strong>Quorra is a stand-in name, and every screen here is a concept recreation.</strong> The company and
              the shipped design stay under NDA, so the screens were built from scratch for the portfolio, with invented
              names, people and values.
            </CsNote>

            <CsSection label="Overview" title="An order queue where funds move, and mistakes don’t get a second try.">
              <CsText>
                <p>
                  Quorra is a crypto exchanger running regulated flows, KYC and AML among them. Its admin panel is an
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
                  { title: 'A view for every order', body: 'A dense table replaced by a space built around the order in hand.' },
                  { title: 'Shipped step by step', body: 'Rolled out in stages instead of one big switch.' },
                ]}
              />
            </CsSection>

            <CsSection label="Problem" title="A dense table, and orders that took too long.">
              <CsText>
                <p>
                  Orders were worked from a dense table. There was no space to look at a single order on its own, and the
                  information inside it had no clear hierarchy, so finding the right data took time.
                </p>
                <p>
                  Watching the finance team at work showed where that time went, and the product metric confirmed it:
                  time to completion was long.
                </p>
              </CsText>
            </CsSection>

            <CsSection label="Approach" title="A new way to handle an order, introduced step by step.">
              <CsText>
                <p>
                  I redesigned how an order gets handled. Instead of a row in a table, each order now opens in its own
                  view, with its information regrouped so the hierarchy finally makes sense. It shipped in stages rather
                  than as one big redesign, for two reasons.
                </p>
              </CsText>
              <CsPoints
                items={[
                  {
                    title: 'The team knew the old view',
                    body: 'They were used to it, and switching everything at once would have slowed them down.',
                  },
                  {
                    title: 'Sensitive sections came first',
                    body: 'Each one was understood before it changed, so the finance team made no mistakes along the way.',
                  },
                ]}
              />
              <CsVisuals>
                <CsFigure
                  tag="Order processing"
                  title="One order, one screen: client, payout, incoming transfer and checks together"
                  caption="The queue stays in view with time-in-queue on every row, each check sits next to the data it checks, and the order moves on from a single bar at the bottom."
                >
                  <AdminOrders />
                </CsFigure>
                <CsFigure
                  tag="Confirm payout"
                  title="Speed everywhere else, one deliberate pause where funds leave"
                  caption="The amount and recipient are restated in full, and typing the card’s last four digits is the one step that can’t be skipped before an irreversible transfer."
                >
                  <AdminConfirm />
                </CsFigure>
              </CsVisuals>
            </CsSection>

            <CsSection label="Design decisions" title="A completely new look, and the backlash that came with it.">
              <CsPoints
                items={[
                  { title: 'From table to order view', body: 'A dedicated space for the order in hand, not a row among dozens.' },
                  { title: 'A hierarchy that reads', body: 'Information regrouped and reordered, so the next thing to check is where you look.' },
                  {
                    title: 'Backlash, accepted',
                    body: 'The new look was a big change and pushback was expected. A month of metrics settled it.',
                  },
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
                  tag="Market Maker mode"
                  title="One switch, the parameters behind it, and a way to stop"
                  caption="Mid price and the quoted band sit above the parameters that shape them, live quotes run alongside, and every change is signed and logged."
                >
                  <AdminMarketMaker />
                </CsFigure>
                <CsFigure
                  tag="Wallets"
                  title="Custody at a glance, and the one wallet that needs action"
                  caption="Allocation sits above the table, health and free balance read from each row, and only the wallet below threshold gets an action."
                >
                  <AdminWallets />
                </CsFigure>
              </CsVisuals>
            </CsSection>

            <CsSection label="Outcome" title="Orders completed about 35% faster within a month.">
              <CsText>
                <p>
                  Time to completion covers an order from start to finish: taken into work, every check done, funds sent
                  correctly. Over the first month it came down by about 35%, measured through the product metric and
                  backed by feedback from the finance team.
                </p>
              </CsText>
              <CsPoints
                items={[
                  { title: '~35% faster completion', body: 'From taking an order into work to sending the funds.' },
                  { title: 'Fewer complaints', body: 'Qualitative: fewer complaints from the finance team about the panel.' },
                  { title: 'Tuned after launch', body: 'Small changes made a few sections easier to spot.' },
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

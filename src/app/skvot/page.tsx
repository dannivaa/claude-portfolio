import type { Metadata } from 'next';
import '@/styles/case-study.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CsArticle, CsLayout, CsBlock, CsGallery, CsHeader, CsStage, CsSummary, type Screen } from '@/components/case-study/CaseStudy';
import { getProject } from '@/lib/projects';

const project = getProject('skvot');

export const metadata: Metadata = {
  title: `${project.name}: ${project.title}`,
  description: project.summary,
};

const screen = (n: number, alt: string): Screen => ({ src: `/images/Skvot/0${n}.png`, alt, width: 1179, height: 2556 });

export default function SkvotCaseStudy() {
  return (
    <>
      <Navbar />

      <main className="cs-main">
        <CsLayout project={project}>
          <CsHeader
            project={project}
            facts={[
              { label: 'Role', value: 'UX/UI Designer' },
              { label: 'Timeline', value: 'Mar — Apr 2024' },
              { label: 'Scope', value: 'UX Research · Competitor Analysis · Wireframing · UI Design · Prototyping' },
            ]}
          />

          <CsStage
            project={project}
            screens={[
              screen(1, 'Skvot sign-in screen with email, password, Google and Apple options'),
              screen(2, 'Home: the week’s schedule of lectures and meetings above the latest articles'),
              screen(3, 'Culture tab: courses, articles and filters in one library'),
            ]}
          />

          <CsSummary
            items={[
              {
                label: 'Problem',
                body: 'The web platform had outdated flows and no mobile app — neither did any competitor. Students relied on Telegram and email to communicate with lecturers. There was no native mobile solution in the market.',
              },
              {
                label: 'Solution',
                body: 'A 4-tab native app shaped entirely by research: a weekly schedule and content feed, a full culture library, a My Courses hub with grades and instructor feedback, and a direct chat replacing Telegram.',
              },
              {
                label: 'Result',
                body: '0→1 concept delivered in 4 weeks. The research-driven decision to cut homework submission for students and keep lecturer grading is the strongest proof of product thinking — building the right thing, not just the obvious thing.',
              },
            ]}
          />


          <CsArticle>
            <CsBlock label="Background">
              <p>Skvot is Ukraine&rsquo;s largest pop-culture education platform — offering courses across design, film, music, and creative careers. The entire product lived on web. There was no mobile app, and no competitor had one either. This was a 0→1 opportunity in an uncontested space, with no existing mobile playbook to follow.</p>
            </CsBlock>

            <CsBlock label="Discovery">
              <p>Before designing a single screen, one question had to be answered: should the app include homework submission and grading? It seemed like an obvious feature for an education product. Research said otherwise.</p>
              <p><strong>82%</strong> of students submit homework in formats incompatible with mobile — PSD, AI, Figma links. Three out of four students physically cannot submit their work through a phone.</p>
              <p><strong>28 of 34</strong> lecturers cannot open student homework files on a smartphone. Yet the majority of them want to give grades and feedback via mobile — because typing text and assigning scores works fine on a phone.</p>
              <p>The decision: cut homework submission for students entirely. Build grading and feedback tools for lecturers. Research eliminated a near-zero-adoption feature and redirected scope before a single screen was designed.</p>
            </CsBlock>

            <CsBlock label="Solution">
              <p><strong>Chat</strong> — Students were context-switching between three separate places to complete one learning loop: watching a lecture on the website, messaging on Telegram, and checking feedback inside a personal cabinet. Chat brings all of that into one native experience — direct messaging between students, lecturers, and support, without ever leaving the app.</p>
              <p><strong>Culture</strong> — Skvot&rsquo;s web platform scattered content across disconnected sections. Courses lived in one place, articles in another, podcasts somewhere else. Culture consolidates the full content library — courses, articles, podcasts, video guides — under one brand-aligned tab.</p>
              <p><strong>My Courses</strong> — Enrolled courses, lecture lists, assignment status, instructor grades and feedback — all accessible without leaving the app. Lecturers can grade and respond directly from mobile. The hypothesis: faster feedback turnaround keeps students engaged and reduces drop-off between assignments.</p>
              <p><strong>Homepage</strong> — Weekly schedule at the top, latest content feed below. Students know what&rsquo;s next without digging. Minimal top navigation — profile, search, notifications only.</p>
            </CsBlock>

            <CsBlock label="Result">
              <p>Each decision maps to a metric the product would track post-launch.</p>
              <p><strong>Daily Active Users</strong> — Skvot had zero mobile presence before this. A native app opens DAU as a trackable metric for the first time.</p>
              <p><strong>Course completion rate</strong> — Chat removes the communication friction that causes students to disengage mid-course. Faster lecturer feedback means fewer students falling through the gaps between assignments.</p>
              <p><strong>Content consumption</strong> — The Culture tab consolidates what was previously scattered. Easier discovery means more sessions that go beyond just the enrolled course.</p>
              <p><strong>Feedback turnaround time</strong> — Mobile-accessible grading for lecturers reduces the time between submission and response. The design removes the device barrier that 28 of 34 lecturers faced.</p>
            </CsBlock>
          </CsArticle>

          <CsGallery
            project={project}
            rows={[
              [
                screen(4, 'Course page for UX/UI for game development with dates and programme'),
                screen(5, 'Article reader in the Culture tab'),
                screen(6, 'My Courses with progress on current courses'),
              ],
              [
                screen(7, 'Lecture page with the homework brief and lecturer feedback'),
                screen(8, 'Chat list with lecturers, classmates and support'),
                screen(9, 'Conversation with a lecturer about homework feedback'),
              ],
            ]}
          />
        </CsLayout>
      </main>

      <Footer />
    </>
  );
}

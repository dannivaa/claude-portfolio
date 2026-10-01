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
import { SkvotCompetitors, SkvotHomeStructure, SkvotMoodboard, SkvotProcess } from '@/components/case-study/research/SkvotResearch';

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

      <PageTransition>
        <main className="cs-main">
          <CsLayout project={project}>
            <CsHeader project={project} />
            <CsHeroMedia project={project} />
            <CsFacts
              project={project}
              facts={[
                { label: 'Role', value: 'UX/UI Designer' },
                { label: 'Timeline', value: 'Mar — Apr 2024' },
                { label: 'Scope', value: 'UX Research · Competitor Analysis · Wireframing · UI Design · Prototyping' },
              ]}
            />

            <CsSection label="Overview" title="What should Skvot’s first mobile app do, and what should it leave out?">
              <CsText>
                <p>Skvot is Ukraine&rsquo;s largest pop-culture education platform, with courses across design, film, music and creative careers. The whole product lived on the web. There was no mobile app, and no competitor had one either: a 0→1 opportunity with no playbook to follow.</p>
              </CsText>
              <CsVisuals>
                <SkvotProcess />
              </CsVisuals>
            </CsSection>

            <CsSection label="Problem" title="Learning happened in three places at once.">
              <CsText>
                <p>Students watched lectures on the website, messaged lecturers on Telegram and checked feedback in a personal cabinet. The web platform had outdated flows, and content was scattered across disconnected sections.</p>
              </CsText>
            </CsSection>

            <CsSection label="Research" title="Learning from competitors, and from pop culture.">
              <CsText>
                <p>I mapped where each learning platform&rsquo;s UX holds up and where it breaks, and built the visual direction from the culture Skvot already lives in rather than from other learning apps.</p>
              </CsText>
              <CsVisuals>
                <SkvotCompetitors />
                <SkvotMoodboard />
              </CsVisuals>
            </CsSection>

            <CsSection label="Key insight" title="Research cut the “obvious” feature.">
              <CsText>
                <p>Homework submission seemed like a given for an education app. <strong>82%</strong> of students submit in formats a phone can&rsquo;t handle: PSD, AI, Figma links. <strong>28 of 34</strong> lecturers can&rsquo;t open those files on a smartphone, yet most of them want to grade and leave feedback from it.</p>
              </CsText>
              <CsPoints
                items={[
                  { title: 'Cut submission for students', body: 'A near-zero-adoption feature, removed before a single screen was designed.' },
                  { title: 'Build grading for lecturers', body: 'Scores and written feedback work fine on a phone.' },
                ]}
              />
            </CsSection>

            <CsSection label="Solution" title="Four tabs that keep the whole learning loop in one app.">
              <CsText>
                <p>A weekly schedule and content feed, a full culture library, a My Courses hub with grades and feedback, and a direct chat that replaces Telegram.</p>
              </CsText>
              <CsVisuals>
                <SkvotHomeStructure />
              </CsVisuals>
            </CsSection>

            <CsSection label="Core flows" title="From this week’s lectures to a lecturer’s reply.">
              <CsFlows
                project={project}
                items={[
                  {
                    screen: screen(2, 'Home: the week’s schedule of lectures and meetings above the latest articles'),
                    title: 'Home',
                    body: 'The week’s schedule on top, the latest content below. No digging.',
                  },
                  {
                    screen: screen(3, 'Culture tab: courses, articles and filters in one library'),
                    title: 'Culture',
                    body: 'Courses, articles, podcasts and guides under one brand-aligned tab.',
                  },
                  {
                    screen: screen(9, 'Conversation with a lecturer about homework feedback'),
                    title: 'Chat',
                    body: 'Students, lecturers and support, without leaving the app.',
                  },
                ]}
              />
              <CsVisuals>
                <CsScreens
                  project={project}
                  caption="My Courses: progress, a lecture with its brief and the lecturer’s feedback."
                  screens={[
                    screen(6, 'My Courses with progress on current courses'),
                    screen(7, 'Lecture page with the homework brief and lecturer feedback'),
                    screen(4, 'Course page for UX/UI for game development with dates and programme'),
                  ]}
                />
              </CsVisuals>
            </CsSection>

            <CsSection label="Outcome" title="A 0→1 concept in four weeks, and a metric for every decision.">
              <CsPoints
                items={[
                  { title: 'Daily active users', body: 'A native app makes DAU trackable for the first time.' },
                  { title: 'Course completion', body: 'Chat and faster feedback mean fewer students lost between assignments.' },
                  { title: 'Content consumption', body: 'One Culture tab, easier discovery, sessions beyond the enrolled course.' },
                  { title: 'Feedback turnaround', body: 'Grading from a phone removes the device barrier 28 of 34 lecturers faced.' },
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

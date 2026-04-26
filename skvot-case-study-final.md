# SKVOT — Designing a mobile app for Ukraine's largest pop-culture school

**Tags:** UX/UI Design · Education · Mobile App Design  
**Year:** 2024

---

## Metrics

| 15+ | 3 | 4 weeks | 0 → 1 |
|-----|---|---------|-------|
| User interviews | Competitors analyzed | Design timeline | Concept from scratch |

---

## Project Metadata

| Field | Value |
|-------|-------|
| Role | UX/UI Designer (Mobile) — Solo |
| Team | 1 Designer, 1 Mentor |
| Timeline | March – April 2024 |
| Scope | UX Research, Competitor Analysis, Wireframing, UI Design, Prototyping |
| Platform | iOS |

---

## Background

SKVOT is Ukraine's largest pop-culture education platform — offering courses across design, film, music, and creative careers. The entire product lived on web. There was no mobile app, and no competitor had one either. This was a 0→1 opportunity in an uncontested space, with no existing mobile playbook to follow.

---

## Discovery

Before designing a single screen, one question had to be answered: **should the app include homework submission and grading?**

It seemed like an obvious feature for an education product. Research said otherwise.

**Method:** 15+ qualitative interviews with students and lecturers currently using SKVOT courses.

**What we found:**

**82%** of students submit homework in formats incompatible with mobile — PSD, AI, Figma links. Three out of four students physically cannot submit their work through a phone.

**28 of 34** lecturers cannot open student homework files on a smartphone. Yet the majority of them want to give grades and feedback via mobile — because typing text and assigning scores works fine on a phone.

**The decision:** Cut homework submission for students entirely. Build grading and feedback tools for lecturers. Research eliminated a near-zero-adoption feature and redirected scope before a single screen was designed.

---

## Solution

Every structural decision in the app has a reason behind it.

**Chat — consolidating a fragmented communication flow**  
Students were context-switching between three separate places to complete one learning loop: watching a lecture on the website, messaging on Telegram, and checking feedback inside a personal cabinet. Chat brings all of that into one native experience — direct messaging between students, lecturers, and support, without ever leaving the app. The hypothesis: reducing that friction increases course completion rate.

**Culture — one tab for everything SKVOT produces**  
SKVOT's web platform scattered content across disconnected sections. Courses lived in one place, articles in another, podcasts somewhere else. Culture consolidates the full content library — courses, articles, podcasts, video guides — under one brand-aligned tab. The name reflects how SKVOT positions itself. The hypothesis: a single content hub increases content discovery and time in app.

**My Courses — the learning loop in one view**  
Enrolled courses, lecture lists, assignment status, instructor grades and feedback — all accessible without leaving the app. Lecturers can grade and respond directly from mobile. The hypothesis: faster feedback turnaround keeps students engaged and reduces drop-off between assignments.

**Homepage — what matters right now**  
Weekly schedule at the top, latest content feed below. Students know what's next without digging. Minimal top navigation — profile, search, notifications only.

---

## Result

This concept was built with measurement in mind. Each decision maps to a metric the product would track post-launch.

**Daily Active Users** — SKVOT had zero mobile presence before this. A native app opens DAU as a trackable metric for the first time.

**Course completion rate** — Chat removes the communication friction that causes students to disengage mid-course. Faster lecturer feedback means fewer students falling through the gaps between assignments.

**Content consumption** — The Culture tab consolidates what was previously scattered. Easier discovery means more sessions that go beyond just the enrolled course.

**Feedback turnaround time** — Mobile-accessible grading for lecturers reduces the time between submission and response. The design removes the device barrier that 28 of 34 lecturers faced.

These hypotheses would be validated through post-launch tracking. The design was built around outcomes, not just screens.

---

## Key Learnings

**Research saves you from building the wrong thing**  
The homework submission feature seemed obvious. Fifteen minutes of interviews revealed 82% of students can't submit their file formats on mobile. Without research, a near-zero-adoption feature would have shipped and consumed development resources.

**The real UX problem was communication, not content**  
Students weren't struggling to find courses — they were struggling to stay connected to their lecturers. The Chat tab solved a behavioral problem that no amount of UI polish would have fixed.

**First-mover advantage needs a clear scope**  
No competitor had a mobile app. That's exciting and dangerous at the same time. Defining four tabs early kept the scope manageable and prevented the product from trying to do everything at once.

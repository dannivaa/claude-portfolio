'use client';

import '@/styles/editorial.css';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { ChromaticHeadline } from '@/components/ui/chromatic-headline';
import { createPointerLens } from '@/components/ui/pointer-lens';
import { FadeIn } from '@/components/ui/fade-in';
import { EMAIL } from '@/lib/site';

const EXPERIENCE = [
  { year: '2026', company: 'Homecrowd', role: 'Designer' },
  { year: '2025', company: 'Lyxonn', role: 'Product Designer' },
  { year: '2024', company: 'Cake Alliance', role: 'UX/UI Designer' },
  { year: '2024', company: 'GudFood Vdoma', role: 'Product Designer, freelance' },
  { year: '2024', company: 'Skvot', role: 'UX/UI Designer' },
];

// Work under NDA: no screens, only what can be said publicly.
const NDA_WORK = [
  {
    meta: ['Lyxonn', 'iOS · Android · Web', '2025–'],
    figure: '−35%',
    title: 'Fewer Steps to a Trade',
    body: 'Task completion time on the core exchange transaction flow, after restructuring its information architecture. Validated in usability testing.',
  },
  {
    meta: ['Homecrowd', 'Web · Admin portal', '2026–'],
    figure: '100+',
    title: 'One System, Every Screen',
    body: 'Existing screens moved onto a design system built fast with Claude, then set up for scaling and visual personalization.',
  },
];

const CASES = [
  {
    href: '/skvot',
    image: '/images/Skvot/skvot-thumbnail.png',
    alt: 'SKVOT mobile app screens',
    title: 'A Bridge Between Student and Lecturer',
    meta: ['Skvot', 'iOS · 0→1 concept', '2024'],
  },
  {
    href: '/gudfood',
    image: '/images/GudFood/gudfood-thumbnail.png',
    alt: 'GudFood Vdoma app redesign screens',
    title: 'A Reason to Return',
    meta: ['GudFood Vdoma', 'iOS · Freelance', '2024'],
  },
  {
    href: '/safey',
    image: '/images/Safey/safey-thumbnail.png',
    alt: 'Safey AI companion paywall screens',
    title: 'The Price of Company',
    meta: ['Safey', 'iOS · Sprint concept'],
  },
];

const BUILDS_PREVIEW = ['Design vacancy scout bot', 'USDT-to-EUR Siri Shortcut', 'Community contributions tracker', 'This portfolio'];

const PRINCIPLES = [
  {
    title: 'Subtract first',
    body: 'Research decides what goes. On Skvot, interviews cut homework submission from the app: 82% of students submit files a phone can’t handle.',
  },
  {
    title: 'Constraints are the brief',
    body: 'KYC and AML rules shape every onboarding screen at Lyxonn. The work is keeping people moving inside them.',
  },
  {
    title: 'Every decision has a reason',
    body: 'Hypotheses get written as a primary metric, an expected direction and a guardrail. Working with an external creative lead made explaining the why a habit.',
  },
];

function Meta({ items }: { items: string[] }) {
  return (
    <p className="ed-meta">
      {items.map((item, i) => (
        <span key={item}>
          {i > 0 && <span className="ed-meta__dot" aria-hidden="true"> · </span>}
          {item}
        </span>
      ))}
    </p>
  );
}

function SectionHead({ index, title, aside }: { index: string; title: string; aside?: string }) {
  return (
    <div className="ed-section-head">
      <span className="ed-label">{index}</span>
      <h2 className="ed-section-head__title">{title}</h2>
      <span className="ed-section-head__rule" aria-hidden="true" />
      {aside && <span className="ed-label">{aside}</span>}
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [lens] = useState(createPointerLens);

  useEffect(() => {
    if (heroRef.current) return lens.attach(heroRef.current);
  }, [lens]);

  return (
    <div className="ed-page">
      <SiteHeader />

      <main>
        <section className="ed-hero" ref={heroRef}>
          <div className="ed-hero__main">
            <p className="ed-label ed-rise" style={{ animationDelay: '0.05s' }}>
              Danylo Ivanov — Kyiv
            </p>
            <div className="ed-rise" style={{ animationDelay: '0.15s' }}>
              <ChromaticHeadline
                as="h1"
                className="ed-hero__title"
                text="Product designer who builds."
                emphasis={['builds.']}
                lens={lens}
                frameRef={heroRef}
                radius={0.5}
              />
            </div>
            <p className="ed-hero__lede ed-rise" style={{ animationDelay: '0.3s' }}>
              Two years designing mobile apps, web products and the admin tools behind them. Currently at Lyxonn and
              Homecrowd.
            </p>
          </div>

          <aside className="ed-hero__side ed-rise" style={{ animationDelay: '0.45s' }} aria-label="Experience">
            <p className="ed-label">Experience</p>
            <ol className="ed-timeline">
              {EXPERIENCE.map(({ year, company, role }) => (
                <li key={company} className="ed-timeline__row">
                  <span className="ed-timeline__year">{year}</span>
                  <span className="ed-timeline__company">{company}</span>
                  <span className="ed-timeline__role">{role}</span>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        <section id="work" className="ed-section">
          <SectionHead index="01" title="Selected work" aside={`${NDA_WORK.length + CASES.length} projects`} />

          <div className="ed-grid ed-grid--nda">
            {NDA_WORK.map((w) => (
              <FadeIn key={w.title}>
                <article className="ed-nda">
                  <Meta items={w.meta} />
                  <p className="ed-nda__figure">{w.figure}</p>
                  <div className="ed-nda__text">
                    <h3 className="ed-card-title">{w.title}</h3>
                    <p className="ed-nda__body">{w.body}</p>
                  </div>
                  <a
                    className="ed-nda__cta"
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Walkthrough: ${w.title}`)}`}
                  >
                    Under NDA — walkthrough on a call <span aria-hidden="true">→</span>
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="ed-grid">
            {CASES.map((c, i) => (
              <FadeIn key={c.href} delay={(i % 2) * 0.08}>
                <Link href={c.href} className="ed-case">
                  <div className="ed-case__image">
                    <Image src={c.image} alt={c.alt} width={2112} height={1308} sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                  <div className="ed-case__caption">
                    <h3 className="ed-card-title">
                      {c.title} <span className="ed-case__arrow" aria-hidden="true">→</span>
                    </h3>
                    <Meta items={c.meta} />
                  </div>
                </Link>
              </FadeIn>
            ))}

            <FadeIn delay={0.08}>
              <Link href="/builds" className="ed-builds-card">
                <p className="ed-label">Off the clock</p>
                <ol className="ed-builds-card__list">
                  {BUILDS_PREVIEW.map((b, i) => (
                    <li key={b}>
                      <span className="ed-builds-card__num">{String(i + 1).padStart(2, '0')}</span>
                      {b}
                    </li>
                  ))}
                </ol>
                <p className="ed-card-title">
                  Side builds <span className="ed-case__arrow" aria-hidden="true">→</span>
                </p>
              </Link>
            </FadeIn>
          </div>
        </section>

        <section className="ed-section">
          <SectionHead index="02" title="How the work gets done" />
          <ol className="ed-principles">
            {PRINCIPLES.map((p, i) => (
              <li key={p.title}>
                <FadeIn delay={i * 0.08} className="ed-principle">
                  <span className="ed-principle__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="ed-principle__title">{p.title}</h3>
                  <p className="ed-principle__body">{p.body}</p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

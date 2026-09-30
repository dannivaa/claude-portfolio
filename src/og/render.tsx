import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Project } from '@/lib/projects';

// Build-time only: Open Graph cards for link previews (LinkedIn, Slack, email).
// Satori needs TTF/OTF, so these are static instances rather than the site's woff2 files.

const PAPER = '#fbfaf7';
const INK = '#141412';
const MUTED = '#6c6a64';
const LINE = 'rgba(20, 20, 18, 0.12)';

const asset = (path: string) => readFile(join(process.cwd(), 'src/og', path));

async function loadFonts() {
  const [serif, serifItalic, sans, sansMedium, mono] = await Promise.all([
    asset('fonts/Newsreader-Display-Regular.ttf'),
    asset('fonts/Newsreader-Display-Italic.ttf'),
    asset('fonts/FixelText-Regular.otf'),
    asset('fonts/FixelText-Medium.otf'),
    asset('fonts/GeistMono-Regular.ttf'),
  ]);
  return [
    { name: 'Newsreader', data: serif, style: 'normal' as const, weight: 400 as const },
    { name: 'Newsreader', data: serifItalic, style: 'italic' as const, weight: 400 as const },
    { name: 'Fixel', data: sans, style: 'normal' as const, weight: 400 as const },
    { name: 'Fixel', data: sansMedium, style: 'normal' as const, weight: 500 as const },
    { name: 'Geist Mono', data: mono, style: 'normal' as const, weight: 400 as const },
  ];
}

async function dataUri(path: string) {
  return `data:image/jpeg;base64,${(await asset(path)).toString('base64')}`;
}

function Byline({ avatar }: { avatar: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img */}
      <img src={avatar} width={60} height={60} alt="" style={{ borderRadius: 30, marginRight: 18 }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 25, fontWeight: 500, color: INK }}>Danylo Ivanov</span>
        <span style={{ fontSize: 21, color: MUTED }}>Product Designer in Kyiv, Ukraine</span>
      </div>
    </div>
  );
}

const size = { width: 1200, height: 630 };

export async function renderHomeCard() {
  const [fonts, avatar] = await Promise.all([loadFonts(), dataUri('images/avatar.jpg')]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 88px 56px',
          background: PAPER,
          fontFamily: 'Fixel',
        }}
      >
        <Byline avatar={avatar} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Newsreader',
            fontSize: 96,
            lineHeight: 1,
            letterSpacing: -3.4,
            color: INK,
          }}
        >
          <div style={{ display: 'flex' }}>I design apps people</div>
          <div style={{ display: 'flex' }}>
            <span style={{ fontStyle: 'italic', color: '#1f74b8' }}>pay for</span>
            <span style={{ whiteSpace: 'pre' }}> and </span>
            <span style={{ fontStyle: 'italic', color: '#c9530b' }}>come back to</span>
            <span>.</span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 24,
            borderTop: `1px solid ${LINE}`,
            fontFamily: 'Geist Mono',
            fontSize: 17,
            letterSpacing: 1,
            textTransform: 'uppercase',
            color: MUTED,
          }}
        >
          <span>Case studies: Safey · GudFood Vdoma · SKVOT</span>
          <span>Mobile · Conversion · Retention</span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

export async function renderCaseStudyCard(project: Project) {
  const [fonts, avatar, thumbnail] = await Promise.all([
    loadFonts(),
    dataUri('images/avatar.jpg'),
    dataUri(`images/${project.slug}.jpg`),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'stretch',
          padding: '64px 88px 56px',
          background: PAPER,
          fontFamily: 'Fixel',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 470, marginRight: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'Geist Mono',
                fontSize: 17,
                letterSpacing: 1,
                textTransform: 'uppercase',
                color: MUTED,
              }}
            >
              {`Case study ${project.index} · ${project.name}`}
            </span>
            <span
              style={{
                marginTop: 22,
                fontFamily: 'Newsreader',
                fontSize: 66,
                lineHeight: 1.02,
                letterSpacing: -2.2,
                color: INK,
              }}
            >
              {project.title}
            </span>
          </div>
          <Byline avatar={avatar} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img */}
          <img
            src={thumbnail}
            width={506}
            height={313}
            alt=""
            style={{ borderRadius: 16, boxShadow: '0 0 0 1px rgba(20, 20, 18, 0.08), 0 24px 48px -24px rgba(20, 20, 18, 0.35)' }}
          />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

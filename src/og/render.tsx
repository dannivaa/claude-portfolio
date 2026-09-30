import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import type { Project } from '@/lib/projects';

// Build-time only: Open Graph cards for link previews (LinkedIn, Slack, email).
// Satori needs TTF/OTF, so these are static Geist instances rather than the site's woff2.

const INK = '#121212';
const MUTED = '#6b7378';
const PANEL = '#f4f5f6';

const asset = (path: string) => readFile(join(process.cwd(), 'src/og', path));

async function loadFonts() {
  const [regular, medium, semibold] = await Promise.all([
    asset('fonts/Geist-400.ttf'),
    asset('fonts/Geist-500.ttf'),
    asset('fonts/Geist-600.ttf'),
  ]);
  return [
    { name: 'Geist', data: regular, style: 'normal' as const, weight: 400 as const },
    { name: 'Geist', data: medium, style: 'normal' as const, weight: 500 as const },
    { name: 'Geist', data: semibold, style: 'normal' as const, weight: 600 as const },
  ];
}

async function dataUri(path: string) {
  return `data:image/jpeg;base64,${(await asset(path)).toString('base64')}`;
}

function Byline({ avatar }: { avatar: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img */}
      <img src={avatar} width={56} height={56} alt="" style={{ borderRadius: 18, marginRight: 16 }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: 24, fontWeight: 500, color: INK }}>Danylo Ivanov</span>
        <span style={{ fontSize: 20, color: MUTED }}>Product Designer, Kyiv</span>
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
          padding: '72px 80px',
          background: '#ffffff',
          fontFamily: 'Geist',
        }}
      >
        <Byline avatar={avatar} />
        <div
          style={{
            display: 'flex',
            fontSize: 84,
            fontWeight: 500,
            lineHeight: 1.04,
            letterSpacing: -3.4,
            color: INK,
            maxWidth: 960,
          }}
        >
          I design apps people pay for and come back to.
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
          padding: '64px 72px',
          background: '#ffffff',
          fontFamily: 'Geist',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 480, marginRight: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 22, color: MUTED }}>{`${project.name} · ${project.category}`}</span>
            <span style={{ marginTop: 16, fontSize: 58, fontWeight: 500, lineHeight: 1.06, letterSpacing: -2.2, color: INK }}>
              {project.title}
            </span>
          </div>
          <Byline avatar={avatar} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- Satori renders plain img */}
          <img src={thumbnail} width={528} height={327} alt="" style={{ borderRadius: 24, background: PANEL }} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}

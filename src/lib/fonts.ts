import localFont from 'next/font/local';

// Geist (by Vercel), variable weight: one file covers body, UI, headings and
// the footer's heavy "Stand with Ukraine" banner.
export const geist = localFont({
  src: '../fonts/Geist-Variable.woff2',
  weight: '100 900',
  variable: '--ff-geist',
  display: 'swap',
});

// Geist Mono: small uppercase labels only (case study eyebrows and figure tags)
export const geistMono = localFont({
  src: '../fonts/GeistMono-Variable.woff2',
  weight: '100 900',
  variable: '--ff-geist-mono',
  display: 'swap',
});

export const fontVariables = `${geist.variable} ${geistMono.variable}`;

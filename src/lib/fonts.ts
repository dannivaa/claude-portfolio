import localFont from 'next/font/local';

// Geist (by Vercel), variable weight, upright and italic: body, UI, headings,
// the italic first line of the hero, and the footer's heavy "Stand with Ukraine".
export const geist = localFont({
  src: [
    { path: '../fonts/Geist-Variable.woff2', weight: '100 900', style: 'normal' },
    { path: '../fonts/Geist-Italic-Variable.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--ff-geist',
  display: 'swap',
});

// Geist Mono: small uppercase labels only (see .label in style.css)
export const geistMono = localFont({
  src: '../fonts/GeistMono-Variable.woff2',
  weight: '100 900',
  variable: '--ff-geist-mono',
  display: 'swap',
});

export const fontVariables = `${geist.variable} ${geistMono.variable}`;

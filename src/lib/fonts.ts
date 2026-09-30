import localFont from 'next/font/local';

// Fixel: body and UI. Made in Kyiv by MacPaw.
export const fixel = localFont({
  src: [
    { path: '../fonts/FixelText-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/FixelText-Medium.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--ff-sans',
  display: 'swap',
});

// Newsreader: headlines. Weight is fixed at 400; the opsz axis is kept so the
// browser's automatic optical sizing sharpens it at display sizes.
export const newsreader = localFont({
  src: [
    { path: '../fonts/Newsreader-Variable.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Newsreader-Italic-Variable.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--ff-serif',
  display: 'swap',
  adjustFontFallback: 'Times New Roman',
});

// Geist Mono: labels, dates and indices.
export const geistMono = localFont({
  src: '../fonts/GeistMono-Variable.woff2',
  weight: '100 900',
  variable: '--ff-mono',
  display: 'swap',
});

// Only the glyphs of the footer's "Stand with Ukraine" banner (~3 KB). Shown on
// hover, so it isn't preloaded.
export const fixelUa = localFont({
  src: '../fonts/FixelDisplay-ExtraBold-UA.woff2',
  weight: '800',
  variable: '--ff-ua',
  display: 'swap',
  preload: false,
});

export const fontVariables = [fixel, newsreader, geistMono, fixelUa]
  .map((font) => font.variable)
  .join(' ');

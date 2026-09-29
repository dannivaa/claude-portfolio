import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/style.css";
import LenisProvider from "@/components/LenisProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danylo Ivanov | Product Designer",
  description: "Product designer in Kyiv. Mobile apps, web products and the admin tools behind them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plexMono.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/styles/style.css";
import ClickSpark from "@/components/ClickSpark";
import { BootReveal } from "@/components/BootReveal";
import { fontVariables } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const DESCRIPTION =
  "Danylo Ivanov, product designer in Kyiv. AI integration, design that gets sharper with every iteration, and creative answers to hard product problems.";

export const metadata: Metadata = {
  title: {
    default: "Danylo Ivanov — Product Designer",
    template: "%s — Danylo Ivanov",
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Danylo Ivanov",
    title: "Danylo Ivanov — Product Designer",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/icons/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/icons/favicon-32.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#f8f8fc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables} data-boot="">
      <body>
        <ClickSpark sparkColor="#121212" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
          {children}
        </ClickSpark>
        <BootReveal />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/styles/style.css";
import ClickSpark from "@/components/ClickSpark";
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
    icon: [{ url: "/icons/favicon.svg", type: "image/svg+xml" }],
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
    <html lang="en" className={fontVariables}>
      <body>
        <ClickSpark sparkColor="#121212" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
          {children}
        </ClickSpark>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/styles/style.css";
import LenisProvider from "@/components/LenisProvider";
import ClickSpark from "@/components/ClickSpark";
import { fontVariables } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const DESCRIPTION =
  "Danylo Ivanov is a product designer in Kyiv, designing mobile products people pay for and come back to — onboarding, payments, KYC and paywalls.";

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
  themeColor: "#fbfaf7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <ClickSpark sparkColor="#141412" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

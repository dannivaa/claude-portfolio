import type { Metadata } from "next";
import "./globals.css";
import "@/styles/style.css";
import LenisProvider from "@/components/LenisProvider";
import ClickSpark from "@/components/ClickSpark";

export const metadata: Metadata = {
  title: "Danylo Ivanov | Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=1440" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
      </head>
      <body>
        <ClickSpark sparkColor="#121212" sparkSize={10} sparkRadius={15} sparkCount={7} duration={300}>
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
      </body>
    </html>
  );
}

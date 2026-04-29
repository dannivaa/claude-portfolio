import type { Metadata } from "next";
import "./globals.css";
import "@/styles/style.css";
import LenisProvider from "@/components/LenisProvider";

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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

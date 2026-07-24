import type { Metadata } from "next";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "QODLYNQ | Precision Software Systems",
    template: "%s | QODLYNQ",
  },
  description: "We architect precision software systems, immutable infrastructure, and enterprise-grade APIs. Designing resilient blueprints for scalable workflows.",
  keywords: ["Software Architecture", "Infrastructure as Code", "API Design", "Distributed Systems", "Enterprise Tech"],
  authors: [{ name: "QODLYNQ Core" }],
  creator: "QODLYNQ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qodlynq.com",
    title: "QODLYNQ | Precision Software Systems",
    description: "Deploying structural integrity across complex technical environments. We engineer digital concrete.",
    siteName: "QODLYNQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "QODLYNQ | Precision Software Systems",
    description: "Deploying structural integrity across complex technical environments. We engineer digital concrete.",
    creator: "@qodlynq",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${jetbrains.variable} bg-background text-primary font-body-md antialiased min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-vellum flex flex-col`}
      >
        {/* Global Grid Overlay */}
        <div className="col-lines fixed">
          <div /><div /><div /><div /><div /><div />
          <div /><div /><div /><div /><div /><div />
        </div>
        {children}
      </body>
    </html>
  );
}

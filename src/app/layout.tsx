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
  title: "QODLYNQ // ARCHITECTURE // INFRASTRUCTURE",
  description: "We architect precision software systems.",
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

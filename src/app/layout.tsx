import type { Metadata } from "next";
import { Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["400", "500", "600", "800"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "STUDIO_ARCH | Business-Driven Software Engineering",
  description: "Structural Engineering for Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        suppressHydrationWarning
        className={`${hanken.variable} ${inter.variable} bg-surface text-on-surface font-body-md antialiased min-h-screen relative selection:bg-primary selection:text-on-primary flex flex-col`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

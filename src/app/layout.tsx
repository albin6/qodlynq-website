import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ShaderBackground } from "@/components/ui/ShaderBackground";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"]
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"]
});

export const viewport: Viewport = {
  themeColor: "#faf9f7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Qodlynq - Premium Software Studio",
  description: "Reliable software, built for growth. We engineer scalable web and mobile applications for modern businesses.",
  keywords: ["software development", "web applications", "mobile apps", "engineering studio"],
  openGraph: {
    title: "Qodlynq",
    description: "Reliable software, built for growth.",
    url: "https://qodlynq.com",
    siteName: "Qodlynq",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${ibmPlexSans.variable} bg-transparent text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-secondary selection:text-on-secondary`}
      >
        <SmoothScrollProvider>
          <ShaderBackground />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

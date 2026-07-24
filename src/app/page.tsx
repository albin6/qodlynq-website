import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

const Services = dynamic(() => import("@/components/sections/Services").then((mod) => mod.Services), {
  loading: () => <div className="w-full min-h-[50vh] bg-background" />,
});
const Work = dynamic(() => import("@/components/sections/Work").then((mod) => mod.Work), {
  loading: () => <div className="w-full min-h-[50vh] bg-background" />,
});
const AboutContact = dynamic(() => import("@/components/sections/AboutContact").then((mod) => mod.AboutContact), {
  loading: () => <div className="w-full min-h-[50vh] bg-background" />,
});
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10 w-full">
        <Hero />
        <Services />
        <Work />
        <AboutContact />
      </main>
      <Footer />
    </>
  );
}

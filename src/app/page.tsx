import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { AboutContact } from "@/components/sections/AboutContact";
import { Footer } from "@/components/layout/Footer";

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

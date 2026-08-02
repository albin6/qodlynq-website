import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Expertise } from "@/components/sections/Expertise";
import { Works } from "@/components/sections/Works";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full relative">
        <Hero />
        <Philosophy />
        <Expertise />
        <Works />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

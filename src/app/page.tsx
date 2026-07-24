import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        <Hero />
        <Manifesto />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

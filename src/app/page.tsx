import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { WhyUs } from "@/components/sections/WhyUs";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <WhyUs />
        <About />
        <Contact />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}

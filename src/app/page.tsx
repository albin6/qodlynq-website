import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col bg-surface">
        <Hero />
        <WhoWeAre />
        <Services />
        <Process />
        <Contact />
      </main>
    </>
  );
}

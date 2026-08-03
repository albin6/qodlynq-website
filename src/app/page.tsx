import dynamic from "next/dynamic";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

const WhoWeAre = dynamic(() => import("@/components/sections/WhoWeAre").then(mod => mod.WhoWeAre));
const Services = dynamic(() => import("@/components/sections/Services").then(mod => mod.Services));
const Process = dynamic(() => import("@/components/sections/Process").then(mod => mod.Process));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

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

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { ParallaxComponent } from "@/components/ui/parallax-scrolling";
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
        <ParallaxComponent />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

"use client";

import { ThreeJSBackground } from "../ui/ThreeJSBackground";
import { Reveal } from "../ui/Reveal";
import { MagneticLink } from "../ui/MagneticLink";

export function Hero() {
  return (
    <header className="relative w-full h-screen flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-outline-variant/10">
      <ThreeJSBackground />
      <div className="relative z-10 w-full max-w-[1600px] mx-auto">
        <div className="editorial-grid items-end">
          <div className="col-span-12 md:col-span-10">
            <Reveal delay={100}>
              <h1 className="font-display-hero text-display-hero">
                Engineering<br />
                <span className="md:ml-32">Durability.</span>
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-8 mt-12 md:mt-0">
            <Reveal delay={500}>
              <p className="font-body-lg text-secondary mb-10 border-l border-primary/20 pl-8">
                We build software as infrastructure. Partnering with leaders to resolve complex technical friction through architectural precision.
              </p>
              <MagneticLink href="#work" className="group inline-flex items-center gap-6 font-label-sm uppercase tracking-widest border-b border-primary pb-3 hover:pb-4 transition-all">
                Selected Projects
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </MagneticLink>
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  );
}

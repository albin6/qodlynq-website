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
              <h1 className="font-display-hero text-display-hero text-balance">
                Software that<br />
                <span className="md:ml-32">drives growth.</span>
              </h1>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-8 mt-12 md:mt-0">
            <Reveal delay={500}>
              <p className="font-body-lg text-secondary mb-10 border-l border-primary/20 pl-8 text-pretty">
                We build digital products that help your business scale. No technical jargon, just reliable engineering that works.
              </p>
              <MagneticLink href="#work" className="group inline-flex items-center gap-6 font-label-sm uppercase tracking-widest border-b border-primary pb-3 hover:pb-4 transition-all">
                See Our Work
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </MagneticLink>
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  );
}

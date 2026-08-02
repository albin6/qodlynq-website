"use client";

import { Reveal } from "../ui/Reveal";
import { Parallax } from "../ui/Parallax";
import { MagneticLink } from "../ui/MagneticLink";

export function Expertise() {
  return (
    <section className="py-64 bg-surface-container-low px-margin-mobile md:px-margin-desktop relative" id="services">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <div className="flex justify-between items-end mb-48 border-b border-outline-variant/30 pb-12">
            <h2 className="font-display-lg text-7xl">Expertise</h2>
            <p className="font-label-sm text-outline uppercase max-w-[240px] text-right">Reducing friction. <br/>Restoring velocity.</p>
          </div>
        </Reveal>

        <div className="space-y-64">
          
          {/* Cap 1: Legacy Rehab */}
          <div className="editorial-grid items-center">
            <div className="col-span-12 md:col-span-7">
              <Reveal type="image">
                <Parallax speed={0.05} className="overflow-hidden">
                  <img 
                    alt="Server Infrastructure" 
                    className="w-full aspect-[4/3] object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzm4sC8SWL03KABl4Jz2zc1jD-z9F4_3_gmJXNtFtZpY9FggPV-ZAYwb6-kSpzNQb-P4LtgS_C3IWLvhzEIGa2yYY3Gp0djsRowsiAtc007e2rJJEsP05LVVEicM_mkz-FoIM9xM6sCwayWRo7EUnu_Ec-5PdtHPiuFyhWk1Eus0bh0rGz8s6pVnpD6271tF3NrpYLPC_2RIylpz-aYxTeDfupBrK35XexWe2meaHJu-8csgzOvuto"
                  />
                </Parallax>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Reveal delay={200}>
                <span className="font-label-sm opacity-40 uppercase mb-8 block">02 / Legacy Rehabilitaton</span>
                <h3 className="font-headline-md text-5xl mb-10 leading-tight">Restoring systems to their peak performance.</h3>
                <p className="font-body-md text-secondary mb-12">
                  Transition from monolithic systems to modular architecture. We rehabilitate aging software to restore speed, security, and developer confidence.
                </p>
                <div className="flex flex-col gap-4 font-label-sm text-primary uppercase">
                  <div className="flex items-center gap-6 border-b border-outline-variant/20 py-4 group cursor-pointer">
                    <span className="text-xs opacity-30">01</span> Cloud Migration
                  </div>
                  <div className="flex items-center gap-6 border-b border-outline-variant/20 py-4 group cursor-pointer">
                    <span className="text-xs opacity-30">02</span> System Refactoring
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Cap 2: Operational Efficiency */}
          <div className="editorial-grid items-center">
            <div className="col-span-12 md:col-span-4 order-2 md:order-1">
              <Reveal>
                <span className="font-label-sm opacity-40 uppercase mb-8 block">03 / Operational Efficiency</span>
                <h3 className="font-headline-md text-5xl mb-10 leading-tight">Eliminate manual bottlenecks.</h3>
                <p className="font-body-md text-secondary mb-12">
                  Intelligent pipelines that handle the heavy lifting, freeing your core team for higher-value strategic work. Architecture that automates complexity.
                </p>
                <MagneticLink className="border border-primary px-10 py-4 font-label-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-on-primary transition-all">
                  Inquire for Audit
                </MagneticLink>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 order-1 md:order-2">
              <Reveal type="image" delay={200}>
                <Parallax speed={-0.03} className="overflow-hidden">
                  <img 
                    alt="Data Analytics" 
                    className="w-full aspect-[3/2] object-cover grayscale brightness-75" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxvDy1iTvuBUoQE8pGg3or9ak0QcrBnz-bbSela7DAwrAiF4FPy2vffQK4b9U0qu2mknJsI0WA2r3ws55qr_wEUsByTEdaG8PnncSiyBeLPTVpLiiPnjXB42d3L-ytakLo30N99t-tA_Tc-KL0Fohj8T6yhSbgGSdZ-72Y_uUtSF_BL-gabpGHv8DiOAgnE87TIkllpzojC4cMJmAWBeLuU8wmCxKnYfBBYBhD_A8bMwwReDQr4JGR"
                  />
                </Parallax>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { Reveal } from "../ui/Reveal";

export function Process() {
  return (
    <section className="py-(--spacing-section-gap) px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) bg-surface-container-low/50 backdrop-blur-md border-y border-outline-variant/30" id="process">
      <div className="max-w-container-max mx-auto text-center">
        <Reveal>
          <h2 className="font-headline-lg text-[32px] font-medium tracking-[-0.01em] text-primary mb-12">How We Work</h2>
        </Reveal>
        
        <Reveal delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
            <div className="flex flex-col relative">
              <span className="font-headline-md text-primary opacity-30 text-2xl mb-2">01</span>
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-widest text-primary mb-3">Understand</span>
              <p className="font-body-md text-[14px] text-on-surface-variant leading-normal">Deep-dive into your business logic and constraints.</p>
              <span className="material-symbols-outlined absolute -right-6 top-1/2 -translate-y-1/2 hidden! md:block! text-outline" data-icon="arrow_forward">arrow_forward</span>
            </div>
            <div className="flex flex-col relative">
              <span className="font-headline-md text-primary opacity-30 text-2xl mb-2">02</span>
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-widest text-primary mb-3">Strategize</span>
              <p className="font-body-md text-[14px] text-on-surface-variant leading-normal">Architecting the most efficient technical path forward.</p>
              <span className="material-symbols-outlined absolute -right-6 top-1/2 -translate-y-1/2 hidden! md:block! text-outline" data-icon="arrow_forward">arrow_forward</span>
            </div>
            <div className="flex flex-col relative">
              <span className="font-headline-md text-primary opacity-30 text-2xl mb-2">03</span>
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-widest text-primary mb-3 active-step-glow inline-block w-fit">Build</span>
              <p className="font-body-md text-[14px] text-on-surface-variant leading-normal">Rigorous agile development with constant testing.</p>
              <span className="material-symbols-outlined absolute -right-6 top-1/2 -translate-y-1/2 hidden! md:block! text-outline" data-icon="arrow_forward">arrow_forward</span>
            </div>
            <div className="flex flex-col relative">
              <span className="font-headline-md text-primary opacity-30 text-2xl mb-2">04</span>
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-widest text-primary mb-3">Refine</span>
              <p className="font-body-md text-[14px] text-on-surface-variant leading-normal">Polishing the user experience and optimizing performance.</p>
              <span className="material-symbols-outlined absolute -right-6 top-1/2 -translate-y-1/2 hidden! md:block! text-outline" data-icon="arrow_forward">arrow_forward</span>
            </div>
            <div className="flex flex-col relative">
              <span className="font-headline-md text-primary opacity-30 text-2xl mb-2">05</span>
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-widest text-primary mb-3">Support</span>
              <p className="font-body-md text-[14px] text-on-surface-variant leading-normal">Ongoing maintenance and feature scaling.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { Reveal } from "../ui/Reveal";

export function Process() {
  return (
    <section className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-surface-container-low border-y border-outline-variant/30" id="process">
      <div className="max-w-[var(--spacing-container-max)] mx-auto text-center">
        <Reveal>
          <h2 className="font-headline-lg text-[32px] font-medium tracking-[-0.01em] text-primary mb-12">How We Work</h2>
        </Reveal>
        
        <Reveal delay={100}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center text-on-surface-variant">
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-[0.02em]">Understand</span>
              <span className="material-symbols-outlined mx-4 !hidden md:!block text-outline" data-icon="arrow_forward">arrow_forward</span>
              <span className="material-symbols-outlined my-2 !block md:!hidden text-outline" data-icon="arrow_downward">arrow_downward</span>
            </div>
            <div className="flex items-center text-on-surface-variant">
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-[0.02em]">Strategize</span>
              <span className="material-symbols-outlined mx-4 !hidden md:!block text-outline" data-icon="arrow_forward">arrow_forward</span>
              <span className="material-symbols-outlined my-2 !block md:!hidden text-outline" data-icon="arrow_downward">arrow_downward</span>
            </div>
            <div className="flex items-center text-primary font-medium">
              <span className="font-label-sm text-[14px] uppercase tracking-[0.02em] active-step-glow">Build</span>
              <span className="material-symbols-outlined mx-4 !hidden md:!block text-outline" data-icon="arrow_forward">arrow_forward</span>
              <span className="material-symbols-outlined my-2 !block md:!hidden text-outline" data-icon="arrow_downward">arrow_downward</span>
            </div>
            <div className="flex items-center text-on-surface-variant">
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-[0.02em]">Refine</span>
              <span className="material-symbols-outlined mx-4 !hidden md:!block text-outline" data-icon="arrow_forward">arrow_forward</span>
              <span className="material-symbols-outlined my-2 !block md:!hidden text-outline" data-icon="arrow_downward">arrow_downward</span>
            </div>
            <div className="flex items-center text-on-surface-variant">
              <span className="font-label-sm text-[14px] font-medium uppercase tracking-[0.02em]">Support</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

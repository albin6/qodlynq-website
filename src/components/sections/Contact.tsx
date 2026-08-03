"use client";

import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <section className="py-(--spacing-section-gap) px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) bg-surface-container-lowest border-t border-outline-variant/30" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="font-headline-lg text-[32px] font-medium tracking-[-0.01em] text-primary mb-6">
            Ready to start?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-body-lg text-[18px] text-on-surface-variant mb-10 leading-[1.6]">
            Tell us about your technical challenge.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex justify-center">
            <a 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-sm text-[14px] font-medium rounded hover:bg-primary/90 transition-all duration-300 motion-safe:hover:scale-105 shadow-md hover:shadow-lg" 
              href="mailto:hello@qodlynq.com"
            >
              hello@qodlynq.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

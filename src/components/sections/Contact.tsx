"use client";

import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <section className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-surface-container-lowest border-t border-outline-variant/30" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display-mobile md:font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.02em] leading-[1.1] text-primary mb-6">
            Ready to build?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-body-lg text-[18px] text-on-surface-variant mb-10 leading-[1.6]">
            Reach out to discuss your next technical challenge. We typically respond within 24 hours.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-sm text-[14px] font-medium rounded hover:bg-primary/90 transition-all duration-300 motion-safe:hover:scale-105 shadow-md hover:shadow-lg" 
              href="mailto:hello@qodlynq.com"
            >
              hello@qodlynq.com
            </a>
            <a 
              className="inline-flex items-center justify-center px-8 py-4 bg-surface-container-lowest text-primary border border-outline-variant font-label-sm text-[14px] font-medium rounded hover:bg-surface-container-low transition-all duration-300 motion-safe:hover:scale-105 shadow-sm hover:shadow-md" 
              href="#"
            >
              Schedule a call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { Reveal } from "../ui/Reveal";
import { DotPattern } from "../ui/dot-pattern";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] overflow-hidden pt-10 mb-12">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "opacity-40"
        )}
      />
      <div className="relative z-10 max-w-[var(--spacing-container-max)] mx-auto text-center w-full">
        <Reveal>
          <h1 className="font-display-mobile md:font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.02em] leading-[1.1] text-primary max-w-4xl mx-auto mb-6">
            Reliable software, built for growth.
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto mb-10">
            We partner with startups and established businesses to build scalable web and mobile applications that stand the test of time.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-label-sm text-[14px] font-medium rounded hover:bg-primary/90 transition-all duration-300 motion-safe:hover:scale-105 shadow-md hover:shadow-lg" href="#contact">
              Start a conversation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

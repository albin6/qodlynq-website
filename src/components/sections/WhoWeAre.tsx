"use client";

import { Reveal } from "../ui/Reveal";

export function WhoWeAre() {
  return (
    <section className="px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-surface-container-lowest/50 backdrop-blur-sm pt-10 pb-16" id="about">
      <div className="max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">
        <div className="md:col-span-5">
          <Reveal>
            <h2 className="font-headline-lg text-[32px] font-medium tracking-[-0.01em] text-primary sticky top-32 leading-[1.3]">
              A partnership, not a project.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={100}>
            <p className="font-body-lg text-[18px] text-on-surface-variant leading-[1.6]">
              We are a team of engineers and designers dedicated to the craft of software. We don't just write code; we solve business problems with technical rigor and human-centric design. Our approach is rooted in transparency, collaboration, and a deep commitment to delivering value that endures long after the initial launch.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

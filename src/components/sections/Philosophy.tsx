"use client";

import { Reveal } from "../ui/Reveal";

export function Philosophy() {
  return (
    <section className="py-64 px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
      <div className="max-w-container-max mx-auto editorial-grid">
        <div className="col-span-12 md:col-span-2 mb-12 md:mb-0">
          <Reveal>
            <span className="font-label-sm text-outline uppercase block border-t border-outline/20 pt-4">
              01 / Foundation
            </span>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-4">
          <Reveal delay={100}>
            <h2 className="font-display-lg text-display-lg leading-none mb-24">
              Software is an <span className="italic font-normal opacity-50">investment</span>, not a cost center. We architect for the next decade.
            </h2>
          </Reveal>
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <Reveal delay={200}>
                <p className="font-body-md text-secondary leading-relaxed">
                  Infrastructure requires a foundation that can withstand scale, market shifts, and the inherent gravity of growth. Our method eliminates technical debt before it becomes a liability.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Reveal } from "../ui/Reveal";

export function Process() {
  return (
    <section className="py-64 bg-inverse-surface text-surface overflow-hidden" id="process">
      <div className="px-margin-mobile md:px-margin-desktop mb-48 editorial-grid">
        <div className="col-span-12 md:col-span-12 border-b border-surface/10 pb-20">
          <Reveal>
            <h2 className="font-display-lg text-[8vw] leading-none">Our Process.</h2>
          </Reveal>
        </div>
      </div>

      <div className="editorial-grid px-margin-mobile md:px-margin-desktop items-start">
        <div className="col-span-12 md:col-span-4 border-l border-surface/10 pl-8 pt-8">
          <Reveal delay={0}>
            <span className="font-display-lg text-4xl opacity-10 block mb-12">01</span>
            <h3 className="font-headline-md mb-8">1. Audit</h3>
            <p className="font-body-md opacity-60 leading-relaxed text-pretty">
              We review your current systems to figure out exactly what is slowing your business down. No guesswork, just clear diagnostics.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-4 border-l border-surface/10 pl-8 pt-8">
          <Reveal delay={200}>
            <span className="font-display-lg text-4xl opacity-10 block mb-12">02</span>
            <h3 className="font-headline-md mb-8">2. Plan</h3>
            <p className="font-body-md opacity-60 leading-relaxed text-pretty">
              We design a clear, step-by-step solution that aligns perfectly with your business goals. We ensure you understand what we are building before we start.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-4 border-l border-surface/10 pl-8 pt-8">
          <Reveal delay={400}>
            <span className="font-display-lg text-4xl opacity-10 block mb-12">03</span>
            <h3 className="font-headline-md mb-8">3. Build</h3>
            <p className="font-body-md opacity-60 leading-relaxed text-pretty">
              We write the code, test it thoroughly, and launch it safely without interrupting your daily operations.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

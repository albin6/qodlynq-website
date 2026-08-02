"use client";

import { Reveal } from "../ui/Reveal";

export function Process() {
  return (
    <section className="py-64 bg-inverse-surface text-surface overflow-hidden" id="process">
      <div className="px-margin-mobile md:px-margin-desktop mb-48 editorial-grid">
        <div className="col-span-12 md:col-span-12 border-b border-surface/10 pb-20">
          <Reveal>
            <h2 className="font-display-lg text-[8vw] leading-none">The Method.</h2>
          </Reveal>
        </div>
      </div>

      <div className="editorial-grid px-margin-mobile md:px-margin-desktop items-start">
        <div className="col-span-12 md:col-span-4 border-l border-surface/10 pl-8 pt-8">
          <Reveal delay={0}>
            <span className="font-display-lg text-4xl opacity-10 block mb-12">01</span>
            <h3 className="font-headline-md mb-8">Diagnostic</h3>
            <p className="font-body-md opacity-60 leading-relaxed">
              Radical honesty about technical debt. We audit ecosystems to identify where legacy systems are hindering revenue.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-4 border-l border-surface/10 pl-8 pt-8">
          <Reveal delay={200}>
            <span className="font-display-lg text-4xl opacity-10 block mb-12">02</span>
            <h3 className="font-headline-md mb-8">Architecture</h3>
            <p className="font-body-md opacity-60 leading-relaxed">
              Mapping technical blueprints that prioritize stability and modularity over quick, fragile fixes.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 md:col-span-4 border-l border-surface/10 pl-8 pt-8">
          <Reveal delay={400}>
            <span className="font-display-lg text-4xl opacity-10 block mb-12">03</span>
            <h3 className="font-headline-md mb-8">Deployment</h3>
            <p className="font-body-md opacity-60 leading-relaxed">
              Iterative delivery with rigorous testing. We ship code that integrates seamlessly with your existing infrastructure.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

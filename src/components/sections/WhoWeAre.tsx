"use client";

import { Reveal } from "../ui/Reveal";

export function WhoWeAre() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/50 backdrop-blur-sm pt-10 pb-16" id="about">
      <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-5">
          <Reveal>
            <h2 className="font-headline-lg text-[32px] font-medium tracking-[-0.01em] text-primary sticky top-32 leading-normal">
              Engineered for impact.
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
            <Reveal delay={100}>
              <div>
                <h3 className="font-headline-md text-[20px] font-medium text-primary mb-3">Scalable Architecture</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6]">Built to handle growth from day one.</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <h3 className="font-headline-md text-[20px] font-medium text-primary mb-3">Fast Delivery</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6]">Rapid iteration cycles without compromising quality.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <h3 className="font-headline-md text-[20px] font-medium text-primary mb-3">Transparent Communication</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6]">Direct access to the engineers building your product.</p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <div>
                <h3 className="font-headline-md text-[20px] font-medium text-primary mb-3">Long-Term Support</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6]">We stay as your technical partner beyond launch.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

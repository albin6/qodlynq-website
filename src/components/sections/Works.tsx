"use client";

import { Reveal } from "../ui/Reveal";
import { MagneticLink } from "../ui/MagneticLink";

export function Works() {
  return (
    <section className="py-64 px-margin-mobile md:px-margin-desktop bg-surface overflow-hidden" id="work">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <h2 className="font-display-lg text-[10vw] leading-none mb-48">
            Selected<br/><span className="md:ml-48">Projects.</span>
          </h2>
        </Reveal>

        <div className="space-y-96">
          
          {/* Project 1 */}
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-8">
              <Reveal type="image">
                <img 
                  alt="Finance Interface" 
                  className="w-full aspect-[16/9] object-cover grayscale transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOtsQ2I-qeFKOibEAQT9LBiMkpdrRfVkDOL_IOwdSaPnP3Ej1Fu_QoZPadXh326wHuMrDxpzDWpv2rlOR4XhFAj9METWPEmnkTGncWL-yanaxu_7D9gHbR7S4nZT0ApUxW3ZOFPahayCIHQzTxD2K_oLM0MsUNzbHDw7g_rric5C9swArDJeALGhKvqqZncZG6Fw1MtzCMsVkJjEmqIuvieec4D2VJGQK_jQhasFODrO3Lxgo-fHOE"
                />
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-3 md:col-start-10 mt-12 self-end">
              <Reveal delay={200}>
                <p className="font-label-sm uppercase mb-4 opacity-40">Fintech / 2023</p>
                <h3 className="font-headline-md text-4xl mb-6">Vanguard Asset Management</h3>
                <p className="font-body-md text-secondary mb-10">Real-time asset tracking for global investment firms, reducing reporting latency by 40%.</p>
                <MagneticLink href="#" className="inline-flex items-center gap-4 font-label-sm tracking-widest uppercase hover:gap-6 transition-all group">
                  View Case Study 
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </MagneticLink>
              </Reveal>
            </div>
          </div>

          {/* Project 2 */}
          <div className="editorial-grid">
            <div className="col-span-12 md:col-span-3 md:col-start-1 self-end order-2 md:order-1 mt-12 md:mt-0">
              <Reveal delay={200}>
                <p className="font-label-sm uppercase mb-4 opacity-40">Logistics / 2024</p>
                <h3 className="font-headline-md text-4xl mb-6">Nexus Supply Chain</h3>
                <p className="font-body-md text-secondary mb-10">Automating international documentation with an AI-assisted validation engine.</p>
                <MagneticLink href="#" className="inline-flex items-center gap-4 font-label-sm tracking-widest uppercase hover:gap-6 transition-all group">
                  View Case Study 
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </MagneticLink>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-8 md:col-start-5 order-1 md:order-2">
              <Reveal type="image">
                <img 
                  alt="Supply Chain Dashboard" 
                  className="w-full aspect-[16/9] object-cover grayscale transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWQ2Gn-27UryBYw3tUe3AePdGAR3P9X3Jcm5vzTSwlI8xyoDXFHMr1AAobfb5pM-Wiyi-U3UYZ6COGzgGnlOb10l92CCPV7zw15ZjXyp97MAh7i2_70N679JE1McsfbRi2IkZhnSuB34F_sbrpuibNfjAppSxe5yHwbE8pLbuXGEsiuN9_fL215ySaTKP4JGHZiZXWqGYOD_UHuUlOXMGMEYRszfV4yAnJ6oTyn9PzuVufMBHQk-s9"
                />
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

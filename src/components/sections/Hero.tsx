"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import { ThreeJSCube } from "../ui/ThreeJSCube";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) overflow-hidden pt-10">
      <ThreeJSCube />
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-container-max mx-auto text-center w-full"
      >
        <Reveal>
          <div className="font-label-sm text-[12px] font-medium uppercase tracking-widest text-secondary mb-4">
            Premium Software Studio
          </div>
          <h1 className="font-display-mobile md:font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.02em] leading-[1.1] text-primary max-w-4xl mx-auto mb-6">
            Reliable software, built for growth.
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-2xl mx-auto mb-10 leading-[1.6]">
            We engineer scalable web and mobile applications for modern businesses. No bloat, just high-performance solutions.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-label-sm text-[14px] font-medium rounded hover:bg-primary/90 transition-all duration-300 motion-safe:hover:scale-105 shadow-md hover:shadow-lg" href="#contact">
              Start a project
            </a>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}

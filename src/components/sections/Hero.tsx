"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../ui/Reveal";
import dynamic from "next/dynamic";

const ThreeJSCube = dynamic(() => import("../ui/ThreeJSCube").then((mod) => mod.ThreeJSCube), {
  ssr: false,
});

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
    <section ref={ref} className="relative min-h-[100vh] flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20 md:pt-10">
      <ThreeJSCube />
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-container-max mx-auto text-center w-full -mt-10 sm:-mt-20 md:-mt-36 px-4"
      >
        <Reveal>
          <div className="bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/30 text-secondary font-label-sm uppercase tracking-widest text-[10px] sm:text-[12px] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full mb-6 md:mb-8 inline-block shadow-sm">
            Premium Software Studio
          </div>
          <h1 className="font-display-mobile md:font-display text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] font-semibold tracking-[-0.02em] leading-[1.05] text-primary max-w-5xl mx-auto mb-6">
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
            <a className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-label-sm text-[14px] font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" href="mailto:albinpariyarathu@gmail.com">
              Start a project
            </a>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}

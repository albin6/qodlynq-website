"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Blocks } from "lucide-react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <AnimatedSection
      id="services"
      className="w-full border-b border-primary min-h-[calc(100vh-5rem)] lg:min-h-217.5 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-gutter px-margin w-full relative z-10" ref={ref}>
        {/* Left: Asymmetrical Headline */}
        <div className="col-span-4 md:col-span-6 lg:col-span-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-primary pb-16 pt-16 md:pr-gutter md:pb-24 md:pt-24">
          <h1 className="font-headline-xl text-headline-xl text-primary leading-none uppercase">
            WE BUILD <br />
            <span className="italic text-surface-tint">/ SCALABLE /</span> <br />
            DIGITAL PRODUCTS.
          </h1>
        </div>
        {/* Right: UVP & Schematic */}
        <div className="col-span-4 md:col-span-2 lg:col-span-4 flex flex-col justify-between pt-16 pb-16 md:pl-gutter md:py-24 relative">
          <div className="font-body-md text-body-md tracking-wider text-secondary border-b border-primary pb-8 mb-8">
            <p className="uppercase">[ ACCEPTING NEW PROJECTS ]</p>
            <p className="mt-4">
              We design and develop modern web, mobile, and cloud solutions that help startups and businesses launch faster, scale confidently, and deliver exceptional user experiences.
            </p>
          </div>
          <motion.div 
            style={{ y: yBackground }}
            className="grow w-full border border-primary p-4 relative overflow-hidden bg-white/50 backdrop-blur-sm min-h-75"
          >
            {/* Abstract schematic representation using CSS shapes */}
            <div className="absolute inset-4 border border-primary border-dashed" />
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-primary flex items-center justify-center bg-background/80 backdrop-blur-md">
              <Blocks className="w-12 h-12 text-primary" strokeWidth={1} />
            </div>
            <div className="absolute top-1/2 left-0 w-full h-px bg-primary" />
            <div className="absolute left-1/2 top-0 w-px h-full bg-primary" />
            
            {/* Added details for structural aesthetic */}
            <div className="absolute top-2 left-2 w-2 h-2 border border-primary" />
            <div className="absolute top-2 right-2 w-2 h-2 border border-primary" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border border-primary" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border border-primary" />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

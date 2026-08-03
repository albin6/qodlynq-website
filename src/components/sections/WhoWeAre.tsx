"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "We engineer scalable web and mobile applications for modern businesses. Built to handle growth from day one with rapid iteration and uncompromising quality.";
const words = text.split(" ");

export function WhoWeAre() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={container} className="px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/50 backdrop-blur-sm min-h-[150vh] flex flex-col justify-center py-32" id="about">
      <div className="sticky top-1/3 max-w-container-max mx-auto w-full">
        <div className="bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/30 text-secondary font-label-sm uppercase tracking-widest text-[12px] px-4 py-1.5 rounded-full mb-8 inline-block shadow-sm">
          Who We Are
        </div>
        <h2 className="font-headline-lg text-[40px] md:text-[64px] font-medium tracking-tight text-primary leading-[1.2] max-w-5xl flex flex-wrap">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            return (
              <motion.span key={i} style={{ opacity }} className="mr-3 mb-2 inline-block">
                {word}
              </motion.span>
            );
          })}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-24 max-w-4xl opacity-80">
           <div>
             <h3 className="font-headline-md text-[20px] font-medium text-primary mb-3">Scalable Architecture</h3>
             <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6]">Built to handle growth from day one.</p>
           </div>
           <div>
             <h3 className="font-headline-md text-[20px] font-medium text-primary mb-3">Fast Delivery</h3>
             <p className="font-body-md text-[16px] text-on-surface-variant leading-[1.6]">Rapid iteration cycles without compromising quality.</p>
           </div>
        </div>
      </div>
    </section>
  );
}

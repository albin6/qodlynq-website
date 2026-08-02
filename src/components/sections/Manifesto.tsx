"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate opacities for the 3 statements as we scroll down the container
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="beliefs" ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden border-t border-b border-border">
        
        {/* Statement 1 */}
        <motion.div 
          style={{ opacity: opacity1 }}
          className="absolute inset-0 flex flex-col justify-center px-gutter max-w-[var(--spacing-container-max)] mx-auto"
        >
          <span className="font-mono text-sm text-on-surface-variant uppercase tracking-widest mb-8">01. Our Core Belief</span>
          <h2 className="font-geist text-[clamp(32px,5vw,72px)] leading-tight font-medium text-on-background max-w-4xl">
            Complexity is a liability, not a feature. We engineer simplicity into systems that handle massive scale.
          </h2>
        </motion.div>

        {/* Statement 2 */}
        <motion.div 
          style={{ opacity: opacity2 }}
          className="absolute inset-0 flex flex-col justify-center px-gutter max-w-[var(--spacing-container-max)] mx-auto"
        >
          <span className="font-mono text-sm text-on-surface-variant uppercase tracking-widest mb-8">02. Execution Over Ideation</span>
          <h2 className="font-geist text-[clamp(32px,5vw,72px)] leading-tight font-medium text-on-background max-w-4xl">
            Ideas are cheap. Code that runs reliably in production without midnight alerts is invaluable.
          </h2>
        </motion.div>

        {/* Statement 3 */}
        <motion.div 
          style={{ opacity: opacity3 }}
          className="absolute inset-0 flex flex-col justify-center px-gutter max-w-[var(--spacing-container-max)] mx-auto"
        >
          <span className="font-mono text-sm text-on-surface-variant uppercase tracking-widest mb-8">03. Craftsmanship</span>
          <h2 className="font-geist text-[clamp(32px,5vw,72px)] leading-tight font-medium text-on-background max-w-4xl">
            We don't outsource. We don't cut corners. Every line of code, every architectural decision is meticulously crafted in-house.
          </h2>
        </motion.div>

      </div>
    </section>
  );
}

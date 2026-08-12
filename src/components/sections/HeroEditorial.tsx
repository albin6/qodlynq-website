"use client";

import { motion } from "framer-motion";

export function HeroEditorial() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-16 overflow-hidden">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
            className="font-geist text-[clamp(48px,8vw,100px)] leading-[0.9] tracking-tighter text-on-background mb-10 font-medium"
          >
            We build software<br />
            that works.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1, delay: 0.1 }}
            className="font-geist text-[clamp(18px,2vw,24px)] text-on-surface-variant max-w-2xl mb-12 leading-relaxed"
          >
            No buzzwords. No templated solutions. We are a team of senior engineers architecting systems capable of handling real-world complexity, scale, and traffic.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#work" className="border-sculpted border-on-background px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-on-background hover:text-background transition-colors">
              Read Case Studies
            </a>
            <a href="#contact" className="border-sculpted border-border px-8 py-4 font-mono text-sm uppercase tracking-widest hover:border-on-background transition-colors text-on-surface-variant hover:text-on-background">
              Contact Engineering
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 30, delay: 0.2 }}
          className="lg:col-span-5 relative w-full aspect-square border-sculpted flex items-center justify-center bg-surface"
        >
          {/* A raw, technical SVG representing system architecture instead of a 3D blob */}
          <svg className="w-[80%] h-[80%] opacity-30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <rect x="10" y="10" width="80" height="80" strokeDasharray="2 2" />
            <rect x="20" y="20" width="25" height="25" />
            <rect x="55" y="20" width="25" height="25" />
            <rect x="20" y="55" width="60" height="25" />
            
            <path d="M 32 45 L 32 55" strokeWidth="1" />
            <path d="M 67 45 L 67 55" strokeWidth="1" />
            
            <circle cx="50" cy="50" r="2" fill="currentColor" />
            <circle cx="20" cy="20" r="1.5" fill="currentColor" />
            <circle cx="80" cy="20" r="1.5" fill="currentColor" />
            <circle cx="20" cy="80" r="1.5" fill="currentColor" />
            <circle cx="80" cy="80" r="1.5" fill="currentColor" />
          </svg>
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
            Fig 1. Monolith Decomposition
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}

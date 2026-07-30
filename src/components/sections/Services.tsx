"use client";

import { motion, Variants } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Services() {
  return (
    <AnimatedSection id="process" className="w-full border-b border-primary">
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-0 w-full">
        {/* Section Header */}
        <div className="col-span-4 md:col-span-8 lg:col-span-3 border-b lg:border-b-0 lg:border-r border-primary p-margin flex items-center lg:items-start justify-center lg:justify-start">
          <h2
            className="font-label-caps text-label-caps uppercase tracking-widest rotate-180 hidden lg:block"
            style={{ writingMode: "vertical-rl" }}
          >
            OUR EXPERTISE // WHAT WE DO
          </h2>
          <h2
            className="font-label-caps text-label-caps uppercase tracking-widest lg:hidden"
          >
            OUR EXPERTISE // WHAT WE DO
          </h2>
        </div>
        {/* Ledger List */}
        <motion.div
          className="col-span-4 md:col-span-8 lg:col-span-9 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Row 1 */}
          <motion.div variants={itemVariants} className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-9 border-b border-primary p-margin hover:bg-black hover:text-vellum transition-colors group cursor-crosshair">
            <div className="col-span-1 font-body-lg text-body-lg flex items-center md:items-start">[01]</div>
            <div className="col-span-3 font-label-caps text-label-caps text-base md:text-xl flex items-center mb-4 md:mb-0 text-balance">
              WEB APPLICATIONS
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-5 font-body-md text-body-md opacity-80 pl-4 border-l border-primary group-hover:border-vellum">
              Modern web applications designed for performance, scalability, and growth. Custom built for your business goals.
            </div>
          </motion.div>
          {/* Row 2 */}
          <motion.div variants={itemVariants} className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-9 border-b border-primary p-margin hover:bg-black hover:text-vellum transition-colors group cursor-crosshair">
            <div className="col-span-1 font-body-lg text-body-lg flex items-center md:items-start">[02]</div>
            <div className="col-span-3 font-label-caps text-label-caps text-base md:text-xl flex items-center mb-4 md:mb-0 text-balance">
              MOBILE APPLICATIONS
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-5 font-body-md text-body-md opacity-80 pl-4 border-l border-primary group-hover:border-vellum">
              Native and cross-platform mobile apps built for exceptional user experiences, powered by reliable cloud backends.
            </div>
          </motion.div>
          {/* Row 3 */}
          <motion.div variants={itemVariants} className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-9 p-margin hover:bg-black hover:text-vellum transition-colors group cursor-crosshair">
            <div className="col-span-1 font-body-lg text-body-lg flex items-center md:items-start">[03]</div>
            <div className="col-span-3 font-label-caps text-label-caps text-base md:text-xl flex items-center mb-4 md:mb-0 text-balance">
              SYSTEM MODERNIZATION
            </div>
            <div className="col-span-4 md:col-span-4 lg:col-span-5 font-body-md text-body-md opacity-80 pl-4 border-l border-primary group-hover:border-vellum">
              Transform legacy systems into modern, scalable digital platforms to streamline your operations and reduce technical debt.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

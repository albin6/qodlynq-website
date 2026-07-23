"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as any, delay: 0.3 },
    },
  };

  return (
    <section className="max-w-container_max mx-auto px-gutter py-24 md:py-32 grid md:grid-cols-2 gap-huge items-center min-h-[90vh]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface tracking-tighter leading-[1.05]"
        >
          Building digital products that move businesses forward.
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
        >
          We partner with startups and growing businesses to design, build, and scale reliable software—from MVPs to enterprise platforms.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 pt-4"
        >
          <Link
            href="#contact"
            className="bg-on-surface text-surface-container-lowest font-label-md text-label-md px-8 py-3.5 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(17,24,39,0.39)] hover:shadow-[0_6px_20px_rgba(17,24,39,0.23)] hover:bg-on-surface/90 text-center inline-flex items-center justify-center gap-2 transform hover:-translate-y-0.5 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            Book Discovery Call
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#work"
            className="bg-transparent text-on-surface font-label-md text-label-md px-8 py-3.5 rounded-lg transition-all border border-outline-variant/30 hover:border-outline-variant/60 hover:bg-surface-container-lowest shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] text-center inline-flex items-center justify-center transform hover:-translate-y-0.5 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative flex justify-center lg:justify-end"
      >
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full aspect-[4/3] max-w-[600px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden border border-outline-variant/10"
        >
          <Image
            src="/images/hero-mockup.png"
            alt="Premium software product presentation"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as any },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" as any, delay: 0.4 },
    },
  };

  return (
    <section className="max-w-container_max mx-auto px-gutter py-huge grid md:grid-cols-2 gap-huge items-center pt-32">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-xl"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface tracking-tight leading-tight"
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
          className="flex flex-col sm:flex-row gap-md pt-sm"
        >
          <Link
            href="#contact"
            className="bg-on-surface text-surface-container-lowest font-label-md text-label-md px-lg py-md rounded hover:bg-surface-tint hover:text-on-primary shadow-sm transition-colors text-center inline-flex items-center justify-center gap-sm transform hover:scale-[1.02] duration-200"
          >
            Book Discovery Call
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#work"
            className="bg-transparent text-on-surface font-label-md text-label-md px-lg py-md rounded hover:bg-surface-container-low transition-colors text-center inline-flex items-center justify-center transform hover:scale-[1.02] duration-200"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="w-full relative"
      >
        <div className="relative w-full aspect-[16/9] drop-shadow-2xl rounded-xl overflow-hidden">
          <Image
            src="/images/hero-mockup.png"
            alt="Premium software product presentation"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </motion.div>
    </section>
  );
}

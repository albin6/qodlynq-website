"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="max-w-container_max mx-auto px-gutter py-24 md:py-40 bg-surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-4xl space-y-12 md:space-y-16"
      >
        <h2 className="font-headline-md text-4xl md:text-6xl font-medium text-on-surface tracking-tighter leading-tight">
          Ready to build something lasting?
        </h2>
        
        <p className="font-body-lg text-xl md:text-2xl text-on-surface-variant max-w-[32rem] leading-relaxed">
          We partner with select teams to engineer premium digital products. 
          Let's discuss how we can execute your vision.
        </p>
        
        <div className="pt-8">
          <a
            href="mailto:hello@qodlynq.com"
            className="inline-flex items-center gap-4 text-xl md:text-2xl font-medium text-on-surface hover:text-primary transition-colors duration-300 group pb-2 border-b-2 border-on-surface hover:border-primary"
          >
            hello@qodlynq.com
            <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" strokeWidth={1.5} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

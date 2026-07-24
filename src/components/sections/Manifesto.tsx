"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function Manifesto() {
  return (
    <section id="manifesto" className="max-w-container_max mx-auto px-gutter py-24 md:py-40 bg-surface">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-4xl mx-auto space-y-12 md:space-y-20"
      >
        <h2 className="font-headline-md text-3xl md:text-5xl font-medium text-on-surface tracking-tighter leading-tight">
          Most software is disposable. We build assets.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 text-on-surface-variant font-body-lg text-lg md:text-xl leading-relaxed">
          <p>
            Qodlynq was founded on the belief that great digital products require more than just writing code. They demand deep collaboration, a relentless focus on the user, and uncompromising architectural integrity. We don't just build features; we engineer clarity into complex systems.
          </p>
          <p>
            We operate as an extension of your team, bringing premium craftsmanship to every pixel and every API endpoint. Our goal is to build durable digital assets that drive your business forward, without the visual noise or technical debt of standard agency work.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

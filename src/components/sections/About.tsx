"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="max-w-container_max mx-auto px-gutter py-huge">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" as any }}
        className="max-w-3xl mx-auto text-center space-y-lg"
      >
        <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
          Our Story
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          Qodlynq was founded on the belief that great digital products require more than just writing code. They demand deep collaboration, a relentless focus on the user, and uncompromising architectural integrity. 
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          We operate as an extension of your team, bringing premium craftsmanship to every pixel and every API endpoint. Our goal isn't just to launch software, but to build durable assets that drive your business forward.
        </p>
      </motion.div>
    </section>
  );
}

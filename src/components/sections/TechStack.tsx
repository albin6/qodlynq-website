"use client";

import { motion } from "framer-motion";

export function TechStack() {
  const techs = ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"];

  return (
    <section className="py-24 bg-white mt-huge border-t border-outline-variant/10">
      <div className="max-w-container_max mx-auto px-gutter">
        <p className="font-label-sm text-label-sm text-outline/40 text-center mb-lg uppercase tracking-widest font-medium">
          Technologies we trust
        </p>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-xl md:gap-xxl opacity-40 grayscale hover:grayscale-0 hover:opacity-70 transition-all duration-700"
        >
          {techs.map((tech) => (
            <span key={tech} className="font-label-md text-label-md text-on-surface font-bold">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

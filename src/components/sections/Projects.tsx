"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="work" className="max-w-container_max mx-auto px-gutter py-huge">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-xxl text-center max-w-3xl mx-auto"
      >
        <h2 className="font-headline-md text-headline-md text-on-surface mb-sm tracking-tight">
          Featured Work
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          A selection of recent products we've engineered.
        </p>
      </motion.div>

      <div className="flex flex-col gap-xxl">
        <ProjectCard
          title="Data Sync Automation Platform"
          category="Internal Platform"
          description="A centralized microservice architecture coordinating real-time webhooks, achieving 99.9% uptime and drastically reducing manual data entry."
          imageSrc="/images/data-sync.png"
          imageBg="bg-surface-container-high"
        />
        
        <ProjectCard
          title="Financial Dashboard MVP"
          category="Personal Product"
          description="A secure, high-performance portal designed to visualize complex datasets, utilizing advanced caching strategies for optimal speed."
          imageSrc="/images/financial.png"
          imageBg="bg-[#1e2329]"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col group border border-outline-variant/30 border-dashed"
        >
          <div className="bg-surface-container-low p-huge flex items-center justify-center min-h-[400px]">
            <span className="text-on-surface-variant/50 font-headline-sm text-headline-sm text-center px-lg">
              Client Project (Coming Soon)
            </span>
          </div>
          <div className="p-xl flex flex-col justify-center">
            <div className="mb-md">
              <span className="inline-block text-outline font-label-sm text-label-sm uppercase tracking-wider">
                Client Project
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
              Enterprise SaaS Solution
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Currently under NDA. A large-scale enterprise platform redefining workflow management.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ title, category, description, imageSrc, imageBg }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm flex flex-col group border border-outline-variant/10"
    >
      <div className={`${imageBg} p-lg flex items-center justify-center overflow-hidden h-[300px] md:h-[500px]`}>
        <motion.div style={{ y }} className="w-full h-full relative">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain rounded shadow-sm scale-110"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </motion.div>
      </div>
      <div className="p-xl flex flex-col justify-center">
        <div className="mb-md">
          <span className="inline-block text-primary font-label-sm text-label-sm uppercase tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/lib/motion";

export function Projects() {
  return (
    <section id="work" className="max-w-container_max mx-auto px-gutter py-24 md:py-40 bg-surface">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="mb-20 md:mb-32"
      >
        <h2 className="font-headline-md text-2xl md:text-4xl font-medium text-on-surface tracking-tighter">
          Our Work
        </h2>
      </motion.div>

      <div className="flex flex-col gap-32 md:gap-48">
        <ProjectDisplay
          title="Data Sync Automation Platform"
          category="Internal Platform"
          description="A centralized microservice architecture coordinating real-time webhooks, achieving 99.9% uptime and drastically reducing manual data entry."
          imageSrc="/images/data-sync.png"
        />
        
        <ProjectDisplay
          title="Financial Dashboard MVP"
          category="Personal Product"
          description="A secure, high-performance portal designed to visualize complex datasets, utilizing advanced caching strategies for optimal speed."
          imageSrc="/images/financial.png"
          reverse
        />
      </div>
    </section>
  );
}

function ProjectDisplay({ title, category, description, imageSrc, reverse = false }: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24 group`}
    >
      <div className="w-full md:w-3/5 bg-surface-bright rounded-[2rem] overflow-hidden aspect-[4/3] relative flex items-center justify-center p-8 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
        <div className="w-full h-full relative">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>
      </div>
      
      <div className="w-full md:w-2/5 flex flex-col justify-center">
        <div className="mb-6">
          <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase">
            {category}
          </span>
        </div>
        <h3 className="font-headline-sm text-2xl md:text-3xl font-medium text-on-surface mb-6 tracking-tight">
          {title}
        </h3>
        <p className="font-body-md text-lg text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

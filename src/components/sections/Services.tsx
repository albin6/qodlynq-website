"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Applications",
    description: "High-performance, scalable platforms tailored to your core business logic and user needs.",
  },
  {
    title: "AI Solutions",
    description: "Intelligent integrations that automate workflows, generate insights, and enhance product value.",
  },
  {
    title: "Business Platforms",
    description: "Comprehensive SaaS and enterprise solutions built for reliability and long-term growth.",
  },
  {
    title: "Mobile Applications",
    description: "Native-feeling, cross-platform experiences that keep your users engaged on the go.",
  },
  {
    title: "Internal Tools",
    description: "Custom dashboards and portals that streamline operations and empower your team.",
  },
  {
    title: "Automation Systems",
    description: "Robust data pipelines and integrations that eliminate manual work and reduce errors.",
  },
];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section id="services" className="max-w-container_max mx-auto px-gutter py-huge">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className="mb-xxl text-center max-w-3xl mx-auto"
      >
        <h2 className="font-headline-md text-headline-md text-on-surface mb-4 tracking-tighter">
          What We Build
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Business-focused solutions designed for impact, scale, and seamless user experiences.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-3 gap-lg"
      >
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            className="bg-white p-10 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/10 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-outline-variant/20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5"
          >
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">
              {service.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

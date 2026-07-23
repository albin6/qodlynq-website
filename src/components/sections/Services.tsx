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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as any },
    },
  };

  return (
    <section id="services" className="max-w-container_max mx-auto px-gutter py-huge">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" as any }}
        className="mb-xxl text-center max-w-3xl mx-auto"
      >
        <h2 className="font-headline-md text-headline-md text-on-surface mb-sm tracking-tight">
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
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-surface-container-lowest p-xl rounded shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-outline-variant/30"
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

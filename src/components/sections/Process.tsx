"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Aligning on goals, scope, and technical requirements.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Crafting user experiences and defining system architecture.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Iterative engineering with strict quality control.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deployment, scaling, and ongoing support.",
  },
];

export function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" as any },
    },
  };

  return (
    <section id="process" className="bg-surface-container-lowest py-huge border-y border-outline-variant/10">
      <div className="max-w-container_max mx-auto px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-xxl text-center max-w-3xl mx-auto"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface mb-sm tracking-tight">
            How We Work
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            A refined, outcome-driven methodology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-xl"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={itemVariants} className="flex flex-col items-start gap-md group">
              <div className="font-headline-md text-headline-md text-outline/30 group-hover:text-primary transition-colors duration-300">
                {step.num}
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-xs">
                  {step.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

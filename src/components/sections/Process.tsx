"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "We align on goals, defining strict scope and technical architecture before writing a single line of code.",
  },
  {
    num: "02",
    title: "Design",
    desc: "We craft structural user experiences and define exact system requirements to ensure frictionless execution.",
  },
  {
    num: "03",
    title: "Develop",
    desc: "Iterative, high-velocity engineering governed by strict quality control and continuous integration.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Seamless deployment, scaling protocols, and continuous monitoring to ensure zero downtime.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-surface-bright py-24 md:py-40">
      <div className="max-w-container_max mx-auto px-gutter">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20 md:mb-32"
        >
          <h2 className="font-headline-md text-2xl md:text-4xl font-medium text-on-surface tracking-tighter">
            Methodology
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={fadeUp} className="flex flex-col items-start group border-t border-outline/20 pt-8 transition-colors duration-500 hover:border-on-surface">
              <div className="font-label-sm text-label-sm text-outline tracking-widest mb-12 group-hover:text-on-surface transition-colors duration-500">
                {step.num}
              </div>
              <div>
                <h4 className="font-headline-sm text-xl md:text-2xl text-on-surface mb-6 tracking-tight">
                  {step.title}
                </h4>
                <p className="font-body-md text-lg text-on-surface-variant leading-relaxed pr-4">
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

"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  MessageSquare, 
  Layers, 
  Handshake, 
  Zap 
} from "lucide-react";

const reasons = [
  { icon: Building2, title: "Engineering Excellence" },
  { icon: MessageSquare, title: "Transparent Communication" },
  { icon: Layers, title: "Scalable Architecture" },
  { icon: Handshake, title: "Long-Term Partnership" },
  { icon: Zap, title: "Fast Delivery" },
];

export function WhyUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" },
    },
  };

  return (
    <section className="py-huge bg-surface-bright">
      <div className="max-w-container_max mx-auto px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-xl text-center"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
            Why Choose Qodlynq
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-lg text-center"
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div key={idx} variants={itemVariants} className="p-lg group">
                <div className="flex justify-center mb-sm">
                  <Icon className="w-8 h-8 text-on-surface group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h4 className="font-label-md text-label-md font-bold text-on-surface">
                  {reason.title}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

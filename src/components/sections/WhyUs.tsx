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
    hidden: { opacity: 0, scale: 0.95, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-huge bg-surface-bright">
      <div className="max-w-container_max mx-auto px-gutter">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="mb-xl text-center"
        >
          <h2 className="font-headline-md text-headline-md text-on-surface tracking-tighter">
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
              <motion.div key={idx} variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-outline-variant/5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-outline-variant/10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 group">
                <div className="flex justify-center mb-6">
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

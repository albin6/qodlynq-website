"use client";

import { motion } from "framer-motion";
import { premiumSpring } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-gutter pt-32 pb-24 overflow-hidden bg-surface">
      <div className="max-w-container_max mx-auto w-full flex flex-col items-center text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: premiumSpring }}
          className="space-y-6 md:space-y-8 flex flex-col items-center"
        >
          <h1 className="font-headline-md text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6vw] font-medium tracking-tighter text-on-surface leading-[0.95] max-w-[14ch]">
            We engineer clarity.
          </h1>
          <p className="font-body-lg text-body-lg md:text-xl text-on-surface-variant max-w-[28rem] leading-relaxed">
            Qodlynq is a digital product studio. We build durable, high-performance software for businesses that demand excellence.
          </p>
        </motion.div>
      </div>

      {/* Abstract, extremely subtle background element for depth, not noise */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"
      />
    </section>
  );
}

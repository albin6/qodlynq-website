"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait slightly for fonts/hydration, then trigger out animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling while loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
        >
          {/* Logo / Text Reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-headline-md text-3xl md:text-5xl font-bold tracking-tighter text-primary"
            >
              QODLYNQ
            </motion.h1>
          </div>
          
          {/* Subtle loading line */}
          <motion.div 
            className="mt-6 h-[2px] w-0 bg-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

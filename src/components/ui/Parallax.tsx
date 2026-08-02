"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Parallax({ children, className, speed = 0.1 }: { children: React.ReactNode, className?: string, speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Custom parallax: scrolled * speed
  // To avoid huge offsets right away, we could base it on intersection, 
  // but the original HTML just did `scrolled * speed` globally.
  const y = useTransform(scrollY, (val) => val * speed);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

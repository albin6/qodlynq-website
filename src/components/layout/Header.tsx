"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export function Header() {
  const { scrollY } = useScroll();
  
  // Header becomes slightly smaller and borders appear on scroll
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const paddingY = useTransform(scrollY, [0, 50], ["2rem", "1rem"]);

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-background border-b border-border"
      style={{
        borderBottomColor: useTransform(borderOpacity, (val) => `rgba(34, 34, 34, ${val})`),
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
    >
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter w-full flex justify-between items-center">
        <Link href="/" className="group flex flex-col">
          <span className="font-mono text-sm tracking-tight text-on-background">
            QODLYNQ
          </span>
          <span className="font-mono text-[10px] text-on-surface-variant group-hover:text-on-background transition-colors">
            Engineering Studio
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          <Link
            href="#beliefs"
            className="text-on-surface-variant hover:text-on-background transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
          >
            Beliefs
          </Link>
          <Link
            href="#approach"
            className="text-on-surface-variant hover:text-on-background transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
          >
            Approach
          </Link>
          <Link
            href="#work"
            className="text-on-surface-variant hover:text-on-background transition-colors duration-300 font-mono text-xs uppercase tracking-widest"
          >
            Work
          </Link>
        </div>

        <Link
          href="#contact"
          className="font-mono text-xs uppercase tracking-widest border border-border hover:border-on-background px-4 py-2 transition-colors"
        >
          Contact
        </Link>
      </div>
    </motion.header>
  );
}

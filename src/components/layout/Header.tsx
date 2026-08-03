"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  
  // Base background is surface color #faf9f7. We transition to 95% opacity.
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(250, 249, 247, 0)", "rgba(250, 249, 247, 0.95)"]);
  const backdropFilter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);
  const borderColor = useTransform(scrollY, [0, 100], ["rgba(196, 199, 199, 0)", "rgba(196, 199, 199, 0.3)"]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <motion.nav 
        style={{
          backgroundColor: menuOpen ? "rgba(250, 249, 247, 0.95)" : backgroundColor,
          backdropFilter: menuOpen ? "blur(12px)" : backdropFilter,
          WebkitBackdropFilter: menuOpen ? "blur(12px)" : backdropFilter,
          borderColor: menuOpen ? "rgba(196, 199, 199, 0.3)" : borderColor,
          borderBottomWidth: "1px",
          borderBottomStyle: "solid"
        }}
        className="flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] h-20 w-full"
      >
        <div className="font-headline-md text-[24px] font-bold tracking-tighter text-primary z-50 relative">
          <a href="#">QODLYNQ</a>
        </div>
        <div className="hidden md:flex gap-8">
          <a className="font-body-md text-[14px] font-medium text-on-surface-variant hover:text-secondary transition-all duration-300 cursor-pointer active:opacity-70" href="#services">Services</a>
          <a className="font-body-md text-[14px] font-medium text-on-surface-variant hover:text-secondary transition-all duration-300 cursor-pointer active:opacity-70" href="#process">Process</a>
          <a className="font-body-md text-[14px] font-medium text-on-surface-variant hover:text-secondary transition-all duration-300 cursor-pointer active:opacity-70" href="#contact">Contact</a>
        </div>
        <a className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-label-sm text-[14px] rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5" href="#contact">
          Get in touch
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary z-50 relative p-2" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-surface border-b border-outline-variant/30 md:hidden flex flex-col items-center py-8 gap-6 shadow-xl"
          >
            <a 
              className="font-headline-md text-[20px] font-medium text-on-surface-variant hover:text-secondary transition-colors" 
              href="#services"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a 
              className="font-headline-md text-[20px] font-medium text-on-surface-variant hover:text-secondary transition-colors" 
              href="#process"
              onClick={() => setMenuOpen(false)}
            >
              Process
            </a>
            <a 
              className="font-headline-md text-[20px] font-medium text-on-surface-variant hover:text-secondary transition-colors" 
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              className="mt-4 px-8 py-3 w-3/4 text-center bg-primary text-on-primary font-label-sm text-[16px] rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md" 
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

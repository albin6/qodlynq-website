"use client";

import { TextLink } from "@/components/ui/TextLink";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "ARCHITECTURE", href: "#architecture" },
    { name: "INFRASTRUCTURE", href: "#infrastructure" },
    { name: "REGISTRY", href: "#registry" },
    { name: "ARCHIVE", href: "#archive" },
  ];

  return (
    <>
      <header className="bg-background/90 backdrop-blur-md text-primary top-0 border-b border-primary flex justify-between items-center w-full px-margin h-20 sticky z-40">
      <Link href="/" className="flex items-center justify-between h-full" onClick={() => setIsOpen(false)}>
        <Image
          src="/logo-spinner.svg"
          alt="Qodlynq Logo"
          width={180}
          height={100}
          className="h-10 md:h-12 w-auto"
          unoptimized
          priority
        />
        <div className="font-headline-lg text-headline-md font-bold tracking-tighter hidden sm:block">
          QODLYNQ
        </div>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 items-center h-full">
        {navLinks.map((link) => (
          <TextLink key={link.name} href={link.href}>
            {link.name}
          </TextLink>
        ))}
      </nav>

      {/* Desktop CTA & Mobile Toggle */}
      <div className="flex items-center h-full gap-4">
        <Link href="#contact" className="hidden md:block">
          <motion.div
            className={cn(
              "font-button text-button px-4 lg:px-6 py-2 uppercase tracking-widest flex items-center justify-center gap-2 border transition-colors duration-150 border-primary hover:bg-primary hover:text-vellum cursor-pointer min-h-11"
            )}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hidden lg:inline">INITIATE PROJECT //</span>
            <span className="lg:hidden">INITIATE //</span>
          </motion.div>
        </Link>
        <button 
          className="lg:hidden flex items-center justify-center min-h-11 min-w-11"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      </header>

      {/* Mobile Menu Overlay (Moved outside <header> to avoid backdrop-filter containing block bug) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-100 bg-background border-l border-primary z-50 lg:hidden flex flex-col p-6 overflow-y-auto shadow-2xl"
            >
              <div className="flex justify-end mb-8">
                <button 
                  className="flex items-center justify-center min-h-11 min-w-11"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col items-start gap-8 w-full">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="font-headline-md text-2xl uppercase text-primary hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="w-full h-px bg-primary/20 my-4" />
                <Link href="#contact" className="w-full md:hidden" onClick={() => setIsOpen(false)}>
                  <motion.div
                    className="w-full font-button text-button px-6 py-4 uppercase tracking-widest flex items-center justify-center border border-primary bg-primary text-vellum cursor-pointer min-h-11"
                    whileTap={{ scale: 0.98 }}
                  >
                    INITIATE PROJECT //
                  </motion.div>
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

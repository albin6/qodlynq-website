"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as any }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-surface/90 backdrop-blur-md border-outline-variant/20 shadow-sm"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-20 px-gutter max-w-container_max mx-auto">
          <Link
            href="/"
            className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight"
          >
            Qodlynq
          </Link>
          
          <div className="hidden md:flex space-x-lg items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-on-surface text-surface-container-lowest font-label-md text-label-md px-md py-sm rounded hover:bg-surface-tint hover:text-on-primary transition-colors shadow-sm transform hover:scale-105 duration-200"
            >
              Book a Call
            </Link>
          </div>

          <button
            aria-label="Menu"
            className="md:hidden text-on-surface"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-surface z-40 flex flex-col pt-24 px-gutter md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-headline-md font-headline-md text-on-surface py-md border-b border-outline-variant/30"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

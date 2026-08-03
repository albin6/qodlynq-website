"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] h-20 w-full bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="font-headline-md text-[24px] font-bold tracking-tighter text-primary">
        QODLYNQ
      </div>
      <div className="hidden md:flex gap-8">
        <a className="font-body-md text-[14px] font-medium text-on-surface-variant hover:text-secondary transition-all duration-300 cursor-pointer active:opacity-70" href="#services">Services</a>
        <a className="font-body-md text-[14px] font-medium text-on-surface-variant hover:text-secondary transition-all duration-300 cursor-pointer active:opacity-70" href="#process">Process</a>
        <a className="font-body-md text-[14px] font-medium text-on-surface-variant hover:text-secondary transition-all duration-300 cursor-pointer active:opacity-70" href="#contact">Contact</a>
      </div>
      <a className="hidden md:inline-flex items-center justify-center px-6 py-3 bg-primary text-on-primary font-label-sm text-[14px] rounded hover:bg-primary/90 transition-all duration-300 motion-safe:hover:scale-105 shadow-md hover:shadow-lg" href="#contact">
        Get in touch
      </a>
      {/* Mobile Menu Button */}
      <button className="md:hidden text-primary">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { MagneticLink } from "../ui/MagneticLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 transition-all duration-300 mix-blend-difference text-white ${
        scrolled ? "py-6" : "py-10"
      }`}
      id="top-nav"
    >
      <div className="font-display-lg text-xl tracking-tighter hover:opacity-70 transition-opacity cursor-pointer">
        QODLYNQ
      </div>
      <div className="hidden md:flex gap-16 items-center">
        <MagneticLink href="#work" className="font-label-sm uppercase hover:opacity-50 transition-all duration-300">
          Projects
        </MagneticLink>
        <MagneticLink href="#services" className="font-label-sm uppercase hover:opacity-50 transition-all duration-300">
          Services
        </MagneticLink>
        <MagneticLink href="#process" className="font-label-sm uppercase hover:opacity-50 transition-all duration-300">
          Process
        </MagneticLink>
        <MagneticLink href="#about" className="border border-white/20 px-8 py-3 font-label-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 text-[10px] active:scale-95">
          Contact
        </MagneticLink>
      </div>
    </nav>
  );
}

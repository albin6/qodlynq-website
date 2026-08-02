"use client";

import { Reveal } from "../ui/Reveal";

export function Footer() {
  return (
    <footer className="w-full py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] grid grid-cols-1 md:grid-cols-4 gap-[var(--spacing-gutter)] max-w-[var(--spacing-container-max)] mx-auto bg-surface-container text-on-surface border-t border-outline-variant/50">
      <div className="col-span-1 md:col-span-1">
        <Reveal>
          <div className="font-headline-md text-[24px] font-bold text-primary mb-4">
            QODLYNQ
          </div>
          <p className="font-body-md text-[16px] text-on-surface-variant mt-8">
            © {new Date().getFullYear()} Qodlynq. Built for technical rigor.
          </p>
        </Reveal>
      </div>
      <div className="col-span-1">
        <Reveal delay={100}>
          <ul className="space-y-4">
            <li><a className="font-body-md text-[16px] text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#services">Services</a></li>
            <li><a className="font-body-md text-[16px] text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#process">Process</a></li>
            <li><a className="font-body-md text-[16px] text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#work">Work</a></li>
          </ul>
        </Reveal>
      </div>
      <div className="col-span-1">
        <Reveal delay={200}>
          <ul className="space-y-4">
            <li><a className="font-body-md text-[16px] text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#contact">Contact</a></li>
            <li><a className="font-body-md text-[16px] text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Privacy</a></li>
            <li><a className="font-body-md text-[16px] text-on-surface-variant hover:text-secondary transition-colors duration-200" href="#">Terms</a></li>
          </ul>
        </Reveal>
      </div>
    </footer>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Contact() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={container} className="relative h-screen bg-primary overflow-hidden rounded-t-[40px] md:rounded-t-[80px] mt-[-40px] z-20" id="contact">
      <motion.div style={{ y }} className="h-full flex flex-col justify-between pt-24 pb-8 px-8 md:px-16 mx-auto w-full max-w-container-max">
        
        <div className="flex flex-col items-center text-center mt-12 md:mt-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 font-label-sm uppercase tracking-widest text-[12px] px-4 py-1.5 rounded-full mb-10 shadow-sm">
            Get in Touch
          </div>
          
          <h2 className="font-headline-lg text-[clamp(40px,12vw,140px)] leading-[0.9] font-bold tracking-tighter text-white mb-8">
            HAVE AN IDEA?
          </h2>
          
          <p className="font-body-lg text-[18px] md:text-[24px] text-white/70 mb-12 max-w-2xl">
            Let's build something extraordinary together. Our team is ready to dive into your technical challenges.
          </p>
          
          <a 
            className="inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 bg-white text-primary font-label-sm text-[16px] md:text-[18px] font-bold rounded-full hover:bg-surface-container transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-2" 
            href="mailto:albinpariyarathu@gmail.com"
          >
            Start a Project
          </a>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 pt-12 border-t border-white/10 text-white/60 w-full mt-auto">
          <div className="col-span-2 sm:col-span-3 md:col-span-2 mb-4 md:mb-0">
             <div className="font-headline-md text-[24px] font-bold text-white mb-2">QODLYNQ</div>
             <p className="font-body-md text-[14px]">© {new Date().getFullYear()} Qodlynq. Built for technical rigor.</p>
          </div>
          <div className="flex flex-col gap-3">
             <div className="font-label-sm text-white mb-2 uppercase tracking-widest text-xs">Navigation</div>
             <a href="#services" className="font-body-md text-[16px] hover:text-white transition-colors">Services</a>
             <a href="#process" className="font-body-md text-[16px] hover:text-white transition-colors">Process</a>
             <a href="#work" className="font-body-md text-[16px] hover:text-white transition-colors">Work</a>
          </div>
          <div className="flex flex-col gap-3">
             <div className="font-label-sm text-white mb-2 uppercase tracking-widest text-xs">Legal</div>
             <a href="mailto:albinpariyarathu@gmail.com" className="font-body-md text-[16px] hover:text-white transition-colors">Contact</a>
             <a href="#" className="font-body-md text-[16px] hover:text-white transition-colors">Privacy</a>
             <a href="#" className="font-body-md text-[16px] hover:text-white transition-colors">Terms</a>
          </div>
          <div className="flex flex-col gap-3">
             <div className="font-label-sm text-white mb-2 uppercase tracking-widest text-xs">Social</div>
             <a href="https://linkedin.com/company/qodlynq" target="_blank" rel="noopener noreferrer" className="font-body-md text-[16px] hover:text-white transition-colors">LinkedIn</a>
             <a href="https://twitter.com/qodlynq" target="_blank" rel="noopener noreferrer" className="font-body-md text-[16px] hover:text-white transition-colors">Twitter / X</a>
             <a href="https://instagram.com/qodlynq" target="_blank" rel="noopener noreferrer" className="font-body-md text-[16px] hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Network, Server, Database, CloudCog } from "lucide-react";

export function Work() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({ target: ref1, offset: ["start end", "end start"] });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2, offset: ["start end", "end start"] });

  const y1 = useTransform(scrollYProgress1, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress2, [0, 1], ["0%", "20%"]);

  return (
    <AnimatedSection id="registry" className="w-full border-b border-primary bg-black text-vellum relative overflow-hidden py-margin">
      {/* Inverse Blueprint Grid for Dark Mode */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
      
      <div className="px-margin mb-12 flex justify-between items-end border-b border-vellum pb-4 relative z-10">
        <h2 className="font-headline-lg text-headline-lg uppercase">STRUCTURAL OVERVIEW</h2>
        <span className="font-label-caps text-label-caps tracking-widest">[ PROJECT ARCHIVE ]</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin pb-margin relative z-10">
        {/* Project 1 */}
        <div className="border border-vellum group relative overflow-hidden bg-black">
          <div className="aspect-video relative p-4 flex flex-col justify-between">
            <div className="flex justify-between font-label-caps text-label-caps border-b border-vellum pb-2 z-10">
              <span>ID: NEXUS-VII</span>
              <span>FINTECH</span>
            </div>
            
            <div className="w-full h-full my-4 border border-vellum border-dashed relative flex items-center justify-center opacity-70 overflow-hidden" ref={ref1}>
              <motion.div style={{ y: y1 }} className="absolute inset-0 flex items-center justify-center">
                {/* SVG Schematic - Distributed Ledger Node System */}
                <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full object-cover p-4">
                  <path d="M50,100 L150,50 L250,100 L350,50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                  <path d="M50,100 L150,150 L250,100 L350,150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
                  <path d="M150,50 L150,150" stroke="currentColor" strokeWidth="1"/>
                  <path d="M250,50 L250,150" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="50" cy="100" r="10" fill="currentColor"/>
                  <circle cx="150" cy="50" r="10" fill="currentColor"/>
                  <circle cx="150" cy="150" r="10" fill="currentColor"/>
                  <circle cx="250" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="250" cy="100" r="5" fill="currentColor"/>
                  <circle cx="350" cy="50" r="10" fill="currentColor"/>
                  <circle cx="350" cy="150" r="10" fill="currentColor"/>
                  {/* Decorative Elements */}
                  <rect x="40" y="90" width="20" height="20" fill="none" stroke="currentColor" />
                  <rect x="140" y="40" width="20" height="20" fill="none" stroke="currentColor" />
                  <rect x="140" y="140" width="20" height="20" fill="none" stroke="currentColor" />
                  <rect x="340" y="40" width="20" height="20" fill="none" stroke="currentColor" />
                  <rect x="340" y="140" width="20" height="20" fill="none" stroke="currentColor" />
                </svg>
                <div className="absolute flex gap-4 text-vellum/50">
                  <Network className="w-6 h-6" />
                  <Database className="w-6 h-6" />
                  <Server className="w-6 h-6" />
                </div>
              </motion.div>
            </div>
            
            <h3 className="font-body-lg text-body-lg uppercase mt-2 z-10">Distributed Ledger Node System</h3>
          </div>
        </div>

        {/* Project 2 */}
        <div className="border border-vellum group relative overflow-hidden bg-black">
          <div className="aspect-video relative p-4 flex flex-col justify-between">
            <div className="flex justify-between font-label-caps text-label-caps border-b border-vellum pb-2 z-10">
              <span>ID: AETHER-OS</span>
              <span>LOGISTICS</span>
            </div>
            
            <div className="w-full h-full my-4 border border-vellum border-dashed relative flex items-center justify-center opacity-70 overflow-hidden" ref={ref2}>
              <motion.div style={{ y: y2 }} className="absolute inset-0 flex items-center justify-center">
                {/* SVG Schematic - Logistics Pipeline */}
                <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full object-cover p-4">
                  <rect x="50" y="80" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="150" y="40" width="80" height="120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
                  <rect x="290" y="80" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M90,100 L150,100" stroke="currentColor" strokeWidth="2" />
                  <path d="M230,100 L290,100" stroke="currentColor" strokeWidth="2" />
                  
                  {/* Internal routing lines */}
                  <path d="M150,60 L230,60" stroke="currentColor" strokeWidth="1" />
                  <path d="M150,140 L230,140" stroke="currentColor" strokeWidth="1" />
                  <circle cx="190" cy="100" r="20" fill="currentColor" fillOpacity="0.2" stroke="currentColor"/>
                  <circle cx="190" cy="100" r="5" fill="currentColor"/>
                </svg>
                <div className="absolute flex gap-4 text-vellum/50 bottom-8">
                  <CloudCog className="w-6 h-6" />
                </div>
              </motion.div>
            </div>
            
            <h3 className="font-body-lg text-body-lg uppercase mt-2 z-10">Real-time Freight Telemetry</h3>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

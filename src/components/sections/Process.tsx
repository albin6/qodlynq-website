"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { 
    num: "01", 
    title: "Understand", 
    desc: "Deep-dive into your business logic and constraints.", 
    posClasses: "top-[10%] md:left-[10%] left-[5%]", 
    speed: 1.2, 
    rotation: -6 
  },
  { 
    num: "02", 
    title: "Strategize", 
    desc: "Architecting the most efficient technical path forward.", 
    posClasses: "top-[25%] md:left-[65%] left-[15%]", 
    speed: 0.9, 
    rotation: 4 
  },
  { 
    num: "03", 
    title: "Build", 
    desc: "Rigorous agile development with constant testing.", 
    posClasses: "top-[45%] md:left-[20%] left-[5%]", 
    speed: 1.4, 
    rotation: -4 
  },
  { 
    num: "04", 
    title: "Refine", 
    desc: "Polishing the user experience and optimizing performance.", 
    posClasses: "top-[60%] md:left-[70%] left-[20%]", 
    speed: 0.8, 
    rotation: 8 
  },
  { 
    num: "05", 
    title: "Support", 
    desc: "Ongoing maintenance and feature scaling.", 
    posClasses: "top-[80%] md:left-[30%] left-[10%]", 
    speed: 1.1, 
    rotation: -3 
  }
];

function ProcessCard({ step, scrollYProgress }: { step: any, scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], ["100vh", `-${120 * step.speed}vh`]);
  
  return (
    <motion.div
      style={{
        y,
        rotate: step.rotation,
      }}
      className={`absolute w-[280px] md:w-[320px] p-8 bg-surface-container-lowest/90 backdrop-blur-xl border border-outline-variant/30 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] flex flex-col gap-4 ${step.posClasses}`}
    >
      <span className="font-headline-md text-primary/30 text-5xl mb-6">{step.num}</span>
      <h3 className="font-headline-sm text-[28px] text-primary font-medium">{step.title}</h3>
      <p className="font-body-md text-on-surface-variant leading-relaxed text-[16px]">
        {step.desc}
      </p>
    </motion.div>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  if (isMobile) {
    return (
      <section ref={containerRef} className="relative bg-surface py-24 px-6" id="process">
        <div className="flex flex-col items-start mb-12">
          <div className="bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/30 text-secondary font-label-sm uppercase tracking-widest text-[12px] px-4 py-1.5 rounded-full mb-6 shadow-sm">
            Workflow
          </div>
          <h2 className="font-headline-lg text-[48px] font-bold tracking-tighter text-primary">
            The Process
          </h2>
        </div>
        
        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="w-full p-8 bg-surface-container-lowest/90 backdrop-blur-xl border border-outline-variant/30 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex flex-col gap-3"
            >
              <span className="font-headline-md text-primary/30 text-4xl mb-2">{step.num}</span>
              <h3 className="font-headline-sm text-[24px] text-primary font-medium">{step.title}</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-[16px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-surface" id="process">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-24 md:pt-0">
        {/* Center Text content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/30 text-secondary font-label-sm uppercase tracking-widest text-[12px] px-4 py-1.5 rounded-full mb-8 shadow-sm">
            Workflow
          </div>
          <h2 className="font-headline-lg text-[48px] md:text-[72px] font-bold tracking-tighter text-primary mb-4">
            The Process
          </h2>
          <p className="font-body-md text-on-surface-variant text-lg md:text-xl max-w-md">
            Scroll down to see the steps.
          </p>
        </div>

        {/* Floating Cards */}
        {steps.map((step, idx) => (
          <ProcessCard key={idx} step={step} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}

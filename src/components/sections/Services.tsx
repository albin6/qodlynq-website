"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal translation. We want to move left enough to see all cards.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const services = [
    {
      title: "Custom Software",
      description: "Tailored architectures designed to solve your unique operational challenges.",
      image: "/images/blueprint.png",
    },
    {
      title: "Product Engineering",
      description: "Taking ideas from initial concept to a polished, market-ready reality.",
      image: "/images/stack.png",
    },
    {
      title: "Application Modernization",
      description: "Upgrading legacy systems for modern security, speed, and scale.",
      image: "/images/blueprint.png",
    },
    {
      title: "Technical Consulting",
      description: "Strategic guidance to ensure your technology roadmap is sound.",
      image: "/images/network.png",
    }
  ];

  if (isMobile) {
    return (
      <section ref={targetRef} className="relative bg-surface py-24 px-6" id="services">
        <div className="bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/30 text-secondary font-label-sm uppercase tracking-widest text-[12px] px-4 py-1.5 rounded-full mb-12 shadow-sm inline-block">
          What We Do
        </div>
        <div className="flex flex-col gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="w-full flex flex-col p-8 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
            >
              <Image 
                alt={service.title} 
                className="w-16 h-16 mb-6 object-contain mix-blend-multiply opacity-90" 
                src={service.image}
                width={64}
                height={64}
              />
              <h3 className="font-headline-md text-[24px] font-semibold text-primary mb-3 leading-tight">{service.title}</h3>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-surface" id="services">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <div className="absolute top-24 left-8 md:left-24 bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/30 text-secondary font-label-sm uppercase tracking-widest text-[12px] px-4 py-1.5 rounded-full z-10 shadow-sm">
          What We Do
        </div>
        <motion.div 
          style={{ x }}
          className="flex gap-8 pl-8 md:pl-24 pr-[30vw] md:pr-[50vw] items-center"
        >
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="w-[300px] md:w-[420px] h-[380px] md:h-[440px] shrink-0 flex flex-col p-8 md:p-10 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)] cursor-pointer"
            >
              <Image 
                alt={service.title} 
                className="w-16 h-16 md:w-20 md:h-20 mb-6 object-contain mix-blend-multiply opacity-90" 
                src={service.image}
                width={80}
                height={80}
              />
              <h3 className="font-headline-md text-[22px] md:text-[28px] font-semibold text-primary mb-3 leading-tight">{service.title}</h3>
              <p className="font-body-md text-[14px] md:text-[16px] text-on-surface-variant leading-relaxed">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

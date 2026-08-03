"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal translation. We want to move left enough to see all cards.
  // With 4 cards of ~450px + gaps + padding, "-75%" or "-60%" works well.
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
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXqWHOhf0RQfTwMxhbu5rZvis6T1POfTtvPrdPy63Sqh3NBf4Z9-m11vOP6xpqR6yELv3Mvi8EwBpAxJ2ya6NAurKhnz6ykQoRmaX_IBY5uLkZpbN4CG3RpSSXqHmAcKQwuUYGrH9T1tJv0U0p2YP6HK5PrDTYAxI2_8YQEbCkAlVt9jNvFGHOXpn8ubAP8x1fe4Z_wpEkNOfEqejhf6V_itpZsu2as7KoEn1zLoQwCLwBLVNcFgX8",
    },
    {
      title: "Technical Consulting",
      description: "Strategic guidance to ensure your technology roadmap is sound.",
      image: "/images/network.png",
    }
  ];

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
              className="w-[320px] md:w-[480px] shrink-0 p-8 md:p-12 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
            >
              <img 
                alt={service.title} 
                className="w-20 h-20 md:w-24 md:h-24 mb-8 object-contain opacity-80 mix-blend-luminosity" 
                src={service.image} 
              />
              <h3 className="font-headline-md text-[28px] md:text-[36px] font-medium text-primary mb-4">{service.title}</h3>
              <p className="font-body-md text-[16px] text-on-surface-variant leading-relaxed">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

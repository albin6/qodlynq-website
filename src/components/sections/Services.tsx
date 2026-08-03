"use client";

import { Reveal } from "../ui/Reveal";

export function Services() {
  const services = [
    {
      title: "Custom Software",
      description: "Tailored solutions for unique business needs, built from the ground up for performance and scalability.",
      image: "/images/blueprint.png",
      delay: 0,
      animDelay: "0s"
    },
    {
      title: "Product Engineering",
      description: "Turning product ideas into market-ready reality through rigorous agile development and user testing.",
      image: "/images/stack.png",
      delay: 100,
      animDelay: "-1s"
    },
    {
      title: "Application Modernization",
      description: "Updating legacy systems for modern performance, security, and integration capabilities.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXqWHOhf0RQfTwMxhbu5rZvis6T1POfTtvPrdPy63Sqh3NBf4Z9-m11vOP6xpqR6yELv3Mvi8EwBpAxJ2ya6NAurKhnz6ykQoRmaX_IBY5uLkZpbN4CG3RpSSXqHmAcKQwuUYGrH9T1tJv0U0p2YP6HK5PrDTYAxI2_8YQEbCkAlVt9jNvFGHOXpn8ubAP8x1fe4Z_wpEkNOfEqejhf6V_itpZsu2as7KoEn1zLoQwCLwBLVNcFgX8",
      delay: 200,
      animDelay: "-2s"
    },
    {
      title: "Technical Consulting",
      description: "Expert guidance for your long-term technology roadmap, ensuring architectural soundness.",
      image: "/images/network.png",
      delay: 300,
      animDelay: "-3s"
    }
  ];

  return (
    <section className="py-[var(--spacing-section-gap)] px-[var(--spacing-margin-mobile)] md:px-[var(--spacing-margin-desktop)] bg-transparent" id="services">
      <div className="max-w-[var(--spacing-container-max)] mx-auto">
        <Reveal>
          <div className="mb-16">
            <h2 className="font-headline-lg text-[32px] font-medium tracking-[-0.01em] text-primary">What We Do</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-gutter)]">
          {services.map((service, idx) => (
            <Reveal key={idx} delay={service.delay}>
              <div className="p-8 md:p-10 bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/50 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-full transition-all duration-300 motion-safe:hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                <img 
                  alt={service.title} 
                  className="w-24 h-24 mb-6 animate-float object-contain" 
                  src={service.image} 
                  style={{ animationDelay: service.animDelay }} 
                />
                <h3 className="font-headline-md text-[24px] font-medium text-primary mb-3">{service.title}</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

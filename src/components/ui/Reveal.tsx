"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);

    const fallback = setTimeout(() => setIsVisible(true), 1500);

    return () => {
      clearTimeout(fallback);
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  const activeClass = isVisible ? "is-visible" : "";

  return (
    <div ref={ref} className={`fade-in-up ${activeClass} ${className || ""}`}>
      {children}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className, type = "text", delay = 0 }: { children: React.ReactNode, className?: string, type?: "text" | "image", delay?: number }) {
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

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [delay]);

  const baseClass = type === "image" ? "image-mask" : "reveal-clip";
  const activeClass = isVisible ? "active" : "";

  return (
    <div ref={ref} className={`${baseClass} ${activeClass} ${className || ""}`}>
      {children}
    </div>
  );
}

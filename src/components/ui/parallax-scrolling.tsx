'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Cpu } from 'lucide-react';

export function ParallaxComponent() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]');

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0
        }
      });

      const layers = [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 }
      ];

      layers.forEach((layerObj, idx) => {
        tl.to(
          triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
          {
            yPercent: layerObj.yPercent,
            ease: "none"
          },
          idx === 0 ? undefined : "<"
        );
      });
    }

    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up GSAP and ScrollTrigger instances
      ScrollTrigger.getAll().forEach(st => st.kill());
      if (triggerElement) {
        gsap.killTweensOf(triggerElement);
      }
      lenis.destroy();
    };
  }, []);

  return (
    <div className="parallax" ref={parallaxRef}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow"></div>
          <div data-parallax-layers className="parallax__layers">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" loading="eager" width="800" data-parallax-layer="1" alt="" className="parallax__layer-img grayscale opacity-20" />
            <img src="https://images.unsplash.com/photo-1507676184212-d0330a151f74?q=80&w=2070&auto=format&fit=crop" loading="eager" width="800" data-parallax-layer="2" alt="" className="parallax__layer-img grayscale opacity-50" />
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title font-display tracking-tighter text-primary">Engineered</h2>
            </div>
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" loading="eager" width="800" data-parallax-layer="4" alt="" className="parallax__layer-img grayscale opacity-30" />
          </div>
          <div className="parallax__fade"></div>
        </div>
      </section>
      <section className="parallax__content flex flex-col items-center justify-center py-32 bg-surface z-10 relative">
        <Cpu className="w-24 h-24 text-primary mb-8 opacity-80" strokeWidth={1} />
        <p className="font-body-lg text-on-surface-variant max-w-2xl text-center leading-[1.6]">
          We engineer scalable web and mobile applications for modern businesses. No bloat, just high-performance solutions designed with absolute precision.
        </p>
      </section>
    </div>
  );
}

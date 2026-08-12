"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor in production
    document.body.style.cursor = 'none';

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    // Add magnetic link hover effects
    const magneticLinks = document.querySelectorAll('.magnetic-link');
    
    const handleLinkMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const link = mouseEvent.currentTarget as HTMLElement;
      const rect = link.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left - rect.width / 2;
      const y = mouseEvent.clientY - rect.top - rect.height / 2;
      link.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    
    const handleLinkLeave = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const link = mouseEvent.currentTarget as HTMLElement;
      link.style.transform = 'translate(0px, 0px)';
    };

    // We can't immediately bind because DOM might not be fully rendered,
    // so we'll rely on a MutationObserver in a real app, but for this 
    // static implementation we can attach them inside the components or here 
    // with a slight delay. Actually, it's better to implement MagneticLink as a component.
    // For now, this just handles the cursor.

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor hidden md:block" 
        style={{ left: position.x, top: position.y }}
      />
      <div 
        className="cursor-follower hidden md:block" 
        style={{ left: position.x - 16, top: position.y - 16 }}
      />
    </>
  );
}

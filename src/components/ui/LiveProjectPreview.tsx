"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { checkIframeSupport } from "@/app/actions/check-iframe";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface LiveProjectPreviewProps {
  project: Project;
  priority?: boolean;
}

export function LiveProjectPreview({ project, priority = false }: LiveProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Trigger loading slightly before it enters the viewport for a smoother experience
  const isInView = useInView(containerRef, { once: true, margin: "300px" });
  
  const [embeddable, setEmbeddable] = useState<boolean | null>(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    if (isInView && embeddable === null) {
      checkIframeSupport(project.liveUrl).then(setEmbeddable);
    }
  }, [isInView, embeddable, project.liveUrl]);

  return (
    <div 
      ref={containerRef}
      className="group relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl md:rounded-[40px] bg-surface-container-lowest border border-outline-variant/20 shadow-[0_8px_40px_rgba(0,0,0,0.04)] flex flex-col"
    >
      {/* Browser Chrome Top Bar */}
      <div className="h-8 md:h-12 bg-surface-container-low border-b border-outline-variant/20 flex items-center px-4 md:px-6 shrink-0 relative z-20">
        {/* Traffic Lights */}
        <div className="flex gap-1.5 md:gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/20" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/20" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/20" />
        </div>
        
        {/* Domain Name */}
        <div className="absolute left-1/2 -translate-x-1/2 font-label-sm text-[10px] md:text-[12px] text-on-surface-variant/50 max-w-[150px] md:max-w-[300px] truncate">
          {new URL(project.liveUrl).hostname}
        </div>
      </div>

      {/* Viewport Area */}
      <div className="relative flex-1 w-full bg-surface overflow-hidden">
        
        {/* Fallback Image */}
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          className={cn(
            "object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105",
            (embeddable === true && iframeLoaded) ? "opacity-0" : "opacity-100"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={priority}
        />

        {/* Live Iframe */}
        {embeddable === true && (
          <iframe 
            src={project.liveUrl}
            title={`${project.title} live preview`}
            loading="lazy"
            onLoad={() => setIframeLoaded(true)}
            className={cn(
              "absolute inset-0 w-full h-full border-0 transition-opacity duration-700",
              iframeLoaded ? "opacity-100" : "opacity-0"
            )}
            style={{ pointerEvents: 'none' }}
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 md:bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Click Interceptor */}
        <a 
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live project: ${project.title}`}
          className="absolute inset-0 z-20 cursor-pointer"
        />
      </div>
    </div>
  );
}

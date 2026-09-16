"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { checkIframeSupport } from "@/app/actions/check-iframe";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { WebsitePreviewSkeleton } from "./Shimmer";

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
  const [imageError, setImageError] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  // Parse clean hostname safely
  let hostname = "";
  try {
    hostname = new URL(project.liveUrl).hostname.replace(/^www\./, "");
  } catch {
    hostname = project.title;
  }

  useEffect(() => {
    if (isInView && embeddable === null) {
      checkIframeSupport(project.liveUrl).then((isSupported) => {
        setEmbeddable(isSupported);
      }).catch(() => {
        setEmbeddable(false);
      });
    }
  }, [isInView, embeddable, project.liveUrl]);

  // Timeout safety fallback: If iframe takes longer than 10 seconds to load, show fallback
  useEffect(() => {
    if (embeddable === true && !iframeLoaded) {
      const timer = setTimeout(() => {
        if (!iframeLoaded) {
          setTimedOut(true);
        }
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [embeddable, iframeLoaded]);

  const showIframe = embeddable === true && !timedOut;
  const isPreviewReady = showIframe && iframeLoaded;

  return (
    <div 
      ref={containerRef}
      className="group relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl md:rounded-[40px] bg-surface-container-lowest border border-outline-variant/20 shadow-[0_8px_40px_rgba(0,0,0,0.04)] flex flex-col transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
    >
      {/* Browser Chrome Top Bar */}
      <div className="h-9 md:h-12 bg-surface-container-low/90 backdrop-blur-md border-b border-outline-variant/20 flex items-center justify-between px-4 md:px-6 shrink-0 relative z-30 select-none">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 md:gap-2">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/20" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/20" />
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/20" />
        </div>
        
        {/* Domain Name Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/80 border border-outline-variant/20 font-label-sm text-[11px] md:text-[12px] text-on-surface-variant/70 max-w-[180px] sm:max-w-[300px] truncate">
          <span className="material-symbols-outlined text-[14px] text-on-surface-variant/50">lock</span>
          <span className="truncate">{hostname}</span>
        </div>

        {/* Live Indicator or External Link Icon */}
        <div className="flex items-center gap-1.5 text-on-surface-variant/60 group-hover:text-primary transition-colors">
          <span className="text-[11px] hidden sm:inline font-medium">Visit site</span>
          <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            arrow_outward
          </span>
        </div>
      </div>

      {/* Viewport Area */}
      <div className="relative flex-1 w-full bg-surface-container-lowest overflow-hidden">
        
        {/* Shimmer Skeleton Wireframe: Displayed while iframe is loading */}
        {(!isPreviewReady) && (
          <div 
            className={cn(
              "absolute inset-0 z-10 transition-opacity duration-700",
              isPreviewReady ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
          >
            <WebsitePreviewSkeleton domain={hostname} />
          </div>
        )}

        {/* Fallback Image (Only displayed if image loads successfully and iframe is not ready) */}
        {!imageError && project.image && (
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className={cn(
              "object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]",
              isPreviewReady ? "opacity-0" : "opacity-100"
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority={priority}
            onError={() => setImageError(true)}
          />
        )}

        {/* Live Iframe: Rendered when supported by host headers */}
        {showIframe && (
          <iframe 
            src={project.liveUrl}
            title={`${project.title} live preview`}
            loading="lazy"
            onLoad={() => setIframeLoaded(true)}
            className={cn(
              "absolute inset-0 w-full h-full border-0 transition-opacity duration-700",
              iframeLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            style={{ pointerEvents: 'none' }}
          />
        )}

        {/* Fallback Display if Iframe is not supported or timed out and image failed */}
        {(!showIframe || timedOut) && imageError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-surface-container-low to-surface-container-lowest">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 border border-outline-variant/30 flex items-center justify-center text-primary mb-4 shadow-sm">
              <span className="material-symbols-outlined text-3xl">desktop_windows</span>
            </div>
            <h4 className="font-headline-md text-[22px] sm:text-[26px] font-semibold text-primary mb-2">
              {project.title}
            </h4>
            <p className="font-body-md text-[14px] sm:text-[15px] text-on-surface-variant max-w-md mb-6 leading-relaxed">
              Explore the live production deployment of {project.title} directly.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-sm text-[13px] font-medium shadow-md group-hover:bg-primary/90 transition-all">
              <span>Launch {hostname}</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </div>
          </div>
        )}

        {/* Hover Ambient Overlay */}
        <div className="absolute inset-0 bg-primary/[0.02] md:bg-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />

        {/* Click Interceptor (Entire preview opens live website in new tab) */}
        <a 
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live project: ${project.title}`}
          className="absolute inset-0 z-30 cursor-pointer"
        />
      </div>
    </div>
  );
}

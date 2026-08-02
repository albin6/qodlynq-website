"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function EngineeringApproach() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <section id="approach" className="py-32 bg-background border-b border-border">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        <div className="flex flex-col gap-12">
          <div>
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4 block">
              The Engineering Reality
            </span>
            <h2 className="font-geist text-[clamp(24px,4vw,48px)] leading-tight font-medium mb-6">
              Monolithic debt is slowing down your product cycles.
            </h2>
            <p className="font-geist text-lg text-on-surface-variant leading-relaxed">
              When applications grow organically, they eventually hit a wall. Data coupling, slow deployment times, and single points of failure become the norm.
            </p>
          </div>
          
          <div className="h-px w-full bg-border"></div>
          
          <div>
            <h2 className="font-geist text-[clamp(24px,4vw,48px)] leading-tight font-medium mb-6">
              We decouple and distribute.
            </h2>
            <p className="font-geist text-lg text-on-surface-variant leading-relaxed">
              We surgically dismantle monoliths into event-driven microservices. We isolate domains, introduce Kafka or RabbitMQ for asynchronous communication, and containerize workloads using Kubernetes. The result? deployments take minutes, not days.
            </p>
          </div>
        </div>

        <div className="relative aspect-square border-sculpted bg-surface overflow-hidden group">
          {/* Interactive Before/After Visualizer */}
          <div className="absolute top-4 left-4 font-mono text-[10px] text-on-surface-variant uppercase tracking-widest z-20">
            Interactive: Drag to refactor
          </div>
          
          {/* "Before" State (Monolith) - visible depending on slider */}
          <div 
            className="absolute inset-0 bg-[#0f0f0f] flex items-center justify-center border-r border-on-surface"
            style={{ width: `${sliderValue}%` }}
          >
            <div className="w-48 h-64 border border-red-900/50 bg-red-950/20 flex flex-col items-center justify-center p-4">
              <span className="font-mono text-xs text-red-500 mb-2">Monolith API</span>
              <div className="w-full h-8 bg-red-900/30 mb-2"></div>
              <div className="w-full h-8 bg-red-900/30 mb-2"></div>
              <div className="w-full h-8 bg-red-900/30 mb-2"></div>
              <div className="w-full h-8 bg-red-900/30"></div>
            </div>
            
            <div className="absolute top-1/2 left-4 -translate-y-1/2 font-mono text-xs text-red-500 opacity-50 whitespace-nowrap hidden sm:block">
              Tight Coupling
            </div>
          </div>

          {/* "After" State (Microservices) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
               style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="w-24 h-24 border border-green-900/50 bg-green-950/20 flex flex-col items-center justify-center">
                <span className="font-mono text-[10px] text-green-500">Auth Service</span>
              </div>
              <div className="w-24 h-24 border border-green-900/50 bg-green-950/20 flex flex-col items-center justify-center">
                <span className="font-mono text-[10px] text-green-500">Billing</span>
              </div>
              <div className="w-24 h-24 border border-green-900/50 bg-green-950/20 flex flex-col items-center justify-center">
                <span className="font-mono text-[10px] text-green-500">Inventory</span>
              </div>
              <div className="w-24 h-24 border border-green-900/50 bg-green-950/20 flex flex-col items-center justify-center">
                <span className="font-mono text-[10px] text-green-500">Analytics</span>
              </div>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 font-mono text-xs text-green-500 opacity-50 whitespace-nowrap hidden sm:block">
              Event-Driven
            </div>
          </div>

          {/* Slider Control */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
          
          {/* Slider Handle Visual */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-white z-20 pointer-events-none"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-background border border-border rounded-full flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant">code</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

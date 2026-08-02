"use client";

import { motion } from "framer-motion";

export function EditorialWork() {
  return (
    <section id="work" className="py-32 bg-surface border-b border-border">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter">
        
        <div className="mb-24">
          <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4 block">
            Selected Work
          </span>
          <h2 className="font-geist text-[clamp(32px,5vw,64px)] leading-tight font-medium max-w-3xl">
            We don't build MVP prototypes. We engineer production-grade platforms.
          </h2>
        </div>

        <div className="flex flex-col gap-32">
          
          {/* Case Study 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <div className="relative aspect-[4/3] border-sculpted overflow-hidden bg-background">
                <img 
                  src="/mockups/saas_dashboard.png" 
                  alt="SaaS Analytics Dashboard" 
                  className="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6 pt-4">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest border border-border self-start px-2 py-1">
                Data Infrastructure
              </span>
              <h3 className="font-geist text-3xl font-medium">Real-time Financial Telemetry</h3>
              <p className="font-geist text-on-surface-variant leading-relaxed">
                A top-tier trading firm needed sub-second analytics across 4TB of daily incoming tick data. We replaced their batch-processing pipeline with an event-driven architecture using Rust and Redpanda, reducing query latency from 45 seconds to 120 milliseconds.
              </p>
              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-on-surface-variant">Throughput</span>
                  <span>1.2M events/sec</span>
                </div>
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-on-surface-variant">Latency</span>
                  <span>120ms (p99)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col gap-6 pt-4 lg:order-1 order-2">
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest border border-border self-start px-2 py-1">
                AI Orchestration
              </span>
              <h3 className="font-geist text-3xl font-medium">Autonomous Workspace</h3>
              <p className="font-geist text-on-surface-variant leading-relaxed">
                We designed and built an orchestration layer for a fleet of autonomous AI agents. Rather than relying on simple prompt chaining, we implemented a state-machine architecture that handles multi-step reasoning, error recovery, and tool execution without human intervention.
              </p>
              <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8">
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-on-surface-variant">Architecture</span>
                  <span>Event Sourcing</span>
                </div>
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-on-surface-variant">Compute</span>
                  <span>Serverless Edge</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 lg:order-2 order-1">
              <div className="relative aspect-[4/3] border-sculpted overflow-hidden bg-background">
                <img 
                  src="/mockups/ai_workspace.png" 
                  alt="AI Agent Workspace" 
                  className="w-full h-full object-cover object-left-top hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

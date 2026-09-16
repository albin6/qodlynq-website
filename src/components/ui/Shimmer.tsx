import { cn } from "@/lib/utils";

interface ShimmerProps {
  className?: string;
}

/**
 * Basic rectangular shimmer block with sweeping light reflection
 */
export function Shimmer({ className }: ShimmerProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-container-high/60 rounded-xl",
        className
      )}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/50 dark:via-white/10 to-transparent" />
    </div>
  );
}

interface WebsitePreviewSkeletonProps {
  domain?: string;
  className?: string;
}

/**
 * Realistic wireframe website skeleton with continuous shimmer effect
 * specifically engineered for iframe and live webpage previews.
 */
export function WebsitePreviewSkeleton({ domain, className }: WebsitePreviewSkeletonProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full bg-surface-container-low flex flex-col p-6 sm:p-8 md:p-10 select-none overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {/* Continuous Shimmer Light Beam Overlay */}
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 dark:via-white/15 to-transparent z-10 pointer-events-none" />

      {/* Mock Header Navigation */}
      <div className="flex items-center justify-between pb-6 border-b border-outline-variant/15 w-full shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface-container-high/80" />
          <div className="w-20 sm:w-28 h-3.5 sm:h-4 rounded-md bg-surface-container-high/80" />
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <div className="w-14 h-3 rounded-md bg-surface-container-high/60" />
          <div className="w-16 h-3 rounded-md bg-surface-container-high/60" />
          <div className="w-12 h-3 rounded-md bg-surface-container-high/60" />
        </div>
        <div className="w-20 sm:w-28 h-7 sm:h-8 rounded-full bg-surface-container-high/80" />
      </div>

      {/* Mock Hero Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center my-6 sm:my-10 max-w-2xl mx-auto w-full">
        {/* Mock Badge */}
        <div className="w-28 sm:w-36 h-5 sm:h-6 rounded-full bg-surface-container-high/60 mb-5" />

        {/* Mock Heading Lines */}
        <div className="w-4/5 sm:w-3/4 h-7 sm:h-10 rounded-xl bg-surface-container-high/90 mb-3" />
        <div className="w-3/5 sm:w-1/2 h-7 sm:h-10 rounded-xl bg-surface-container-high/80 mb-6" />

        {/* Mock Subtitle Lines */}
        <div className="w-full max-w-md h-3 sm:h-4 rounded-md bg-surface-container-high/60 mb-2" />
        <div className="w-2/3 max-w-sm h-3 sm:h-4 rounded-md bg-surface-container-high/50 mb-8" />

        {/* Mock Buttons */}
        <div className="flex items-center gap-3">
          <div className="w-28 sm:w-32 h-9 sm:h-10 rounded-full bg-surface-container-high/90" />
          <div className="w-24 sm:w-28 h-9 sm:h-10 rounded-full bg-surface-container-high/50" />
        </div>
      </div>

      {/* Mock Bottom Cards Row */}
      <div className="hidden md:grid grid-cols-3 gap-4 w-full shrink-0">
        <div className="p-4 rounded-2xl bg-surface-container-lowest/60 border border-outline-variant/15 flex flex-col gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high/80" />
          <div className="w-24 h-3.5 rounded bg-surface-container-high/80" />
          <div className="w-full h-2.5 rounded bg-surface-container-high/50" />
        </div>
        <div className="p-4 rounded-2xl bg-surface-container-lowest/60 border border-outline-variant/15 flex flex-col gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high/80" />
          <div className="w-28 h-3.5 rounded bg-surface-container-high/80" />
          <div className="w-4/5 h-2.5 rounded bg-surface-container-high/50" />
        </div>
        <div className="p-4 rounded-2xl bg-surface-container-lowest/60 border border-outline-variant/15 flex flex-col gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-surface-container-high/80" />
          <div className="w-20 h-3.5 rounded bg-surface-container-high/80" />
          <div className="w-3/4 h-2.5 rounded bg-surface-container-high/50" />
        </div>
      </div>

      {/* Center Floating Status Indicator */}
      {domain && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="px-4 py-2.5 rounded-full bg-surface-container-lowest/95 backdrop-blur-xl border border-outline-variant/40 shadow-lg flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="text-[12px] sm:text-[13px] font-medium text-primary">
              Connecting live preview...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

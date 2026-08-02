import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-24 mt-32">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="max-w-md">
          <span className="font-mono text-sm tracking-tight text-on-background mb-4 block">
            QODLYNQ
          </span>
          <p className="font-geist text-on-surface-variant text-lg leading-relaxed mb-8">
            We build software for teams that care about architecture, performance, and long-term viability.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-on-surface-variant hover:text-on-background transition-colors font-mono text-xs uppercase tracking-widest"
            >
              Github
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant hover:text-on-background transition-colors font-mono text-xs uppercase tracking-widest"
            >
              LinkedIn
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant hover:text-on-background transition-colors font-mono text-xs uppercase tracking-widest"
            >
              Twitter
            </Link>
          </div>
        </div>
        
        <div className="flex gap-24">
          <div className="flex flex-col gap-4">
            <Link href="#beliefs" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background">
              Beliefs
            </Link>
            <Link href="#approach" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background">
              Approach
            </Link>
            <Link href="#work" className="font-mono text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background">
              Work
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

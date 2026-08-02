"use client";

import { MagneticLink } from "../ui/MagneticLink";

export function Footer() {
  return (
    <footer className="w-full px-margin-desktop py-24 bg-primary text-surface relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto editorial-grid items-end">
        <div className="col-span-12 md:col-span-6">
          <div className="font-display-lg text-4xl tracking-tighter opacity-100 mb-8">STUDIO_ARCH</div>
          <p className="font-label-sm uppercase tracking-[0.3em] opacity-40">Structural Engineering for Software</p>
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right space-x-12 mt-12 md:mt-0">
          <MagneticLink href="#" className="font-label-sm uppercase tracking-widest hover:opacity-50 transition-all">LinkedIn</MagneticLink>
          <MagneticLink href="#" className="font-label-sm uppercase tracking-widest hover:opacity-50 transition-all">Twitter</MagneticLink>
          <MagneticLink href="#" className="font-label-sm uppercase tracking-widest hover:opacity-50 transition-all">Clutch</MagneticLink>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto mt-24 pt-12 border-t border-surface/5 flex flex-col md:flex-row justify-between gap-8 opacity-30">
        <p className="font-label-sm uppercase tracking-widest">© 2024 Studio Arch. London.</p>
        <div className="flex gap-12 font-label-sm uppercase tracking-widest">
          <span className="hover:text-surface cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-surface cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </footer>
  );
}

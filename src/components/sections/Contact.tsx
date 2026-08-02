"use client";

import { Reveal } from "../ui/Reveal";
import { MagneticLink } from "../ui/MagneticLink";

export function Contact() {
  return (
    <section className="py-64 px-margin-mobile md:px-margin-desktop bg-surface" id="about">
      <div className="max-w-[1600px] mx-auto editorial-grid">
        <div className="col-span-12 md:col-span-5 mb-24 md:mb-0">
          <Reveal>
            <h2 className="font-display-lg text-7xl mb-24">Let's talk<br/>systems.</h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="space-y-16">
              <div className="group cursor-pointer">
                <p className="font-label-sm uppercase tracking-widest opacity-40 mb-4">Email</p>
                <a className="text-3xl font-display-lg block hover:opacity-50 transition-opacity" href="mailto:hello@studioarch.com">hello@studioarch.com</a>
              </div>
              <div>
                <p className="font-label-sm uppercase tracking-widest opacity-40 mb-4">Base</p>
                <p className="text-3xl font-display-lg">London, SE1</p>
              </div>
            </div>
          </Reveal>
        </div>

        <form className="col-span-12 md:col-span-6 md:col-start-7 space-y-20">
          <Reveal delay={300}>
            <div className="border-b border-outline-variant/30 py-6 focus-within:border-primary transition-colors">
              <label className="font-label-sm uppercase tracking-widest opacity-40 mb-4 block">Name</label>
              <input className="w-full bg-transparent border-none focus:ring-0 py-4 px-0 text-2xl font-display-lg placeholder:opacity-20" placeholder="Identity" type="text" />
            </div>
            
            <div className="border-b border-outline-variant/30 py-6 focus-within:border-primary transition-colors">
              <label className="font-label-sm uppercase tracking-widest opacity-40 mb-4 block">Email</label>
              <input className="w-full bg-transparent border-none focus:ring-0 py-4 px-0 text-2xl font-display-lg placeholder:opacity-20" placeholder="Address" type="email" />
            </div>
            
            <div className="border-b border-outline-variant/30 py-6 focus-within:border-primary transition-colors">
              <label className="font-label-sm uppercase tracking-widest opacity-40 mb-4 block">Brief</label>
              <textarea className="w-full bg-transparent border-none focus:ring-0 py-4 px-0 text-2xl font-display-lg placeholder:opacity-20" placeholder="System challenge..." rows={3}></textarea>
            </div>
            
            <MagneticLink className="bg-primary text-surface px-16 py-6 font-label-sm uppercase tracking-[0.25em] hover:bg-neutral-800 transition-all mt-12 block text-center">
              Send Inquiry
            </MagneticLink>
          </Reveal>
        </form>
      </div>
    </section>
  );
}

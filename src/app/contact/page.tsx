import { Header } from "@/components/layout/Header";
import { Contact as FooterContact } from "@/components/sections/Contact";
import { ContactForm } from "./components/ContactForm";
import * as motion from "framer-motion/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Qodlynq | Let's Build Something",
  description: "Have a project in mind? Get in touch with Qodlynq to discuss websites, web applications, SaaS, mobile apps and custom software solutions."
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col bg-surface pt-28 sm:pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-24 overflow-x-hidden">
        <section className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 max-w-7xl mx-auto w-full mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* Left Column: Intro & Contact Details (Sticky on desktop) */}
            <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex flex-col self-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Live Status Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md border border-outline-variant/30 px-3.5 py-1.5 rounded-full shadow-xs mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-secondary font-label-sm uppercase tracking-widest text-[11px] font-semibold">
                    Taking on new projects
                  </span>
                </div>

                {/* Primary Page Heading */}
                <h1 className="font-headline-lg text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-primary mb-4 sm:mb-6 uppercase leading-[1.05]">
                  Have an idea?
                </h1>

                {/* Body Text */}
                <p className="font-body-lg text-[16px] sm:text-[18px] md:text-[20px] text-on-surface-variant mb-8 sm:mb-10 leading-relaxed">
                  Tell us what you're building, what problem you're solving, or where your existing systems need an upgrade. We'll explore the right architecture and turn it into reality.
                </p>

                {/* Contact Information & Channels Card */}
                <div className="bg-surface-container-lowest/80 backdrop-blur-xl border border-outline-variant/30 rounded-3xl p-6 sm:p-7 shadow-xs flex flex-col gap-5">
                  <div className="text-[11px] font-label-sm uppercase tracking-widest text-on-surface-variant/70 font-semibold mb-1">
                    Direct Channels
                  </div>

                  {/* Channel: Email */}
                  <a 
                    href="mailto:albinpariyarathu@gmail.com"
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/50 hover:bg-surface-container-low transition-all duration-200 border border-transparent hover:border-outline-variant/40"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">mail</span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-wider text-on-surface-variant/70 font-medium">Email</div>
                        <div className="text-[14px] sm:text-[15px] font-medium text-primary flex items-center gap-1.5">
                          <span>Send us an email</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant/50 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2">
                      arrow_forward
                    </span>
                  </a>

                  {/* Channel: Instagram */}
                  <a 
                    href="https://www.instagram.com/qodlynq/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/50 hover:bg-surface-container-low transition-all duration-200 border border-transparent hover:border-outline-variant/40"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-tr group-hover:from-amber-500 group-hover:via-rose-500 group-hover:to-purple-600 group-hover:text-white transition-all">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-wider text-on-surface-variant/70 font-medium">Instagram</div>
                        <div className="text-[14px] sm:text-[15px] font-medium text-primary flex items-center gap-1.5">
                          <span>Follow @qodlynq</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant/50 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2">
                      arrow_forward
                    </span>
                  </a>

                  {/* Channel: WhatsApp */}
                  <a 
                    href="https://wa.me/919037150655" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/50 hover:bg-surface-container-low transition-all duration-200 border border-transparent hover:border-outline-variant/40"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-[11px] uppercase tracking-wider text-on-surface-variant/70 font-medium">WhatsApp</div>
                        <div className="text-[14px] sm:text-[15px] font-medium text-primary flex items-center gap-1.5">
                          <span>Chat with our team</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
                        </div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-[18px] text-on-surface-variant/50 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2">
                      arrow_forward
                    </span>
                  </a>

                  {/* Channel: Location */}
                  <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-surface-container-low/30 border border-transparent">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-on-surface-variant/70 font-medium">Headquarters</div>
                      <div className="text-[14px] sm:text-[15px] font-medium text-primary">
                        Kerala, India • Global Clients
                      </div>
                    </div>
                  </div>

                  {/* Trust & Response Badge */}
                  <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between text-[12px] text-on-surface-variant/80">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-secondary">bolt</span>
                      <span>Avg response: &lt; 24h</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant/60">verified_user</span>
                      <span>NDA available</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="w-full lg:w-7/12 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Footer (Reused Contact Section) */}
        <FooterContact />
      </main>
    </>
  );
}

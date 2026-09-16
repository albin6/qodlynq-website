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
      <main className="flex-1 w-full flex flex-col bg-surface pt-32 md:pt-48">
        <section className="px-6 md:px-24 mb-24 max-w-container-max mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left Column: Intro & Info */}
            <div className="flex-1 lg:max-w-md flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/30 text-secondary font-label-sm uppercase tracking-widest text-[12px] px-4 py-1.5 rounded-full mb-8 shadow-sm inline-block">
                  Let's Build Something
                </div>
                <h1 className="font-headline-lg text-[clamp(48px,8vw,96px)] leading-[1.1] font-bold tracking-tighter text-primary mb-6 uppercase">
                  Have an idea?
                </h1>
                <p className="font-body-lg text-[18px] md:text-[22px] text-on-surface-variant mb-12">
                  Let's talk. Tell us what you're building, what you're trying to solve, or where you need help. We'll get back to you and explore how we can turn it into something real.
                </p>

                {/* Contact Info Panel */}
                <div className="flex flex-col gap-8 p-8 bg-surface-container-lowest/50 backdrop-blur-md border border-outline-variant/30 rounded-3xl shadow-sm">
                  <div>
                    <h3 className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant mb-2">Email</h3>
                    <a href="mailto:qodlynq.agency@gmail.com" className="font-headline-md text-[20px] font-medium text-primary hover:text-secondary transition-colors">
                      qodlynq.agency@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant mb-2">WhatsApp</h3>
                    <a href="https://wa.me/919037150655" target="_blank" rel="noopener noreferrer" className="font-headline-md text-[20px] font-medium text-primary hover:text-secondary transition-colors inline-flex items-center gap-2 group">
                      Chat on WhatsApp
                      <span className="material-symbols-outlined text-[20px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant mb-2">Location</h3>
                    <p className="font-headline-md text-[20px] font-medium text-primary">
                      Kerala, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="flex-[1.5] w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
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

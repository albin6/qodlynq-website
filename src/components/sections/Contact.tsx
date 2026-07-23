"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // To be implemented: form submission logic
  };

  return (
    <section id="contact" className="max-w-container_max mx-auto px-gutter py-huge">
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
        className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-xl md:p-xxl border border-outline-variant/10"
      >
        <div className="grid md:grid-cols-2 gap-huge items-center">
          <div>
            <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-md tracking-tighter">
              Let's build something meaningful.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-xl max-w-[28rem]">
              Ready to discuss your project? Fill out the form, and an engineer will get back to you within 24 hours to schedule a discovery call.
            </p>
            <div className="space-y-md">
              <div className="flex items-center gap-sm text-on-surface-variant">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body-md text-body-md">hello@qodlynq.com</span>
              </div>
              <div className="flex items-center gap-sm text-on-surface-variant">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body-md text-body-md">Remote Global</span>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-xs" htmlFor="name">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    type="text" 
                    className="w-full bg-surface-bright border-transparent focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary/40 text-body-md font-body-md py-6 px-4 rounded-xl transition-all" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface mb-xs" htmlFor="email">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    className="w-full bg-surface-bright border-transparent focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary/40 text-body-md font-body-md py-6 px-4 rounded-xl transition-all"
                    placeholder="john@example.com"
                    required 
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface mb-xs" htmlFor="project">
                  Project Details
                </label>
                <Textarea 
                  id="project" 
                  rows={4} 
                  className="w-full bg-surface-bright border-transparent focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary/40 text-body-md font-body-md resize-none p-4 rounded-xl transition-all" 
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>
              <div className="pt-sm flex flex-col sm:flex-row gap-md">
                <button
                  type="submit"
                  className="bg-on-surface text-surface-container-lowest font-label-md text-label-md px-lg py-4 rounded-xl hover:bg-on-surface/90 transition-all shadow-[0_4px_14px_0_rgba(17,24,39,0.39)] hover:shadow-[0_6px_20px_rgba(17,24,39,0.23)] w-full sm:w-auto text-center transform hover:-translate-y-0.5 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] mt-2"
                >
                  Book Discovery Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

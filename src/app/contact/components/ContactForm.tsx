"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    // Call the server action
    try {
      const result = await submitContactForm({ success: false }, formData);
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center p-12 text-center bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-3xl min-h-[400px]"
          >
            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6 shadow-xl">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="font-headline-md text-[32px] font-semibold text-primary mb-4">Message received.</h3>
            <p className="font-body-md text-[18px] text-on-surface-variant max-w-md mb-8">
              Thanks for reaching out. We've received your enquiry and will get back to you shortly.
            </p>
            <a 
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-sm text-[14px] rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl"
            >
              <span className="material-symbols-outlined mr-2 text-[18px]">arrow_back</span>
              Back to website
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full"
          >
            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="p-4 bg-error-container text-on-error-container rounded-2xl border border-error/20 font-body-md text-[14px]"
              >
                {errorMessage}
              </motion.div>
            )}

            {/* Honeypot field for spam protection */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant ml-1">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-5 py-4 font-body-md text-primary placeholder:text-outline focus:outline-none focus:border-primary/50 transition-colors shadow-sm"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant ml-1">Your Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-5 py-4 font-body-md text-primary placeholder:text-outline focus:outline-none focus:border-primary/50 transition-colors shadow-sm"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant ml-1">Company / Business</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  className="w-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-5 py-4 font-body-md text-primary placeholder:text-outline focus:outline-none focus:border-primary/50 transition-colors shadow-sm"
                  placeholder="Acme Corp"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant ml-1">Phone / WhatsApp</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-5 py-4 font-body-md text-primary placeholder:text-outline focus:outline-none focus:border-primary/50 transition-colors shadow-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="projectType" className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant ml-1">Project Type</label>
                <div className="relative">
                  <select 
                    id="projectType" 
                    name="projectType" 
                    className="w-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-5 py-4 font-body-md text-primary appearance-none focus:outline-none focus:border-primary/50 transition-colors shadow-sm cursor-pointer"
                  >
                    <option value="Website">Website</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile Application">Mobile Application</option>
                    <option value="SaaS Product">SaaS Product</option>
                    <option value="AI Solution">AI Solution</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Other">Other</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant ml-1">Budget</label>
                <div className="relative">
                  <select 
                    id="budget" 
                    name="budget" 
                    className="w-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-5 py-4 font-body-md text-primary appearance-none focus:outline-none focus:border-primary/50 transition-colors shadow-sm cursor-pointer"
                  >
                    <option value="Under ₹50K">Under ₹50K</option>
                    <option value="₹50K – ₹1L">₹50K – ₹1L</option>
                    <option value="₹1L – ₹3L">₹1L – ₹3L</option>
                    <option value="₹3L – ₹5L">₹3L – ₹5L</option>
                    <option value="₹5L+">₹5L+</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="timeline" className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant ml-1">Timeline</label>
              <div className="relative">
                <select 
                  id="timeline" 
                  name="timeline" 
                  className="w-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-5 py-4 font-body-md text-primary appearance-none focus:outline-none focus:border-primary/50 transition-colors shadow-sm cursor-pointer"
                >
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
                <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-label-sm text-[12px] uppercase tracking-widest text-on-surface-variant ml-1">Project Description *</label>
              <textarea 
                id="description" 
                name="description" 
                required 
                rows={5}
                className="w-full bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl px-5 py-4 font-body-md text-primary placeholder:text-outline focus:outline-none focus:border-primary/50 transition-colors shadow-sm resize-y"
                placeholder="Tell us about your project, goals, requirements, timeline, or anything else that would help us understand what you're looking to build."
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full md:w-auto inline-flex items-center justify-center px-10 py-5 bg-primary text-on-primary font-label-sm text-[16px] rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed group"
              >
                {status === "loading" ? (
                  <span className="flex items-center">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></span>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send enquiry
                    <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

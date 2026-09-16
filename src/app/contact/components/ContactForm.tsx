"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactForm } from "@/app/actions/contact";
import { CustomSelect } from "@/components/ui/CustomSelect";

const PROJECT_TYPES = [
  "Website",
  "Web Application",
  "Mobile Application",
  "SaaS Product",
  "AI Solution",
  "E-commerce",
  "UI/UX Design",
  "Custom Software",
  "Other",
];

const BUDGETS = [
  "Under ₹50K",
  "₹50K – ₹1L",
  "₹1L – ₹3L",
  "₹3L – ₹5L",
  "₹5L+",
  "Not sure yet",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

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
    } catch {
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
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 text-center bg-surface-container-lowest/80 backdrop-blur-xl border border-outline-variant/30 rounded-3xl min-h-[420px] shadow-sm"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-on-primary flex items-center justify-center mb-6 shadow-xl relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-30"></div>
              <span className="material-symbols-outlined text-3xl sm:text-4xl">check</span>
            </div>
            <h3 className="font-headline-md text-[28px] sm:text-[34px] font-bold text-primary mb-3 tracking-tight">
              Message received.
            </h3>
            <p className="font-body-md text-[16px] sm:text-[18px] text-on-surface-variant max-w-md mb-8 leading-relaxed">
              Thanks for reaching out. We've received your enquiry and our engineering team will get back to you shortly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full justify-center">
              <a 
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-primary text-on-primary font-label-sm text-[14px] font-medium rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">arrow_back</span>
                Back to website
              </a>
              <button 
                type="button"
                onClick={() => setStatus("idle")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-[14px] font-medium rounded-full border border-outline-variant/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Send another message
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="form-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-surface-container-lowest/70 backdrop-blur-xl border border-outline-variant/30 rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 sm:gap-6 w-full"
            >
              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  className="p-4 sm:p-5 bg-red-50/90 text-red-900 rounded-2xl border border-red-200 font-body-md text-[14px] flex items-start gap-3 shadow-xs"
                >
                  <span className="material-symbols-outlined text-red-600 text-[22px] mt-0.5 flex-shrink-0">error</span>
                  <div className="flex-1">
                    <p className="font-semibold text-red-950 text-[14px]">{errorMessage}</p>
                    <p className="text-[12px] text-red-800/80 mt-1">
                      You can also connect with us directly via{" "}
                      <a href="mailto:qodlynq.agency@gmail.com" className="underline font-medium hover:text-red-950">
                        qodlynq.agency@gmail.com
                      </a>{" "}
                      or{" "}
                      <a href="https://wa.me/919037150655" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-red-950">
                        WhatsApp
                      </a>.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Honeypot field for spam protection */}
              <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between ml-1">
                    <label htmlFor="name" className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest text-on-surface-variant/80 font-medium">
                      Your Name
                    </label>
                    <span className="text-[11px] text-secondary font-medium">* Required</span>
                  </div>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest focus:bg-surface-container-lowest backdrop-blur-sm border border-outline-variant/40 hover:border-outline-variant/80 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 font-body-md text-[15px] sm:text-[16px] text-primary placeholder:text-on-surface-variant/40 focus:outline-none transition-all duration-200 shadow-xs"
                    placeholder="e.g. Alex Johnson"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between ml-1">
                    <label htmlFor="email" className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest text-on-surface-variant/80 font-medium">
                      Your Email
                    </label>
                    <span className="text-[11px] text-secondary font-medium">* Required</span>
                  </div>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest focus:bg-surface-container-lowest backdrop-blur-sm border border-outline-variant/40 hover:border-outline-variant/80 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 font-body-md text-[15px] sm:text-[16px] text-primary placeholder:text-on-surface-variant/40 focus:outline-none transition-all duration-200 shadow-xs"
                    placeholder="alex@company.com"
                  />
                </div>
              </div>

              {/* Row 2: Company and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between ml-1">
                    <label htmlFor="company" className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest text-on-surface-variant/80 font-medium">
                      Company / Business
                    </label>
                    <span className="text-[11px] text-on-surface-variant/50 font-normal">Optional</span>
                  </div>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    className="w-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest focus:bg-surface-container-lowest backdrop-blur-sm border border-outline-variant/40 hover:border-outline-variant/80 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 font-body-md text-[15px] sm:text-[16px] text-primary placeholder:text-on-surface-variant/40 focus:outline-none transition-all duration-200 shadow-xs"
                    placeholder="Company or Startup"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between ml-1">
                    <label htmlFor="phone" className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest text-on-surface-variant/80 font-medium">
                      Phone / WhatsApp
                    </label>
                    <span className="text-[11px] text-on-surface-variant/50 font-normal">Optional</span>
                  </div>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest focus:bg-surface-container-lowest backdrop-blur-sm border border-outline-variant/40 hover:border-outline-variant/80 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 font-body-md text-[15px] sm:text-[16px] text-primary placeholder:text-on-surface-variant/40 focus:outline-none transition-all duration-200 shadow-xs"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Row 3: Project Type and Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2 relative z-30">
                  <div className="flex items-center justify-between ml-1">
                    <label htmlFor="projectType" className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest text-on-surface-variant/80 font-medium">
                      Project Type
                    </label>
                    <span className="text-[11px] text-on-surface-variant/50 font-normal">Select</span>
                  </div>
                  <CustomSelect 
                    id="projectType" 
                    name="projectType" 
                    options={PROJECT_TYPES} 
                    placeholder="Select project type" 
                  />
                </div>
                
                <div className="flex flex-col gap-2 relative z-20">
                  <div className="flex items-center justify-between ml-1">
                    <label htmlFor="budget" className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest text-on-surface-variant/80 font-medium">
                      Estimated Budget
                    </label>
                    <span className="text-[11px] text-on-surface-variant/50 font-normal">Select</span>
                  </div>
                  <CustomSelect 
                    id="budget" 
                    name="budget" 
                    options={BUDGETS} 
                    placeholder="Select budget" 
                  />
                </div>
              </div>

              {/* Row 4: Timeline */}
              <div className="flex flex-col gap-2 relative z-10">
                <div className="flex items-center justify-between ml-1">
                  <label htmlFor="timeline" className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest text-on-surface-variant/80 font-medium">
                    Expected Timeline
                  </label>
                  <span className="text-[11px] text-on-surface-variant/50 font-normal">Select</span>
                </div>
                <CustomSelect 
                  id="timeline" 
                  name="timeline" 
                  options={TIMELINES} 
                  placeholder="Select timeline" 
                />
              </div>

              {/* Row 5: Project Description */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between ml-1">
                  <label htmlFor="description" className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-widest text-on-surface-variant/80 font-medium">
                    Project Description
                  </label>
                  <span className="text-[11px] text-secondary font-medium">* Required</span>
                </div>
                <textarea 
                  id="description" 
                  name="description" 
                  required 
                  rows={4}
                  className="w-full bg-surface-container-lowest/90 hover:bg-surface-container-lowest focus:bg-surface-container-lowest backdrop-blur-sm border border-outline-variant/40 hover:border-outline-variant/80 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 font-body-md text-[15px] sm:text-[16px] text-primary placeholder:text-on-surface-variant/40 focus:outline-none transition-all duration-200 shadow-xs resize-y min-h-[120px]"
                  placeholder="Tell us about what you want to build, the problems to solve, any technical requirements, or your desired launch milestones..."
                ></textarea>
              </div>

              {/* Submit CTA & Privacy Note */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4.5 bg-primary text-on-primary font-label-sm text-[15px] sm:text-[16px] font-medium rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:hover:translate-y-0 disabled:cursor-not-allowed group cursor-pointer"
                >
                  {status === "loading" ? (
                    <span className="flex items-center">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></span>
                      Sending enquiry...
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
                <div className="flex items-center gap-2 text-on-surface-variant/60 text-[12px] font-body-md">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant/50">lock</span>
                  <span>Your information is kept strictly confidential.</span>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

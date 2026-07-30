"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function AboutContact() {
  return (
    <AnimatedSection id="about" className="w-full border-b border-primary">
      <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-0 w-full">
        {/* About (Pedigree) */}
        <div className="col-span-4 md:col-span-4 lg:col-span-5 border-b md:border-b-0 md:border-r border-primary p-margin flex flex-col">
          <h2 className="font-headline-md text-headline-md uppercase mb-8 border-b border-primary pb-4">
            LEADERSHIP // OUR TEAM
          </h2>
          <div className="space-y-8 grow">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-label-caps text-label-caps text-base md:text-lg mb-2 text-balance">ELARA VANCE [ TECHNICAL FOUNDER ]</h3>
              <p className="font-body-md text-body-md opacity-80">
                Ph.D. in Distributed Systems. Former Lead Infrastructure Engineer at global cloud provider. Architected systems handling 10M+ concurrent TCP connections.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-label-caps text-label-caps text-base md:text-lg mb-2 text-balance">MARCUS REY [ ENGINEERING LEAD ]</h3>
              <p className="font-body-md text-body-md opacity-80">
                Specialist in immutable infrastructure and zero-trust networks. 15 years designing fault-tolerant financial ledgers. Obsessed with mathematical provability in code.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact (Brutalist Form) */}
        <div id="contact" className="col-span-4 md:col-span-4 lg:col-span-7 p-margin flex flex-col justify-between">
          <div className="mb-12">
            <h2 className="font-label-caps text-label-caps text-base md:text-xl mb-4 text-balance">[ START A PROJECT ]</h2>
            <p className="font-body-md text-body-md opacity-80 max-w-md">
              Tell us about your project. We typically respond within 24 hours to discuss how we can help your business grow.
            </p>
          </div>
          
          <form className="space-y-12 grow flex flex-col justify-end">
            <div className="relative">
              <input 
                type="text" 
                id="identifier" 
                placeholder="FULL NAME" 
                className="peer w-full bg-transparent border-0 border-b-2 border-primary text-4xl font-headline-md rounded-none px-0 py-4 focus:ring-0 focus:border-black placeholder-transparent focus:outline-none" 
              />
              <label 
                htmlFor="identifier" 
                className="absolute left-0 -top-6 font-label-caps text-label-caps transition-all peer-placeholder-shown:text-headline-md peer-placeholder-shown:top-4 peer-placeholder-shown:font-headline-md peer-focus:-top-6 peer-focus:text-label-caps peer-focus:font-label-caps pointer-events-none"
              >
                FULL NAME
              </label>
            </div>
            <div className="relative">
              <input 
                type="email" 
                id="vector" 
                placeholder="EMAIL ADDRESS" 
                className="peer w-full bg-transparent border-0 border-b-2 border-primary text-4xl font-headline-md rounded-none px-0 py-4 focus:ring-0 focus:border-black placeholder-transparent focus:outline-none" 
              />
              <label 
                htmlFor="vector" 
                className="absolute left-0 -top-6 font-label-caps text-label-caps transition-all peer-placeholder-shown:text-headline-md peer-placeholder-shown:top-4 peer-placeholder-shown:font-headline-md peer-focus:-top-6 peer-focus:text-label-caps peer-focus:font-label-caps pointer-events-none"
              >
                EMAIL ADDRESS
              </label>
            </div>
            
            <Button type="submit" variant="secondary" className="w-full py-6 px-8 mt-8 text-xl">
              SUBMIT INQUIRY
            </Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}

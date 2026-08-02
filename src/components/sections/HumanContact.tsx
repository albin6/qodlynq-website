"use client";

export function HumanContact() {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="max-w-[var(--spacing-container-max)] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        
        <div>
          <h2 className="font-geist text-[clamp(40px,6vw,80px)] leading-tight font-medium mb-8">
            Start a<br />
            conversation.
          </h2>
          <p className="font-geist text-xl text-on-surface-variant max-w-md">
            We don't do hard sales. If you have an engineering challenge, we are happy to look at the architecture and see if we can help.
          </p>
        </div>

        <div className="flex flex-col gap-16 border-l border-border pl-12 lg:pl-24">
          <div>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4 block">
              Direct Engineering Line
            </span>
            <a 
              href="mailto:engineering@qodlynq.com"
              className="font-geist text-2xl md:text-4xl hover:text-on-surface-variant transition-colors"
            >
              engineering@qodlynq.com
            </a>
          </div>

          <div>
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-4 block">
              Or leave a message
            </span>
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Your email address" 
                className="w-full bg-transparent border-b border-border py-4 font-geist text-lg focus:border-on-background outline-none transition-colors placeholder:text-border"
              />
              <textarea 
                placeholder="What are you building?" 
                rows={3}
                className="w-full bg-transparent border-b border-border py-4 font-geist text-lg focus:border-on-background outline-none transition-colors resize-none placeholder:text-border"
              />
              <button type="submit" className="self-start font-mono text-xs uppercase tracking-widest border border-border px-8 py-4 hover:border-on-background hover:bg-on-background hover:text-background transition-colors">
                Submit Protocol
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}

import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { projects } from "@/data/projects";
import Image from "next/image";
import * as motion from "framer-motion/client";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full flex flex-col bg-surface pt-32 md:pt-48">
        <section className="px-6 md:px-24 mb-24 max-w-container-max mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-surface-container-lowest/50 backdrop-blur-sm border border-outline-variant/30 text-secondary font-label-sm uppercase tracking-widest text-[12px] px-4 py-1.5 rounded-full mb-8 shadow-sm inline-block">
              Selected Projects
            </div>
            <h1 className="font-headline-lg text-[clamp(48px,8vw,96px)] leading-[1.1] font-bold tracking-tighter text-primary mb-6">
              WORK
            </h1>
            <p className="font-body-lg text-[18px] md:text-[24px] text-on-surface-variant max-w-2xl">
              A collection of websites, web applications, SaaS products and digital experiences we've built.
            </p>
          </motion.div>
        </section>

        <section className="px-6 md:px-24 pb-32 max-w-container-max mx-auto w-full flex flex-col gap-16 md:gap-32">
          {projects.map((project, index) => (
            <motion.article 
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 md:gap-12"
            >
              <div className="group relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl md:rounded-[40px] bg-surface-container-lowest border border-outline-variant/20 shadow-[0_8px_40px_rgba(0,0,0,0.04)] block cursor-pointer">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-16 justify-between items-start">
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-label-sm text-secondary tracking-widest text-[14px]">0{index + 1}</span>
                    <span className="h-[1px] w-12 bg-outline-variant/50"></span>
                    <span className="font-label-sm text-on-surface-variant tracking-widest text-[12px] uppercase">{project.category}</span>
                  </div>
                  <h2 className="font-headline-md text-[32px] md:text-[40px] font-semibold text-primary mb-4 leading-tight">{project.title}</h2>
                  <p className="font-body-md text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map(tech => (
                        <span key={tech} className="bg-surface-variant/50 text-on-surface-variant font-label-sm text-[12px] px-3 py-1 rounded-full border border-outline-variant/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="shrink-0 pt-2">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-sm text-[14px] rounded-full hover:bg-primary/90 transition-all duration-300 shadow-xl hover:-translate-y-1 group"
                  >
                    View Live Project
                    <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
        
        <Contact />
      </main>
    </>
  );
}

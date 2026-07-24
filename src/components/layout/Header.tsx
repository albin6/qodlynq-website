"use client";

import { TextLink } from "@/components/ui/TextLink";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="bg-background/90 backdrop-blur-md text-primary top-0 border-b border-primary flex justify-between items-center w-full px-margin h-20 sticky z-50">
      <div className="font-headline-lg text-headline-md font-bold tracking-tighter">
        QODLYNQ
      </div>
      <nav className="hidden md:flex gap-8 items-center h-full">
        <TextLink href="#architecture" active>
          ARCHITECTURE
        </TextLink>
        <TextLink href="#infrastructure">
          INFRASTRUCTURE
        </TextLink>
        <TextLink href="#registry">
          REGISTRY
        </TextLink>
        <TextLink href="#archive">
          ARCHIVE
        </TextLink>
      </nav>
      <div className="flex items-center h-full">
        <Link href="#contact" className="block">
          <motion.div
            className={cn(
              "font-button text-button px-6 py-2 uppercase tracking-widest flex items-center justify-center gap-2 border transition-colors duration-150 border-primary hover:bg-primary hover:text-vellum cursor-pointer"
            )}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            INITIATE PROJECT //
          </motion.div>
        </Link>
      </div>
    </header>
  );
}

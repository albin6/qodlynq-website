"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

interface TextLinkProps extends React.ComponentProps<typeof Link> {
  active?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function TextLink({ href, children, className, active, ...props }: TextLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative group h-full flex items-center px-4 font-label-caps text-label-caps transition-colors duration-75",
        active ? "text-primary" : "text-secondary hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
      <motion.span
        className={cn(
          "absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-left",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        )}
        initial={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </Link>
  );
}

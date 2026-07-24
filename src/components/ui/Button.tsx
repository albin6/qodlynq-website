"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "font-button text-button px-6 py-2 uppercase tracking-widest flex items-center justify-center gap-2 border transition-colors duration-150",
          variant === "primary"
            ? "border-primary hover:bg-primary hover:text-vellum"
            : "bg-black text-vellum border-black hover:bg-vellum hover:text-black",
          className
        )}
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

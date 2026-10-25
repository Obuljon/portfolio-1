"use client";

import { motion, useReducedMotion } from "motion/react";
import type { HTMLAttributes } from "react";

type RevealProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "header";
}> & Pick<HTMLAttributes<HTMLElement>, "role" | "aria-label">;

export function Reveal({ children, className, delay = 0, as = "div", role, "aria-label": ariaLabel }: RevealProps) {
  const reduced = useReducedMotion();
  const Element = motion[as];
  return (
    <Element
      className={className}
      role={role}
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: reduced ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Element>
  );
}

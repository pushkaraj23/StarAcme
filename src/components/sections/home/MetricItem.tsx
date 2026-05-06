"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/* Match expertise cards — slow, elastic */
const springHover = {
  type: "spring" as const,
  stiffness: 105,
  damping: 11,
  mass: 1.2,
};

const springTap = {
  type: "spring" as const,
  stiffness: 130,
  damping: 13,
  mass: 1.05,
};

export type MetricItemProps = {
  value: string;
  label: string;
  emphasize: boolean;
  icon: ReactNode;
};

export function MetricItem({ value, label, emphasize, icon }: MetricItemProps) {
  const reduceMotion = useReducedMotion();
  const valueClass = emphasize ? "text-accent" : "text-primary";
  const labelClass = emphasize ? "text-accent" : "text-primary";

  return (
    <motion.div
      className="flex w-full max-w-[16rem] cursor-default flex-col items-center gap-3.5 text-center sm:max-w-none sm:gap-2.5"
      initial={false}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
              scale: 1.04,
              transition: springHover,
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.987, y: -4, transition: springTap }}
      transition={springHover}
    >
      {icon}
      <p
        className={`text-6xl font-bold leading-[1.02] tracking-tight sm:text-5xl sm:leading-none lg:text-[3.15rem] lg:leading-none ${valueClass}`}
      >
        {value}
      </p>
      <p
        className={`mt-1 max-w-[16rem] text-base font-normal leading-snug sm:mt-0.5 sm:max-w-[12rem] sm:text-[0.9375rem] ${labelClass}`}
      >
        {label}
      </p>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export type ExpertiseItem = {
  subtitle: string;
  title: string;
  image: string;
};

/* Slower, underdamped springs for a soft elastic settle */
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

type ExpertiseCardProps = {
  item: ExpertiseItem;
  staggerClassName: string;
};

export function ExpertiseCard({ item, staggerClassName }: ExpertiseCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={staggerClassName}>
      <motion.article
        className="liquid-glass-dark flex min-h-[300px] flex-col items-center justify-between rounded-[28px] px-5 py-7 sm:min-h-[320px] lg:min-h-[300px]"
        initial={false}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -10,
                scale: 1.035,
                boxShadow:
                  "0 22px 48px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.16)",
                transition: springHover,
              }
        }
        whileTap={
          reduceMotion ? undefined : { scale: 0.985, y: -4, transition: springTap }
        }
        transition={springHover}
      >
        <div className="flex shrink-0 justify-center">
          <Image
            src={item.image}
            alt={`${item.title} — ${item.subtitle}`}
            width={220}
            height={180}
            className="h-auto w-full max-w-[200px]"
          />
        </div>
        <div className="space-y-1 text-center">
          <p className="text-base leading-snug text-[#a0a0a0]">{item.subtitle}</p>
          <p className="text-xl font-semibold leading-tight text-secondary sm:text-2xl">{item.title}</p>
        </div>
      </motion.article>
    </div>
  );
}

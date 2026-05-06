"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

type ParallaxSectionProps = {
  children: React.ReactNode;
  className?: string;
  yRange?: number;
  rotateRange?: number;
  scaleRange?: [number, number];
};

export function ParallaxSection({
  children,
  className,
  yRange = 130,
  rotateRange = 1.2,
  scaleRange = [0.95, 1.03],
}: ParallaxSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [yRange, -yRange]);
  const rawScale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const rawRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [rotateRange, 0, -rotateRange]
  );
  const rawOpacity = useTransform(scrollYProgress, [0.08, 0.22, 1], [0.58, 1, 1]);

  const y = useSpring(rawY, { stiffness: 95, damping: 26, mass: 0.42 });
  const scale = useSpring(rawScale, { stiffness: 95, damping: 26, mass: 0.42 });
  const rotateX = useSpring(rawRotate, { stiffness: 95, damping: 26, mass: 0.42 });
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 22, mass: 0.35 });

  if (reduceMotion) {
    return (
      <section ref={containerRef} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={containerRef}
      className={className}
      style={{
        y,
        scale,
        rotateX,
        opacity,
        transformPerspective: 1400,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </motion.section>
  );
}

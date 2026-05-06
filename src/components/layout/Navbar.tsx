"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { NAV_ITEMS } from "@/src/data/navigation";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollYRef.current;
    const delta = latest - previous;

    if (latest <= 24) {
      setIsVisible(true);
      lastScrollYRef.current = latest;
      return;
    }

    if (delta > 3) {
      setIsVisible(false);
    } else if (delta < -3) {
      setIsVisible(true);
    }

    lastScrollYRef.current = latest;
  });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-50 px-3 sm:px-6 lg:px-10">
      <motion.header
        initial={{ y: -40, opacity: 0, scale: 0.985 }}
        animate={
          isVisible
            ? { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }
            : { y: -110, opacity: 0, scale: 0.97, filter: "blur(4px)" }
        }
        transition={{
          y: { type: "spring", stiffness: 320, damping: 30 },
          opacity: { duration: 0.24, ease: "easeOut" },
          scale: { duration: 0.24, ease: "easeOut" },
          filter: { duration: 0.24, ease: "easeOut" },
        }}
        className="liquid-glass pointer-events-auto mx-auto w-full max-w-[1320px] rounded-full px-4 py-2 backdrop-blur-2xl supports-[backdrop-filter]:bg-secondary/55"
      >
        <div className="flex min-h-[58px] items-center justify-between gap-4">
          <div className="ml-2 flex items-center px-3 py-1.5">
            <Image
              src="/logo.svg"
              alt="Staracme logo"
              width={170}
              height={42}
              priority
              className="h-auto w-[150px] sm:w-[190px]"
            />
          </div>

          <nav className="hidden h-full flex-1 items-center justify-center lg:flex">
            <ul className="flex h-full items-center gap-3 text-sm font-medium text-primary">
              {NAV_ITEMS.map((item, idx) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`inline-flex h-10 items-center rounded-full px-5 text-sm leading-none transition-all duration-300 ${
                      idx === 0
                        ? "bg-accent text-secondary shadow-[var(--shadow-strong)]"
                        : "hover:bg-secondary/75"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#"
            className="inline-flex items-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-secondary transition-transform duration-300 hover:scale-[1.03]"
          >
            Contact
          </a>
        </div>
      </motion.header>
    </div>
  );
}

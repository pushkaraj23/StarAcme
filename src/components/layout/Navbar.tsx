"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/src/data/navigation";

function MobileMenuToggle({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative z-[71] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/[0.14] bg-secondary/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md lg:hidden active:scale-[0.96] ${open ? "border-primary/25 ring-1 ring-accent/15" : "hover:border-accent/30"}`}
      aria-expanded={open}
      aria-controls="mobile-nav"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <span className={`pointer-events-none absolute inset-x-2 top-1/2 h-[7px] -translate-y-1/2 rounded-full bg-accent/75 blur-[10px] ${open ? "opacity-0" : "opacity-0 group-hover:opacity-55"}`} />
      <span className="relative z-[1] flex size-11 items-center justify-center">
        <HiBars3
          className={`absolute h-[22px] w-[22px] text-primary transition-opacity duration-200 ease-out ${open ? "pointer-events-none opacity-0" : "opacity-100"}`}
          aria-hidden
        />
        <HiXMark
          className={`absolute h-[22px] w-[22px] text-primary transition-opacity duration-200 ease-out ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
          aria-hidden
        />
      </span>
    </button>
  );
}

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollYRef = useRef(0);
  const reduceMotion = useReducedMotion();
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

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const stagger = reduceMotion ? 0 : 0.055;

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-4 px-3 sm:px-6 lg:px-10 ${mobileOpen ? "z-[80]" : "z-50"}`}
    >
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
        className={`liquid-glass pointer-events-auto relative mx-auto w-full max-w-[1320px] rounded-full px-4 py-2 backdrop-blur-2xl supports-[backdrop-filter]:bg-secondary/55 ${mobileOpen ? "z-[70]" : "z-[1]"}`}
      >
        <div className="flex min-h-[58px] items-center justify-between gap-3">
          <div className="ml-1 flex min-w-0 items-center px-2 py-1.5 sm:ml-2 sm:px-3">
            <Image
              src="/logo.svg"
              alt="Staracme logo"
              width={170}
              height={42}
              priority
              className="h-auto w-[130px] sm:w-[150px] lg:w-[190px]"
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
            className="hidden items-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-secondary transition-transform duration-300 hover:scale-[1.03] lg:inline-flex"
          >
            Contact
          </a>

          <MobileMenuToggle open={mobileOpen} onClick={() => setMobileOpen((o) => !o)} />
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              className="pointer-events-auto fixed inset-0 z-[60] bg-primary/42 backdrop-blur-md lg:hidden"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              key="panel"
              className="pointer-events-auto fixed left-3 right-3 top-[calc(5.85rem+1.25rem+env(safe-area-inset-top,0px))] z-[62] flex max-h-[min(82vh,580px)] flex-col overflow-hidden rounded-[28px] border border-white/75 bg-white/72 shadow-[0_20px_50px_rgba(55,55,55,0.12),0_0_0_1px_rgba(255,255,255,0.5)] backdrop-blur-2xl supports-[backdrop-filter]:bg-secondary/52 sm:left-auto sm:right-6 sm:w-[min(92vw,360px)] lg:hidden"
              initial={reduceMotion ? { opacity: 0, y: -8 } : { opacity: 0, y: -18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14, scale: 0.98 }}
              transition={{ type: "spring", damping: 30, stiffness: 360, mass: 0.72 }}
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/88 via-secondary/25 to-accent/[0.07]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

              <ul className="relative flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-3 pb-4 pt-4">
                {NAV_ITEMS.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * stagger, duration: 0.28, ease: "easeOut" }}
                  >
                    <a
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl px-4 py-3.5 text-[15px] font-medium tracking-tight transition-colors duration-200 ${
                        idx === 0
                          ? "bg-accent text-secondary shadow-[var(--shadow-strong)]"
                          : "text-primary hover:bg-white/90 active:bg-white"
                      }`}
                    >
                      <span className="relative z-[1]">{item}</span>
                      {idx === 0 ? (
                        <span className="relative z-[1] text-xs font-semibold uppercase tracking-wide text-secondary/90">
                          Now
                        </span>
                      ) : (
                        <span
                          className="relative z-[1] text-lg font-light text-primary/25 transition-colors duration-200 group-hover:text-accent/75"
                          aria-hidden
                        >
                          →
                        </span>
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="relative border-t border-primary/[0.08] bg-primary/[0.03] px-4 py-4">
                <a
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)] transition-transform duration-200 active:scale-[0.99]"
                >
                  Contact
                  <span aria-hidden className="text-base leading-none">
                    ↗
                  </span>
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

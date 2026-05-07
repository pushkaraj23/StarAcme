"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { HiBars3, HiChevronDown, HiXMark } from "react-icons/hi2";
import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "@/src/data/navigation";
import { EXPERT_SERVICES } from "@/src/data/services";

const NAV_HREF: Record<string, string> = {
  Home: "/",
  Projects: "/projects",
};

function getNavHref(item: string) {
  return NAV_HREF[item] ?? "#";
}

function useIsActive() {
  const pathname = usePathname();
  return (item: string) => {
    if (item === "Home") return pathname === "/";
    if (item === "Projects") return pathname.startsWith("/projects");
    return false;
  };
}

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
  const pathname = usePathname();
  const isActive = useIsActive();
  const isSolutionsRoute = pathname.startsWith("/services");
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  // Track position of the Solutions li so we can position the floating dropdown
  const solLiRef = useRef<HTMLLIElement>(null);
  const [dropPos, setDropPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 });
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
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
      setSolutionsOpen(false);
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

  useEffect(() => {
    if (!mobileOpen) setMobileSolutionsOpen(false);
  }, [mobileOpen]);

  const openSolutions = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (solLiRef.current) {
      const rect = solLiRef.current.getBoundingClientRect();
      setDropPos({ left: rect.left + rect.width / 2, top: rect.bottom + 10 });
    }
    setSolutionsOpen(true);
  };

  const scheduleSolutionsClose = () => {
    closeTimerRef.current = setTimeout(() => setSolutionsOpen(false), 120);
  };

  const cancelSolutionsClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

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
            <Link href="/" className="shrink-0" aria-label="Staracme home">
              <Image
                src="/logo.svg"
                alt="Staracme logo"
                width={170}
                height={42}
                priority
                className="h-auto w-[130px] sm:w-[150px] lg:w-[190px]"
              />
            </Link>
          </div>

          <nav className="hidden h-full flex-1 items-center justify-center lg:flex" aria-label="Primary">
            <ul className="flex h-full items-center gap-3 text-sm font-medium text-primary">
              {NAV_ITEMS.map((item, idx) => {
                if (item === "Solutions") {
                  return (
                    <li
                      key={item}
                      ref={solLiRef}
                      onMouseEnter={openSolutions}
                      onMouseLeave={scheduleSolutionsClose}
                    >
                      <button
                        type="button"
                        className={`inline-flex h-10 cursor-default items-center gap-1 rounded-full px-5 text-sm leading-none transition-all duration-300 hover:bg-secondary/75 ${solutionsOpen || isSolutionsRoute ? "bg-secondary/75" : ""}`}
                        aria-haspopup="menu"
                        aria-expanded={solutionsOpen}
                        aria-controls="nav-solutions-menu"
                        onFocus={openSolutions}
                        onBlur={scheduleSolutionsClose}
                      >
                        Solutions
                        <HiChevronDown
                          className={`h-4 w-4 opacity-70 transition-transform duration-200 ${solutionsOpen ? "-rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>
                    </li>
                  );
                }

                const href = getNavHref(item);
                const active = isActive(item);
                return (
                  <li key={item}>
                    <Link
                      href={href}
                      className={`inline-flex h-10 items-center rounded-full px-5 text-sm leading-none transition-all duration-300 ${
                        active
                          ? "bg-accent text-secondary shadow-[var(--shadow-strong)]"
                          : "hover:bg-secondary/75"
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="#"
            className="hidden items-center rounded-full bg-primary px-10 py-3 text-sm font-semibold text-secondary transition-transform duration-300 hover:scale-[1.03] lg:inline-flex"
          >
            Contact
          </Link>

          <MobileMenuToggle open={mobileOpen} onClick={() => setMobileOpen((o) => !o)} />
        </div>
      </motion.header>

      {/* Solutions dropdown — rendered OUTSIDE motion.header to escape overflow:hidden */}
      <AnimatePresence>
        {solutionsOpen && (
          /* Static shell handles centering; motion.div only controls opacity/y/scale */
          <div
            style={{
              position: "fixed",
              top: dropPos.top,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 200,
              width: "min(calc(100vw - 2rem), 860px)",
              pointerEvents: "auto",
            }}
            onMouseEnter={cancelSolutionsClose}
            onMouseLeave={scheduleSolutionsClose}
          >
          <motion.div
            id="nav-solutions-menu"
            key="sol-dropdown"
            role="menu"
            aria-label="Solutions"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full rounded-2xl border border-white/60 bg-secondary/90 p-4 shadow-[0_24px_56px_rgba(55,55,55,0.18),0_0_0_1px_rgba(255,255,255,0.5)] backdrop-blur-2xl"
          >
            <div className="grid grid-cols-3 gap-3">
              {EXPERT_SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  role="menuitem"
                  onClick={() => setSolutionsOpen(false)}
                  className={`group flex flex-col rounded-xl p-4 transition-all duration-200 hover:scale-[1.015] ${
                    s.dark
                      ? "bg-primary text-secondary hover:bg-primary/90"
                      : "bg-white/70 text-primary hover:bg-white/95"
                  }`}
                >
                  <div className="flex justify-center">
                    <Image
                      src={s.image}
                      alt=""
                      width={200}
                      height={140}
                      className="h-[120px] w-auto object-contain"
                    />
                  </div>
                  <h3
                    className={`mt-3 text-[0.8125rem] font-semibold leading-snug ${
                      s.dark ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-1.5 line-clamp-2 text-[0.75rem] leading-relaxed ${
                      s.dark ? "text-secondary/72" : "text-primary/65"
                    }`}
                  >
                    {s.description}
                  </p>
                  <span
                    className={`mt-3 text-xs font-semibold text-accent transition-colors group-hover:underline`}
                  >
                    View details →
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
          </div>
        )}
      </AnimatePresence>

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
                {NAV_ITEMS.map((item, idx) => {
                  if (item === "Solutions") {
                    return (
                      <motion.li
                        key={item}
                        className="flex flex-col gap-1"
                        initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * stagger, duration: 0.28, ease: "easeOut" }}
                      >
                        <button
                          type="button"
                          onClick={() => setMobileSolutionsOpen((o) => !o)}
                          aria-expanded={mobileSolutionsOpen}
                          className="group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-2xl px-4 py-3.5 text-left text-[15px] font-medium tracking-tight text-primary transition-colors duration-200 hover:bg-white/90 active:bg-white"
                        >
                          <span className="relative z-[1]">{item}</span>
                          <HiChevronDown
                            className={`relative z-[1] h-5 w-5 shrink-0 text-primary/45 transition-transform duration-200 ${mobileSolutionsOpen ? "-rotate-180" : ""}`}
                            aria-hidden
                          />
                        </button>
                        {mobileSolutionsOpen ? (
                          <ul className="mb-1 ml-2 space-y-0.5 border-l-2 border-accent/30 pl-3">
                            {EXPERT_SERVICES.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-xl py-2.5 pl-1 text-[13px] font-medium leading-snug text-primary/85 transition-colors hover:text-accent"
                                >
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </motion.li>
                    );
                  }

                  const href = getNavHref(item);
                  const active = isActive(item);
                  return (
                    <motion.li
                      key={item}
                      initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * stagger, duration: 0.28, ease: "easeOut" }}
                    >
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl px-4 py-3.5 text-[15px] font-medium tracking-tight transition-colors duration-200 ${
                          active
                            ? "bg-accent text-secondary shadow-[var(--shadow-strong)]"
                            : "text-primary hover:bg-white/90 active:bg-white"
                        }`}
                      >
                        <span className="relative z-[1]">{item}</span>
                        {active ? (
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
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="relative border-t border-primary/[0.08] bg-primary/[0.03] px-4 py-4">
                <Link
                  href="#"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-sm font-semibold text-secondary shadow-[0_8px_24px_rgba(55,55,55,0.18)] transition-transform duration-200 active:scale-[0.99]"
                >
                  Contact
                  <span aria-hidden className="text-base leading-none">
                    ↗
                  </span>
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

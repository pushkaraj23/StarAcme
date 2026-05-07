"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowSmallRight } from "react-icons/hi2";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const DESC =
  "They didn't just build software, they invested time in understanding the actual business challenge behind it. From our workflows to user behavior and long-term needs, every detail was carefully considered. The final solution felt completely aligned with how our business operates rather than being a generic off-the-shelf product.";

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Project Title 1",
    description: DESC,
    image: "/graphics/home/service3.svg",
  },
  {
    id: "p2",
    title: "Project Title 2",
    description: DESC,
    image: "/graphics/home/service1.svg",
  },
  {
    id: "p3",
    title: "Project Title 3",
    description: DESC,
    image: "/graphics/home/service2.svg",
  },
];

const SWAP_DURATION_MS = 1400;
const SWAP_SECONDS = 1.35;
const EASE = [0.22, 1, 0.36, 1] as const;

// `sign` flips animation direction per side:
//   right (sign=+1) behaves like normal scroll — incoming from below on scroll-down.
//   left  (sign=-1) is inverted — incoming from above on scroll-down.
const cardVariants = {
  enter: (c: { dir: number; sign: number }) => ({
    y: `${c.dir * c.sign * 100}%`,
    opacity: 0,
  }),
  center: { y: "0%", opacity: 1 },
  exit: (c: { dir: number; sign: number }) => ({
    y: `${-c.dir * c.sign * 100}%`,
    opacity: 0,
  }),
};

function CardContent({
  project,
  side,
  dark,
}: {
  project: Project;
  side: "left" | "right";
  dark: boolean;
}) {
  const isRight = side === "right";
  return (
    <div
      className={`flex h-full w-full min-h-0 flex-col px-6 sm:px-10 lg:px-16 ${
        isRight ? "items-end text-right" : "items-start text-left"
      }`}
      style={{
        paddingTop: "clamp(6.5rem, 13vh, 8.5rem)",
        paddingBottom: "clamp(2.5rem, 7vh, 4rem)",
      }}
    >
      <Image
        src={project.image}
        alt=""
        width={300}
        height={240}
        className="h-auto shrink-0 object-contain"
        style={{ width: "clamp(190px, 26vh, 330px)" }}
        priority
      />
      <h2
        className={`shrink-0 font-semibold leading-[1.05] tracking-tight ${
          dark ? "text-secondary" : "text-primary"
        }`}
        style={{
          marginTop: "clamp(1rem, 3vh, 2.25rem)",
          fontSize: "clamp(2rem, 5.2vh, 3.75rem)",
        }}
      >
        {project.title}
      </h2>
      <p
        className={`min-h-0 max-w-md leading-relaxed ${
          dark ? "text-secondary/72" : "text-primary/72"
        }`}
        style={{
          marginTop: "clamp(0.75rem, 1.8vh, 1.25rem)",
          fontSize: "clamp(0.9375rem, 1.95vh, 1.0625rem)",
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {project.description}
      </p>
      <div className="mt-auto shrink-0" style={{ paddingTop: "clamp(1.5rem, 3.5vh, 2.5rem)" }}>
        <button
          type="button"
          className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] ${
            dark
              ? "bg-secondary text-primary"
              : "border border-primary/10 bg-secondary text-primary shadow-[0_8px_24px_rgba(55,55,55,0.08)]"
          }`}
        >
          Enquire Now
          <HiArrowSmallRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden
          />
        </button>
      </div>
    </div>
  );
}

const COLOR_PRIMARY = "#373737";
const COLOR_SECONDARY = "#ffffff";
const TRANSPARENT = "rgba(0,0,0,0)";

function Dots({
  count,
  active,
  surface,
  position,
}: {
  count: number;
  active: number;
  surface: "light" | "dark";
  position: "top" | "bottom";
}) {
  const dotColor = surface === "light" ? COLOR_PRIMARY : COLOR_SECONDARY;
  return (
    <div
      className={`pointer-events-none absolute left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 ${
        position === "top" ? "top-[clamp(5.5rem,11vh,7rem)]" : "bottom-[clamp(1.25rem,3.5vh,2.5rem)]"
      }`}
    >
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === active;
        return (
          <motion.span
            key={i}
            aria-hidden
            initial={false}
            animate={{
              backgroundColor: isActive ? TRANSPARENT : dotColor,
              borderColor: dotColor,
              scale: isActive ? 1.05 : 1,
            }}
            transition={{ duration: SWAP_SECONDS, ease: EASE }}
            className="h-3 w-3 rounded-full border"
          />
        );
      })}
    </div>
  );
}

export default function ProjectsPage() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const lockRef = useRef(false);
  const touchStartRef = useRef(0);
  const len = PROJECTS.length;

  // Trap page scroll while on this route — wheel/touch/keyboard drive navigation instead.
  useEffect(() => {
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, []);

  useEffect(() => {
    const navigate = (dir: number) => {
      if (lockRef.current) return;
      lockRef.current = true;
      setDirection(dir);
      setIndex((i) => (i + dir + len) % len);
      window.setTimeout(() => {
        lockRef.current = false;
      }, SWAP_DURATION_MS);
    };

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 6) return;
      navigate(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        navigate(-1);
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStartRef.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchStartRef.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 30) return;
      navigate(dy > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [len]);

  const leftIdx = index;
  const rightIdx = (index + 1) % len;
  const leftProject = PROJECTS[leftIdx];
  const rightProject = PROJECTS[rightIdx];

  // Each scroll flips colors. Left & right are always opposite so the split stays.
  const leftDark = leftIdx % 2 === 1;
  const rightDark = !leftDark;

  const transition = { duration: SWAP_SECONDS, ease: EASE };

  return (
    <main className="relative h-[100svh] w-full overflow-hidden">
      <div className="grid h-full grid-cols-2">
        {/* LEFT half — inverted scroll direction (sign = -1) */}
        <section className="relative overflow-hidden">
          <AnimatePresence
            custom={{ dir: direction, sign: -1 }}
            initial={false}
          >
            <motion.div
              key={leftProject.id}
              custom={{ dir: direction, sign: -1 }}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className={`absolute inset-0 z-[1] ${leftDark ? "bg-primary" : "bg-background"}`}
            >
              <span
                aria-hidden
                className={`pointer-events-none absolute left-full top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-black tracking-tight ${
                  leftDark ? "text-secondary/10" : "text-primary/[0.07]"
                }`}
                style={{ fontSize: "clamp(8rem, 18vw, 17rem)" }}
              >
                PROJECTS
              </span>
              <CardContent project={leftProject} side="left" dark={leftDark} />
            </motion.div>
          </AnimatePresence>

          <Dots
            count={len}
            active={leftIdx}
            surface={leftDark ? "dark" : "light"}
            position="bottom"
          />
        </section>

        {/* RIGHT half — normal scroll direction (sign = +1) */}
        <section className="relative overflow-hidden">
          <AnimatePresence
            custom={{ dir: direction, sign: 1 }}
            initial={false}
          >
            <motion.div
              key={rightProject.id}
              custom={{ dir: direction, sign: 1 }}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className={`absolute inset-0 z-[1] ${rightDark ? "bg-primary" : "bg-background"}`}
            >
              <span
                aria-hidden
                className={`pointer-events-none absolute left-0 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-black tracking-tight ${
                  rightDark ? "text-secondary/10" : "text-primary/[0.07]"
                }`}
                style={{ fontSize: "clamp(8rem, 18vw, 17rem)" }}
              >
                PROJECTS
              </span>
              <CardContent project={rightProject} side="right" dark={rightDark} />
            </motion.div>
          </AnimatePresence>

          <Dots
            count={len}
            active={rightIdx}
            surface={rightDark ? "dark" : "light"}
            position="top"
          />
        </section>
      </div>
    </main>
  );
}

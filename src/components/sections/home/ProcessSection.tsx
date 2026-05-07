"use client";

import Image from "next/image";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import type { TouchEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

const PROCESS_STEPS = [
  {
    title: "Discovery",
    description:
      "We understand your goals, needs and the workflow of your business and identify the gaps we could improve.",
    image: "/graphics/home/process1.svg",
  },
  {
    title: "Scope & Strategy",
    description: "We define priorities, timelines, milestones, and a clear roadmap for execution.",
    image: "/graphics/home/process2.svg",
  },
  {
    title: "Prototype",
    description:
      "Based on the understanding of your business, we create previews and concepts that align with you.",
    image: "/graphics/home/process3.svg",
  },
  {
    title: "Design & Build",
    description: "We engineer secure and robust solutions until they meet your expectations.",
    image: "/graphics/home/process4.svg",
  },
  {
    title: "Testing",
    description: "Every feature and workflow is checked thoroughly for reliability and smooth adoption.",
    image: "/graphics/home/process5.svg",
  },
  {
    title: "Launch & Support",
    description:
      "We make the solution live and train your team, giving end-to-end support.",
    image: "/graphics/home/process6.svg",
  },
] as const;

const TRANSITION_MS = 700;
const AUTOPLAY_MS = 5000;
const STEP_COUNT = PROCESS_STEPS.length;
const SWIPE_MIN_PX = 56;
const SWIPE_DOMINANCE = 1.15;

function wrap(index: number) {
  return ((index % STEP_COUNT) + STEP_COUNT) % STEP_COUNT;
}

function slotFor(offset: number) {
  if (offset === 0) return "center";
  if (offset === 1) return "right";
  if (offset === STEP_COUNT - 1) return "far-left";
  return "far-right";
}

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const advance = useCallback(
    (delta: 1 | -1) => {
      setIsAnimating(true);
      setActiveIndex((current) => wrap(current + delta));
    },
    [],
  );

  const goNext = useCallback(() => advance(1), [advance]);
  const goPrev = useCallback(() => advance(-1), [advance]);

  useEffect(() => {
    if (!isAnimating) return;
    const id = window.setTimeout(() => setIsAnimating(false), TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [isAnimating, activeIndex]);

  useEffect(() => {
    const id = window.setInterval(() => advance(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [advance]);

  const activeStep = PROCESS_STEPS[activeIndex];

  const onCarouselTouchStart = useCallback((e: TouchEvent) => {
    if (e.touches.length !== 1) return;
    const t = e.touches[0];
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const onCarouselTouchEnd = useCallback(
    (e: TouchEvent) => {
      const start = touchStartRef.current;
      touchStartRef.current = null;
      if (!start || isAnimating) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy) * SWIPE_DOMINANCE) {
        return;
      }
      if (dx < 0) {
        goNext();
      } else {
        goPrev();
      }
    },
    [goNext, goPrev, isAnimating],
  );

  return (
    <section className="relative mt-36 w-full pb-12 sm:pb-16 md:pb-20 lg:pb-28">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-6 sm:gap-14 sm:px-10 lg:gap-16 lg:px-16">
        <div className="flex w-full items-center">
          <header className="grid w-full gap-6 md:grid-cols-2 md:items-center md:gap-10">
            <div>
              <p className="text-base font-medium text-accent">Our Process</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
                How We Cater to the Needs
              </h2>
            </div>
            <p className="max-w-[560px] text-base leading-relaxed text-primary/80 sm:text-[1.65rem] sm:leading-[1.2]">
              At every step, our process reflects transparency and expertise, ensuring a robust build
              aligning with your vision.
            </p>
          </header>
        </div>

        <div className="flex w-full items-center">
          <div className="grid w-full gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
            <article className="order-2 space-y-5 lg:order-1">
              <h3 className="text-4xl font-semibold leading-tight text-accent">{activeStep.title}</h3>
              <p className="max-w-[360px] text-2xl leading-[1.4] text-primary/85 sm:text-3xl">
                {activeStep.description}
              </p>
              <div
                className="flex items-center gap-3 pt-4"
                role="tablist"
                aria-label="Process step status"
              >
                {PROCESS_STEPS.map((step, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={step.title}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Step ${index + 1}: ${step.title}`}
                      onClick={() => {
                        if (isActive || isAnimating) return;
                        setIsAnimating(true);
                        setActiveIndex(index);
                      }}
                      className={`h-5 w-5 rounded-full transition-colors ${
                        isActive
                          ? "bg-accent"
                          : "border border-accent/70 bg-transparent hover:border-accent"
                      }`}
                    />
                  );
                })}
              </div>
            </article>

            <div className="order-1 min-h-0 w-full lg:order-2">
              <div
                className="process-carousel-viewport touch-pan-y relative mx-auto h-[320px] w-full sm:h-[420px] lg:h-[500px]"
                onTouchStart={onCarouselTouchStart}
                onTouchEnd={onCarouselTouchEnd}
                onTouchCancel={() => {
                  touchStartRef.current = null;
                }}
                role="region"
                aria-roledescription="carousel"
                aria-label="Process steps — swipe left or right to change"
              >
                {PROCESS_STEPS.map((step, index) => {
                  const offset = wrap(index - activeIndex);
                  const slot = slotFor(offset);
                  return (
                    <div
                      key={step.title}
                      className={`process-slot process-slot-${slot}`}
                      aria-hidden={slot !== "center"}
                    >
                      <Image
                        src={step.image}
                        alt={slot === "center" ? step.title : ""}
                        width={760}
                        height={520}
                        priority={index === 0}
                        className="min-h-0 h-auto w-full max-h-full object-contain object-bottom drop-shadow-[0_20px_28px_rgba(16,24,40,0.18)]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-0 right-0 z-10 hidden justify-center sm:bottom-8 md:flex lg:bottom-10"
        role="group"
        aria-label="Process carousel navigation"
      >
        <div className="pointer-events-auto flex gap-4">
          <button
            type="button"
            onClick={goPrev}
            disabled={isAnimating}
            aria-label="Previous process step"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary shadow-[var(--shadow-soft)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <HiOutlineChevronLeft className="h-6 w-6 shrink-0" strokeWidth={2} aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={isAnimating}
            aria-label="Next process step"
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary shadow-[var(--shadow-soft)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <HiOutlineChevronRight className="h-6 w-6 shrink-0" strokeWidth={2} aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

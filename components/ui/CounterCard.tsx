"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface CounterCardProps {
  value: number;
  suffix?: string;
  label: string;
  /** Count-up duration in milliseconds. */
  duration?: number;
}

/**
 * A single statistic that counts up from zero when scrolled into view. With
 * reduced motion, it shows the final value immediately. The animated digits are
 * hidden from assistive tech, which reads the final value instead.
 */
export function CounterCard({
  value,
  suffix = "",
  label,
  duration = 1500,
}: CounterCardProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Reduced motion jumps straight to the value (first frame completes instantly).
    const effectiveDuration = reduceMotion ? 0 : duration;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress =
        effectiveDuration === 0
          ? 1
          : Math.min((now - start) / effectiveDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <span
        aria-hidden
        className="block font-serif text-4xl font-semibold text-foreground sm:text-5xl"
      >
        {display.toLocaleString()}
        {suffix}
      </span>
      <span className="sr-only">
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 block text-sm text-muted sm:text-base">{label}</span>
    </div>
  );
}

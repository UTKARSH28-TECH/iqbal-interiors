"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { HeroImage } from "@/types/hero";

interface HeroSliderProps {
  images: HeroImage[];
  /** Seconds per slide. */
  interval?: number;
}

/**
 * Full-bleed background slideshow: cross-fades between images with a gentle
 * Ken Burns zoom. Autoplay and zoom are disabled when the user prefers reduced
 * motion. The first image loads with priority as the hero's LCP element.
 */
export function HeroSlider({ images, interval = 6 }: HeroSliderProps) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || images.length <= 1) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      interval * 1000,
    );
    return () => window.clearInterval(id);
  }, [reduceMotion, images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-foreground">
      {images.map((image, i) => {
        const isActive = i === index;
        return (
          <div
            key={image.src}
            aria-hidden={!isActive}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none",
              isActive ? "opacity-100" : "opacity-0",
            )}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className={cn(
                // Reveal more of the upper frame (false ceiling) on desktop.
                "object-cover object-center lg:object-[50%_35%]",
                isActive && !reduceMotion && "animate-kenburns",
              )}
            />
          </div>
        );
      })}
    </div>
  );
}

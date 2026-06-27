"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/types/gallery";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

/**
 * Fullscreen image viewer. Lazy-loaded by GalleryLightbox so its JS only ships
 * once a visitor opens it. Handles Esc, arrow keys, a focus trap, scroll lock,
 * and focus restoration; motion is a subtle fade that respects reduced motion.
 */
export default function Lightbox({
  images,
  index,
  onIndexChange,
  onClose,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = images.length;
  const image = images[index];
  const hasMultiple = count > 1;

  const goPrev = useCallback(
    () => onIndexChange((index - 1 + count) % count),
    [index, count, onIndexChange],
  );
  const goNext = useCallback(
    () => onIndexChange((index + 1) % count),
    [index, count, onIndexChange],
  );

  // Scroll lock + focus management — once for the lifetime of the lightbox.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  // Keyboard: Esc, arrows, and a Tab focus trap (excludes the backdrop button).
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowLeft" && hasMultiple) {
        goPrev();
        return;
      }
      if (event.key === "ArrowRight" && hasMultiple) {
        goNext();
        return;
      }
      if (event.key !== "Tab") return;

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext, onClose, hasMultiple]);

  const controlClass =
    "absolute z-20 inline-flex size-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white motion-reduce:transition-none";

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${count}`}
      className="animate-fade-in fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
    >
      {/* Backdrop click closes (excluded from the focus trap). */}
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 cursor-default"
      />

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className={`${controlClass} right-4 top-4`}
      >
        <X className="size-6" aria-hidden />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className={`${controlClass} left-2 top-1/2 -translate-y-1/2 sm:left-4`}
          >
            <ChevronLeft className="size-7" aria-hidden />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className={`${controlClass} right-2 top-1/2 -translate-y-1/2 sm:right-4`}
          >
            <ChevronRight className="size-7" aria-hidden />
          </button>
        </>
      )}

      <Image
        key={index}
        src={image.src}
        alt={image.alt}
        width={image.width ?? 1600}
        height={image.height ?? 1200}
        sizes="100vw"
        className="animate-fade-in relative z-10 max-h-[85vh] w-auto max-w-[92vw] object-contain"
      />

      {hasMultiple && (
        <p className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-sm text-white/70">
          {index + 1} / {count}
        </p>
      )}
    </div>
  );
}

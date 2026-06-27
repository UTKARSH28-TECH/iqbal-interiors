"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Video } from "@/types/video";

interface VideoPlayerModalProps {
  videos: Video[];
  index: number;
  onClose: () => void;
}

/**
 * Fullscreen video player. Lazy-loaded by VideoLightbox so its JS only ships
 * once a visitor opens a video. Plays the chosen video with native controls
 * (user-initiated, so sound is allowed). Handles Esc, scroll lock, focus
 * restoration, and a subtle fade — same conventions as the image lightbox.
 */
export default function VideoPlayerModal({
  videos,
  index,
  onClose,
}: VideoPlayerModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const video = videos[index];

  // Scroll lock + focus management — once for the lifetime of the modal.
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

  // Keyboard: Esc to close, and a simple Tab focus trap.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([tabindex="-1"]), video',
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
  }, [onClose]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${video.title}`}
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
        className="absolute right-4 top-4 z-20 inline-flex size-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white motion-reduce:transition-none"
      >
        <X className="size-6" aria-hidden />
      </button>

      <video
        key={video.src}
        src={video.src}
        poster={video.poster}
        controls
        autoPlay
        playsInline
        preload="metadata"
        className="relative z-10 max-h-[85vh] w-auto max-w-[92vw] rounded-image"
      />
    </div>
  );
}

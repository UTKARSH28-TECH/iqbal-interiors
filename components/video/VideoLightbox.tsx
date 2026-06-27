"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import type { Video } from "@/types/video";

// Loaded only when a visitor first opens a video.
const VideoPlayerModal = dynamic(() => import("./VideoPlayerModal"), {
  ssr: false,
});

interface VideoLightboxProps {
  videos: Video[];
  /** Server-rendered featured video + grid (kept server-rendered). */
  children: ReactNode;
}

/**
 * Thin client wrapper that opens the video player via event delegation, so the
 * section itself stays server-rendered. Each trigger carries a `data-video-index`.
 */
export function VideoLightbox({ videos, children }: VideoLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>(
        "[data-video-index]",
      );
      if (!trigger) return;
      const idx = Number(trigger.dataset.videoIndex);
      if (!Number.isNaN(idx)) setOpenIndex(idx);
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <div ref={containerRef}>{children}</div>
      {openIndex !== null && (
        <VideoPlayerModal
          videos={videos}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}

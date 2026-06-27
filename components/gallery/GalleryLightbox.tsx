"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import type { GalleryImage } from "@/types/gallery";

// Loaded only when a visitor first opens an image.
const Lightbox = dynamic(() => import("./Lightbox"), { ssr: false });

interface GalleryLightboxProps {
  images: GalleryImage[];
  /** The server-rendered masonry grid (kept server-rendered). */
  children: ReactNode;
}

/**
 * Thin client wrapper that opens the lightbox via event delegation, so the grid
 * itself stays server-rendered. Each grid trigger carries a `data-index`.
 */
export function GalleryLightbox({ images, children }: GalleryLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as HTMLElement).closest<HTMLElement>(
        "[data-index]",
      );
      if (!trigger) return;
      const idx = Number(trigger.dataset.index);
      if (!Number.isNaN(idx)) setOpenIndex(idx);
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <div ref={containerRef}>{children}</div>
      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </>
  );
}

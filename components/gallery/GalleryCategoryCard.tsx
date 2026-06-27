import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { GalleryCategory } from "@/types/gallery";

interface GalleryCategoryCardProps {
  category: GalleryCategory;
}

/**
 * Premium portrait category card linking to its gallery page. Server-rendered;
 * hover effects are CSS-only and disabled under reduced motion.
 */
export function GalleryCategoryCard({ category }: GalleryCategoryCardProps) {
  const { slug, title, cover, count } = category;

  return (
    <Link
      href={`/gallery/${slug}`}
      className="group relative block overflow-hidden rounded-card bg-foreground shadow-[0_12px_28px_-16px_rgba(17,17,17,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[4/5] w-full">
        {cover && (
          <Image
            src={cover}
            alt={`${title} interior designs by Iqbal Interiors`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        )}

        {/* Bottom gradient for text legibility. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-serif text-xl text-white sm:text-2xl">{title}</h3>
          <div className="mt-1 flex items-center justify-between gap-3">
            <span className="text-sm text-white/70">
              {count} {count === 1 ? "photo" : "photos"}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
              View Collection
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                aria-hidden
              />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

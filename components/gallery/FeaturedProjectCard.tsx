import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryCategory } from "@/types/gallery";

interface FeaturedProjectCardProps {
  category: GalleryCategory;
  /** Render as the large lead tile. */
  large?: boolean;
}

/**
 * A featured-work tile linking to its gallery. Server-rendered; CSS-only hover
 * (image zoom + arrow nudge) that is disabled under reduced motion.
 */
export function FeaturedProjectCard({
  category,
  large = false,
}: FeaturedProjectCardProps) {
  const { slug, title, cover } = category;

  return (
    <Link
      href={`/gallery/${slug}`}
      className="group relative block h-full overflow-hidden rounded-card bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div
        className={cn(
          "relative w-full",
          large ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-square",
        )}
      >
        {cover && (
          <Image
            src={cover}
            alt={`${title} — featured interior work by Iqbal Interiors`}
            fill
            sizes={
              large
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 1024px) 50vw, 25vw"
            }
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        )}

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <h3
            className={cn(
              "font-serif text-white",
              large ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
            )}
          >
            {title}
          </h3>
          <ArrowUpRight
            className="size-5 shrink-0 text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}

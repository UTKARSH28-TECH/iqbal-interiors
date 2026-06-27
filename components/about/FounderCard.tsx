import Image from "next/image";
import { User } from "lucide-react";
import type { Founder } from "@/types/founder";

interface FounderCardProps {
  founder: Founder;
}

/**
 * Editorial founder profile: portrait, name, role and a short bio. Server-
 * rendered; the portrait has a gentle CSS hover scale that respects reduced
 * motion. A missing `image.src` falls back to a neutral placeholder.
 */
export function FounderCard({ founder }: FounderCardProps) {
  const { name, role, bio, image } = founder;

  return (
    <article>
      <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-image bg-surface shadow-[0_24px_48px_-24px_rgba(17,17,17,0.25)]">
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted">
            <User className="size-16" aria-hidden />
          </div>
        )}
      </div>

      <h3 className="mt-6 font-serif text-2xl text-foreground">{name}</h3>
      <p className="mt-1 text-sm font-medium text-gold-dark">{role}</p>
      <p className="mt-4 text-base leading-relaxed text-muted">{bio}</p>
    </article>
  );
}

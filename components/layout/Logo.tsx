import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** Render light text for placement over a dark hero. */
  onDark?: boolean;
  /** Link target, or `null` to render the mark without a link. */
  href?: string | null;
  className?: string;
}

/**
 * The single source of truth for the brand mark.
 *
 * This is a temporary Playfair wordmark. When the official transparent logo is
 * available, swap the inner markup here (e.g. for a next/image) — no other file
 * needs to change.
 */
export function Logo({ onDark = false, href = "/", className }: LogoProps) {
  const mark = (
    <span
      className={cn(
        "font-serif text-xl font-semibold tracking-tight md:text-xl",
        className,
      )}
    >
      <span className={onDark ? "text-white" : "text-foreground"}>Iqbal </span>
      <span className="text-accent">Interiors</span>
    </span>
  );

  if (href === null) return mark;

  return (
    <Link
      href={href}
      aria-label={`${site.name} — home`}
      className="inline-flex items-center"
    >
      {mark}
    </Link>
  );
}

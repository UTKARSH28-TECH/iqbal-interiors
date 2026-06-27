import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

/**
 * Premium service card: gold icon on a warm tile, title, and description.
 * Renders as a link to the related gallery when `href` is set, otherwise a
 * static card. Server-rendered; hover is a restrained border/color change.
 */
export function ServiceCard({ service }: ServiceCardProps) {
  const { title, description, icon: Icon, href } = service;

  const body = (
    <>
      <span className="inline-flex size-12 items-center justify-center rounded-card bg-surface text-accent">
        <Icon className="size-6" aria-hidden />
      </span>
      <h3 className="mt-5 font-serif text-xl text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark">
          View Collection
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            aria-hidden
          />
        </span>
      )}
    </>
  );

  const base = "block h-full rounded-card border border-border bg-background p-6";

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          base,
          "group transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        )}
      >
        {body}
      </Link>
    );
  }

  return <div className={base}>{body}</div>;
}

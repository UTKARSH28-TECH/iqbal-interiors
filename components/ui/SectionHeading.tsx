import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small gold eyebrow label above the title. */
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/** Reusable section header: gold eyebrow, serif title, muted subtitle. */
export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label && (
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark sm:text-sm">
          {label}
        </p>
      )}
      <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      )}
    </div>
  );
}

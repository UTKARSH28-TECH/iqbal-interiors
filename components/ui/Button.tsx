import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-button px-5 py-2.5 text-sm font-medium shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const variants: Record<ButtonVariant, string> = {
  // Gold accent, dark text for AA contrast.
  primary: "bg-accent text-foreground",
  // Solid surface with a defined border; reads well on light or dark backgrounds.
  secondary: "border border-foreground/20 bg-background text-foreground",
};

interface ButtonProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  /** When set, renders a Next.js Link; otherwise a native button. */
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
  /** For external links: e.g. target="_blank" rel="noopener noreferrer". */
  target?: string;
  rel?: string;
}

/** Shared button/link with the design system's primary and secondary styles. */
export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

import { FacebookIcon } from "./FacebookIcon";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface FacebookButtonProps {
  className?: string;
  label?: string;
  /** Render a compact, square icon-only button (label becomes the accessible name). */
  iconOnly?: boolean;
}

/**
 * Facebook shortcut, styled to match WhatsAppButton. Reads the URL from the
 * centralized data source and renders nothing when it is empty. Opens in a new
 * tab.
 */
export function FacebookButton({
  className,
  label = "Facebook",
  iconOnly = false,
}: FacebookButtonProps) {
  const href = site.social.facebook;
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconOnly ? label : undefined}
      className={cn(
        "inline-flex items-center gap-2 rounded-button bg-accent text-sm font-medium text-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        iconOnly ? "size-10 justify-center" : "px-5 py-2.5",
        className,
      )}
    >
      <FacebookIcon className="size-4" />
      {!iconOnly && label}
    </a>
  );
}

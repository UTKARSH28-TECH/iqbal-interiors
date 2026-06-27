import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  className?: string;
  label?: string;
  /** Optional prefilled WhatsApp message. */
  message?: string;
  /** Render a compact, square icon-only button (label becomes the accessible name). */
  iconOnly?: boolean;
}

/**
 * Primary WhatsApp call-to-action. Gold (brand accent) with dark text for AA
 * contrast. Reused across the navbar, contact sections, and CTAs.
 */
export function WhatsAppButton({
  className,
  label = "WhatsApp",
  message,
  iconOnly = false,
}: WhatsAppButtonProps) {
  const href = whatsappHref(message);
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={iconOnly ? label : undefined}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "inline-flex items-center gap-2 rounded-button bg-accent text-sm font-medium text-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        iconOnly ? "size-10 justify-center" : "px-5 py-2.5",
        className,
      )}
    >
      <MessageCircle className="size-4" aria-hidden />
      {!iconOnly && label}
    </a>
  );
}

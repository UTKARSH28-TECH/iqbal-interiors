import type { LucideIcon } from "lucide-react";

/** A contact row in the footer. */
export interface ContactLink {
  icon: LucideIcon;
  label: string;
  /** Omit to render as plain text instead of a link. */
  href?: string;
  /** External links open in a new tab. */
  external?: boolean;
}

/** Static footer copy. */
export interface FooterContent {
  description: string;
  columns: {
    quickLinks: string;
    services: string;
    contact: string;
  };
  /** Small closing line in the bottom bar. */
  tagline: string;
}

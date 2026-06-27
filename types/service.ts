import type { LucideIcon } from "lucide-react";

/** A documented service offering. */
export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  /** Optional link to the related gallery category. */
  href?: string;
}

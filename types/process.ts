import type { LucideIcon } from "lucide-react";

/** A single step in the "How We Work" process. */
export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
}

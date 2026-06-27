import {
  PencilRuler,
  Layers,
  BedDouble,
  Tv,
  CookingPot,
  Lightbulb,
  LampCeiling,
  ShowerHead,
  Wrench,
} from "lucide-react";
import type { Service } from "@/types/service";

/**
 * The documented services (docs/02-business-information.md). Descriptions are
 * verbatim from the docs. `href` links to the related gallery category where
 * one exists. All service content lives here, not in components.
 */
export const services: Service[] = [
  {
    title: "Interior Design",
    description: "Complete residential and commercial interior planning.",
    icon: PencilRuler,
  },
  {
    title: "False Ceiling",
    description: "Modern gypsum, PVC and designer ceiling solutions.",
    icon: Layers,
    href: "/gallery/false-ceiling",
  },
  {
    title: "Bedroom Interior",
    description: "Luxury and modern bedroom designs.",
    icon: BedDouble,
    href: "/gallery/bedroom",
  },
  {
    title: "TV Unit Design",
    description: "Custom TV panels and entertainment walls.",
    icon: Tv,
    href: "/gallery/tv-unit-design",
  },
  {
    title: "Modular Kitchen",
    description: "Modern kitchen design and installation.",
    icon: CookingPot,
    href: "/gallery/kitchen",
  },
  {
    title: "Decorative Lighting",
    description: "Premium lighting solutions for every interior.",
    icon: Lightbulb,
    href: "/gallery/light",
  },
  {
    title: "Jhumars",
    description: "Luxury chandeliers and decorative hanging lights.",
    icon: LampCeiling,
    href: "/gallery/jhumars",
  },
  {
    title: "Sanitary",
    description: "Premium sanitary fittings and bathroom accessories.",
    icon: ShowerHead,
    href: "/gallery/sanitary",
  },
  {
    title: "Hardware",
    description: "Architectural hardware and interior accessories.",
    icon: Wrench,
  },
];

import { Award, Home, Store, Palette, HardHat, Handshake } from "lucide-react";
import type { Feature } from "@/types/feature";

/**
 * Why-choose-us highlights, grounded in the documented business strengths
 * (docs/02-business-information.md). Copy is intentionally concise.
 */
export const whyChooseUs: Feature[] = [
  {
    icon: Award,
    title: "Established Since 2011",
    description:
      "Trusted local expertise built over a decade of completed projects.",
  },
  {
    icon: Home,
    title: "Complete Interior Solutions",
    description:
      "Design, materials and professional installation — all under one roof.",
  },
  {
    icon: Store,
    title: "Large Showroom",
    description:
      "A wide variety of quality interior materials to see in person.",
  },
  {
    icon: Palette,
    title: "Modern, Custom Designs",
    description: "Contemporary designs tailored to your space and style.",
  },
  {
    icon: HardHat,
    title: "Professional Installation",
    description:
      "An experienced team that handles execution from start to finish.",
  },
  {
    icon: Handshake,
    title: "Personalized Service",
    description: "Friendly, personal guidance to help you choose with confidence.",
  },
];

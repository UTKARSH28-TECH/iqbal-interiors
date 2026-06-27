import { MessageSquare, PencilRuler, SwatchBook, Hammer } from "lucide-react";
import type { ProcessStep } from "@/types/process";

/**
 * The four-step working process. Descriptions are factual and grounded in the
 * documented complete-execution model — no timelines or guarantees.
 */
export const process: ProcessStep[] = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We begin by understanding your space, needs and style.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    description: "We plan a tailored design for how you live and work.",
  },
  {
    icon: SwatchBook,
    title: "Material Selection",
    description: "Choose finishes, lighting and fittings from our showroom.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description: "Our team handles materials and installation from start to finish.",
  },
];

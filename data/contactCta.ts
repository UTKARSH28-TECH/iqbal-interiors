import { site } from "@/data/site";
import type { ContactCtaContent } from "@/types/contactCta";

/**
 * Final Contact CTA copy. Grounded only in documented business information —
 * no invented offers or guarantees. The secondary href resolves to the maps URL
 * once it is set in data/site.ts, otherwise falls back to the contact page.
 */
export const contactCta: ContactCtaContent = {
  eyebrow: "Let's Work Together",
  heading: "Ready to Transform Your Space?",
  paragraph:
    "From design and materials to complete installation, Iqbal Interiors brings your interior to life — all under one roof.",
  reassurance: `Message us on WhatsApp to discuss your project, or visit our showroom in ${site.location.area}, ${site.location.city}.`,
  primaryLabel: "WhatsApp Us",
  secondary: {
    label: "Visit Our Showroom",
    href: site.contact.mapsUrl || "/contact",
  },
};

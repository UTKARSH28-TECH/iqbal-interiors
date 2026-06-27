import { site } from "@/data/site";
import type { ShowroomContent } from "@/types/showroom";

/**
 * Showroom Preview content. Grounded only in documented business information
 * (location and product range); no size, awards, or unsupported claims.
 */
export const showroom: ShowroomContent = {
  eyebrow: "Our Showroom",
  title: "Experience It in Person",
  paragraphs: [
    `Step into our showroom in ${site.location.area}, ${site.location.city}, where our range of interior materials, lighting and finishes is on display.`,
    "See and compare designs in person, get personal guidance, and choose with confidence before you decide.",
  ],
  image: {
    src: "/images/shop/store.png",
    alt: `${site.name} showroom storefront in ${site.location.area}, ${site.location.city}, lit up in the evening`,
    width: 1024,
    height: 1536,
  },
  // Until a maps URL and Contact page exist, both link safely to /contact.
  primaryCta: {
    label: "Visit Our Showroom",
    href: site.contact.mapsUrl || "/contact",
  },
  secondaryCta: { label: "Contact Us", href: "/contact" },
};

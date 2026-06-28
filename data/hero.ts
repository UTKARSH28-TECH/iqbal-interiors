import type { HeroContent } from "@/types/hero";

/** Default homepage hero content. The component accepts overrides, so this is configurable. */
export const heroContent: HeroContent = {
  eyebrow: "Interior Design • Showroom • Execution",
  title: "Designing Spaces, Defining Lifestyles",
  subtitle:
    "Premium interiors, false ceilings, modular kitchens and complete execution — handcrafted in Jamua Giridih since 2011.",
  primaryCta: { label: "Explore Gallery", href: "/gallery" },
  interval: 6,
  images: [
    {
      src: "/images/hero/2.png",
      alt: "Modern bedroom with a backlit false ceiling and illuminated wall panel",
    },
    {
      src: "/images/hero/3.png",
      alt: "Designer false ceiling with cove lighting and recessed spotlights",
    },
    {
      src: "/images/hero/4.png",
      alt: "Living room feature wall with lit display niches and warm lighting",
    },
  ],
};

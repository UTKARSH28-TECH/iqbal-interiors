/** A hero slide image. */
export interface HeroImage {
  src: string;
  alt: string;
}

/** A call-to-action link in the hero. */
export interface HeroCta {
  label: string;
  href: string;
}

/** Configurable content for the hero section. */
export interface HeroContent {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta: HeroCta;
  images: HeroImage[];
  /** Seconds each slide is shown before cross-fading. */
  interval?: number;
}

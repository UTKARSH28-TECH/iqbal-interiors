/** A CTA in the showroom section. */
export interface ShowroomCta {
  label: string;
  href: string;
}

/** Content for the Showroom Preview section. */
export interface ShowroomContent {
  eyebrow: string;
  title: string;
  /** One or more short body paragraphs. */
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
    /** Intrinsic dimensions, used to preserve aspect ratio. */
    width: number;
    height: number;
  };
  primaryCta: ShowroomCta;
  secondaryCta: ShowroomCta;
}

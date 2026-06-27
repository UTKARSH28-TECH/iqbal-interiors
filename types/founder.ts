/** A founder portrait. Swap to a different photo by changing `src` only. */
export interface FounderImage {
  src: string;
  alt: string;
}

/** A company founder. */
export interface Founder {
  name: string;
  role: string;
  /** One short professional paragraph. */
  bio: string;
  image: FounderImage;
}

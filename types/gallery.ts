/** A single gallery image resolved from the filesystem at build time. */
export interface GalleryImage {
  /** Public path under /public, URL-encoded for safe use with next/image. */
  src: string;
  /** Descriptive alt text. */
  alt: string;
  /** Intrinsic width, read at build time when requested. */
  width?: number;
  /** Intrinsic height, read at build time when requested. */
  height?: number;
}

/** A gallery category, backed by a folder under public/images/gallery. */
export interface GalleryCategory {
  /** URL slug, equal to the folder name. */
  slug: string;
  /** Human-friendly display title. */
  title: string;
  /** First image, used as the category cover. */
  cover?: string;
  /** Number of images in the category. */
  count: number;
  images: GalleryImage[];
}

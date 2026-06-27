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

/**
 * Build-time generated gallery manifest. The filesystem under
 * public/images/gallery is read once at build time and emitted as a bundled
 * data module, so the runtime (Cloudflare Workers) never touches the filesystem.
 */
export interface GalleryManifestImage {
  /** Public path under /public, URL-encoded for next/image. */
  src: string;
  width: number;
  height: number;
}

export interface GalleryManifestCategory {
  slug: string;
  images: GalleryManifestImage[];
}

export type GalleryManifest = GalleryManifestCategory[];

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

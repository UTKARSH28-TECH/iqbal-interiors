/**
 * Build-time generated video manifest. public/videos is scanned at build time
 * and emitted as a bundled data module, so the runtime never touches the
 * filesystem (Cloudflare Workers compatible) — same approach as the gallery.
 */
export interface VideoManifestEntry {
  /** Slug derived from the filename (without extension). */
  name: string;
  /** Public path to the video file. */
  src: string;
  /** Public path to the poster image, if one exists in video-thumbnails. */
  poster?: string;
}

export type VideoManifest = VideoManifestEntry[];

/** A resolved walkthrough video. */
export interface Video {
  name: string;
  title: string;
  src: string;
  poster?: string;
  /** True for the cover video (cover.mp4) — the featured one. */
  featured: boolean;
}

import type { Metadata } from "next";
import { site } from "@/data/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/gallery/bedroom". */
  path?: string;
  /** Absolute or root-relative Open Graph image. */
  image?: string;
}

/**
 * Build per-page Metadata with a canonical URL and Open Graph/Twitter defaults.
 * `title` here is the full page title (the layout's template is not applied when
 * a string title is returned from a page's own metadata).
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  image,
}: PageMetadataOptions): Metadata {
  return {
    // Use the title verbatim so the layout's "%s | Iqbal Interiors" template
    // doesn't double the brand suffix on titles that already include it.
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      url: path,
      title,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

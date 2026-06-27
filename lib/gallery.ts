import type { GalleryCategory, GalleryImage } from "@/types/gallery";
import { galleryManifest } from "./gallery-manifest.generated";

/**
 * Gallery reader.
 *
 * The folder structure under public/images/gallery is scanned at build time by
 * scripts/build-gallery-manifest.mjs and emitted as a bundled data module
 * (gallery-manifest.generated.ts). These helpers read that in-memory manifest,
 * so the runtime never touches the filesystem — required for Cloudflare Workers
 * / OpenNext. Adding images is still "drop file into the folder → rebuild": the
 * manifest is regenerated on every build (see docs/07-image-management.md).
 */

/** Display titles for known folders; unknown folders fall back to a title-cased slug. */
const CATEGORY_LABELS: Record<string, string> = {
  bedroom: "Bedroom",
  hall: "Hall",
  kitchen: "Modular Kitchen",
  "false-ceiling": "False Ceiling",
  "tv-unit-design": "TV Unit",
  light: "Lighting",
  jhumars: "Jhumars",
  sanitary: "Sanitary",
  office: "Office",
};

function titleFromSlug(slug: string): string {
  return (
    CATEGORY_LABELS[slug] ??
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

/** Category slugs (folder names), already sorted in the manifest. */
export function getGalleryCategorySlugs(): string[] {
  return galleryManifest.map((category) => category.slug);
}

/**
 * Images for a category, in natural filename order (baked into the manifest).
 * Pass `withSize: true` to also include intrinsic dimensions — used by the
 * category page to preserve aspect ratios without cropping.
 */
export function getCategoryImages(slug: string, withSize = false): GalleryImage[] {
  const category = galleryManifest.find((entry) => entry.slug === slug);
  if (!category) return [];

  const title = titleFromSlug(slug);
  return category.images.map((image, index) => {
    const result: GalleryImage = {
      src: image.src,
      alt: `${title} interior by Iqbal Interiors — ${index + 1}`,
    };
    if (withSize) {
      result.width = image.width;
      result.height = image.height;
    }
    return result;
  });
}

/** A single category with its images resolved. */
export function getCategory(slug: string): GalleryCategory {
  const images = getCategoryImages(slug);
  return {
    slug,
    title: titleFromSlug(slug),
    cover: images[0]?.src,
    count: images.length,
    images,
  };
}

/** All categories. Pass `withImages: false` to skip the image arrays (e.g. for index cards). */
export function getAllCategories(withImages = true): GalleryCategory[] {
  return getGalleryCategorySlugs().map((slug) => {
    if (withImages) return getCategory(slug);
    const images = getCategoryImages(slug);
    return {
      slug,
      title: titleFromSlug(slug),
      cover: images[0]?.src,
      count: images.length,
      images: [],
    };
  });
}

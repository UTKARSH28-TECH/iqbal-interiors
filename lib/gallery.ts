import fs from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import type { GalleryCategory, GalleryImage } from "@/types/gallery";

/**
 * Build-time gallery reader.
 *
 * Categories and images are derived directly from the folder structure under
 * public/images/gallery, so adding images is just "drop file → redeploy" with no
 * code changes (see docs/07-image-management.md). These helpers use the Node
 * filesystem and run only during static generation — never on the client.
 */

const GALLERY_ROOT = path.join(process.cwd(), "public", "images", "gallery");
const IMAGE_PATTERN = /\.(avif|webp|png|jpe?g)$/i;

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

function readDirSafe(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

/** Category slugs (folder names) under public/images/gallery, sorted. */
export function getGalleryCategorySlugs(): string[] {
  return readDirSafe(GALLERY_ROOT)
    .filter((name) => {
      try {
        return fs.statSync(path.join(GALLERY_ROOT, name)).isDirectory();
      } catch {
        return false;
      }
    })
    .sort();
}

/**
 * Images for a category, read from its folder and sorted naturally by filename.
 * Pass `withSize: true` to also read intrinsic dimensions (build-time only) —
 * used by the category page to preserve aspect ratios without cropping.
 */
export function getCategoryImages(slug: string, withSize = false): GalleryImage[] {
  const dir = path.join(GALLERY_ROOT, slug);
  const title = titleFromSlug(slug);
  return readDirSafe(dir)
    .filter((file) => IMAGE_PATTERN.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => {
      const image: GalleryImage = {
        src: `/images/gallery/${slug}/${encodeURIComponent(file)}`,
        alt: `${title} interior by Iqbal Interiors — ${index + 1}`,
      };
      if (withSize) {
        try {
          const { width, height } = imageSize(
            fs.readFileSync(path.join(dir, file)),
          );
          image.width = width;
          image.height = height;
        } catch {
          // Dimensions are optional; the consumer falls back to a default ratio.
        }
      }
      return image;
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

/** All categories. Pass `withImages: false` to skip reading image files (e.g. for index cards). */
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

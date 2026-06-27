import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getGalleryCategorySlugs } from "@/lib/gallery";

/**
 * Dynamic sitemap. Static routes plus every gallery category, read from the
 * folder architecture — no category URLs are hardcoded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = ["", "/about", "/services", "/contact", "/gallery"];
  const categoryPaths = getGalleryCategorySlugs().map(
    (slug) => `/gallery/${slug}`,
  );

  return [...staticPaths, ...categoryPaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

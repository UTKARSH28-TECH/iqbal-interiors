import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** robots.txt — allow all crawling and point to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}

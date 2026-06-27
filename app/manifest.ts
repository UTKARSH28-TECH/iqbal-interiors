import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** Web app manifest using existing branding. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      // TODO: add dedicated square icons (192/512). The logo lockup is used for now.
      {
        src: "/images/logo/logo.png",
        sizes: "1536x1024",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

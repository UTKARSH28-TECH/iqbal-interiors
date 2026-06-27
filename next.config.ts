import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray lockfile elsewhere isn't inferred.
  turbopack: { root: projectRoot },
  images: {
    // Serve modern formats; the optimizer runs via the OpenNext IMAGES binding on Cloudflare.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

// Exposes Cloudflare bindings (incl. image optimization) to `next dev`.
initOpenNextCloudflareForDev();

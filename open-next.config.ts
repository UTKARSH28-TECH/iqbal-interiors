import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The site is fully static (SSG), so no incremental cache override is needed.
export default defineCloudflareConfig();

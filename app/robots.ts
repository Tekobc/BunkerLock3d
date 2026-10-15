import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  const indexable = process.env.VERCEL_ENV === "production" && Boolean(siteConfig.siteUrl);

  return {
    rules: {
      userAgent: "*",
      allow: indexable ? "/" : undefined,
      disallow: indexable ? undefined : "/",
    },
    sitemap: indexable && siteConfig.siteUrl ? siteConfig.siteUrl + "/sitemap.xml" : undefined,
  };
}
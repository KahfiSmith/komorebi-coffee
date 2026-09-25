import type { MetadataRoute } from "next";
import { cafeData } from "@/data/cafe";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${cafeData.seo.siteUrl}/sitemap.xml`,
  };
}

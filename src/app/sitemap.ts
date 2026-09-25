import type { MetadataRoute } from "next";
import { cafeData } from "@/data/cafe";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: cafeData.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}

import type { MetadataRoute } from "next";
import { cafeData } from "@/data/cafe";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: cafeData.name,
    short_name: "Komorebi",
    description: cafeData.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#FAF8F5",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/realisations",
    "/a-propos",
    "/devis",
    "/contact",
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/services" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/devis" || route === "/contact"
          ? 0.95
          : 0.7,
  }));
}

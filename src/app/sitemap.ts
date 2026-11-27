import type { MetadataRoute } from "next";
import { CLINIC_SERVICES, SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/servicios",
    "/testimonios",
    "/quien-soy",
    "/blog",
    "/contactame",
  ].map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.85,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = CLINIC_SERVICES.map((service) => ({
    url: `${baseUrl}/servicios/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

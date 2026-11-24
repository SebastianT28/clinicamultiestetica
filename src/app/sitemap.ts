import type { MetadataRoute } from "next";
import { CLINIC_SERVICES, SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/nosotros",
    "/procedimientos",
    "/casos-reales",
    "/preguntas-frecuentes",
    "/contacto",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.85,
  }));

  const serviceRoutes = CLINIC_SERVICES.map((service) => ({
    url: `${baseUrl}/procedimientos/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

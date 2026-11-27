import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { BLOG_SLUGS } from "@/data/blog-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/servicios",
    "/testimonios",
    "/quien-soy",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.85,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes];
}

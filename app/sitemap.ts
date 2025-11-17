import { fetchEvents } from "@/services/fetchEvents";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL = "https://absolutetimer.dev";

  const staticRoutes: MetadataRoute.Sitemap = ["", "/about", "/policy"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.7,
    })
  );

  const comics = await fetchEvents();

  const dynamicRoutes: MetadataRoute.Sitemap = comics.map((comic) => {
    const latestIssue = comic.issues?.[comic.issues.length - 1];

    const lastModified =
      latestIssue?.lastReleaseDate ||
      latestIssue?.releaseDate ||
      new Date();

    return {
      url: `${SITE_URL}/comic/${comic.id}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    };
  });

  return [...staticRoutes, ...dynamicRoutes];
}

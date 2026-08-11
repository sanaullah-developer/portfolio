import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://your-portfolio-domain.vercel.app";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      priority: 0.8
    }
  ];
}

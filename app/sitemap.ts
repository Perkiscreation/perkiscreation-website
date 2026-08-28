import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.perkiscreation-wedding.de";
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/agb`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/widerruf`, changeFrequency: "yearly", priority: 0.2 },
  ];
}

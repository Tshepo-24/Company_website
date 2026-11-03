import type { MetadataRoute } from "next";
import { fleet, machineHref } from "@/lib/fleet";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/equipment", "/about", "/contact"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const machines = fleet.map((m) => ({
    url: `${site.url}${machineHref(m)}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...pages, ...machines];
}
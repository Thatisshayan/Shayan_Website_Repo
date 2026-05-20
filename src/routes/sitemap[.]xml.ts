import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE, projects } from "@/data/projects";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/projects",
          "/businesses",
          "/services",
          "/about",
          "/contact",
          "/privacy",
          "/terms",
        ];
        const entries = [
          ...staticPaths.map((p) => ({
            path: p,
            changefreq: "weekly",
            priority: p === "/" ? "1.0" : "0.7",
          })),
          ...projects.map((p) => ({ path: `/${p.slug}`, changefreq: "monthly", priority: "0.8" })),
        ];

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${new URL(e.path, SITE.baseUrl).toString()}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});

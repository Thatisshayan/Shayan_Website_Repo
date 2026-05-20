import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE } from "@/data/projects";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const robots = [
          "User-agent: *",
          "Allow: /",
          `Sitemap: ${new URL("/sitemap.xml", SITE.baseUrl).toString()}`,
          "",
        ].join("\n");

        return new Response(robots, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});

import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTASection } from "@/components/site/CTASection";
import { getProjectsBySlugs, BUSINESS_SLUGS, SITE } from "@/data/projects";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/businesses")({
  head: () =>
    buildSeoHead({
      title: `Businesses - ${SITE.brand}`,
      description:
        "Operating service brands across media, creative production, marketing automation, and construction.",
      pathname: "/businesses",
    }),
  component: BusinessesPage,
});

function BusinessesPage() {
  const items = getProjectsBySlugs(BUSINESS_SLUGS);
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Operating brands"
        title="Businesses"
        description="Service brands and venture operations - each runs as its own business with its own positioning, audience, and offer."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
      <CTASection
        title="Hire a brand or partner with one"
        body="Each business takes on a focused number of engagements per quarter. Reach out to discuss fit."
      />
    </SiteShell>
  );
}

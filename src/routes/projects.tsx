import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTASection } from "@/components/site/CTASection";
import { projects, PRODUCT_SLUGS, OPPORTUNITY_SLUGS, BUSINESS_SLUGS, SITE } from "@/data/projects";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () =>
    buildSeoHead({
      title: `Projects - ${SITE.brand}`,
      description:
        "A complete index of the ecosystem, with a dedicated page for every product, business, and opportunity.",
      pathname: "/projects",
    }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const groups: { title: string; slugs: string[] }[] = [
    { title: "AI Products and Operating Systems", slugs: PRODUCT_SLUGS },
    { title: "Service Businesses and Brands", slugs: BUSINESS_SLUGS },
    { title: "Opportunities and Research", slugs: OPPORTUNITY_SLUGS },
  ];

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Ecosystem"
        title="Projects"
        description="A complete index of every initiative in the ecosystem. Each page explains what it is, who it is for, and what stage it is in."
      />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {groups.map((g) => {
          const items = projects.filter((p) => g.slugs.includes(p.slug));
          return (
            <section key={g.title} className="mb-16 last:mb-0">
              <h2 className="font-display text-2xl font-semibold tracking-tight">{g.title}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <CTASection />
    </SiteShell>
  );
}

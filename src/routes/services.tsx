import { createFileRoute } from "@tanstack/react-router";
import { Bot, Workflow, LineChart, Megaphone, Film, Rocket, Hammer } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { CTASection } from "@/components/site/CTASection";
import { SITE } from "@/data/projects";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    buildSeoHead({
      title: `Services - ${SITE.brand}`,
      description:
        "AI system design, automation, media operations, creative production, marketing, and construction services.",
      pathname: "/services",
    }),
  component: ServicesPage,
});

const services = [
  {
    icon: Bot,
    title: "AI System Design",
    body: "Custom agent architectures, command centers, approval flows, and operating layers tuned for execution.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    body: "End-to-end workflow design: ingestion, decisioning, tool routing, and audit trails across teams and tools.",
  },
  {
    icon: LineChart,
    title: "Behavior and Session Analytics",
    body: "Custom analytics pipelines, dashboards, and reports for behavior, decisions, and performance patterns.",
  },
  {
    icon: Megaphone,
    title: "Content and Media Strategy",
    body: "Editorial systems, content calendars, repurposing engines, and brand storytelling at production scale.",
  },
  {
    icon: Film,
    title: "Creative Production",
    body: "Trailers, brand kits, AI cinematics, social campaign assets, and reusable creative systems.",
  },
  {
    icon: Rocket,
    title: "Launch and Growth Systems",
    body: "Landing pages, lead capture, CRM setup, performance reporting, and campaign automation.",
  },
  {
    icon: Hammer,
    title: "Construction and Project Execution",
    body: "Renovations, custom builds, landscaping, and project coordination across Ontario.",
  },
];

function ServicesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Capabilities"
        title="Services"
        description="The execution layers offered across the ecosystem - from AI infrastructure to creative production and field operations."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="ring-grad rounded-2xl bg-card/40 p-6">
              <s.icon className="h-5 w-5 text-gold" />
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
      <CTASection
        title="Need a tailored engagement?"
        body="Most engagements are scoped privately. Share what you're building and we'll find the right shape."
      />
    </SiteShell>
  );
}

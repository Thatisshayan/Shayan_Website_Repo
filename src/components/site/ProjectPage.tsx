import { Link } from "@tanstack/react-router";
import {
  Check,
  ArrowLeft,
  Download,
  Image as ImageIcon,
  FileText,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { SITE } from "@/data/projects";
import { SiteShell, PageHeader } from "./SiteShell";
import { CTASection } from "./CTASection";
import { SeoJsonLd } from "./SeoJsonLd";
import { projectSchema } from "@/lib/seo";

export function ProjectPage({ project }: { project: Project }) {
  return (
    <SiteShell>
      <SeoJsonLd data={projectSchema(project)} />
      <PageHeader eyebrow={project.category} title={project.title} description={project.tagline} />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <Block title="Project snapshot" body={project.summary} />
            <Block title="Why it exists" body={project.problem} />
            <Block title="How it works" body={project.solution} />

            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Current scope</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="ring-grad flex items-start gap-3 rounded-xl bg-card/40 p-4"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-sm text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Brand and media slots
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <AssetSlot
                  icon={ImageIcon}
                  title="Logo slot"
                  description="Add the project logo or wordmark here."
                />
                <AssetSlot
                  icon={ImageIcon}
                  title="Founder photo"
                  description="Add a founder portrait or team image."
                />
                <AssetSlot
                  icon={LayoutGrid}
                  title="Screenshots"
                  description="Add product or service screenshots."
                />
                <AssetSlot
                  icon={LayoutGrid}
                  title="Product mockups"
                  description="Add mockups, prototypes, or pitch visuals."
                />
                <AssetSlot
                  icon={Download}
                  title="Investor deck"
                  description="Link a deck download once one is ready."
                />
                <AssetSlot
                  icon={FileText}
                  title="Press kit"
                  description="Add media notes, logos, and release assets."
                />
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="ring-grad rounded-2xl bg-card/40 p-6">
              <Meta label="Stage" value={project.stage} />
              <Meta label="Status" value={project.status} />
              <Meta label="Category" value={project.category} />
              <Meta label="Business model" value={project.businessModel ?? "Not defined yet"} />
              <Meta label="Audience" value={project.audience} />
            </div>

            <div className="ring-grad rounded-2xl bg-card/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Client / investor note
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{project.cta}</p>
            </div>

            <div className="ring-grad rounded-2xl bg-card/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Preview
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-background/30">
                <img
                  src={project.heroImage ?? SITE.images.ogDefault}
                  alt={`${project.title} preview`}
                  className="h-48 w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Replace this placeholder with screenshots, brand photography, or a product mockup.
              </p>
            </div>

            <div className="ring-grad rounded-2xl bg-card/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Tags
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags?.length ? (
                  project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-background/30 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-muted-foreground">No tags defined yet.</span>
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title={`Interested in ${project.title}?`}
        body={project.cta}
        primary={{ to: project.ctaHref || "/contact", label: project.ctaLabel || "Get in touch" }}
        secondary={{ to: "/projects", label: "Explore more" }}
      />
    </SiteShell>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border/50 py-3 first:pt-0 last:border-0 last:pb-0">
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm text-foreground/90">{value}</p>
    </div>
  );
}

function AssetSlot({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="asset-slot rounded-2xl border border-border/60 bg-card/30 p-4">
      <Icon className="h-4 w-4 text-gold" />
      <h3 className="mt-3 text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}

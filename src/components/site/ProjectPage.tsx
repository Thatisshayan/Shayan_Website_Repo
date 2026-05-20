import { Link } from "@tanstack/react-router";
import { Check, ArrowLeft } from "lucide-react";
import type { Project } from "@/data/projects";
import { SiteShell, PageHeader } from "./SiteShell";
import { CTASection } from "./CTASection";

export function ProjectPage({ project }: { project: Project }) {
  return (
    <SiteShell>
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.tagline}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> All projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <Block title="Overview" body={project.summary} />
            <Block title="The problem" body={project.problem} />
            <Block title="The solution" body={project.solution} />

            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Capabilities
              </h2>
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
          </div>

          <aside className="space-y-6">
            <div className="ring-grad rounded-2xl bg-card/40 p-6">
              <Meta label="Status" value={project.status} />
              <Meta label="Category" value={project.category} />
              <Meta label="Audience" value={project.audience} />
            </div>
            <div className="ring-grad rounded-2xl bg-card/40 p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Positioning note
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                {project.cta}
              </p>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title={`Interested in ${project.title}?`}
        body="Reach out to discuss access, partnerships, or a tailored engagement."
        primary={{ to: "/contact", label: "Get in touch" }}
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

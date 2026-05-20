import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

function stageClasses(stage: Project["stage"]) {
  switch (stage) {
    case "Live / active":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-200";
    case "In development":
      return "border-sky-500/20 bg-sky-500/10 text-sky-200";
    case "Concept":
      return "border-violet-500/20 bg-violet-500/10 text-violet-200";
    case "Opportunity":
      return "border-amber-500/20 bg-amber-500/10 text-amber-200";
    default:
      return "border-border/60 bg-background/40 text-muted-foreground";
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/$slug"
      params={{ slug: project.slug }}
      className="ring-grad group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card/40 p-6 transition hover:bg-card/70"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            {project.category}
          </span>
          <span
            className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${stageClasses(project.stage)}`}
          >
            {project.stage}
          </span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-1.5 text-sm font-medium text-foreground/70">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags?.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border/60 bg-background/30 px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-[11px] text-muted-foreground">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
        {project.businessModel ?? project.status}
      </div>
      <p className="mt-4 text-sm font-medium text-foreground/80 transition group-hover:text-foreground">
        {project.ctaLabel}
      </p>
    </Link>
  );
}

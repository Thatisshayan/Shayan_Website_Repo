import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={"/$slug" as any}
      params={{ slug: project.slug } as any}
      className="ring-grad group relative flex flex-col overflow-hidden rounded-2xl bg-card/40 p-6 transition hover:bg-card/70"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {project.category}
        </span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="mt-1.5 text-sm font-medium text-foreground/70">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {project.summary}
      </p>
      <div className="mt-6 flex items-center gap-2 text-[11px] text-muted-foreground">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold" />
        {project.status}
      </div>
    </Link>
  );
}

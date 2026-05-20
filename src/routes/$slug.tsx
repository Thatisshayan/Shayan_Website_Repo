import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProject, projects } from "@/data/projects";
import { ProjectPage } from "@/components/site/ProjectPage";

export const Route = createFileRoute("/$slug")({
  beforeLoad: ({ params }) => {
    if (!getProject(params.slug)) throw notFound();
  },
  loader: ({ params }) => ({ project: getProject(params.slug)! }),
  head: ({ loaderData }) => {
    const p = loaderData?.project ?? projects[0];
    const title = `${p.title} — ${p.category}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/${p.slug}` }],
    };
  },
  component: ProjectRoute,
});

function ProjectRoute() {
  const { project } = Route.useLoaderData();
  return <ProjectPage project={project} />;
}

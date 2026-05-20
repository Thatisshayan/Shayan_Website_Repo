import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProject, projects, SITE } from "@/data/projects";
import { ProjectPage } from "@/components/site/ProjectPage";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/$slug")({
  beforeLoad: ({ params }) => {
    if (!getProject(params.slug)) throw notFound();
  },
  loader: ({ params }) => ({ project: getProject(params.slug)! }),
  head: ({ loaderData }) => {
    const p = loaderData?.project ?? projects[0];
    return buildSeoHead({
      title: `${p.title} - ${SITE.brand}`,
      description: p.summary,
      pathname: `/${p.slug}`,
      image: p.ogImage ?? SITE.images.ogDefault,
      type: "article",
    });
  },
  component: ProjectRoute,
});

function ProjectRoute() {
  const { project } = Route.useLoaderData();
  return <ProjectPage project={project} />;
}

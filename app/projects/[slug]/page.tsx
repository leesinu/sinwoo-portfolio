import { notFound } from "next/navigation";
import { ProjectDetailView } from "../../components/ProjectDetailView";
import { projectBySlug, projects } from "../../data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}

import { notFound } from "next/navigation";
import { ProjectDetailView } from "../../../components/ProjectDetailView";
import { ProjectModalShell } from "../../../components/ProjectModalShell";
import { projectBySlug } from "../../../data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectModalPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectBySlug[slug];

  if (!project) {
    notFound();
  }

  return (
    <ProjectModalShell title={project.title}>
      <ProjectDetailView project={project} inModal />
    </ProjectModalShell>
  );
}

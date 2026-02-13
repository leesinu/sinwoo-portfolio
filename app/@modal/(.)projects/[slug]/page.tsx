import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "../../../components/ProjectDetailView";
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
    <div className="fixed inset-0 z-50 bg-slate-950/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${project.title} project detail modal`}>
      <div className="mx-auto max-w-5xl rounded-2xl border border-cyan-300/25 bg-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.25)]">
        <div className="flex justify-end p-3">
          <Link href="/" className="rounded-md border border-cyan-300/40 px-3 py-1 text-sm text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
            닫기
          </Link>
        </div>
        <ProjectDetailView project={project} inModal />
      </div>
    </div>
  );
}

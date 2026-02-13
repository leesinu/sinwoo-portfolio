import Link from "next/link";
import { Badge } from "./Badge";
import { Card } from "./Card";
import type { PortfolioProject } from "../data/projects";

type ProjectDetailViewProps = {
  project: PortfolioProject;
  inModal?: boolean;
};

const detailText = {
  sectionTitle: "text-lg font-semibold text-slate-100",
  label: "text-slate-200",
  value: "text-slate-100",
  muted: "text-sm text-slate-300/80",
};

export function ProjectDetailView({ project, inModal = false }: ProjectDetailViewProps) {
  return (
    <main className={inModal ? "max-h-[85vh] overflow-y-auto p-5" : "min-h-screen bg-slate-950 px-5 py-10 text-slate-100 md:px-10"}>
      <div className="mx-auto max-w-6xl space-y-6">
        <Card className="relative overflow-hidden">
          <img src={project.media.heroImage} alt={`${project.title} hero`} className="h-56 w-full rounded-xl object-cover md:h-72" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 z-10">
            <p className="text-sm text-cyan-100">{project.subtitle}</p>
            <h1 className="text-2xl font-semibold text-white md:text-4xl">{project.title}</h1>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge>{project.status}</Badge>
              {project.techStack.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
        </Card>

        <section aria-label="quick facts" className="grid gap-4 md:grid-cols-2">
          <Card>
            <h2 className={detailText.sectionTitle}>Quick Facts</h2>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
              <div><dt className={detailText.label}>장르</dt><dd className={detailText.value}>{project.genre}</dd></div>
              <div><dt className={detailText.label}>기간</dt><dd className={detailText.value}>{project.period}</dd></div>
              <div><dt className={detailText.label}>역할</dt><dd className={detailText.value}>{project.role}</dd></div>
              <div><dt className={detailText.label}>팀</dt><dd className={detailText.value}>{project.teamSize}</dd></div>
              <div className="col-span-2"><dt className={detailText.label}>플랫폼</dt><dd className={detailText.value}>{project.platforms.join(", ")}</dd></div>
            </dl>
          </Card>
          <Card>
            <h2 className={detailText.sectionTitle}>What I did</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-100">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </section>

        <Card>
          <h2 className={detailText.sectionTitle}>Media Gallery</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2" aria-label="gameplay gallery">
            {project.media.gameplayImages.map((image, index) => (
              <img key={image} src={image} alt={`${project.title} gameplay ${index + 1}`} className="h-52 w-full rounded-xl object-cover" />
            ))}
          </div>
        </Card>

        <Card>
          <h2 className={detailText.sectionTitle}>Architecture</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {project.media.systemImages.map((image, index) => (
              <img key={image} src={image} alt={`${project.title} architecture ${index + 1}`} className="h-52 w-full rounded-xl object-cover" />
            ))}
          </div>
        </Card>

        <Card>
          <h2 className={detailText.sectionTitle}>Code Showcase</h2>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {project.media.codeImages.map((image, index) => (
              <figure key={image}>
                <img src={image} alt={`${project.title} code snippet ${index + 1}`} className="h-52 w-full rounded-xl object-cover" />
                <figcaption className="mt-2 text-xs text-slate-300/80">코드 스니펫 {index + 1} (placeholder)</figcaption>
              </figure>
            ))}
          </div>
        </Card>

        <section className="grid gap-4 md:grid-cols-2" aria-label="sections and troubleshooting">
          <Card>
            <h2 className={detailText.sectionTitle}>Project Sections</h2>
            <div className="mt-3 space-y-4">
              {project.sections.map((section) => (
                <article key={section.title}>
                  <h3 className="font-medium text-cyan-100">{section.title}</h3>
                  {section.paragraphs?.map((p) => <p key={p} className={detailText.muted}>{p}</p>)}
                  {section.bullets && (
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-300/80">
                      {section.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className={detailText.sectionTitle}>Troubleshooting & Learnings</h2>
            <div className="mt-3 space-y-3">
              {project.troubleshooting.map((item) => (
                <article key={item.problem} className="rounded-xl border border-cyan-300/20 bg-slate-900/60 p-3 text-sm text-slate-100">
                  <p><span className="text-cyan-100">문제:</span> <span className={detailText.value}>{item.problem}</span></p>
                  <p><span className="text-cyan-100">원인:</span> <span className={detailText.value}>{item.cause}</span></p>
                  <p><span className="text-cyan-100">해결:</span> <span className={detailText.value}>{item.solution}</span></p>
                  <p><span className="text-cyan-100">배운 점:</span> <span className={detailText.value}>{item.learning}</span></p>
                </article>
              ))}
            </div>
          </Card>
        </section>

        <Card>
          <h2 className={detailText.sectionTitle}>Links</h2>
          <div className="mt-3 flex flex-wrap gap-3">
            {Object.entries(project.links).map(([label, url]) => (
              <Link
                key={label}
                href={url ?? "#"}
                aria-label={`${label} link`}
                className={`rounded-lg border px-3 py-2 text-sm ${url ? "border-cyan-300/40 text-cyan-100 hover:bg-cyan-300/15" : "cursor-not-allowed border-white/10 text-slate-500"}`}
              >
                {label.toUpperCase()}
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}

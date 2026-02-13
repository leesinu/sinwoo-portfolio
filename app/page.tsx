import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { IconRow } from "./components/IconRow";
import { SectionHeader } from "./components/SectionHeader";
import { Timeline } from "./components/Timeline";
import Link from "next/link";
import { contacts, experiences, github, heroContent, projects, skills } from "./data/content";

const designTokens = {
  colors: {
    background: "#020617",
    panel: "rgba(15, 23, 42, 0.72)",
    border: "rgba(125, 211, 252, 0.24)",
    glow: "rgba(56, 189, 248, 0.35)",
    textPrimary: "#f8fafc",
    textSecondary: "#cbd5e1",
  },
  typography: {
    heading: "font-semibold tracking-tight",
    body: "text-sm leading-6",
  },
  spacing: {
    section: "py-14 md:py-20",
    container: "px-5 md:px-10",
  },
  effects: {
    borderRadius: "rounded-2xl",
    border: "border border-cyan-300/20",
    shadow: "shadow-[0_0_40px_rgba(56,189,248,0.12)]",
    divider: "border-b border-white/10",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100" style={{ backgroundColor: designTokens.colors.background }}>
      <div className="mx-auto max-w-6xl">
        <section id="hero" className={`${designTokens.spacing.section} ${designTokens.spacing.container}`}>
          <div className="grid gap-8 rounded-3xl border border-cyan-300/20 bg-slate-900/60 p-6 shadow-[0_0_60px_rgba(56,189,248,0.14)] md:grid-cols-2 md:p-10">
            <div className="flex flex-col justify-center">
              <p className="mb-3 inline-flex items-center text-xs uppercase tracking-[0.3em] text-cyan-200">
                <span className="mr-2 text-cyan-400">❯</span> Portfolio Remastered
              </p>
              <h1 className={`text-4xl text-slate-50 md:text-5xl ${designTokens.typography.heading}`}>
                {heroContent.name}
              </h1>
              <p className="mt-3 text-lg text-cyan-100">{heroContent.role}</p>
              <p className={`mt-5 max-w-xl text-slate-300 ${designTokens.typography.body}`}>{heroContent.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="#projects" ariaLabel="프로젝트 섹션으로 이동">
                  {heroContent.ctaPrimary}
                </Button>
                <Button href="#contact" variant="ghost" ariaLabel="연락처 섹션으로 이동">
                  {heroContent.ctaSecondary}
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-cyan-300/30">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80"
                alt="Futuristic workspace background"
                className="h-full min-h-[300px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-cyan-900/20" />
            </div>
          </div>
        </section>

        <section id="projects" className={`${designTokens.spacing.section} ${designTokens.spacing.container}`}>
          <SectionHeader title="Projects" subtitle="협업과 플레이 경험을 중심으로 구축한 대표 프로젝트입니다." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                aria-label={`${project.title} 상세 보기`}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <Card>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
                    <Badge>{project.status}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                  <p className="mt-3 text-xs uppercase tracking-wider text-cyan-200">Role · {project.role}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <IconRow items={project.stack} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section id="skills" className={`${designTokens.spacing.section} ${designTokens.spacing.container}`}>
          <SectionHeader title="Skills" subtitle="기술군을 카테고리 단위로 구성해 빠르게 파악할 수 있도록 정리했습니다." />
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((group) => (
              <Card key={group.category}>
                <h3 className="text-base font-semibold text-slate-100">
                  <span aria-hidden className="mr-2">{group.icon}</span>
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className={`${designTokens.spacing.section} ${designTokens.spacing.container}`}>
          <SectionHeader title="Experience" subtitle="프로젝트 참여 경험과 핵심 기여를 타임라인으로 표현했습니다." />
          <Timeline items={experiences} />
        </section>

        <section id="github" className={`${designTokens.spacing.section} ${designTokens.spacing.container}`}>
          <SectionHeader title="GitHub" subtitle="코드 아카이브와 학습 기록을 지속적으로 확장하고 있습니다." />
          <Card className="grid gap-4 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <p className="text-sm text-slate-300">오픈소스 실험, 프로토타입, 학습 기반 프로젝트를 저장합니다.</p>
              <a
                href={github.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Profile Visit
              </a>
            </div>
            <ul className="grid gap-2" aria-label="github stats">
              {github.stats.map((stat) => (
                <li key={stat.label} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2">
                  <p className="text-xs text-slate-400">{stat.label}</p>
                  <p className="text-sm font-semibold text-slate-100">{stat.value}</p>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section id="contact" className={`${designTokens.spacing.section} ${designTokens.spacing.container}`}>
          <SectionHeader title="Contact" subtitle="협업 문의, 프로젝트 제안은 아래 채널로 연락 부탁드립니다." />
          <Card>
            <ul className="grid gap-3 md:grid-cols-3" aria-label="contact links">
              {contacts.map((contact) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:shadow-[0_0_18px_rgba(56,189,248,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <p className="text-xs uppercase tracking-wider text-slate-400">{contact.label}</p>
                    <p className="text-sm font-medium text-slate-100">{contact.value}</p>
                  </a>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </main>
  );
}

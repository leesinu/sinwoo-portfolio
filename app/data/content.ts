import { projects as portfolioProjects } from "./projects";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  status: string;
};

export type SkillGroup = {
  category: string;
  icon: string;
  items: string[];
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  bullets: string[];
};

export const heroContent = {
  name: "이신우",
  role: "Game Client Developer",
  description:
    "Unity 기반 멀티플레이/게임플레이 시스템을 설계하고 구현하는 클라이언트 개발자입니다. 협업 가능한 구조, 최적화, 플레이 경험을 중심으로 제품 품질을 개선합니다.",
  ctaPrimary: "프로젝트 보기",
  ctaSecondary: "연락하기",
};

export const projects: Project[] = portfolioProjects.map((project) => ({
  slug: project.slug,
  title: project.title,
  summary: project.subtitle,
  role: project.role,
  stack: project.techStack,
  status: project.status,
  highlights: project.contributions.slice(0, 3),
}));

export const skills: SkillGroup[] = [
  { category: "Core", icon: "⚡", items: ["Unity", "C#", "OOP", "Gameplay Architecture"] },
  { category: "Network", icon: "🌐", items: ["Mirror", "Client Prediction", "RPC", "State Sync"] },
  { category: "Frontend", icon: "🧩", items: ["Next.js", "React", "TypeScript", "UI/UX"] },
  { category: "Tooling", icon: "🛠", items: ["Git", "Figma", "Notion", "Vercel"] },
];

export const experiences: ExperienceItem[] = [
  {
    period: "2024 - Present",
    title: "게임 클라이언트 개발 및 포트폴리오 리마스터링",
    company: "Personal Projects",
    bullets: [
      "멀티플레이/상호작용 중심 프로젝트 구조 설계",
      "프로젝트별 코드 모듈화를 통한 유지보수성 향상",
      "플레이어 경험 중심의 UI/UX 개선 반복",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Unity 기반 팀 프로젝트 참여",
    company: "Game Development Team",
    bullets: [
      "게임플레이 스크립트 구현 및 버그 픽스",
      "기획-아트-개발 간 인터페이스 정의 및 조율",
      "성능 이슈 분석 및 프레임 안정화 대응",
    ],
  },
];

export const github = {
  profileUrl: "https://github.com",
  stats: [
    { label: "Repositories", value: "24+" },
    { label: "Main Languages", value: "C#, TS" },
    { label: "Focus", value: "Gameplay / Netcode" },
  ],
};

export const contacts = [
  { label: "Email", value: "lee_sin_woo@naver.com", href: "mailto:lee_sin_woo@naver.com" },
  { label: "GitHub", value: "github.com/sinwoo", href: "https://github.com" },
  { label: "Location", value: "Korea", href: "#" },
];

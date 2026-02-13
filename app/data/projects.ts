export type ProjectSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type TroubleshootingItem = {
  problem: string;
  cause: string;
  solution: string;
  learning: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  status: "Completed" | "In Progress" | "Prototype";
  period: string;
  genre: string;
  role: string;
  teamSize: string;
  platforms: string[];
  summary: string[];
  contributions: string[];
  techStack: string[];
  media: {
    heroImage: string;
    gameplayImages: string[];
    systemImages: string[];
    codeImages: string[];
  };
  sections: ProjectSection[];
  troubleshooting: TroubleshootingItem[];
  links: {
    github: string | null;
    video: string | null;
    build: string | null;
    docs: string | null;
  };
};

export const projects: PortfolioProject[] = [
  {
    slug: "clinical-trial-the-final",
    title: "Clinical Trial -The Final-",
    subtitle: "2.5D 퍼즐 방탈출 게임",
    status: "Completed",
    period: "2024.03 - 2024.08",
    genre: "Puzzle Escape",
    role: "PD / Client Developer",
    teamSize: "4명",
    platforms: ["PC"],
    summary: [
      "환경 오브젝트 상호작용을 중심으로 퍼즐 흐름을 설계한 2.5D 방탈출 프로젝트입니다.",
      "몰입을 유지하기 위해 카메라 연출과 UI 피드백을 단계별로 분리해 관리했습니다.",
      "기획-아트-개발 간 데이터 계약을 문서화해 반복 작업 비용을 줄였습니다.",
    ],
    contributions: [
      "퍼즐 상태 머신과 상호작용 이벤트 체인을 구현해 난이도 곡선 제어",
      "씬 전환 중 입력 잠금 및 연출 동기화 로직 작성",
      "조작 실수 복구를 위한 힌트/리셋 UX 도입",
    ],
    techStack: ["Unity", "C#", "ScriptableObject", "DOTween", "FMOD"],
    media: {
      heroImage: "/placeholders/hero-gameplay.svg",
      gameplayImages: ["/placeholders/gameplay-1.svg", "/placeholders/gameplay-2.svg"],
      systemImages: ["/placeholders/arch-1.svg"],
      codeImages: ["/placeholders/code-1.svg"],
    },
    sections: [
      {
        title: "개요",
        paragraphs: [
          "플레이어는 제한된 단서로 방을 탈출해야 하며, 퍼즐은 공간 인지와 관찰을 함께 요구합니다.",
        ],
      },
      {
        title: "기능 설명",
        bullets: ["오브젝트 조사/획득/조합", "힌트 단계 제공", "세이브 포인트 기반 진행 관리"],
      },
      {
        title: "아키텍처",
        paragraphs: ["상호작용 모듈, 퍼즐 모듈, UI 모듈을 분리한 이벤트 버스 기반 구조를 사용했습니다."],
      },
      {
        title: "UX",
        bullets: ["중요 단서 하이라이트", "실패 스트레스 완화용 복구 루프", "튜토리얼 최소화"],
      },
      {
        title: "회고",
        paragraphs: ["디자인 의도를 코드 레벨 계약으로 먼저 고정하면 협업 속도가 빨라진다는 점을 확인했습니다."],
      },
    ],
    troubleshooting: [
      {
        problem: "퍼즐 오브젝트 순서 꼬임으로 진행 불가 발생",
        cause: "씬 단위 상태를 단순 bool로 관리해 분기 누락",
        solution: "퍼즐 단계를 enum 상태 머신으로 전환하고 전이 검증 추가",
        learning: "상태 전이는 데이터로 선언해야 QA와 디버깅이 쉬워집니다.",
      },
    ],
    links: {
      github: null,
      video: null,
      build: null,
      docs: null,
    },
  },
  {
    slug: "unknown",
    title: "Unknown",
    subtitle: "공포 퍼즐 방탈출 게임",
    status: "In Progress",
    period: "2024.09 - 진행중",
    genre: "Horror Puzzle",
    role: "Client Developer",
    teamSize: "5명",
    platforms: ["PC"],
    summary: [
      "공포 연출 트리거와 탐색 기반 퍼즐을 결합한 프로젝트입니다.",
      "긴장도를 유지하면서도 플레이어가 길을 잃지 않도록 사운드/조명 피드백을 설계했습니다.",
      "현재 연출 파이프라인 고도화와 성능 최적화를 병행하고 있습니다.",
    ],
    contributions: [
      "연출 트리거 시스템과 사운드 큐 매핑 로직 구현",
      "씬 단위 로딩 및 이벤트 타임라인 동기화",
      "탐색 가이드 UX(시선 유도/오디오 힌트) 개선",
    ],
    techStack: ["Unity", "C#", "Timeline", "Addressables", "Wwise"],
    media: {
      heroImage: "/placeholders/hero-horror.svg",
      gameplayImages: ["/placeholders/gameplay-1.svg", "/placeholders/gameplay-3.svg"],
      systemImages: ["/placeholders/arch-2.svg"],
      codeImages: ["/placeholders/code-2.svg"],
    },
    sections: [
      { title: "개요", paragraphs: ["심리적 압박을 유지하는 탐색형 공포 퍼즐 경험을 목표로 합니다."] },
      { title: "기능 설명", bullets: ["공포 이벤트 타임라인", "환경 사운드 동적 믹싱", "단서 기반 퍼즐 체인"] },
      { title: "아키텍처", paragraphs: ["레벨 트리거 -> 이벤트 디스패처 -> 연출 모듈로 이어지는 단방향 흐름입니다."] },
      { title: "회고", paragraphs: ["연출 품질과 플레이어 통제감의 균형이 핵심임을 체감했습니다."] },
    ],
    troubleshooting: [
      {
        problem: "프레임 드랍 구간에서 연출 타이밍 밀림",
        cause: "Update 기반 타이머 누적 오차",
        solution: "타임라인 기준 이벤트로 이동하고 보정 로직 추가",
        learning: "연출 동기화는 절대 시간축 기준이 안전합니다.",
      },
    ],
    links: { github: null, video: null, build: null, docs: null },
  },
  {
    slug: "unlight",
    title: "Unlight",
    subtitle: "4인 협동 TPS",
    status: "Prototype",
    period: "2023.11 - 2024.02",
    genre: "Co-op TPS",
    role: "Network Gameplay Engineer",
    teamSize: "6명",
    platforms: ["PC"],
    summary: [
      "Mirror 기반 4인 협동 TPS 프로토타입입니다.",
      "역할군 기반 전투와 지원 루프를 구현하고 네트워크 동기화 비용을 검증했습니다.",
      "협업 시야 확보를 위한 HUD 지표 설계를 병행했습니다.",
    ],
    contributions: [
      "RPC/SyncVar 기반 핵심 전투 상태 동기화",
      "클라이언트 예측 보정 실험 및 입력 지연 완화",
      "협동 인터랙션(부활/지원 스킬) 네트워크 처리",
    ],
    techStack: ["Unity", "Mirror", "C#", "Netcode", "Profiler"],
    media: {
      heroImage: "/placeholders/hero-tps.svg",
      gameplayImages: ["/placeholders/gameplay-2.svg", "/placeholders/gameplay-3.svg"],
      systemImages: ["/placeholders/arch-1.svg", "/placeholders/arch-2.svg"],
      codeImages: ["/placeholders/code-1.svg", "/placeholders/code-2.svg"],
    },
    sections: [
      { title: "개요", paragraphs: ["협동 전투 상황에서 입력 반응성과 가독성을 우선한 네트워크 TPS입니다."] },
      { title: "동기화", bullets: ["중요 전투 이벤트 서버 권한 처리", "보간/예측 혼합", "패킷 손실 상황 대응"] },
      { title: "UX", paragraphs: ["역할별 상태를 단색+아이콘으로 단순화해 순간 판단 시간을 줄였습니다."] },
    ],
    troubleshooting: [
      {
        problem: "재접속 시 플레이어 상태 불일치",
        cause: "초기 스냅샷 로딩 순서 경쟁",
        solution: "스폰 완료 ACK 이후 상태 복원 파이프라인으로 재정렬",
        learning: "네트워크 초기화 순서 보장은 기능보다 먼저 설계되어야 합니다.",
      },
    ],
    links: { github: null, video: null, build: null, docs: null },
  },
  {
    slug: "soul",
    title: "Soul",
    subtitle: "내러티브 액션 실험작",
    status: "Prototype",
    period: "2023.05 - 2023.09",
    genre: "Narrative Action",
    role: "Client Gameplay Developer",
    teamSize: "3명",
    platforms: ["PC"],
    summary: [
      "스토리 분기와 액션 템포를 결합한 실험형 프로젝트입니다.",
      "분기 선택이 전투 패턴과 레벨 이벤트를 바꾸는 구조를 구현했습니다.",
      "소규모 팀 개발에서 데이터 주도 스크립팅의 효율을 검증했습니다.",
    ],
    contributions: ["분기 이벤트 데이터 테이블 구성", "전투 스킬 콤보 시스템 구현", "컷신-전투 전환 상태 제어"],
    techStack: ["Unity", "C#", "State Machine", "Timeline"],
    media: {
      heroImage: "/placeholders/hero-soul.svg",
      gameplayImages: ["/placeholders/gameplay-1.svg"],
      systemImages: ["/placeholders/arch-2.svg"],
      codeImages: ["/placeholders/code-1.svg"],
    },
    sections: [
      { title: "개요", paragraphs: ["분기 선택이 전투 리듬에 영향을 주는 싱글플레이 실험작입니다."] },
      { title: "AI", bullets: ["패턴 세트 스왑", "상태 기반 난이도 조정", "연출 연계 행동 트리거"] },
      { title: "회고", paragraphs: ["콘텐츠 규모가 작을수록 데이터 구조화가 반복 제작의 핵심임을 확인했습니다."] },
    ],
    troubleshooting: [
      {
        problem: "분기 이벤트 누락으로 진행 막힘",
        cause: "이벤트 키 중복 및 참조 실수",
        solution: "키 네이밍 규칙과 검증 스크립트 도입",
        learning: "내러티브 프로젝트는 도구화가 곧 품질입니다.",
      },
    ],
    links: { github: null, video: null, build: null, docs: null },
  },
];

export const projectBySlug = Object.fromEntries(projects.map((project) => [project.slug, project]));

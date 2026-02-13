# Sinwoo Portfolio

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build & Lint

```bash
npm run lint
npm run build
```

## 프로젝트 데이터 편집 가이드

프로젝트 상세 콘텐츠는 `app/data/projects.ts`에서 관리합니다.

- 새 프로젝트 추가: `projects` 배열에 동일한 스키마 객체를 추가합니다.
- 라우팅 URL: `slug` 값이 `/projects/[slug]` 경로로 사용됩니다.
- 미디어 교체: `media.heroImage`, `gameplayImages`, `systemImages`, `codeImages` 경로를 `/public/placeholders` 또는 실제 이미지 경로로 변경합니다.
- 섹션 편집: `sections`에 `title`, `paragraphs`, `bullets`를 구성하면 상세 페이지가 자동 렌더링합니다.
- 트러블슈팅: `troubleshooting` 배열에 문제/원인/해결/배운 점을 입력합니다.
- 링크: `links.github|video|build|docs`에 URL을 넣고, 없으면 `null`을 유지합니다.

홈 `Projects` 섹션 카드는 동일 데이터에서 요약 정보를 가져오며, 클릭 시 상세 페이지/모달 딥링크로 이동합니다.

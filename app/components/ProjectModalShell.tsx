"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

type ProjectModalShellProps = {
  children: React.ReactNode;
  title: string;
};

export function ProjectModalShell({ children, title }: ProjectModalShellProps) {
  const router = useRouter();

  const closeModal = useCallback(() => {
    console.info("[ProjectModal] close button clicked");
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/#projects");
  }, [router]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeModal]);

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/70 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} project detail modal`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          closeModal();
        }
      }}
    >
      <div className="relative mx-auto max-w-5xl rounded-2xl border border-cyan-300/25 bg-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.25)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-50 flex justify-end p-3">
          <button
            type="button"
            onClick={closeModal}
            className="pointer-events-auto rounded-md border border-cyan-300/40 bg-slate-950/90 px-3 py-1 text-sm text-cyan-100 transition hover:bg-cyan-400/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="프로젝트 상세 닫기"
            autoFocus
          >
            닫기
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

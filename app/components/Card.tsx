import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-cyan-300/20 bg-slate-900/70 p-5 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_16px_40px_rgba(15,23,42,0.55)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] ${className}`}
    >
      {children}
    </article>
  );
}

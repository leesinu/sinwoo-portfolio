import Link from "next/link";
import { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  href: string;
  variant?: "primary" | "ghost";
  ariaLabel?: string;
}>;

export function Button({ href, variant = "primary", ariaLabel, children }: ButtonProps) {
  const style =
    variant === "primary"
      ? "border-cyan-300/60 bg-cyan-400/20 text-cyan-100 hover:bg-cyan-300/30"
      : "border-white/20 bg-white/5 text-slate-100 hover:border-cyan-200/50 hover:text-cyan-100";

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${style}`}
    >
      {children}
    </Link>
  );
}

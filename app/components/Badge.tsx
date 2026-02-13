import { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
      {children}
    </span>
  );
}

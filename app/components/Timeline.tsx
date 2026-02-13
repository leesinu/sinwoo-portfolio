import { ExperienceItem } from "../data/content";
import { Card } from "./Card";

type TimelineProps = {
  items: ExperienceItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="space-y-4" aria-label="experience timeline">
      {items.map((item) => (
        <li key={`${item.period}-${item.title}`} className="relative pl-6">
          <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          <Card>
            <p className="text-xs text-cyan-200/90">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-100">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.company}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Card>
        </li>
      ))}
    </ol>
  );
}

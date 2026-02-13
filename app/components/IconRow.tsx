type IconRowProps = {
  items: string[];
};

export function IconRow({ items }: IconRowProps) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="technology tags">
      {items.map((item) => (
        <li key={item} className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
          {item}
        </li>
      ))}
    </ul>
  );
}

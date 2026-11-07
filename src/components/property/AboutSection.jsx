import SectionCard from "./SectionCard";
import { iconMap } from "./icons";

export default function AboutSection({ about, highlights }) {
  return (
    <SectionCard title="About This Property" className="!gap-4">
      <div className="flex flex-col gap-4 text-base leading-[26px] text-ink-2">{about.map((t) => <p key={t}>{t}</p>)}</div>
      <ul className="flex flex-wrap gap-2 pt-4">
        {highlights.map(({ icon, label }) => {
          const I = iconMap[icon];
          return <li key={label} className="flex items-center gap-1.5 rounded-lg bg-surface-low px-3 py-1.5 text-xs font-semibold tracking-[0.24px] text-primary"><I size={12} />{label}</li>;
        })}
      </ul>
    </SectionCard>
  );
}

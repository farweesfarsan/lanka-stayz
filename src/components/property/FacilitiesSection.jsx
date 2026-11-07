import SectionCard from "./SectionCard";
import { iconMap } from "./icons";

export default function FacilitiesSection({ amenities }) {
  return (
    <SectionCard title="Facilities You'll Enjoy" subtitle="The property offers the following facilities to make your stay comfortable.">
      <ul className="grid gap-4 sm:grid-cols-2">
        {amenities.map(({ icon, title, desc }) => {
          const I = iconMap[icon];
          return (
            <li key={title} className="flex min-h-[80px] items-center gap-4 rounded-xl bg-surface-low p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-2 text-white"><I size={20} /></span>
              <div>
                <h3 className="font-serif text-xl font-medium leading-7">{title}</h3>
                <p className="text-xs leading-4 tracking-[0.12px] text-ink-2">{desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </SectionCard>
  );
}

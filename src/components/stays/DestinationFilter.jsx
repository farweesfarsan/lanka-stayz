import { ChevronsUpDown, Globe, MapPin, Zap } from "lucide-react";
import Container from "../ui/Container";
import { ALL, plural } from "../../data/stays";

export default function DestinationFilter({ regions, value, onChange, count }) {
  const pills = [ALL, ...regions];
  const label = (r) => (r === ALL ? "All Destinations" : r);

  return (
    <section className="bg-surface py-10">
      <Container className="flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow tracking-[1.1px] text-secondary">Filter by region</p>
            <h2 className="pt-1 font-serif text-2xl font-medium leading-8 text-primary">Find Your Stay</h2>
            <p className="text-sm leading-5 text-ink-2">Choose a destination to explore available accommodation in that area.</p>
          </div>
          <p className="flex items-center gap-1.5 text-xs font-semibold leading-4 tracking-[0.24px] text-primary" aria-live="polite">
            <Globe size={15} />
            {value === ALL ? `Showing ${count} properties across Sri Lanka` : `Showing ${count} ${plural(count, "property", "properties")} in ${value}`}
          </p>
        </div>

        <div className="flex flex-col gap-5 rounded-2xl bg-white p-4 shadow-lift sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full max-w-[448px]">
              <MapPin size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <select value={value} onChange={(e) => onChange(e.target.value)} aria-label="Select destination"
                className="w-full cursor-pointer appearance-none rounded-xl bg-surface-low/70 py-3 pl-12 pr-10 text-sm font-semibold tracking-[0.14px] text-ink outline-none focus:ring-2 focus:ring-primary/30">
                <option value={ALL}>All Destinations (Islandwide)</option>
                {regions.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
              <ChevronsUpDown size={14} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-2" />
            </div>
            <p className="hidden items-center gap-2 text-[11px] font-semibold leading-[14px] tracking-[0.44px] text-ink-2 md:flex">
              <Zap size={12} />Quick Destination Pick:
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Quick destination filter">
            {pills.map((r) => (
              <button key={r} role="tab" aria-selected={value === r} onClick={() => onChange(r)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.24px] shadow-card transition ${value === r ? "bg-primary text-white" : "bg-surface-low text-ink-2 hover:bg-mint"}`}>
                {label(r)}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { useMemo, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import PropertyCard from "./PropertyCard";
import { filters, properties } from "../../data/content";

export default function FeaturedStays() {
  const [active, setActive] = useState("All Stays");
  const [saved, setSaved] = useState(() => new Set());
  const list = useMemo(() => (active === "All Stays" ? properties : properties.filter((p) => p.cat === active)), [active]);
  const toggle = (id) => setSaved((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <section id="stays" className="bg-surface py-16 md:py-24">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading badge="Hand-curated escapes" title="Find a Stay You'll Love"
            text="From relaxing beach escapes to peaceful mountain retreats, explore places that make every trip special." />
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0" role="tablist">
            {filters.map((f) => (
              <button key={f} role="tab" aria-selected={active === f} onClick={() => setActive(f)}
                className={`shrink-0 rounded-full px-5 py-2 text-xs font-semibold tracking-[0.24px] transition ${active === f ? "bg-primary text-white shadow-card" : "bg-surface-mid text-ink-2 hover:bg-mint"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PropertyCard key={p.id} p={p} saved={saved.has(p.id)} onToggle={toggle} />)}
        </div>
        <div className="flex justify-center pt-2">
          <Button variant="white" to="/stays" arrow>Explore All 500+ Stays</Button>
        </div>
      </Container>
    </section>
  );
}

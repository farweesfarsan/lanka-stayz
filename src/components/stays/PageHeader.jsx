import { BadgeCheck, ChevronRight, House } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { plural } from "../../data/stays";

export default function PageHeader({ total, searchSummary }) {
  return (
    <section className="bg-surface-low/60 py-10 md:py-14">
      <Container className="flex flex-col gap-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold leading-4 tracking-[0.24px]">
          <Link to="/" className="flex items-center gap-1 text-ink-2 hover:text-primary"><House size={12} />Home</Link>
          <ChevronRight size={12} className="text-ink-2" />
          <span className="text-primary" aria-current="page">Explore Stays</span>
        </nav>

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="flex max-w-3xl flex-col items-start gap-3">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-mint px-3 py-1 tracking-[0.55px] text-mint-ink">
              <BadgeCheck size={13} />Curated island stays
            </span>
            <h1 className="font-serif text-3xl font-semibold leading-tight tracking-[-1px] text-primary sm:text-4xl lg:text-[40px] lg:leading-[48px]">
              Explore Stays Across Sri Lanka
            </h1>
            <p className="text-base leading-[26px] text-ink-2">
              Find a place that suits your plans, whether you're looking for a relaxing beach holiday, a peaceful mountain escape, or a comfortable stay in the city. Hand-selected sanctuaries across the island.
            </p>
            {searchSummary && <p className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-primary shadow-card">Your search: {searchSummary}</p>}
          </div>

          <div className="flex w-fit items-center gap-3 rounded-xl bg-white px-4 py-2.5 shadow-card">
            <span className="relative flex h-3 w-3">
              <span className="absolute inset-0 animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative h-3 w-3 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium tracking-[0.14px]">{total} Curated {plural(total, "Stay", "Stays")} Available</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

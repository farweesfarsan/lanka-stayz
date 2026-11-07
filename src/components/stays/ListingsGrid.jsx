import { useState } from "react";
import Container from "../ui/Container";
import ListingCard from "./ListingCard";

export default function ListingsGrid({ items, searchSummary }) {
  const [saved, setSaved] = useState(() => new Set());
  const toggle = (id) => setSaved((current) => {
    const next = new Set(current);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <section className="bg-surface pb-20 pt-4">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="font-serif text-[28px] font-semibold leading-10 tracking-[-0.32px] text-primary sm:text-[32px]">Places You Might Love</h2>
          <p className="text-sm leading-5 text-ink-2">Explore our selection of holiday accommodation and find a place for your next trip.</p>
          {searchSummary && <p className="pt-1 text-xs text-secondary">Dates are carried to the property's booking form. Availability is not live in this sample catalog.</p>}
        </div>
        {items.length ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => <ListingCard key={item.id} item={item} saved={saved.has(item.id)} onToggle={toggle} />)}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-6 py-14 text-center shadow-card">
            <h3 className="font-serif text-2xl font-semibold text-primary">No stays match this search</h3>
            <p className="mt-2 text-sm text-ink-2">Try a different destination or reduce the number of guests.</p>
          </div>
        )}
      </Container>
    </section>
  );
}

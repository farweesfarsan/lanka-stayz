import { ArrowRight, BedDouble, Heart, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Badge from "../ui/Badge";

export default function PropertyCard({ p, saved, onToggle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-float">
      <div className="relative h-[280px] overflow-hidden bg-surface-mid">
        <Link to={`/stays/${p.id}`} aria-label={`View details for ${p.name}`} className="block h-full w-full">
          <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        </Link>
        <Badge tone={p.tone} className="absolute left-4 top-4 shadow-card">{p.badge}</Badge>
        <button onClick={() => onToggle(p.id)} aria-pressed={saved} aria-label="Save to favorites"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-primary shadow-card backdrop-blur-xl">
          <Heart size={16} className={saved ? "fill-primary" : ""} />
        </button>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-white/90 px-2.5 py-1 shadow-card backdrop-blur-xl">
          <Star size={13} className="fill-ink text-ink" />
          <span className="text-[11px] font-bold tracking-[0.44px]">{p.rating}</span>
          <span className="text-xs text-ink-2">({p.reviews})</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between pb-2">
          <span className="eyebrow tracking-[1.1px] text-secondary">{p.location}</span>
          <span className="text-[11px] font-semibold tracking-[0.44px] text-outline">{p.type}</span>
        </div>
        <h3 className="pb-2 font-serif text-xl font-medium leading-7"><Link to={`/properties/${p.slug}`} className="hover:text-primary">{p.name}</Link></h3>
        <p className="pb-4 text-sm leading-5 text-ink-2">{p.desc}</p>
        <div className="mb-6 flex items-center gap-4 rounded-xl bg-surface-low px-4 py-3 text-xs tracking-[0.12px] text-ink-2">
          <span className="flex items-center gap-1.5"><Users size={14} />{p.guests}</span>
          <span className="h-1 w-1 rounded-full bg-outline-soft" />
          <span className="flex items-center gap-1.5"><BedDouble size={14} />{p.rooms}</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <p className="text-xs tracking-[0.12px] text-ink-2">From 
            <span className="ml-1 font-sans text-xl font-extrabold tracking-tight text-primary">
              Rs. {p.price}
            </span> / night
          </p>
          <Link to={`/stays/${p.id}`} aria-label={`View ${p.name}`} className="flex h-[33px] w-[33px] items-center justify-center rounded-full bg-surface-mid text-primary transition hover:bg-primary hover:text-white"><ArrowRight size={13} /></Link>
        </div>
      </div>
    </article>
  );
}

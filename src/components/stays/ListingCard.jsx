import { BedDouble, Flame, Landmark, MapPin, Mountain, Umbrella, Users, Waves } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import WishlistButton from "../ui/WishlistButton";
import { formatLKR } from "../../data/stays";

const featureIcons = { bedrooms: BedDouble, pool: Waves, valley: Mountain, fort: Landmark, beach: Umbrella, fireplace: Flame };

export default function ListingCard({ item, saved, onToggle }) {
  const location = useLocation();
  const FeatureIcon = featureIcons[item.feature.icon] ?? BedDouble;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:shadow-float">
      <div className="relative h-[280px] overflow-hidden bg-[#e1ebe1]">
        <img src={item.img} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold leading-[14px] tracking-[0.44px] text-primary shadow-card backdrop-blur-xl">{item.type}</span>
        <WishlistButton active={saved} onToggle={() => onToggle(item.id)} className="absolute right-4 top-4" />
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase leading-[14px] tracking-[0.55px] text-secondary"><MapPin size={12} />{item.region}</p>
          <h3 className="font-serif text-xl font-medium leading-7 text-ink">{item.name}</h3>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs tracking-[0.12px] text-ink-2">
            <span className="flex items-center gap-1.5"><Users size={14} className="text-secondary" />Up to {item.guests} guests</span>
            <span className="text-outline-soft">•</span>
            <span className="flex items-center gap-1.5"><FeatureIcon size={13} className="text-secondary" />{item.feature.label}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <div>
            <p className="text-xs leading-4 tracking-[0.12px] text-ink-2">From</p>
            <p className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="font-serif text-xl font-bold leading-7 text-primary">{formatLKR(item.price)}</span>
              <span className="text-xs tracking-[0.12px] text-ink-2">/ night</span>
            </p>
          </div>
          <Link to={`/stays/${item.id}${location.search}`} className="rounded-lg bg-primary-2 px-4 py-2 text-xs font-semibold tracking-[0.24px] text-white shadow-card transition hover:bg-primary">View Details</Link>
        </div>
      </div>
    </article>
  );
}

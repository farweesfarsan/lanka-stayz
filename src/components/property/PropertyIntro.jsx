import { BadgeCheck, MapPin, Star } from "lucide-react";
import { formatPrice } from "../../data/stays";

export default function PropertyIntro({ p }) {
  return (
    <div className="flex flex-col justify-between gap-6 pb-8 pt-6 lg:flex-row lg:items-end">
      <div className="flex max-w-3xl flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1 rounded-full bg-mint px-3 py-0.5 text-[11px] font-semibold uppercase leading-[14px] tracking-[0.275px] text-[#254e42]"><BadgeCheck size={12} />{p.type}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#e1ebe1] px-2.5 py-0.5 text-[11px] font-semibold leading-[14px] tracking-[0.44px]">
            <Star size={11} className="fill-ink text-ink" />{p.rating}<span className="text-outline">({p.reviews} reviews)</span>
          </span>
          <span className="text-[11px] font-semibold text-outline">•</span>
          <span className="text-[11px] font-semibold uppercase leading-[14px] tracking-[0.275px] text-secondary">{p.tagline}</span>
        </div>
        <h1 className="font-serif text-3xl font-semibold leading-tight tracking-[-1px] text-primary sm:text-4xl lg:text-[40px] lg:leading-[48px]">{p.name}</h1>
        <div className="flex flex-col gap-x-4 gap-y-1 text-sm leading-5 sm:flex-row sm:flex-wrap sm:items-center">
          <span className="flex items-center gap-1 font-medium"><MapPin size={13} className="shrink-0 text-primary" />{p.location}</span>
          <span className="hidden text-outline sm:block">•</span>
          <span className="italic text-ink-2">"{p.quote}"</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 lg:items-end">
        <span className="eyebrow tracking-[0.55px] text-outline">Starting from</span>
        <p className="flex items-baseline gap-1">
          <span className="font-sans text-[28px] font-semibold leading-10 tracking-[-0.32px] text-primary sm:text-[32px]">{formatPrice(p.price, p.currency)}</span>
          <span className="text-sm text-ink-2">/ night</span>
        </p>
      </div>
    </div>
  );
}

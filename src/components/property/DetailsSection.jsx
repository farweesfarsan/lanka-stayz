import { Bath, BedDouble, House, MapPin, Trees, Users } from "lucide-react";
import SectionCard from "./SectionCard";

const Detail = ({ icon: I, label, value }) => (
  <div className="flex flex-col gap-3 rounded-xl bg-surface-low p-4">
    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary"><I size={17} /></span>
    <div>
      <p className="text-[11px] font-semibold uppercase leading-[14px] tracking-[0.275px] text-ink-2">{label}</p>
      <p className="font-sans text-xl font-medium leading-7">{value}</p>
    </div>
  </div>
);

export default function DetailsSection({ p }) {
  const items = [
    { icon: House, label: "Property Type", value: p.type },
    { icon: MapPin, label: "Location", value: p.city },
    { icon: Users, label: "Capacity", value: `${p.maxGuests} Guests` },
    { icon: BedDouble, label: "Bedrooms", value: `${p.bedrooms} Bedrooms` },
    { icon: Bath, label: "Bathrooms", value: `${p.bathrooms} Bathrooms` },
    { icon: Trees, label: "Atmosphere", value: p.atmosphere },
  ];
  return (
    <SectionCard title="Property Details" aside="Specifications">
      <div className="grid gap-4 min-[480px]:grid-cols-2 md:grid-cols-3">{items.map((d) => <Detail key={d.label} {...d} />)}</div>
    </SectionCard>
  );
}

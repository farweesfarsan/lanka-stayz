import { LogIn, LogOut } from "lucide-react";
import SectionCard from "./SectionCard";

const Slot = ({ icon: I, eyebrow, title, time, note }) => (
  <div className="flex flex-1 gap-4 rounded-xl bg-surface-low p-5">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint-light text-primary"><I size={16} /></span>
    <div>
      <p className="text-[11px] font-semibold uppercase leading-[14px] tracking-[0.275px] text-ink-2">{eyebrow}</p>
      <h3 className="font-serif text-xl font-medium leading-7 text-primary">{title}</h3>
      <p className="pt-1 text-sm font-medium leading-5">{time}</p>
      <p className="pt-0.5 text-xs leading-4 tracking-[0.12px] text-outline">{note}</p>
    </div>
  </div>
);

export default function CheckInOutSection({ checkIn, checkOut }) {
  return (
    <SectionCard title="Check-in & Check-out">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Slot icon={LogIn} eyebrow="Arrival" title="Check-in" {...checkIn} />
        <Slot icon={LogOut} eyebrow="Departure" title="Check-out" {...checkOut} />
      </div>
    </SectionCard>
  );
}

import { ShieldCheck } from "lucide-react";

export default function HostCard({ host }) {
  return (
    <aside className="flex gap-5 rounded-2xl bg-[#e1ebe1]/60 p-5 sm:p-6">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-2 text-white"><ShieldCheck size={26} /></span>
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-serif text-xl font-medium leading-7 text-primary">Hosted by {host.name}</h3>
          <span className="rounded bg-[#b7eed5] px-2 py-0.5 text-[11px] font-semibold leading-[14px] tracking-[0.44px] text-[#002116]">{host.badge}</span>
        </div>
        <p className="text-sm leading-5 text-ink-2">{host.text}</p>
      </div>
    </aside>
  );
}

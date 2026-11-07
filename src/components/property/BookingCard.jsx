import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowRight, BadgeCheck, ChevronDown, MessageCircle, ShieldCheck, Users } from "lucide-react";
import { formatPrice, plural } from "../../data/stays";
import BookingRequestModal from "./BookingRequestModal";

const trust = [
  { icon: ShieldCheck, text: "Best Rate Direct Guarantee" },
  { icon: BadgeCheck, text: "Verified Ceylon Boutique Property" },
  { icon: MessageCircle, text: "Host Contact confirmed within 24 hours" },
];

const todayIso = () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
};
const addDays = (dateValue, days) => {
  const date = new Date(`${dateValue}T00:00:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
};
const Label = ({ children }) => <span className="eyebrow block tracking-[0.55px] text-outline">{children}</span>;

const DateBox = ({ label, value, onChange, min }) => (
  <label className="flex min-w-0 flex-1 flex-col gap-1 rounded-lg bg-white p-2">
    <Label>{label}</Label>
    <input type="date" value={value} min={min} required onChange={(event) => onChange(event.target.value)} className="w-full min-w-0 bg-transparent text-sm outline-none" />
  </label>
);

export default function BookingCard({ p }) {
  const [searchParams] = useSearchParams();
  const [checkIn, setCheckIn] = useState(() => {
    const requested = searchParams.get("checkIn");
    return requested && requested >= todayIso() ? requested : addDays(todayIso(), 1);
  });
  const [checkOut, setCheckOut] = useState(() => {
    const requestedStart = searchParams.get("checkIn");
    const start = requestedStart && requestedStart >= todayIso() ? requestedStart : addDays(todayIso(), 1);
    const requestedEnd = searchParams.get("checkOut");
    return requestedEnd && requestedEnd > start ? requestedEnd : addDays(start, 3);
  });
  const [guests, setGuests] = useState(() => {
    const requested = Number(searchParams.get("guests"));
    return requested > 0 && requested <= p.maxGuests ? requested : Math.min(2, p.maxGuests);
  });
  const [showRequest, setShowRequest] = useState(false);
  const closeRequest = useCallback(() => setShowRequest(false), []);

  const nights = useMemo(() => Math.round((new Date(`${checkOut}T00:00:00`) - new Date(`${checkIn}T00:00:00`)) / 864e5), [checkIn, checkOut]);
  const valid = nights > 0;
  const total = valid ? p.price * nights : 0;

  const changeCheckIn = (value) => {
    setCheckIn(value);
    if (checkOut <= value) setCheckOut(addDays(value, 1));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl bg-white p-6 shadow-[0_12px_28px_-8px_rgba(23,77,59,0.12)] sm:p-7">
        <div className="flex items-start justify-between pb-5">
          <div className="flex flex-col gap-1">
            <p className="flex items-baseline gap-1.5">
              <span className="font-sans text-[28px] font-semibold leading-10 tracking-[-0.32px] text-primary sm:text-[32px]">{formatPrice(p.price, p.currency)}</span>
              <span className="text-sm text-ink-2">/ night</span>
            </p>
            <p className="flex items-center gap-1 text-[11px] font-medium tracking-[0.44px] text-secondary"><Users size={13} />Maximum {p.maxGuests} guests</p>
          </div>
          <span className="rounded-full bg-mint px-2.5 py-1 text-[11px] font-semibold leading-[14px] tracking-[0.44px] text-[#254e42]">Best Rate</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-medium leading-7 text-primary">Plan Your Stay</h3>
            <span className="text-[11px] font-semibold tracking-[0.44px] text-outline">Direct Request</span>
          </div>

          <div className="flex gap-2 rounded-xl bg-surface-low p-2">
            <DateBox label="Check-in" value={checkIn} min={todayIso()} onChange={changeCheckIn} />
            <DateBox label="Check-out" value={checkOut} min={checkIn} onChange={setCheckOut} />
          </div>

          <label className="flex flex-col gap-1 rounded-xl bg-surface-low p-3">
            <Label>Number of guests</Label>
            <span className="relative block">
              <select value={guests} onChange={(event) => setGuests(Number(event.target.value))} className="w-full cursor-pointer appearance-none rounded-lg bg-white py-2.5 pl-3 pr-8 text-sm outline-none">
                {Array.from({ length: p.maxGuests }, (_, index) => index + 1).map((count) => <option key={count} value={count}>{count} {plural(count, "Guest", "Guests")}</option>)}
              </select>
              <ChevronDown size={12} className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-ink-2" />
            </span>
          </label>

          <dl className="flex flex-col gap-1.5 rounded-xl bg-surface-mid p-3 text-xs tracking-[0.12px]">
            <div className="flex justify-between text-ink-2"><dt>{formatPrice(p.price, p.currency)} × {valid ? nights : 0} {plural(nights, "night", "nights")}</dt><dd className="font-medium text-ink">{formatPrice(total, p.currency)}</dd></div>
            <div className="flex justify-between text-ink-2"><dt>Lanka Stayz Service Fee</dt><dd className="font-medium text-secondary">Included</dd></div>
            <div className="flex justify-between gap-2 pt-2 font-sans text-xl font-medium leading-7 text-primary"><dt>Estimated Total</dt><dd>{formatPrice(total, p.currency)}</dd></div>
          </dl>

          {!valid && <p role="alert" className="text-xs text-red-700">Check-out must be after check-in.</p>}
          <button type="button" disabled={!valid} onClick={() => setShowRequest(true)} className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.14px] text-white shadow-lift transition hover:bg-primary-2 disabled:cursor-not-allowed disabled:opacity-50">
            Request Booking <ArrowRight size={12} strokeWidth={2.5} />
          </button>
          <p className="pt-1 text-center text-xs leading-[15px] tracking-[0.12px] text-outline">
            Send a booking request to enquire about your stay.<br />No instant payment required.
          </p>
        </div>

        <ul className="flex flex-col gap-3 pt-10 sm:pt-12">
          {trust.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-3 text-xs leading-4 tracking-[0.12px] text-ink-2"><Icon size={14} className="shrink-0 text-secondary" />{text}</li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-xl bg-surface-low p-4">
        <span className="flex items-center gap-2 text-xs leading-4 tracking-[0.12px] text-ink-2"><MessageCircle size={15} />Questions about this stay?</span>
        <a href="#contact" className="text-[11px] font-semibold tracking-[0.44px] text-primary hover:underline">Ask Host</a>
      </div>

      {showRequest && <BookingRequestModal property={p} checkIn={checkIn} checkOut={checkOut} guests={guests} onClose={closeRequest} />}
    </div>
  );
}

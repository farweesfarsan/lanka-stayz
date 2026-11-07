
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Calendar,
  CalendarCheck,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import { regionChips } from "../../data/content";

const localDate = (date) => {
  const adjusted = new Date(date);
  adjusted.setMinutes(adjusted.getMinutes() - adjusted.getTimezoneOffset());
  return adjusted.toISOString().slice(0, 10);
};

const addDays = (date, amount) => {
  const next = new Date(`${date}T00:00:00`);
  next.setDate(next.getDate() + amount);
  return localDate(next);
};

const fmt = (date) =>
  date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Select date";

const weekday = (date) =>
  date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
        weekday: "long",
      })
    : "Choose a date";

const nights = (from, to) =>
  Math.max(
    0,
    Math.round(
      (new Date(`${to}T00:00:00`) -
        new Date(`${from}T00:00:00`)) /
        864e5
    )
  );

const Field = ({
  label,
  icon: Icon,
  sub,
  className = "",
  children,
}) => (
  <div
    className={`flex min-w-0 flex-col gap-1 rounded-2xl bg-surface-low p-3 ${className}`}
  >
    <span className="eyebrow tracking-[0.55px] text-secondary">
      {label}
    </span>

    <div className="flex min-w-0 items-center gap-2 text-sm leading-5">
      <Icon size={16} className="shrink-0 text-primary" />
      {children}
    </div>

    {sub}
  </div>
);

const Sub = ({ children }) => (
  <span className="text-xs leading-4 tracking-[0.12px] text-secondary">
    {children}
  </span>
);

const DateField = ({
  label,
  icon: Icon,
  value,
  onChange,
  min,
  sub,
}) => (
  <Field
    label={label}
    icon={Icon}
    className="lg:col-span-2"
    sub={<Sub>{sub}</Sub>}
  >
    <input
      type="date"
      value={value}
      min={min}
      required
      onChange={(event) => onChange(event.target.value)}
      aria-label={label}
      className="w-full min-w-0 cursor-pointer bg-transparent text-sm font-medium text-primary outline-none"
    />
  </Field>
);

export default function SearchWidget() {
  const navigate = useNavigate();

  const today = localDate(new Date());

  const [where, setWhere] = useState("Galle, Southern Province");

  const [checkIn, setCheckIn] = useState(() =>
    addDays(today, 30)
  );

  const [checkOut, setCheckOut] = useState(() =>
    addDays(today, 36)
  );

  const [guests, setGuests] = useState(2);
  const [dateError, setDateError] = useState("");

  // Update check-in and automatically adjust check-out
  const changeCheckIn = (value) => {
    setCheckIn(value);

    if (checkOut <= value) {
      setCheckOut(addDays(value, 1));
    }

    setDateError("");
  };

  // Update check-out
  const changeCheckOut = (value) => {
    setCheckOut(value);
    setDateError("");
  };

  // Search properties
  const submit = (event) => {
    event.preventDefault();

    if (!checkIn || !checkOut) {
      setDateError("Please select both check-in and check-out dates.");
      return;
    }

    if (checkIn < today) {
      setDateError("Check-in date cannot be in the past.");
      return;
    }

    if (checkOut <= checkIn) {
      setDateError("Choose a check-out date after your check-in date.");
      return;
    }

    if (guests < 1 || guests > 16) {
      setDateError("Please select between 1 and 16 guests.");
      return;
    }

    const params = new URLSearchParams({
      where: where.trim(),
      checkIn,
      checkOut,
      guests: String(guests),
    });

    navigate(`/stays?${params.toString()}`);
  };

  return (
    <div className="relative z-20 mx-auto -mt-14 w-full max-w-[1088px] px-4 sm:px-8">
      <form
        onSubmit={submit}
        className="grid gap-3 rounded-3xl bg-white p-4 shadow-float sm:grid-cols-2 sm:p-6 lg:grid-cols-12"
      >
        {/* Destination */}
        <Field
          label="Where"
          icon={MapPin}
          className="sm:col-span-2 lg:col-span-4"
          sub={
            <div className="flex gap-1.5 overflow-x-auto pb-1 pt-1.5">
              {regionChips.map((chip) => (
                <button
                  type="button"
                  key={chip}
                  onClick={() => setWhere(chip)}
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-[0.44px] ${
                    where === chip
                      ? "bg-primary text-white"
                      : "bg-surface-mid text-ink-2 hover:bg-mint"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>
          }
        >
          <input
            value={where}
            onChange={(event) => setWhere(event.target.value)}
            aria-label="Destination"
            placeholder="Any destination"
            className="w-full min-w-0 bg-transparent outline-none"
          />
        </Field>

        {/* Check-in */}
        <DateField
          label="Check-in"
          icon={Calendar}
          value={checkIn}
          min={today}
          onChange={changeCheckIn}
          sub={weekday(checkIn)}
        />

        {/* Check-out */}
        <DateField
          label="Check-out"
          icon={CalendarCheck}
          value={checkOut}
          min={checkIn ? addDays(checkIn, 1) : today}
          onChange={changeCheckOut}
          sub={`${nights(checkIn, checkOut)} ${
            nights(checkIn, checkOut) === 1 ? "night" : "nights"
          }`}
        />

        {/* Guests */}
        <Field
          label="Guests"
          icon={Users}
          className="lg:col-span-2"
          sub={<Sub>Up to 16 guests</Sub>}
        >
          <input
            type="number"
            min="1"
            max="16"
            required
            value={guests}
            onChange={(event) =>
              setGuests(
                event.target.value === ""
                  ? ""
                  : Math.min(16, Math.max(1, Number(event.target.value)))
              )
            }
            aria-label="Number of guests"
            className="w-full min-w-0 bg-transparent outline-none"
          />
        </Field>

        {/* Search Button */}
        <div className="flex items-stretch p-1 sm:col-span-2 lg:col-span-2">
          <button
            type="submit"
            className="flex min-h-[56px] flex-1 items-center justify-center gap-2 rounded-2xl bg-primary text-sm font-semibold tracking-[0.14px] text-white shadow-lift transition hover:bg-primary-2"
          >
            <Search size={15} />
            Search
          </button>
        </div>

        {/* Validation Message */}
        {dateError && (
          <p
            role="alert"
            className="text-sm text-red-700 sm:col-span-2 lg:col-span-12"
          >
            {dateError}
          </p>
        )}
      </form>
    </div>
  );
}


import { useEffect, useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const today = () => {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
};

const nextDate = (value) => {
  if (!value) return today();

  const [year, month, day] = value.split("-").map(Number);
  const next = new Date(year, month - 1, day + 1);

  return `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}-${String(next.getDate()).padStart(2, "0")}`;
};

const displayDate = (value) =>
  value
    ? new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "your selected dates";

export default function BookingRequestModal({
  property,
  checkIn,
  checkOut,
  guests,
  onClose,
}) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn,
    checkOut,
    guests: String(guests),
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  // Validate individual fields
  const validateField = (name, value, currentForm = form) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Please enter your full name.";
        }
        return "";

      case "email":
        if (!value.trim()) {
          return "Please enter your email address.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return "";

      case "phone": {
        if (!value.trim()) {
          return "Please enter your contact number.";
        }

        const digits = value.replace(/\D/g, "");

        if (digits.length < 10) {
          return "Contact number must contain at least 10 digits.";
        }

        if (!/^[0-9+().\s-]+$/.test(value)) {
          return "Please enter a valid contact number.";
        }

        return "";
      }

      case "checkIn":
        if (!value) {
          return "Please select a check-in date.";
        }

        if (value < today()) {
          return "Check-in date cannot be in the past.";
        }

        return "";

      case "checkOut":
        if (!value) {
          return "Please select a check-out date.";
        }

        if (
          currentForm.checkIn &&
          value <= currentForm.checkIn
        ) {
          return "Check-out must be after the check-in date.";
        }

        return "";

      case "guests":
        if (!value) {
          return "Please select the number of guests.";
        }

        if (
          Number(value) < 1 ||
          Number(value) > Number(property.maxGuests)
        ) {
          return `Please select between 1 and ${property.maxGuests} guests.`;
        }

        return "";

      default:
        return "";
    }
  };

  // Update form fields
  const update = (event) => {
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value,
    };

    setForm(updatedForm);
    setSubmitted(false);

    setErrors((current) => {
      const updatedErrors = {
        ...current,
        [name]: validateField(name, value, updatedForm),
      };

      // Revalidate checkout when check-in changes
      if (name === "checkIn") {
        updatedErrors.checkOut = validateField(
          "checkOut",
          updatedForm.checkOut,
          updatedForm
        );
      }

      return updatedErrors;
    });
  };

  // Submit form
  const submit = (event) => {
    event.preventDefault();

    const newErrors = {};

    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field], form);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setSubmitted(false);

      const firstInvalidField = Object.keys(newErrors)[0];

      document
        .querySelector(`[name="${firstInvalidField}"]`)
        ?.focus();

      return;
    }

    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-3 py-3 text-sm outline-none transition ${
      errors[field]
        ? "border-red-500 focus:border-red-600"
        : "border-outline-soft focus:border-primary"
    }`;

  const ErrorMessage = ({ field }) =>
    errors[field] ? (
      <span className="mt-1 text-xs text-red-600" role="alert">
        {errors[field]}
      </span>
    ) : null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-primary/60 px-4 pt-24 pb-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-request-title"
       className="mt-4 mb-auto max-h-[calc(100vh-8rem)] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-5 shadow-float sm:p-8"
      >
        {/* Header */}
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow tracking-[0.55px] text-secondary">
              Booking enquiry
            </p>

            <h2
              id="booking-request-title"
              className="pt-1 font-serif text-2xl font-semibold text-primary"
            >
              Request {property.name}
            </h2>

            <p className="pt-1 text-sm text-ink-2">
              Share your details and the host can follow up about your stay.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking request"
            className="rounded-full bg-surface-low p-2 text-primary hover:bg-mint"
          >
            <X size={18} />
          </button>
        </div>

        {/* Success Message */}
        {submitted ? (
          <div
            role="status"
            className="rounded-2xl bg-mint-light p-5 text-primary"
          >
            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle2 size={20} />
              Booking request received
            </div>

            <p className="mt-3 text-sm leading-6">
              Thanks, {form.name}. Your sample request for {property.name} is
              noted for {displayDate(form.checkIn)} to{" "}
              {displayDate(form.checkOut)} for {form.guests}{" "}
              {Number(form.guests) === 1 ? "guest" : "guests"}. The host will
              reply using {form.email} or {form.phone}.
            </p>

            <p className="mt-3 text-xs text-secondary">
              This demo form does not send data to a booking service.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-2"
            >
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={submit}
            noValidate
            className="grid gap-4 sm:grid-cols-2"
          >
            {/* Guest Name */}
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-sm font-semibold text-ink">
                Guest name
              </span>

              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                autoComplete="name"
                maxLength={100}
                placeholder="Your full name"
                className={inputClass("name")}
                aria-invalid={Boolean(errors.name)}
              />

              <ErrorMessage field="name" />
            </label>

            {/* Email Address */}
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-ink">
                Email address
              </span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
                autoComplete="email"
                maxLength={254}
                placeholder="you@example.com"
                className={inputClass("email")}
                aria-invalid={Boolean(errors.email)}
              />

              <ErrorMessage field="email" />
            </label>

            {/* Contact Number */}
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-ink">
                Contact number
              </span>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={update}
                required
                autoComplete="tel"
                maxLength={24}
                pattern="[0-9+().\s-]{10,24}"
                title="Contact number must contain at least 10 digits."
                placeholder="+94 77 123 4567"
                className={inputClass("phone")}
                aria-invalid={Boolean(errors.phone)}
              />

              <ErrorMessage field="phone" />
            </label>

            {/* Check-in Date */}
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-ink">
                Check-in date
              </span>

              <input
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={update}
                required
                min={today()}
                className={inputClass("checkIn")}
                aria-invalid={Boolean(errors.checkIn)}
              />

              <ErrorMessage field="checkIn" />
            </label>

            {/* Check-out Date */}
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-semibold text-ink">
                Check-out date
              </span>

              <input
                type="date"
                name="checkOut"
                value={form.checkOut}
                onChange={update}
                required
                min={form.checkIn ? nextDate(form.checkIn) : today()}
                className={inputClass("checkOut")}
                aria-invalid={Boolean(errors.checkOut)}
              />

              <ErrorMessage field="checkOut" />
            </label>

            {/* Number of Guests */}
            <label className="flex flex-col gap-1.5 sm:col-span-2">
              <span className="text-sm font-semibold text-ink">
                Number of guests
              </span>

              <select
                name="guests"
                value={form.guests}
                onChange={update}
                required
                className={inputClass("guests")}
                aria-invalid={Boolean(errors.guests)}
              >
                {Array.from(
                  { length: Number(property.maxGuests) || 1 },
                  (_, index) => index + 1
                ).map((count) => (
                  <option key={count} value={count}>
                    {count} {count === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>

              <ErrorMessage field="guests" />
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-primary-2 sm:col-span-2"
            >
              Submit Booking Request
            </button>

            <p className="text-center text-xs text-outline sm:col-span-2">
              No payment is collected. This is a front-end sample request form.
            </p>
          </form>
        )}
      </section>
    </div>
  );
}

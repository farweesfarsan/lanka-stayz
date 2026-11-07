import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, User, X } from "lucide-react";
import Container from "../ui/Container";
import { nav } from "../../data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // Active state is derived from the current route (+ hash for in-page links)
  const isActive = (to) => {
    const [p, h = ""] = to.split("#");
    if (p === "/stays") return pathname.startsWith("/stays");
    return pathname === "/" && (h ? hash === `#${h}` : !hash);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 shadow-header backdrop-blur-[24px]">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-xl font-medium leading-7 tracking-[-0.5px] text-primary">Lanka Stayz</span>
          <span className="text-[11px] font-semibold uppercase leading-[14px] tracking-[1.1px] text-secondary">Ceylon Sanctuaries</span>
        </Link>

        <nav className="hidden h-full items-center gap-8 lg:flex">
          {nav.map(({ label, to }) => (
            <Link key={label} to={to}
              className={`flex h-full items-center border-b-2 px-1 text-sm ${isActive(to)
                ? "border-primary font-bold text-primary"
                : "border-transparent font-semibold tracking-[0.14px] text-ink-2 hover:text-primary"}`}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-full p-2 text-primary lg:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-surface-mid bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map(({ label, to }) => (
              <Link key={label} to={to} onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm ${isActive(to) ? "bg-surface-low font-bold text-primary" : "font-semibold text-ink-2"}`}>{label}</Link>
            ))}
            <div className="mt-2 flex gap-2">
              <Link to="/stays" onClick={() => setOpen(false)} className="flex-1 rounded-full bg-primary-2 py-3 text-center text-sm font-semibold text-white">Explore Stays</Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

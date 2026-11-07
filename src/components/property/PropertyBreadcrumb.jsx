import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Heart, House, Share2 } from "lucide-react";

const Pill = ({ icon: I, children, ...rest }) => (
  <button type="button" {...rest} className="flex items-center gap-1.5 rounded-full bg-surface-mid px-3 py-1.5 text-xs font-semibold tracking-[0.24px] text-ink transition hover:bg-mint">
    <I size={13} className={rest["aria-pressed"] ? "fill-primary text-primary" : ""} />{children}
  </button>
);

export default function PropertyBreadcrumb({ name }) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const share = async () => {
    try {
      if (navigator.share) await navigator.share({ title: name, url: window.location.href });
      else { await navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    } catch { /* user cancelled */ }
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold leading-4 tracking-[0.24px] text-ink-2">
          <li><Link to="/" className="flex items-center gap-1 hover:text-primary"><House size={12} />Home</Link></li>
          <ChevronRight size={12} aria-hidden />
          <li><Link to="/stays" className="hover:text-primary">Explore Stays</Link></li>
          <ChevronRight size={12} aria-hidden className="hidden sm:block" />
          <li className="hidden text-primary sm:block" aria-current="page">{name}</li>
        </ol>
      </nav>
    </div>
  );
}

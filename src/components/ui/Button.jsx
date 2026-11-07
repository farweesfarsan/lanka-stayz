import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const variants = {
  mint: "bg-mint text-mint-ink shadow-lift hover:brightness-95",
  glass: "bg-white/10 text-white backdrop-blur-md shadow-card hover:bg-white/20",
  white: "bg-white text-primary shadow-lift hover:bg-surface-low",
  dark: "bg-primary text-white shadow-lift hover:bg-primary-2",
  peach: "bg-peach text-peach-ink font-bold shadow-float hover:brightness-95 !py-5",
};

/** Pill button / link. Pass `arrow` to append the arrow icon. */
export default function Button({ variant = "dark", arrow, href = "#", to, className = "", children, ...rest }) {
  const Tag = to ? Link : "a";
  const target = to ? { to } : { href };
  return (
    <Tag {...target} {...rest}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-[0.14px] transition ${variants[variant]} ${className}`}>
      {children}
      {arrow && <ArrowRight size={variant === "peach" ? 14 : 12} strokeWidth={2.5} />}
    </Tag>
  );
}

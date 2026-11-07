import { Heart } from "lucide-react";
export default function WishlistButton({ active, onToggle, className = "" }) {
  return (
    <button type="button" onClick={onToggle} aria-pressed={active} aria-label="Add to wishlist"
      className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary shadow-card backdrop-blur-xl transition hover:scale-105 ${className}`}>
      <Heart size={16} className={active ? "fill-primary" : ""} />
    </button>
  );
}

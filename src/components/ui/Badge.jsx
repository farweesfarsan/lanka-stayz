const tones = {
  peach: "bg-peach text-peach-ink",
  mint: "bg-mint-light text-mint-dark",
  grey: "bg-surface-high text-ink",
  soft: "bg-surface-mid text-secondary",
  brown: "bg-peach text-brown",
  glass: "bg-white/15 text-mint-light backdrop-blur-md",
};
export default function Badge({ tone = "soft", className = "", children }) {
  return (
    <span className={`eyebrow inline-flex w-fit items-center rounded-full px-3 py-1 tracking-[0.55px] ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}

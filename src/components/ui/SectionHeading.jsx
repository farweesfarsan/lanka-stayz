import Badge from "./Badge";
/** Eyebrow pill + H2 + optional paragraph */
export default function SectionHeading({ badge, title, text, className = "" }) {
  return (
    <div className={`flex max-w-[672px] flex-col items-start gap-2 ${className}`}>
      <Badge>{badge}</Badge>
      <h2 className="h2 pt-1">{title}</h2>
      {text && <p className="text-base leading-6 text-ink-2">{text}</p>}
    </div>
  );
}

/** White rounded card with the green-bar heading used by every content section */
export default function SectionCard({ title, subtitle, aside, className = "", children }) {
  return (
    <section className={`flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-[0_2px_12px_-4px_rgba(23,77,59,0.06)] sm:p-8 ${className}`}>
      <header className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="h-6 w-2.5 rounded-full bg-primary" />
            <h2 className="font-serif text-2xl font-medium leading-8 text-primary">{title}</h2>
          </div>
          {aside && <span className="eyebrow hidden tracking-[0.55px] text-secondary sm:block">{aside}</span>}
        </div>
        {subtitle && <p className="text-sm leading-5 text-ink-2">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}

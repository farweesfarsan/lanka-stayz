import { useEffect, useState } from "react";
import { Images, X } from "lucide-react";

const Photo = ({ src, label, className = "" }) => (
  <figure
    className={`relative overflow-hidden rounded-2xl bg-surface-mid shadow-card ${className}`}
  >
    <img
      src={src}
      alt={label || "Property photograph"}
      className="absolute inset-0 h-full w-full object-cover"
    />

    <span className="absolute inset-0 bg-primary/10" />

    {label && (
      <figcaption className="absolute bottom-3.5 left-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold leading-[14px] tracking-[0.44px] text-primary shadow-card backdrop-blur-xl">
        {label}
      </figcaption>
    )}
  </figure>
);

export default function PhotoGallery({ photos = [], total }) {
  const [open, setOpen] = useState(false);

  const validPhotos = photos.filter((photo) => photo?.src);

  const [hero, bed, pool] = validPhotos;

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!validPhotos.length) {
    return (
      <div className="flex h-[280px] items-center justify-center rounded-2xl bg-surface-mid">
        No property photographs available.
      </div>
    );
  }

  return (
    <section aria-label="Photo gallery" className="relative">

      <div className="grid gap-4 md:h-[540px] md:grid-cols-12">

        <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-card sm:h-[400px] md:col-span-7 md:h-full">
          <Photo {...hero} className="h-full w-full" />

          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
        </div>

        <div className="grid h-[160px] grid-cols-2 gap-4 sm:h-[220px] md:col-span-5 md:h-full md:grid-cols-1 md:grid-rows-2">

          {bed && (
            <Photo {...bed} className="h-full w-full" />
          )}

          {pool && (
            <Photo {...pool} className="h-full w-full" />
          )}

        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] overflow-y-auto bg-primary/90 p-4 backdrop-blur-sm sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            aria-label="Close gallery"
            onClick={() => setOpen(false)}
            className="fixed right-4 top-4 rounded-full bg-white p-2 text-primary shadow-lift"
          >
            <X size={20} />
          </button>

          <div
            className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            {validPhotos.map((photo, index) => (
              <Photo
                key={`${photo.src}-${index}`}
                {...photo}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      )}

    </section>
  );
}

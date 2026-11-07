import { Check } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { aboutPoints, aboutText } from "../../data/content";

const FloatingCard = () => (
  <div className="absolute -bottom-6 right-4 flex max-w-[320px] flex-col gap-2 rounded-2xl bg-white p-6 shadow-float sm:-bottom-8 sm:-right-8">
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-mint text-xs font-bold tracking-[0.24px] text-mint-ink">100%</span>
      <span className="font-serif text-xl font-medium leading-7 text-primary">Ceylon Owned</span>
    </div>
    <p className="text-xs leading-4 tracking-[0.12px] text-ink-2">Connecting travelers with genuine Sri Lankan hospitality and private sanctuaries.</p>
  </div>
);

export default function About() {
  return (
    <section id="about" className="bg-surface py-16 md:py-24">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative mb-8 lg:mb-0">
          <div className="h-[420px] overflow-hidden rounded-3xl bg-surface-mid shadow-float sm:h-[560px] lg:h-[700px]">
            <img src="/images/about.png" alt="Rattan chair on a Sri Lankan veranda" className="h-full w-full object-cover" />
          </div>
          <FloatingCard />
        </div>
        <div className="flex flex-col items-start gap-6">
          <Badge tone="brown">About Lanka Stayz</Badge>
          <h2 className="h2">Your Stay, Your Way</h2>
          <div className="flex flex-col gap-4 text-base leading-6 text-ink-2">
            {aboutText.map((t) => <p key={t}>{t}</p>)}
          </div>
          <ul className="flex flex-col gap-3.5 pt-4">
            {aboutPoints.map((t) => (
              <li key={t} className="flex items-center gap-3 text-sm font-semibold leading-5 tracking-[0.14px]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-2 text-white"><Check size={11} strokeWidth={3} /></span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

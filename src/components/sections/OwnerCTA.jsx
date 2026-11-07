import Container from "../ui/Container";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import Icon from "../ui/Icon";
import { ownerPerks } from "../../data/content";

export default function OwnerCTA() {
  return (
    <section id="owners" className="bg-surface py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,.25)] md:p-16">
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-primary-2/40 blur-[64px]" />
          <div className="pointer-events-none absolute -top-24 left-[48%] hidden h-80 w-1/4 rounded-full bg-secondary/30 blur-[64px] md:block" />
          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="flex flex-col items-start gap-6 lg:col-span-8">
              <Badge tone="glass" className="px-3.5">Host Community</Badge>
              <h2 className="font-serif text-3xl font-semibold tracking-[-0.38px] text-white md:text-[38px] md:leading-[46px]">Have a Place to Share?</h2>
              <p className="max-w-2xl text-base leading-[26px] text-sage">
                Own a villa, holiday home, apartment or guesthouse in Sri Lanka? Join Lanka Stayz and connect your property with travellers looking for their next place to stay.
              </p>
              <ul className="grid gap-4 pt-2 sm:grid-cols-3 sm:gap-6">
                {ownerPerks.map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-3 text-xs font-semibold tracking-[0.24px] text-white">
                    <Icon name={icon} size={18} className="shrink-0 text-mint-light" />{label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3 lg:col-span-4 lg:items-end">
              <Button variant="peach" arrow>List Your Property</Button>
              <p className="text-xs leading-4 tracking-[0.12px] text-sage lg:text-right">Free listing • No upfront onboarding fees</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

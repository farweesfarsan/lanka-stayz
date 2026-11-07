import Container from "../ui/Container";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { trust,heroImage } from "../../data/content";

export default function Hero() {
  return (
    <section id="home" className="relative -mt-20 overflow-hidden bg-primary pt-20">
      <div className="absolute inset-0 bg-cover bg-center">
        <img
          src={heroImage}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/30" />
      <Container className="relative flex flex-col items-center pb-36 pt-20 text-center md:pb-40 md:pt-36">
        <span className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-white/15 px-4 py-1.5 shadow-card backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-mint-light" />
          <span className="eyebrow tracking-[1.1px] text-[#f2fcf2]">The Premier Ceylon Collection</span>
        </span>
        <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.15] tracking-[-1.12px] text-white sm:text-5xl lg:text-[56px] lg:leading-[64px]">
          Discover Your Perfect Stay in Sri Lanka
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-[1.6] tracking-[-0.09px] text-[#e1ebe1]/90 md:text-lg md:leading-[29.25px]">
          From beautiful beachside villas to peaceful hill country retreats, find the perfect place to relax, explore, and make yourself at home.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="mint" to="/stays" arrow>Explore Stays</Button>
        </div>
        <ul className="mt-16 grid w-full max-w-3xl gap-6 pt-8 sm:grid-cols-3 sm:gap-12">
          {trust.map(({ icon, title, sub }) => (
            <li key={title} className="flex items-center justify-center gap-3 text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-mint-light"><Icon name={icon} size={16} /></span>
              <span>
                <span className="block text-sm font-semibold leading-5 tracking-[0.14px] text-white">{title}</span>
                <span className="block text-xs leading-4 tracking-[0.12px] text-[#dbe5dc]/80">{sub}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

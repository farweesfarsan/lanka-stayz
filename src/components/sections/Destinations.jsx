import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { destinations } from "../../data/content";

const DestinationCard = ({ name, count, desc, img }) => (
  <a href="#stays" className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-lift">
    <img src={img} alt={name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 p-6">
      <p className="eyebrow pb-1 tracking-[1.1px] text-mint-light">{count} stays available</p>
      <h3 className="pb-1 font-serif text-2xl font-medium leading-8 text-white">{name}</h3>
      <p className="text-xs leading-4 tracking-[0.12px] text-[#e1ebe1]/90">{desc}</p>
    </div>
  </a>
);

export default function Destinations() {
  return (
    <section id="destinations" className="bg-surface-low py-16 md:py-20">
      <Container className="flex flex-col gap-12">
        <SectionHeading badge="Explore regions" title="Explore the Beauty of Sri Lanka"
          text="From golden beaches to misty mountains, discover the places that make Sri Lanka special." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => <DestinationCard key={d.name} {...d} />)}
        </div>
      </Container>
    </section>
  );
}

import Hero from "../components/sections/Hero";
import SearchWidget from "../components/sections/SearchWidget";
import FeaturedStays from "../components/sections/FeaturedStays";
import Destinations from "../components/sections/Destinations";
import About from "../components/sections/About";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SearchWidget />
      <FeaturedStays />
      <Destinations />
      <About />
    </>
  );
}

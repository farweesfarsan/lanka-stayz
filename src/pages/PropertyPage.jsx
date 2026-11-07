import { Link, useParams } from "react-router-dom";
import Container from "../components/ui/Container";
import PropertyBreadcrumb from "../components/property/PropertyBreadcrumb";
import PropertyIntro from "../components/property/PropertyIntro";
import PhotoGallery from "../components/property/PhotoGallery";
import AboutSection from "../components/property/AboutSection";
import DetailsSection from "../components/property/DetailsSection";
import FacilitiesSection from "../components/property/FacilitiesSection";
import CheckInOutSection from "../components/property/CheckInOutSection";
import HostCard from "../components/property/HostCard";
import BookingCard from "../components/property/BookingCard";
import { getProperty } from "../data/properties";

export default function PropertyPage() {
  const { id, slug } = useParams();
  const p = getProperty(slug ? `featured:${slug}` : id);

  if (!p) {
    return (
      <Container className="flex flex-col items-center gap-4 py-32 text-center">
        <h1 className="font-serif text-3xl font-semibold text-primary">Property not found</h1>
        <Link to="/stays" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white">Back to Explore Stays</Link>
      </Container>
    );
  }

  return (
    <div className="relative overflow-hidden bg-surface">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-40 right-10 hidden h-96 w-96 rounded-full bg-primary/5 blur-[64px] md:block" />
      <div className="pointer-events-none absolute -left-32 top-96 hidden h-80 w-80 rounded-full bg-mint-light/30 blur-[40px] md:block" />

      <Container className="relative py-8 md:py-10">
        <PropertyBreadcrumb name={p.name} />
        <PropertyIntro p={p} />
        <PhotoGallery photos={p.photos} total={p.photoCount} />

        <div className="grid gap-8 pb-20 pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-12">
          <div className="flex flex-col gap-8 lg:col-span-8 lg:gap-12">
            <AboutSection about={p.about} highlights={p.highlights} />
            <DetailsSection p={p} />
            <FacilitiesSection amenities={p.amenities} />
            <CheckInOutSection checkIn={p.checkIn} checkOut={p.checkOut} />
            <HostCard host={p.host} />
          </div>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28"><BookingCard key={p.id} p={p} /></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

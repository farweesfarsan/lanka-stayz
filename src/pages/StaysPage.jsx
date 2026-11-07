import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeader from "../components/stays/PageHeader";
import DestinationFilter from "../components/stays/DestinationFilter";
import ListingsGrid from "../components/stays/ListingsGrid";
import ConciergeBanner from "../components/stays/ConciergeBanner";
import { ALL, listings, regions } from "../data/stays";

const prettyDate = (value) => value
  ? new Date(`${value}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  : "";

export default function StaysPage() {
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("where")?.trim() || "";
  const requestedGuests = Math.max(1, Number(searchParams.get("guests")) || 1);
  const checkIn = searchParams.get("checkIn") || "";
  const checkOut = searchParams.get("checkOut") || "";
  const validDates = checkIn && checkOut && checkOut > checkIn;
  const matchingRegion = destination && regions.find((candidate) => destination.toLowerCase().includes(candidate.toLowerCase()) || candidate.toLowerCase().includes(destination.toLowerCase()));
  const [region, setRegion] = useState(matchingRegion || ALL);
  const [locationFilter, setLocationFilter] = useState(matchingRegion ? "" : destination);

  const items = useMemo(() => listings.filter((listing) => {
    const regionMatches = region === ALL || listing.region === region;
    const locationMatches = !locationFilter || `${listing.region} ${listing.name}`.toLowerCase().includes(locationFilter.toLowerCase());
    return regionMatches && locationMatches && listing.guests >= requestedGuests;
  }), [region, locationFilter, requestedGuests]);

  const searchSummary = [
    destination && `Destination: ${destination}`,
    validDates && `${prettyDate(checkIn)} – ${prettyDate(checkOut)}`,
    searchParams.has("guests") && `${requestedGuests} ${requestedGuests === 1 ? "guest" : "guests"}`,
  ].filter(Boolean).join(" · ");

  const changeRegion = (nextRegion) => {
    setRegion(nextRegion);
    setLocationFilter("");
  };

  return (
    <>
      <PageHeader total={items.length} searchSummary={searchSummary} />
      <DestinationFilter regions={regions} value={region} onChange={changeRegion} count={items.length} />
      <ListingsGrid items={items} searchSummary={searchSummary} />
      <ConciergeBanner />
    </>
  );
}

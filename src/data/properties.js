import { listings } from "./stays";
import { properties as featuredProperties } from "./content";

const listingDetails = {
  1: {
    tagline: "A bright city base above Colombo",
    location: "Colombo, Western Province, Sri Lanka",
    city: "Colombo, Sri Lanka",
    quote: "A calm, light-filled apartment with the city within easy reach.",
    bedrooms: 2, bathrooms: 1, atmosphere: "Contemporary city living",
    about: [
      "Wake up above the bustle in a modern apartment designed for easy city stays. The living area opens to a wide skyline outlook, with a practical kitchen and room to unwind after a day exploring Colombo.",
      "Settle in for a weekend or a longer visit: cafés, shops and central transport links are close by, while the apartment gives you a comfortable place to recharge.",
    ],
    highlights: [{ icon: "walk", label: "Close to city dining" }, { icon: "lock", label: "Secure building access" }, { icon: "wifi", label: "Work-ready Wi-Fi" }],
    amenities: [
      { icon: "wifi", title: "Wi-Fi", desc: "Reliable connection for work and streaming" },
      { icon: "ac", title: "Air Conditioning", desc: "Comfortable cooling in the sleeping areas" },
      { icon: "parking", title: "Parking", desc: "On-site parking for one vehicle" },
    ],
    checkIn: { time: "From 3:00 PM", note: "Self check-in details shared before arrival" },
    checkOut: { time: "Before 11:00 AM", note: "Please leave the key in the lockbox" },
    host: { name: "Nadeesha", badge: "City Host", text: "A Colombo local who loves sharing favorite cafés, markets and easy ways to get around the city." },
  },
  2: {
    tagline: "A leafy Kandy villa with a private pool",
    location: "Kandy, Central Province, Sri Lanka",
    city: "Kandy, Sri Lanka",
    quote: "A garden hideaway for slow mornings and refreshing swims.",
    bedrooms: 3, bathrooms: 2, atmosphere: "Tropical garden retreat",
    about: [
      "Green Valley Villa is a spacious home framed by tropical plants and a private pool. Gather in the open living space, then step outside for a quiet afternoon under the trees.",
      "The villa is a relaxing base for discovering Kandy's lake, temples and hillside viewpoints. There is room for families or friends to spend time together without giving up a little privacy.",
    ],
    highlights: [{ icon: "pool", label: "Private swimming pool" }, { icon: "flora", label: "Leafy garden setting" }, { icon: "lock", label: "Gated property" }],
    amenities: [
      { icon: "pool", title: "Swimming Pool", desc: "Private outdoor pool surrounded by greenery" },
      { icon: "wifi", title: "Wi-Fi", desc: "Available throughout the villa" },
      { icon: "ac", title: "Air Conditioning", desc: "Cool bedrooms for a comfortable night's rest" },
      { icon: "parking", title: "Free Parking", desc: "Secure parking inside the gate" },
    ],
    checkIn: { time: "From 2:00 PM", note: "Please share your arrival time with the host" },
    checkOut: { time: "Before 10:30 AM", note: "A little extra time may be arranged in advance" },
    host: { name: "Dilan & Amaya", badge: "Local Hosts", text: "Kandy residents who can help plan a relaxed visit to the lake, local gardens and nearby cultural sites." },
  },
  3: {
    tagline: "A quiet cottage looking over Ella's hills",
    location: "Ella, Uva Province, Sri Lanka",
    city: "Ella, Sri Lanka",
    quote: "Find a slower pace among the tea country hills.",
    bedrooms: 2, bathrooms: 1, atmosphere: "Cool-climate hill country",
    about: [
      "Mountain View Cottage pairs a cozy interior with wide views across the Ella valley. Enjoy a slow breakfast on the veranda, watch clouds move across the hills and return to a welcoming retreat after a day outdoors.",
      "The cottage is well placed for scenic walks, tea experiences and Ella's well-known viewpoints. Its compact, homely layout makes it a comfortable choice for a small group or family.",
    ],
    highlights: [{ icon: "walk", label: "Near hill-country trails" }, { icon: "flora", label: "Valley-facing veranda" }, { icon: "lock", label: "Quiet cottage setting" }],
    amenities: [
      { icon: "wifi", title: "Wi-Fi", desc: "Stay connected while you plan the next walk" },
      { icon: "parking", title: "Parking", desc: "Convenient parking at the cottage" },
      { icon: "ac", title: "Cooling Fans", desc: "Fresh hill-country air and ceiling fans" },
    ],
    checkIn: { time: "From 2:00 PM", note: "The host can coordinate arrival from Ella station" },
    checkOut: { time: "Before 11:00 AM", note: "Morning departures are easy to arrange" },
    host: { name: "Kasun", badge: "Hill Country Host", text: "A friendly Ella host happy to suggest walks, tea stops and local transport options." },
  },
  4: {
    tagline: "Colonial character beside Galle's old town",
    location: "Galle, Southern Province, Sri Lanka",
    city: "Galle, Sri Lanka",
    quote: "A peaceful villa with a beautiful setting, perfect for a relaxing stay in Galle.",
    bedrooms: 3, bathrooms: 2, atmosphere: "Tropical Garden",
    about: [
      "Enjoy a relaxing getaway at The Heritage Villa, a beautiful property surrounded by tropical greenery. With comfortable living spaces and a peaceful atmosphere, it's a lovely place to spend time with family and friends.",
      "The villa offers spacious bedrooms, a welcoming living area and an outdoor swimming pool. Whether you're planning a short holiday or a longer stay, you'll have everything you need to feel comfortable.",
    ],
    highlights: [{ icon: "flora", label: "Surrounded by Lush Flora" }, { icon: "lock", label: "Private Gated Compound" }, { icon: "walk", label: "12 Mins to Galle Fort" }],
    amenities: [
      { icon: "wifi", title: "Wi-Fi", desc: "High-speed fiber internet throughout" },
      { icon: "pool", title: "Swimming Pool", desc: "Private sun-deck courtyard pool" },
      { icon: "ac", title: "Air Conditioning", desc: "Climate controlled in all 3 bedrooms" },
      { icon: "parking", title: "Free Parking", desc: "Secure on-site gated parking space" },
    ],
    checkIn: { time: "From 2:00 PM", note: "Early check-in upon request" },
    checkOut: { time: "Before 11:00 AM", note: "Luggage holding available" },
    host: { name: "Sanath & Kumari", badge: "Superhost", text: "Local hosts with 8 years of hospitality in Galle. They will personally welcome you upon arrival with fresh king coconut water and assist with dining suggestions." },
  },
  5: {
    tagline: "A palm-shaded beachfront escape in Mirissa",
    location: "Mirissa, Southern Province, Sri Lanka",
    city: "Mirissa, Sri Lanka",
    quote: "Step from a breezy villa into a day by the Indian Ocean.",
    bedrooms: 4, bathrooms: 3, atmosphere: "Coastal and open-air",
    about: [
      "Palm Breeze Villa is made for time together by the coast. Bright shared spaces open toward the garden, and the shoreline is just moments away for an early swim or a sunset stroll.",
      "With four bedrooms and room for a larger group, the villa suits family holidays and getaways with friends. Mirissa's cafés, surf spots and boat trips are close enough to make planning simple.",
    ],
    highlights: [{ icon: "walk", label: "Steps from the beach" }, { icon: "flora", label: "Shaded palm garden" }, { icon: "lock", label: "Room for larger groups" }],
    amenities: [
      { icon: "wifi", title: "Wi-Fi", desc: "Connection available in shared spaces" },
      { icon: "ac", title: "Air Conditioning", desc: "Cooling in the bedrooms" },
      { icon: "parking", title: "Parking", desc: "Private parking for arriving guests" },
    ],
    checkIn: { time: "From 2:00 PM", note: "Let the host know if you are arriving after dark" },
    checkOut: { time: "Before 11:00 AM", note: "Beach towels can be left in the laundry basket" },
    host: { name: "Ruwan & Minali", badge: "Coastal Hosts", text: "Mirissa locals who can point you toward quieter beach spots, surf lessons and seafood favorites." },
  },
  6: {
    tagline: "A fireside bungalow in the highlands",
    location: "Nuwara Eliya, Central Province, Sri Lanka",
    city: "Nuwara Eliya, Sri Lanka",
    quote: "Come back from the tea trails to a warm and restful home.",
    bedrooms: 3, bathrooms: 2, atmosphere: "Heritage hill-country comfort",
    about: [
      "Hill Country Retreat is a welcoming bungalow with a slower, cooler-weather feel. Spend the day among tea estates and lakeside paths, then return to a comfortable lounge and a cozy fireplace for the evening.",
      "The home has space for families and small groups, with a practical dining area and peaceful surroundings away from the busiest streets of town.",
    ],
    highlights: [{ icon: "flora", label: "Tea-country surroundings" }, { icon: "lock", label: "Peaceful bungalow" }, { icon: "walk", label: "Easy access to town" }],
    amenities: [
      { icon: "wifi", title: "Wi-Fi", desc: "Available for planning day trips" },
      { icon: "parking", title: "Free Parking", desc: "Private space on the property" },
      { icon: "ac", title: "Warm Blankets", desc: "Extra layers for cool highland nights" },
    ],
    checkIn: { time: "From 3:00 PM", note: "Please confirm your estimated arrival time" },
    checkOut: { time: "Before 10:00 AM", note: "The host can help arrange local transport" },
    host: { name: "Shalini", badge: "Highland Host", text: "A Nuwara Eliya resident who can recommend tea visits, garden walks and warm local meals." },
  },
};

const featuredDetails = {
  "ocean-view-villa": {
    tagline: "A private-pool hideaway on the south coast", city: "Unawatuna, Galle, Sri Lanka", bedrooms: 2, bathrooms: 2, atmosphere: "Salt air and tropical greenery",
    quote: "Open the doors to ocean light, garden shade and an easy beach day.",
    about: ["Ocean View Villa is a relaxed coastal home with a private pool and a bright, open feel. Spend the warmest hours between the shaded terrace and the water, then head out to explore Unawatuna's nearby coves.", "The villa is set up for an easygoing couple or small-family holiday, with room to gather and a quiet bedroom retreat at the end of the day."],
    highlights: [{ icon: "pool", label: "Private pool" }, { icon: "walk", label: "Near Unawatuna Beach" }, { icon: "flora", label: "Garden terrace" }],
    amenities: [{ icon: "pool", title: "Private Pool", desc: "A refreshing pool for an unhurried day at home" }, { icon: "wifi", title: "Wi-Fi", desc: "Stay connected throughout your visit" }, { icon: "ac", title: "Air Conditioning", desc: "Cool sleeping spaces" }],
    host: { name: "Madhavi", badge: "Coastal Host", text: "A local host who can help arrange beach transfers and share favorite places to eat around Unawatuna." },
  },
  "hilltop-escape": {
    tagline: "A restorative hill-country home in Ella", city: "Ella, Badulla, Sri Lanka", bedrooms: 3, bathrooms: 2, atmosphere: "Misty mountain mornings",
    quote: "Let the hills set the pace for a restful stay above Ella.",
    about: ["Hilltop Escape is a peaceful holiday home with room to spread out and take in the mountain air. The elevated setting makes mornings feel special, while the comfortable living area is a welcoming place to return to after a day of exploring.", "The home works well for families and friends looking for a scenic base near Ella's walking routes, viewpoints and cafés."],
    highlights: [{ icon: "flora", label: "Mountain outlook" }, { icon: "walk", label: "Near scenic trails" }, { icon: "lock", label: "Quiet hillside setting" }],
    amenities: [{ icon: "wifi", title: "Wi-Fi", desc: "Useful for arranging local trips" }, { icon: "parking", title: "Parking", desc: "On-site parking for guests" }, { icon: "ac", title: "Cooling Fans", desc: "Fresh air and fans for warm afternoons" }],
    host: { name: "Chaminda", badge: "Hill Country Host", text: "An Ella local with tips for quieter trails, sunrise viewpoints and tuk-tuk rides." },
  },
  "seaside-apartment": {
    tagline: "A simple, sunlit base near Weligama shore", city: "Weligama, Matara, Sri Lanka", bedrooms: 1, bathrooms: 1, atmosphere: "Easy coastal living",
    quote: "A comfortable place to drop your bags and follow the shoreline.",
    about: ["Seaside Apartment keeps a beach escape uncomplicated. The modern one-bedroom space is easy to settle into, with a practical living area for a quiet break between beach visits.", "Weligama's shoreline, surf schools and casual cafés are a short trip away, making this apartment a handy base for a couple or solo traveler."],
    highlights: [{ icon: "walk", label: "Beach close by" }, { icon: "wifi", label: "Good for longer stays" }, { icon: "lock", label: "Private apartment" }],
    amenities: [{ icon: "wifi", title: "Wi-Fi", desc: "Reliable connection for planning your stay" }, { icon: "ac", title: "Air Conditioning", desc: "Comfortable cooling in the bedroom" }, { icon: "parking", title: "Parking", desc: "Guest parking available" }],
    host: { name: "Nuwan", badge: "Surf-side Host", text: "A Weligama host who can point you to beginner surf lessons and nearby cafés." },
  },
  "garden-boutique-hotel": {
    tagline: "A garden-wrapped boutique stay in Kandy", city: "Kandy, Sri Lanka", bedrooms: 1, bathrooms: 1, atmosphere: "Quiet garden and heritage charm",
    quote: "A calm suite to return to after exploring the cultural capital.",
    about: ["Garden Boutique Hotel offers an intimate suite experience in a leafy setting. Thoughtful details and a peaceful garden atmosphere make it a restful alternative to a busier city stay.", "From here, guests can plan visits to Kandy's lake, cultural landmarks and local markets, then come back to a quiet place to unwind."],
    highlights: [{ icon: "flora", label: "Tropical garden" }, { icon: "walk", label: "Kandy sights nearby" }, { icon: "lock", label: "Boutique atmosphere" }],
    amenities: [{ icon: "wifi", title: "Wi-Fi", desc: "Available in the suite and common areas" }, { icon: "ac", title: "Air Conditioning", desc: "Climate-controlled guest suite" }, { icon: "parking", title: "Parking", desc: "Limited on-site guest parking" }],
    host: { name: "Anoma", badge: "Guesthouse Host", text: "A gracious Kandy host who can help coordinate local sightseeing and dining." },
  },
  "family-retreat": {
    tagline: "Room for the whole family near Negombo", city: "Negombo, Western Province, Sri Lanka", bedrooms: 4, bathrooms: 3, atmosphere: "Relaxed family holiday home",
    quote: "Space to gather, recharge and make the coast your own.",
    about: ["The Family Retreat is a roomy holiday home for shared trips and family get-togethers. Multiple bedrooms make it easy for a larger group to settle in, with shared living spaces for meals and downtime.", "Negombo's beach, lagoon and seafood restaurants are all within easy reach, so you can balance relaxed time at home with simple day plans."],
    highlights: [{ icon: "lock", label: "Sleeps a larger group" }, { icon: "walk", label: "Near Negombo coast" }, { icon: "flora", label: "Outdoor space" }],
    amenities: [{ icon: "wifi", title: "Wi-Fi", desc: "Connection throughout the shared areas" }, { icon: "ac", title: "Air Conditioning", desc: "Cooling in the bedrooms" }, { icon: "parking", title: "Parking", desc: "Private parking for family travel" }],
    host: { name: "Tharushi & Amal", badge: "Family Hosts", text: "A local family who can share tips on lagoon trips, beach days and child-friendly dining." },
  },
  "jungle-hideaway": {
    tagline: "A nature-inspired chalet near Sigiriya", city: "Sigiriya, Central Province, Sri Lanka", bedrooms: 1, bathrooms: 1, atmosphere: "Green, quiet and close to nature",
    quote: "Wake to birdsong and spend your days among Sri Lanka's wild landscapes.",
    about: ["Jungle Hideaway is a cozy eco-inspired chalet tucked among greenery. Its compact layout is designed for a peaceful couple's stay, with a sense of privacy and a chance to slow down between outdoor adventures.", "Use the lodge as a base for early visits to the Sigiriya area, nearby village experiences and relaxed evenings surrounded by nature."],
    highlights: [{ icon: "flora", label: "Green surroundings" }, { icon: "walk", label: "Near Sigiriya visits" }, { icon: "lock", label: "Quiet chalet stay" }],
    amenities: [{ icon: "wifi", title: "Wi-Fi", desc: "Basic connection available in the lodge" }, { icon: "ac", title: "Cooling Fans", desc: "Fresh air and fans in the chalet" }, { icon: "parking", title: "Parking", desc: "Guest parking near the entrance" }],
    host: { name: "Rashmi", badge: "Eco Host", text: "A nature-loving local host happy to help arrange early starts and nearby village experiences." },
  },
};

function fromListing(listing) {
  const details = listingDetails[listing.id] || {};

  return {
    id: listing.id,
    name: listing.name,
    type: listing.type,
    rating: listing.id === 4
      ? "4.96"
      : ["4.92", "4.89", "4.95", "4.91", "4.94"][listing.id - 1] || "4.90",
    reviews: [28, 42, 19, 34, 31, 26][listing.id - 1] || 0,
    price: listing.price,
    currency: "LKR",
    maxGuests: listing.guests,

    // Use null when bedroom or bathroom information is unavailable.
    bedrooms: details.bedrooms ?? null,
    bathrooms: details.bathrooms ?? null,

    tagline: details.tagline || listing.feature?.label || "A comfortable stay in Sri Lanka",
    location: details.location || `${listing.region}, Sri Lanka`,
    city: details.city || `${listing.region}, Sri Lanka`,
    quote: details.quote || `Enjoy a comfortable stay at ${listing.name}.`,
    atmosphere: details.atmosphere || "Comfortable accommodation",

    photoCount: 1,
    photos: [
      {
        src: listing.img,
        label: `${listing.name} — property view`,
      },
    ],

    about: details.about || [
      `${listing.name} is a ${listing.type.toLowerCase()} located in ${listing.region}, Sri Lanka.`,
      `This property accommodates up to ${listing.guests} guests.`,
    ],

    highlights: details.highlights || [
      { icon: "walk", label: listing.feature?.label || "Comfortable stay" },
    ],

    amenities: details.amenities || [],

    checkIn: details.checkIn || {
      time: "From 2:00 PM",
      note: "Please confirm your arrival time with the host.",
    },

    checkOut: details.checkOut || {
      time: "Before 11:00 AM",
      note: "Please confirm check-out arrangements with the host.",
    },

    host: details.host || {
      name: "Property Host",
      badge: "Local Host",
      text: "Contact the host for more information about this property.",
    },
  };
}

function fromFeatured(featured) {
  const details = featuredDetails[featured.slug];
  const bedrooms = Number(featured.rooms.match(/\d+/)?.[0]) || details.bedrooms;
  return {
    id: `featured-${featured.id}`,
    name: featured.name,
    type: featured.type,
    rating: featured.rating,
    reviews: featured.reviews,
    price: featured.price,
    currency: "USD",
    maxGuests: Number(featured.guests.match(/\d+/)?.[0]) || 2,
    bedrooms,
    bathrooms: details.bathrooms,
    tagline: details.tagline,
    location: featured.location,
    city: details.city,
    quote: details.quote,
    atmosphere: details.atmosphere,
    photoCount: 1,
    photos: [{ src: featured.img, label: `${featured.name} — property view` }],
    about: details.about,
    highlights: details.highlights,
    amenities: details.amenities,
    checkIn: { time: "From 2:00 PM", note: "Please confirm your arrival time with the host" },
    checkOut: { time: "Before 11:00 AM", note: "Late check-out can be requested in advance" },
    host: details.host,
  };
}

export function getProperty(id) {
  if (typeof id === "string" && id.startsWith("featured:")) {
    const slug = id.slice("featured:".length);
    const featured = featuredProperties.find((property) => property.slug === slug);
    return featured ? fromFeatured(featured) : null;
  }

  const propertyId = Number(id);
  const listing = listings.find((item) => Number(item.id) === propertyId);
  return listing ? fromListing(listing) : null;
}

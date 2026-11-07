
export const regions = [
  "Colombo",
  "Kandy",
  "Ella",
  "Galle",
  "Mirissa",
  "Nuwara Eliya",
  "Negombo",
  "Sigiriya",
  "Weligama",
  "Unawatuna"
];

/** feature.icon keys are resolved in ListingCard */
export const listings = [
  {
    id: 1,
    region: "Colombo",
    type: "Apartment",
    name: "City View Apartment",
    guests: 4,
    feature: { icon: "bedrooms", label: "2 Bedrooms" },
    price: 18000,
    img: "/images/list-1.png"
  },
  {
    id: 2,
    region: "Ella",
    type: "Holiday Home",
    name: "Hilltop Escape",
    guests: 6,
    feature: { icon: "valley", label: "Mountain View" },
    price: 28000,
    img: "/images/stay-2.png"
  },
  {
    id: 3,
    region: "Ella",
    type: "Holiday Home",
    name: "Mountain View Cottage",
    guests: 3,
    feature: { icon: "valley", label: "Valley View" },
    price: 15000,
    img: "/images/list-3.png"
  },
  {
    id: 4,
    region: "Negombo",
    type: "Holiday Home",
    name: "The Family Retreat",
    guests: 8,
    feature: { icon: "beach", label: "Family Friendly" },
    price: 34000,
    img: "/images/stay-5.png"
  },
  {
    id: 5,
    region: "Mirissa",
    type: "Private Villa",
    name: "Palm Breeze Villa",
    guests: 8,
    feature: { icon: "beach", label: "Beachfront" },
    price: 35000,
    img: "/images/list-5.png"
  },
  {
    id: 6,
    region: "Nuwara Eliya",
    type: "Bungalow",
    name: "Hill Country Retreat",
    guests: 6,
    feature: { icon: "fireplace", label: "Fireplace" },
    price: 28000,
    img: "/images/list-6.png"
  },
  {
    id: 7,
    region: "Sigiriya",
    type: "Eco Lodge",
    name: "Jungle Hideaway",
    guests: 3,
    feature: { icon: "valley", label: "Nature View" },
    price: 29999,
    img: "/images/stay-6.png"
  },
  {
    id: 8,
    region: "Kandy",
    type: "Villa",
    name: "Green Valley Villa",
    guests: 6,
    feature: { icon: "pool", label: "Private Pool" },
    price: 25000,
    img: "/images/list-2.png"
  },
  {
    id: 9,
    region: "Weligama",
    type: "Apartment",
    name: "Seaside Apartment",
    guests: 2,
    feature: { icon: "beach", label: "Steps to Beach" },
    price: 24999,
    img: "/images/stay-3.png"
  },
  {
    id: 10,
    region: "Kandy",
    type: "Boutique Hotel",
    name: "Garden Boutique Hotel",
    guests: 2,
    feature: { icon: "garden", label: "Garden View" },
    price: 30000,
    img: "/images/stay-4.png"
  },
  {
    id: 11,
    region: "Galle",
    type: "Boutique Villa",
    name: "The Heritage Villa",
    guests: 5,
    feature: { icon: "fort", label: "Historic Fort" },
    price: 30000,
    img: "/images/list-4.png"
  },
  {
    id: 12,
    region: "Unawatuna",
    type: "Private Villa",
    name: "Ocean View Villa",
    guests: 4,
    feature: { icon: "pool", label: "Private Pool" },
    price: 39999,
    img: "/images/stay-1.png"
  }
];

export const ALL = "All";

export const formatLKR = (n) =>
  `LKR ${n.toLocaleString("en-US")}`;

export const formatPrice = (n, currency = "LKR") =>
  currency === "USD"
    ? `$${Number(n).toLocaleString("en-US")}`
    : formatLKR(Number(n));

export const plural = (n, one, many) =>
  n === 1 ? one : many;

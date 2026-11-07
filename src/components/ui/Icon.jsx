import { Building2, ShieldCheck, BadgeDollarSign, Banknote, Headset } from "lucide-react";
const map = { building: Building2, shield: ShieldCheck, price: BadgeDollarSign, banknote: Banknote, headset: Headset };
export default function Icon({ name, ...props }) {
  const C = map[name] ?? Building2;
  return <C {...props} />;
}

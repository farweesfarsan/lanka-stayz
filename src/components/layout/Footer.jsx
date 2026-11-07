import { Mail, MapPin, Share2, Camera, Youtube } from "lucide-react";
import Container from "../ui/Container";
import { footerCols } from "../../data/content";

const FooterLinks = ({ title, links }) => (
  <div className="flex flex-col gap-3">
    <h3 className="font-serif text-xl font-medium leading-7 text-white">{title}</h3>
    <ul className="flex flex-col gap-2.5">
      {links.map((l) => (
        <li key={l}><a href="#" className="text-sm leading-5 text-sage transition hover:text-white">{l}</a></li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary pb-10 pt-16">
      <Container>
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="font-serif text-xl font-medium leading-7 text-white">Lanka Stayz</span>
            <p className="max-w-sm text-sm leading-5 text-sage">Helping travellers discover wonderful places to stay across Sri Lanka. Curated villas, boutique tea estates, and coastal hideaways.</p>
          </div>
          {footerCols.map((c) => <FooterLinks key={c.title} {...c} />)}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-xl font-medium leading-7 text-white">Contact</h3>
            <ul className="flex flex-col gap-2.5 text-sm leading-5 text-sage">
              <li className="flex items-center gap-2"><Mail size={15} /><a href="mailto:hello@lankastayz.com">hello@lankastayz.com</a></li>
              <li className="flex items-center gap-2"><MapPin size={15} />Colombo &amp; Galle, Sri Lanka</li>
            </ul>
            <div className="flex flex-col gap-2 pt-2">
              <span className="eyebrow tracking-[0.55px] text-sage">Connect with us</span>
              <div className="flex gap-3">
                {[Share2, Camera, Youtube].map((I, i) => (
                  <a key={i} href="#" aria-label="social" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-2 text-white transition hover:bg-secondary"><I size={15} /></a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs leading-4 tracking-[0.12px] text-sage sm:flex-row">
          <p>© 2026 Lanka Stayz. All rights reserved.</p>
          <div className="flex gap-6"><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a></div>
        </div>
      </Container>
    </footer>
  );
}

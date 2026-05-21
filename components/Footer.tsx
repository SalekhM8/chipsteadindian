import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-chipstead-cream text-chipstead-black pt-24 pb-12 px-6 md:px-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <h3 className="text-2xl mb-6">Chipstead Tandoori</h3>
          <p className="text-lg opacity-80 leading-relaxed mb-6">
            A family kitchen on the Surrey Hills — serving real Indian food,
            made with care, since 1988. Delivering to Chipstead, Coulsdon,
            Purley, Banstead &amp; Kingswood.
          </p>
          <div className="flex space-x-4 opacity-60">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:opacity-100 hover:text-chipstead-red transition-all"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:opacity-100 hover:text-chipstead-red transition-all"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:opacity-100 hover:text-chipstead-red transition-all"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-1">
          <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-6 opacity-40 font-bold">
            Explore
          </h4>
          <ul className="space-y-4 text-lg">
            <li>
              <Link
                href="/"
                className="hover:text-chipstead-red transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="hover:text-chipstead-red transition-colors"
              >
                Menus
              </Link>
            </li>
            <li>
              <a
                href="https://chipsteadtandoori.app4food.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-chipstead-red transition-colors"
              >
                Order Online
              </a>
            </li>
            <li>
              <a
                href="tel:01737551219"
                className="hover:text-chipstead-red transition-colors"
              >
                Contact (01737 551 219)
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="md:col-span-1">
          <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase mb-6 opacity-40 font-bold">
            Visit Us
          </h4>
          <address className="text-lg not-italic space-y-2 opacity-80">
            <p>34 Chipstead Station Parade</p>
            <p>Chipstead, Coulsdon</p>
            <p>Surrey CR5 3TF</p>
            <br />
            <a
              href="tel:01737551219"
              className="block hover:text-chipstead-red transition-colors font-bold"
            >
              01737 551 219
            </a>
            <a
              href="tel:01737556401"
              className="block hover:text-chipstead-red transition-colors font-bold"
            >
              01737 556 401
            </a>
          </address>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-sans opacity-40 tracking-widest uppercase font-bold">
        <p>
          &copy; {new Date().getFullYear()} Chipstead Tandoori. All rights
          reserved.
        </p>
        <p className="mt-2 md:mt-0">Family-run since 1988</p>
      </div>
    </footer>
  );
}

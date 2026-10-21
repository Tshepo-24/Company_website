import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold uppercase tracking-wide">
            LJ <span className="text-brand">Plant Hire</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            {site.description}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Pages
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-300">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-300">
            <li>
              <Link href={`tel:${site.phoneHref}`} className="hover:text-white">
                {site.phone}
              </Link>
            </li>
            <li>
              <Link href={`https://wa.me/${site.whatsapp}`} className="hover:text-white">
                WhatsApp us
              </Link>
            </li>
            <li>
              <Link href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </Link>
            </li>
            <li className="text-neutral-400">{site.address}</li>
            <li className="text-neutral-400">{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-neutral-500">
         © 2026 {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
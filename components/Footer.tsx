import Link from "next/link";
import { fleet, machineHref } from "@/lib/fleet";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

// First 6 machines, so the footer stays short
const equipmentLinks = fleet.slice(0, 6);

export default function Footer() {
  return (
    <footer className="border-t-4  bg-black text-neutral-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
        {/* Brand */}
        <div>
          <p className="font-display text-3xl font-bold uppercase tracking-wide text-white">
            LJ <span className="text-brand">Plant Hire</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
            {site.description}
          </p>

          <Link
            href={`https://wa.me/${site.whatsapp}`}
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            WhatsApp us
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Pages */}
        <nav aria-label="Footer pages">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Pages
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Equipment */}
        <nav aria-label="Footer equipment">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Equipment
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {equipmentLinks.map((m) => (
              <li key={m.slug}>
                <Link
                  href={machineHref(m)}
                  className="transition-colors hover:text-brand"
                >
                  {m.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/equipment"
                className="font-semibold text-white underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand"
              >
                View all equipment
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Contact
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href={`tel:${site.phoneHref}`}
                className="transition-colors hover:text-brand"
              >
                {site.phone}
              </Link>
            </li>
            <li>
              <Link
                href={`mailto:${site.email}`}
                className="break-all transition-colors hover:text-brand"
              >
                {site.email}
              </Link>
            </li>
            <li className="leading-relaxed text-neutral-400">{site.address}</li>
            <li className="text-neutral-400">{site.hours}</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <Link
            href="#site-header"
            className="uppercase tracking-[0.2em] transition-colors hover:text-brand"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
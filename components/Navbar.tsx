import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import ScrollWatcher from "./ScrollWatcher";

const links = [
  { label: "TLB's", href: "/tlb" },
  { label: "Excavators", href: "/excavators" },
  { label: "Trucks", href: "/trucks" },
  { label: "Motor Grader", href: "/motor-grader" },
  { label: "Diesel Bowser", href: "/diesel-bowser" },
  { label: "Water Tanker", href: "/water-tanker" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  return (
    <header
      id="site-header"
      className="group fixed inset-x-0 top-0 z-50 transition-transform duration-300 data-[hidden=true]:-translate-y-full"
    >
      <ScrollWatcher />

      <div className="relative">
        {/* Layer 1: soft shade that melts into the hero (page top) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/80 via-black/45 to-transparent transition-opacity duration-300 group-data-[scrolled=true]:opacity-0"
        />
        {/* Layer 2: glass bar (after scrolling) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border-b border-white/10 bg-black/55 opacity-0 backdrop-blur-xl transition-opacity duration-300 group-data-[scrolled=true]:opacity-100"
        />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Row 1: logo left, contact right */}
          <div className="flex h-18 items-center justify-between">
            <Link href="/" aria-label="LJ Plant Hire home" className="flex items-center">
              <Image
                src="/logo.png"
                alt="LJ Plant Hire logo"
                width={160}
                height={160}
                loading="eager"
                className="h-50 w-40 mb-10 object-contain"
              />
            </Link>

            <div className="flex items-center gap-8">
              <Link
                href={`tel:${site.phoneHref}`}
                className="hidden items-center gap-2 text-md font-black tracking-[0.10em] text-neutral-200 transition-colors hover:text-brand lg:flex"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {site.phone}
              </Link>

              <Link
                href={`mailto:${site.email}`}
                className="hidden items-center gap-2 text-md font-black tracking-[0.15em] text-neutral-200 transition-colors hover:text-brand xl:flex"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                {site.email}
              </Link>

              <Link
                href="/contact"
                className="group/cta hidden items-center gap-4 rounded-full border-2 border-white/25 bg-white/5 py-2 pl-6 pr-2 text-xs font-black uppercase tracking-[0.2em] transition-colors hover:border-brand lg:flex"
              >
                Contact Us
                <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-black transition-colors group-hover/cta:bg-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>

              <MobileMenu links={links} phoneHref={site.phoneHref} />
            </div>
          </div>

          {/* Row 2: links across the full width (desktop) */}
          <ul className="hidden items-center justify-between border-t-2 border-white/10 lg:flex">
            {links.map((item) => (
              <li key={item.href}>
                <NavLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
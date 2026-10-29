import Image from "next/image";
import Link from "next/link";
import { fleet, machineHref } from "@/lib/fleet";
import { site } from "@/lib/site";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const categories = ["Earthmoving", "Haulage", "Support"] as const;

const groups = categories.map((category) => ({
  category,
  items: fleet
    .filter((m) => m.category === category)
    .map((m) => ({ label: m.name, href: machineHref(m) })),
}));

export default function Navbar() {
  return (
    <header
      id="site-header"
      className="group fixed inset-x-0 top-0 z-50 transition-transform duration-300 data-[hidden=true]:-translate-y-full"
    >
      {/* Top strip (laptops) */}
      <div className="hidden bg-slate-900 text-slate-200 lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs">
          <p className="uppercase tracking-[0.2em]">{site.tagline}</p>
          <div className="flex items-center gap-8">
            <Link
              href={`tel:${site.phoneHref}`}
              className="tracking-wider transition-colors hover:text-brand"
            >
              {site.phone}
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="tracking-wider transition-colors hover:text-brand"
            >
              {site.email}
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="relative border-b-2  bg-white text-slate-900 transition-shadow duration-300 group-data-[scrolled=true]:shadow-lg group-data-[scrolled=true]:shadow-slate-900/10">
        <nav
          aria-label="Main"
          className="mx-auto flex h-20 max-w-7xl items-stretch justify-between gap-8 px-6"
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="LJ Plant Hire, home"
            className="flex shrink-0 items-center gap-3"
          >
            <Image
              src="/logo.png"
              alt="LJ Plant Hire logo"
              width={112}
              height={112}
              loading="eager"
              className="h-14 w-auto object-contain"
            />
            <span className="hidden font-display text-2xl font-bold uppercase leading-none tracking-wide sm:block">
              LJ Plant Hire
            </span>
          </Link>

          {/* Links (laptops) */}
          <ul className="hidden items-stretch gap-10 lg:flex">
            {/* Equipment with the menu */}
            <li className="group/mega flex">
              <Link
                href="/equipment"
                aria-haspopup="true"
                className="relative flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-navy/80 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 group-focus-within/mega:text-navy group-focus-within/mega:after:scale-x-100 group-hover/mega:text-navy group-hover/mega:after:scale-x-100"
              >
                Equipment
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover/mega:rotate-180"
                >
                  <path d="m1 3 4 4 4-4" />
                </svg>
              </Link>

              {/* Always in the page HTML, only hidden by CSS */}
              <div className="invisible absolute inset-x-0 top-full translate-y-1 border-t border-slate-200 bg-white opacity-0 shadow-2xl shadow-slate-900/15 transition-[opacity,transform,visibility] duration-200 group-focus-within/mega:visible group-focus-within/mega:translate-y-0 group-focus-within/mega:opacity-100 group-hover/mega:visible group-hover/mega:translate-y-0 group-hover/mega:opacity-100">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-[1fr_3fr]">
                  {/* Left: short intro */}
                  <div>
                    <p className="font-display text-2xl font-bold uppercase leading-tight">
                      Our fleet
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {fleet.length} machines for construction and mining work.
                    </p>
                    <Link
                      href="/equipment"
                      className="mt-4 inline-block text-sm font-semibold uppercase tracking-widest underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:decoration-navy"
                    >
                      View all equipment
                    </Link>
                  </div>

                  {/* Right: machines by category */}
                  <div className="grid gap-10 sm:grid-cols-3">
                    {groups.map((g) => (
                      <div key={g.category}>
                        <p className="border-b border-slate-200 pb-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                          {g.category}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {g.items.map((it) => (
                            <li key={it.href}>
                              <Link
                                href={it.href}
                                className="group/item -mx-3 flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-navy"
                              >
                                {it.label}
                                <span
                                  aria-hidden="true"
                                  className="text-brand opacity-0 transition-opacity group-hover/item:opacity-100"
                                >
                                  →
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li className="flex">
              <NavLink href="/about" label="About" />
            </li>
            <li className="flex">
              <NavLink href="/contact" label="Contact" />
            </li>
          </ul>

          {/* Right side */}
          <div className="flex items-center">
            <Link
              href="/contact"
              className="group/cta hidden items-center gap-3   rounded-full bg-slate-50 px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black shadow-xl shadow-slate/10 transition-colors duration-300 hover:bg-navy hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:flex"
            >
              Get a quote
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/cta:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            <MobileMenu groups={groups} phoneHref={site.phoneHref} />
          </div>
        </nav>
      </div>
    </header>
  );
}
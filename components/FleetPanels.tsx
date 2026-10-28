import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/lib/fleet";
import { site } from "@/lib/site";

export default function FleetPanels() {
  const total = String(fleet.length).padStart(2, "0");

  return (
    <section id="fleet" className="scroll-mt-40 pt-24">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-4 text-md font-black uppercase tracking-[0.1em]">
              <span className="h-2 w-10 bg-brand" />
              Our fleet
            </p>
            <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
             EARTHMOVING & PLANTHIRE <span className="text-brand">SERVICES</span>
            </h2>
          </div>
         
        </div>
      </div>

      {/* Panels */}
      <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {fleet.map((m, i) => {
          const n = String(i + 1).padStart(2, "0");

          return (
            <li key={m.slug}>
              <Link
                href={`/${m.slug}`}
                className="group relative block h-[26rem] overflow-hidden bg-neutral-900 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand lg:h-[32rem]"
              >
                {/* Photo */}
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={`${m.name} for hire`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover saturate-75 transition duration-1000 ease-out group-hover:scale-105 group-hover:saturate-100"
                  />
                ) : (
                  <span className="absolute inset-0 grid place-items-center bg-linear-to-br from-neutral-800 to-neutral-900 font-display text-9xl font-bold text-white/5">
                    {n}
                  </span>
                )}

                {/* Shading */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-black/20 transition-colors duration-500 group-hover:from-black/95" />

                {/* Thin frame that appears on hover */}
                <div className="pointer-events-none absolute inset-5 border border-white/0 transition-colors duration-500 group-hover:border-white/30" />

                {/* Top row: number and arrow */}
                <div className="absolute inset-x-8 top-8 flex items-start justify-between">
                  <p className="text-xs font-semibold tracking-[0.3em] text-white/80">
                    {n}
                    <span className="text-white/40"> / {total}</span>
                  </p>
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/20 backdrop-blur transition-colors duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-black"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>

                {/* Bottom: title, summary, rate */}
                <div className="absolute inset-x-0 bottom-0 px-8 pb-8 lg:px-10 lg:pb-10">
                  <h3 className="font-display text-4xl font-bold uppercase leading-none sm:text-5xl">
                    {m.name}
                  </h3>
                  <span className="mt-4 block h-0.5 w-12 bg-brand transition-all duration-500 group-hover:w-24" />
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-300">
                    {m.summary}
                  </p>

                  <div className="mt-6 flex items-end justify-between border-t border-white/20 pt-4">
                    {m.rate ? (
                      <p>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                          From
                        </span>
                        <span className="font-display text-3xl font-bold leading-none text-brand">
                          {m.rate}
                        </span>
                      </p>
                    ) : (
                      <p className="text-sm font-semibold uppercase tracking-widest text-neutral-200">
                        Call for rate
                      </p>
                    )}
                    <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                      View rates
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Call strip */}
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-10 text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Not sure which machine you need? Tell us about the job.</p>
        <Link
          href={`tel:${site.phoneHref}`}
          className="font-semibold text-white  decoration-2 underline-offset-4 transition-colors hover:text-brand"
        >
          Call {site.phone}
        </Link>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/lib/fleet";

export default function FleetShowcase() {
  return (
    <section id="fleet" className="scroll-mt-40 rounded-t-[2.5rem] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            Our fleet
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
            Equipment for every job
          </h2>
          <p className="mt-6 leading-relaxed text-neutral-400">
            Pick a machine to see what it is used for, its hourly rate and
            answers to common questions.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((m, i) => {
            const large = i < 2;
            const n = String(i + 1).padStart(2, "0");

            return (
              <li key={m.slug} className={large ? "sm:col-span-2" : ""}>
                <Link
                  href={`/${m.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition-colors duration-300 hover:border-brand/60"
                >
                  {/* Photo */}
                  <div
                    className={`relative overflow-hidden bg-linear-to-br from-neutral-800 to-neutral-900 ${
                      large ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={`${m.name} for hire`}
                        fill
                        sizes={
                          large
                            ? "(min-width: 1024px) 50vw, 100vw"
                            : "(min-width: 1024px) 25vw, 50vw"
                        }
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <span className="absolute inset-0 grid place-items-center font-display text-8xl font-bold text-white/5">
                        {n}
                      </span>
                    )}
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-semibold tracking-widest backdrop-blur">
                      {m.rate ? `From ${m.rate}` : "Call for rate"}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="relative flex flex-1 flex-col p-6 pt-9">
                    <span className="absolute -top-6 left-6 grid h-12 w-12 place-items-center rounded-full bg-brand font-display text-lg font-bold text-black ring-4 ring-neutral-900">
                      {n}
                    </span>
                    <h3
                      className={`font-display font-bold uppercase leading-none transition-colors group-hover:text-brand ${
                        large ? "text-4xl" : "text-3xl"
                      }`}
                    >
                      {m.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                      {m.summary}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest">
                      View rates
                      <span
                        aria-hidden="true"
                        className="grid h-8 w-8 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-brand group-hover:bg-brand group-hover:text-black"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
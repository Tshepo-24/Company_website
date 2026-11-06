import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const points = [
  { title: "Maintained fleet", text: "Serviced and inspected" },
  { title: "Clear rates", text: "Shown on every machine page" },
  { title: "Delivered to site", text: "Across South Africa" },
  { title: "Local team", text: "Based in Tzaneen" },
];

export default function Hero() {
  return (
    <section className="bg-white">
      {/* Your hero, unchanged except for the card at the bottom */}
      <div className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-navy text-white">
        <Image
          src="/hero1.jpg"
          alt="Excavator working on a construction site"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[15%_50%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-navy/90 via-navy/60 to-navy/20"
        />

        <div className="wrap w-full pb-28 pt-44">
          <p className="eyebrow rise">Reliable equipment for hire</p>
          <h1
            className="rise mt-2 max-w-3xl font-display text-6xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            Heavy power Prestige service.
          </h1>
          <p
            className="rise mt-5 max-w-xl text-lg leading-relaxed text-slate-200"
            style={{ animationDelay: "200ms" }}
          >
            Reliable construction and mining equipment hire in Tzaneen. Premium
            machinery, maintained to the highest industrial standards,
            delivered across South Africa.
          </p>
          <div
            className="rise mt-9 flex flex-wrap gap-4"
            style={{ animationDelay: "300ms" }}
          >
            <Link href="/contact" className="btn btn-primary">
              Get a quote
            </Link>
            <Link href="/equipment" className="btn btn-outline-light">
              View equipment
            </Link>
          </div>
        </div>

        {/* New: availability card, sitting on the strip below */}
        <div className="absolute inset-x-0 bottom-0 hidden md:block">
          <div className="wrap flex justify-end">
            <Link
              href={`tel:${site.phoneHref}`}
              className="group flex w-full max-w-sm items-center gap-4 bg-white px-6 py-5 text-slate-900 transition-colors hover:bg-sand"
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500"
              />
              <span className="flex-1">
                <span className="block text-xs text-slate-500">
                  Equipment availability
                </span>
                <span className="block font-semibold">Call to check today</span>
              </span>
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* New: four points */}
      <div className="border-b border-slate-200">
        <ul className="wrap grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {points.map((p, i) => (
            <li
              key={p.title}
              className="flex items-center gap-4 py-5 sm:py-6 lg:border-l lg:border-slate-200 lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="font-display text-sm font-bold tracking-widest text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-semibold leading-snug">{p.title}</span>
                <span className="block text-sm text-slate-500">{p.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
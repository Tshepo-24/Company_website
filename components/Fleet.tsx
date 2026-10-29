import Image from "next/image";
import Link from "next/link";
import { fleet, machineHref } from "@/lib/fleet";
import { site } from "@/lib/site";

// Search engines read this. No prices here, because the tiles don't show them.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${site.name} fleet`,
  itemListElement: fleet.map((m, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: `${m.name} hire`,
      serviceType: "Plant hire",
      description: m.summary,
      url: `${site.url}${machineHref(m)}`,
      image: `${site.url}${m.image}`,
      provider: { "@type": "Organization", name: site.name },
    },
  })),
};

// Soft light behind each machine, like a studio photo
const spotlight = {
  backgroundImage:
    "radial-gradient(ellipse at 50% 38%, #ffffff 0%, #f1f5f9 55%, #cbd5e1 100%)",
};

const inside = ["Rates", "Uses", "FAQs"];

export default function Fleet() {
  return (
    <section
      id="fleet"
      aria-labelledby="fleet-heading"
      className="scroll-mt-10 bg-sand text-slate-900"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3  font-black uppercase font-display text-4xl leading-none">
              
              Our fleet
            </p>
              <p className="max-w-md mt-4 leading-relaxed text-slate-600">
            Choose a machine to see its rates, what it is used for and answers
            to common questions.
          </p>
           
          </div>
        
        </div>

        {/* Machines */}
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((m, i) => (
            <li key={m.slug} className="flex">
              <article className="group relative flex flex-1 flex-col rounded-[1.25rem]  p-3 ring-1 ring-slate-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/15 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand">
                {/* Picture */}
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                  style={spotlight}
                >
                  {/* Soft shadow under the machine */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-7 left-1/2 h-4 w-3/5 -translate-x-1/2 rounded-full bg-slate-900/25 blur-xl"
                  />
                  <Image
                    src={m.image}
                    alt={`${m.name} for hire`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain p-5 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 font-display text-lg font-bold text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-4 top-4 rounded-md bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    {m.category}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col px-3 pb-2 pt-5">
                  <h3 className="font-display text-3xl font-bold uppercase leading-none">
                    {/* This link covers the whole tile */}
                    <Link
                      href={machineHref(m)}
                      className="after:absolute after:inset-0 after:rounded-[1.75rem] focus-visible:outline-none"
                    >
                      {m.name}
                    </Link>
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600">
                   
                  </p>

                  <ul className=" mt-2 flex flex-wrap gap-2">
                    {inside.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-slate-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-600"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prompt */}
                <div
                  aria-hidden="true"
                  className="mt-2 flex items-center justify-between border-3 border-[#dae8e8] rounded-xl bg-[#f4f4f5] py-3 pl-5 pr-3 text-sm font-bold uppercase tracking-widest text-slate-900 transition-colors duration-300 group-hover:bg-white group-hover:text-slate-900"
                >
                  Get full rates
                  <span className="grid h-9 w-9 place-items-center rounded-full text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
                    →
                  </span>
                </div>
              </article>
            </li>
          ))}

          {/* Help tile */}
          <li className="flex">
            <div className="flex flex-1 flex-col justify-between rounded-[1.75rem] bg-[#02163e] p-8 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                  Need help choosing?
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-none">
                  Not sure which machine?
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  Tell us about the job and we will recommend the right
                  equipment.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="rounded-sm bg-brand px-5 py-3 text-center text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-white"
                >
                  Request a quote
                </Link>
                <Link
                  href={`tel:${site.phoneHref}`}
                  className="text-center text-sm font-semibold underline decoration-brand decoration-2 underline-offset-4"
                >
                  Call {site.phone}
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
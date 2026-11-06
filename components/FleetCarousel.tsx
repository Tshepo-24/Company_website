import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CarouselTrack from "@/components/CarouselTrack";
import { fleet, machineHref } from "@/lib/fleet";
import { site } from "@/lib/site";

// Search engines read this
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

export default function FleetCarousel() {
  return (
    <section
      id="fleet"
      aria-labelledby="fleet-heading"
      className="scroll-mt-32 bg-sand py-14 text-slate-900 lg:py-16"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto max-w-7xl px-6">
        <CarouselTrack
          label="Equipment for hire"
          header={
            <>
              <SectionHeading
                id="fleet-heading"
                eyebrow="Our fleet"
                title="Earthmoving and plant hire equipment"
              />
              <p className="mt-3 text-slate-600">
                Open any machine to see what it is used for and its hire rate.
              </p>
            </>
          }
          action={
            <Link
              href="/equipment"
              className="group inline-flex items-center gap-3 border-b-2 border-brand pb-1 text-sm font-bold uppercase tracking-widest"
            >
              View all equipment
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          }
        >
          {fleet.map((m) => (
            <li
              key={m.slug}
              className="w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/10 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand">
                {/* Photo */}
                <div className="relative h-60 overflow-hidden bg-slate-200">
                  <Image
                    src={m.image}
                    alt={`${m.name} for hire`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 85vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                    {m.category}
                  </span>
                </div>

                {/* Text and button */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight">
                    {m.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 leading-relaxed text-slate-600">
                    {m.summary}
                  </p>

                  {/* Button: the link covers the whole card */}
                  <div className="mt-auto pt-6">
                    <Link
                      href={machineHref(m)}
                      className="flex h-12 items-center justify-between rounded-md bg-navy px-5 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 after:absolute after:inset-0 group-hover:bg-brand group-hover:text-black focus-visible:outline-none"
                    >
                      View details and rates
                      <span
                        aria-hidden="true"
                        className="text-base transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                      <span className="sr-only"> for the {m.name}</span>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </CarouselTrack>
      </div>
    </section>
  );
}
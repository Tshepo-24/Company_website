import type { Metadata } from "next";
import EquipmentGrid, { type GridMachine } from "@/components/EquipmentGrid";
import CtaBand from "@/components/CtaBand";
import { fleet, machineHref, money } from "@/lib/fleet";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Equipment for Hire",
  description:
    "Hire TLBs, excavators, tipper trucks, a motor grader, a diesel bowser and a water tanker for construction and mining. See the rates for each machine.",
  alternates: { canonical: "/equipment" },
};

const machines: GridMachine[] = fleet.map((m) => ({
  slug: m.slug,
  name: m.name,
  category: m.category,
  image: m.image,
  summary: m.summary,
  href: machineHref(m),
  rate: money(m.rate),
  per: m.unit === "hour" ? "hr" : "day",
}));

const categories = Array.from(new Set(fleet.map((m) => m.category as string)));

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

export default function EquipmentPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
          {/* Header */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
          <p className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.35em] text-white/80">
            <span aria-hidden="true" className="h-px w-10 bg-brand" />
            Equipment for hire
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Construction and mining equipment.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Choose a machine to see what it is used for, its hire rate and how
            to book it.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 pt-6 text-sm text-white/75">
            <li>{fleet.length} machines</li>
            <li>Hourly and daily rates</li>
            <li>Delivered across South Africa</li>
          </ul>
        </div>
      </section>

      {/* Filters and grid */}
      <section aria-label="All equipment" className="bg-white py-12 text-slate-900 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <EquipmentGrid machines={machines} categories={categories} />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
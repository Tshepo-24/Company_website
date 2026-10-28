import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { fleet } from "@/lib/fleet";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "LJ Plant Hire supplies construction and mining equipment from Tzaneen, Limpopo. See how we work, where we deliver and how to get a quote.",
  alternates: { canonical: "/about" },
};

// Tells Google who you are and where you are
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/about.jpg`,
  telephone: site.phoneHref,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tzaneen",
    addressRegion: "Limpopo",
    addressCountry: "ZA",
  },
};

const facts = [
  { label: "Based in", value: "Tzaneen, Limpopo" },
  { label: "Equipment", value: "Construction and mining" },
  { label: "Hire rates", value: "By the hour or by the day" },
  { label: "Delivery", value: "Worksites across South Africa" },
];

export default function AboutPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Top */}
      <section className="bg-[#02163e] pb-20 pt-40 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.1em]">
            <span className="h-2 w-10 bg-brand" />
            About us
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            About <span className="text-brand">LJ Plant Hire</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            When a job is waiting, a machine that does not start costs you time
            and money. So we keep ours maintained and ready to work.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-sand text-slate-900">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:py-28">
          <div className="space-y-14">
            <div>
              <h2 className="font-display text-4xl font-bold uppercase leading-none">
                What we do
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                LJ Plant Hire supplies equipment to construction and mining
                projects. Our fleet has {fleet.length} machines: a TLB backhoe
                loader, a 22 ton excavator, a 10 cube tipper truck, a 35 cube
                side tipper, a motor grader, a 1000L diesel bowser and an
                18000L water tanker.
              </p>
              <Link
                href="/equipment"
                className="mt-6 inline-block text-sm font-bold uppercase tracking-widest underline decoration-brand decoration-2 underline-offset-4"
              >
                See the equipment
              </Link>
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold uppercase leading-none">
                How we work
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                Every machine has its rate on its own page, so you know the cost
                before you call. Most machines are charged by the hour, and the
                side tipper and diesel bowser by the day. When you are ready,
                call or WhatsApp us. We check availability, confirm with you
                and arrange delivery.
              </p>
            </div>

            <div>
              <h2 className="font-display text-4xl font-bold uppercase leading-none">
                Where we work
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                We are based in Tzaneen, Limpopo, and deliver to worksites
                across South Africa.
              </p>
            </div>
          </div>

          {/* Photo and facts */}
          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-300">
              <Image
                src="/about.jpg"
                alt="Excavator working on a site"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="rounded-2xl bg-[#02163e] p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
                At a glance
              </p>
              <dl className="mt-6 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-baseline gap-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                      {f.label}
                    </dt>
                    <span
                      aria-hidden="true"
                      className="flex-1 border-b border-dotted border-slate-600"
                    />
                    <dd className="text-right text-sm font-bold">{f.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 space-y-2 border-t border-white/10 pt-6 text-sm">
                <Link
                  href={`tel:${site.phoneHref}`}
                  className="block font-semibold transition-colors hover:text-brand"
                >
                  {site.phone}
                </Link>
                <Link
                  href={`mailto:${site.email}`}
                  className="block text-slate-300 transition-colors hover:text-brand"
                >
                  {site.email}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
import type { Metadata } from "next";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
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

      <section className="bg-navy pb-16 pt-36 text-white lg:pb-20 lg:pt-44">
        <div className="wrap">
          <p className="eyebrow">About us</p>
          <h1 className="mt-3 max-w-3xl">About LJ Plant Hire</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            When a job is waiting, a machine that does not start costs you time
            and money. So we keep ours maintained and ready to work.
          </p>
        </div>
      </section>

      <section className="section bg-white text-slate-900">
        <div className="wrap grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-10 text-lg text-slate-700">
            <div>
              <h2>What we do</h2>
              <p className="mt-4">
                LJ Plant Hire supplies equipment to construction and mining
                projects. Our fleet has {fleet.length} machines: a TLB backhoe
                loader, a 22 ton excavator, a 10 cube tipper truck, a 35 cube
                side tipper, a motor grader, a 1000L diesel bowser and an
                18000L water tanker.
              </p>
              <Link
                href="/equipment"
                className="mt-4 inline-block text-[15px] font-semibold text-navy underline decoration-brand decoration-2 underline-offset-4"
              >
                See the equipment
              </Link>
            </div>
            <div>
              <h2>How we work</h2>
              <p className="mt-4">
                Every machine has its rate on its own page, so you know the
                cost before you call. Most machines are charged by the hour,
                and the side tipper and diesel bowser by the day. When you are
                ready, call us or send a quote request. We check availability,
                confirm with you and arrange delivery.
              </p>
            </div>
            <div>
              <h2>Where we work</h2>
              <p className="mt-4">
                We are based in Tzaneen, Limpopo, and deliver to worksites
                across South Africa.
              </p>
            </div>
          </div>

          <aside className="self-start rounded-xl bg-sand p-8">
            <h3>At a glance</h3>
            <dl className="mt-5 divide-y divide-slate-200">
              {facts.map((f) => (
                <div key={f.label} className="flex justify-between gap-6 py-3">
                  <dt className="text-slate-500">{f.label}</dt>
                  <dd className="text-right font-semibold">{f.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 space-y-1 border-t border-slate-200 pt-5">
              <Link
                href={`tel:${site.phoneHref}`}
                className="block font-semibold text-navy"
              >
                {site.phone}
              </Link>
              <Link
                href={`mailto:${site.email}`}
                className="block text-slate-600"
              >
                {site.email}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
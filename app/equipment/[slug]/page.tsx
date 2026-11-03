import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { fleet, machineHref, money } from "@/lib/fleet";
import { content } from "@/lib/machine-content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return fleet.map((m) => ({ slug: m.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const m = fleet.find((x) => x.slug === slug);
  if (!m) return {};

  return {
    title: `${m.name} Hire`,
    description: `Hire a ${m.name} from ${site.name} in Tzaneen, Limpopo. ${money(m.rate)} per ${m.unit}. ${m.summary} Call or send a quote request.`,
    alternates: { canonical: machineHref(m) },
    openGraph: {
      title: `${m.name} Hire | ${site.name}`,
      description: m.summary,
      images: [m.image],
      type: "website",
    },
  };
}

export default async function MachinePage({ params }: Props) {
  const { slug } = await params;
  const m = fleet.find((x) => x.slug === slug);
  const c = content[slug];
  if (!m || !c) notFound();

  const facts = [
    ...c.facts,
    { label: "Rate", value: `${money(m.rate)} per ${m.unit}` },
  ];

  const faqs = [
    ...c.faqs,
    {
      q: `How do I get a quote for the ${m.name}?`,
      a: "Call us or send a quote request with your site location, your dates and the work you need done. We confirm availability and give you a quote.",
    },
    {
      q: `Can you deliver the ${m.name} to my site?`,
      a: "We are based in Tzaneen, Limpopo, and deliver to worksites across South Africa. Tell us where your site is and we confirm the delivery details with your quote.",
    },
  ];

  // Same type first, then the rest, four in total
  const others = [
    ...fleet.filter((x) => x.slug !== m.slug && x.category === m.category),
    ...fleet.filter((x) => x.slug !== m.slug && x.category !== m.category),
  ].slice(0, 4);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${m.name} hire`,
      serviceType: "Plant hire",
      description: c.intro,
      url: `${site.url}${machineHref(m)}`,
      image: `${site.url}${m.image}`,
      provider: { "@type": "Organization", name: site.name, url: site.url },
      offers: {
        "@type": "Offer",
        priceCurrency: "ZAR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: m.rate,
          priceCurrency: "ZAR",
          unitCode: m.unit === "hour" ? "HUR" : "DAY",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        {
          "@type": "ListItem",
          position: 2,
          name: "Equipment",
          item: `${site.url}/equipment`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: m.name,
          item: `${site.url}${machineHref(m)}`,
        },
      ],
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Top */}
      <section className="bg-navy pb-16 pt-36 text-white lg:pb-24 lg:pt-44">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href="/equipment"
                    className="transition-colors hover:text-white"
                  >
                    Equipment
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-white">
                  {m.name}
                </li>
              </ol>
            </nav>

            <h1 className="mt-6">{c.heading}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              {c.intro}
            </p>

            <div className="mt-8">
              <p className="text-sm text-slate-300">Rate</p>
              <p className="text-4xl font-semibold tracking-tight">
                {money(m.rate)}{" "}
                <span className="text-lg font-normal text-slate-300">
                  per {m.unit}
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/contact?machine=${m.slug}`}
                className="btn btn-primary"
              >
                Request a quote
              </Link>
              <Link href={`tel:${site.phoneHref}`} className="btn btn-outline-light">
                Call {site.phone}
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
            <Image
              src={m.image}
              alt={`${m.name} for hire`}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain p-8 mix-blend-multiply"
            />
          </div>
        </div>
      </section>

      {/* Uses and facts */}
      <section className="section bg-white text-slate-900">
        <div className="wrap grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <h2>What it is used for</h2>
            <ul className="mt-6 space-y-3 text-lg text-slate-700">
              {c.uses.map((u) => (
                <li key={u} className="flex gap-4">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {u}
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-slate-200 pt-8">
              <h3>For a quote, tell us</h3>
              <p className="mt-2 text-slate-600">
                Your site location, your dates and the work to be done. That
                lets us check availability and quote correctly.
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
            <p className="mt-5 text-sm text-slate-500">
              Rates are a guide and can change with the job.
            </p>
          </aside>
        </div>
      </section>

      {/* Questions */}
      <section className="section bg-sand text-slate-900">
        <div className="wrap max-w-3xl">
          <h2>{m.name} hire: questions answered</h2>
          <div className="mt-8 border-b border-slate-300">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                name="faq"
                open={i === 0}
                className="group border-t border-slate-300"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl font-normal leading-none text-navy transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-10 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other equipment */}
      <section className="section bg-white text-slate-900">
        <div className="wrap">
          <h2>Other equipment</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={machineHref(o)}
                  className="group block h-full rounded-lg border border-slate-200 p-5 transition-colors hover:border-navy"
                >
                  <p className="text-sm text-slate-500">{o.category}</p>
                  <p className="mt-1 text-lg font-semibold">{o.name}</p>
                  <p className="mt-4 flex items-center gap-2 text-[15px] font-semibold text-navy">
                    View rates
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
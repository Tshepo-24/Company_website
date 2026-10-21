import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

// When you have a photo, put it in public/ and set it here, for example "/faq.jpg"
const faqImage: string | undefined = undefined;

const faqs = [
  {
    q: "What can I hire?",
    a: "Construction and mining equipment: excavators, TLBs, trucks, a motor grader, a diesel bowser and water tankers. Each machine has its own page with its rates.",
  },
  {
    q: "How is hire priced?",
    a: "By the hour or by the day. The rate is shown on each machine's page.",
  },
  {
    q: "How long can I hire for?",
    a: "Anything from a short job to the length of a project. Give us your start and end dates and we plan around them.",
  },
  {
    q: "Where do you deliver?",
    a: "We are based in Tzaneen, Limpopo, and deliver to worksites across South Africa.",
  },
  {
    q: "How do I book?",
    a: "Call or WhatsApp us, or use the contact page. We check availability, confirm with you and arrange delivery.",
  },
];

export default function Faq() {
  return (
    <section className="grid bg-amber-50  lg:grid-cols-2">
      {/* Left: questions */}
      <div className="bg-neutral-900  bg-amber-50 px-6 py-20 lg:px-16 xl:px-24">
        <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-brand">
          <span className="h-px w-10 bg-brand" />
          Good to know
        </p>
        <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
          Questions, <span className="text-brand">answered.</span>
        </h2>

        <div className="mt-12 border-b border-white/15">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              name="faq"
              open={i === 0}
              className="group border-t border-white/15"
            >
              <summary className="flex cursor-pointer list-none items-center gap-5 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-xl font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-xl font-bold uppercase leading-tight sm:text-2xl">
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/25 text-xl leading-none transition-all duration-300 group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-black"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pl-[3.25rem] pr-12 leading-relaxed text-neutral-400">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Right: photo with contact card */}
      <div className="relative min-h-[28rem] bg-neutral-800 lg:min-h-full">
        {faqImage && (
          <Image
            src={faqImage}
            alt="LJ Plant Hire machines at work"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"
        />

        <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-black/40 p-6 backdrop-blur-xl sm:inset-x-10 sm:bottom-10 sm:p-8 lg:right-auto lg:max-w-md">
          <p className="font-display text-3xl font-bold uppercase">
            Prefer to talk?
          </p>
          <p className="mt-2 text-sm text-neutral-300">
            We will help you choose the right machine.
          </p>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            <Link
              href={`tel:${site.phoneHref}`}
              className="border-b-2 border-brand pb-0.5 transition-colors hover:text-brand"
            >
              {site.phone}
            </Link>
            <Link
              href={`tel:${site.phoneAltHref}`}
              className="border-b-2 border-brand pb-0.5 transition-colors hover:text-brand"
            >
              {site.phoneAlt}
            </Link>
          </div>

          <Link
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-sm bg-brand px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-white"
          >
            WhatsApp us
          </Link>
        </div>
      </div>
    </section>
  );
}
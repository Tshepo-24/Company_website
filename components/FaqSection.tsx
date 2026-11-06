import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

const faqs = [
  {
    q: "Do your rates include an operator?",
    a: "The rate on each machine's page is for the machine. If you need an operator as well, tell us when you ask for a quote and we will confirm what is available and the price.",
  },
  {
    q: "Do you transport equipment to site?",
    a: "Yes. We are based in Tzaneen, Limpopo, and deliver to worksites across South Africa. Tell us where your site is and we confirm the delivery details with your quote.",
  },
  {
    q: "How far in advance should I book?",
    a: "As early as you can, so we can reserve the machine for your dates. If you need equipment urgently, call us and we will check what is available.",
  },
  {
    q: "What information do you need to quote?",
    a: "The machine you need, your site location, your start date, how long you need it and a short description of the work. With that we can check availability and give you a clear price.",
  },
];

// Search engines read this
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-32 bg-white py-16 text-slate-900 lg:py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[5fr_6fr] lg:gap-24">
        {/* Left: heading */}
        <div>
          <SectionHeading
            id="faq-heading"
            eyebrow="Hire questions"
            title="Good to know before you book"
          />
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-slate-600">
            Still unsure? Call us and we will talk through your site
            requirements.
          </p>
          <Link
            href={`tel:${site.phoneHref}`}
            className="group mt-8 inline-flex items-center gap-3 border-b-2 border-brand pb-1 text-sm font-bold uppercase tracking-widest"
          >
            Call {site.phone}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Right: questions */}
        <div className="border-b border-slate-200">
          {faqs.map((f) => (
            <details key={f.q} name="home-faq" className="group border-t border-slate-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden="true"
                  className="text-2xl font-normal leading-none text-brand transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-xl pb-6 pr-10 leading-relaxed text-slate-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
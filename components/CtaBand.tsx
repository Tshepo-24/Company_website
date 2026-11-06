import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white lg:py-24">
      {/* Faint circles in the corner */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="pointer-events-none absolute -right-24 -top-32 hidden w-[28rem] text-white/10 lg:block"
      >
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="140" />
        <circle cx="200" cy="200" r="90" />
      </svg>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <SectionHeading
          light
          eyebrow="Ready when you are"
          title="Let's get the right machine on your site."
        />

        <div className="shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
          >
            Request a quote
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/75">
            or call{" "}
            <Link
              href={`tel:${site.phoneHref}`}
              className="font-semibold text-white underline decoration-brand decoration-2 underline-offset-4"
            >
              {site.phone}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
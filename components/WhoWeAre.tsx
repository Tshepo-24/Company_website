import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/lib/site";

export default function WhoWeAre() {
  return (
    <section
      id="who-we-are"
      aria-labelledby="who-we-are-heading"
      className="scroll-mt-32 bg-navy text-white"
    >
      <div className="grid lg:grid-cols-2">
        {/* Text: the left padding lines it up with the rest of the site */}
        <div className="px-6 py-16 lg:py-24 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-16">
          <SectionHeading
            light
            id="who-we-are-heading"
            eyebrow="Who we are"
            title="Your plant hire partner in Limpopo."
          />

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            LJ Plant Hire is a locally owned plant hire company based in
            Tzaneen. We supply construction and mining equipment for
            excavation, haulage, grading, water and fuel. Our machines are
            maintained to a schedule and we quote a straight rate, so you get
            a machine that starts.
          </p>

          <p className="mt-4 text-lg font-semibold text-brand">
            Not sure which machine fits the job? Tell us the job.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-brand px-7 py-3 text-sm font-bold uppercase tracking-widest text-black transition-opacity hover:opacity-90"
            >
              Request a quote
            </Link>
            <Link
              href="/equipment"
              className="inline-flex items-center rounded-full border border-white/40 px-7 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:border-white hover:bg-white hover:text-navy"
            >
              View equipment
            </Link>
          </div>

          <div className="mt-10 border-t border-white/15 pt-8">
            <p className="eyebrow text-white/75">Start your project</p>
            <Link
              href={`tel:${site.phoneHref}`}
              className="mt-3 block font-display text-4xl font-bold leading-tight transition-colors hover:text-brand sm:text-5xl"
            >
              {site.phone}
            </Link>
            <p className="mt-3 text-white/75">{site.hours}</p>
          </div>
        </div>

        {/* Photo: fills the whole right side, edge to edge */}
        <div className="relative aspect-[4/3] w-full bg-slate-800 lg:aspect-auto lg:min-h-[32rem]">
          <Image
            src="/11.jpg"
            alt="Excavator working on a construction site"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-navy/50 via-transparent to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
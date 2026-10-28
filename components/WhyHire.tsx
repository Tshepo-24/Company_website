import Image from "next/image";
import Link from "next/link";

// Put a photo in public/ and set it here, for example "/why-hire.jpg"
const photo: string | undefined = undefined;

const benefits = [
  "Pay by the hour for the time you need, instead of buying a machine",
  "Match the machine to the job: excavators for digging, TLBs for tight sites, trucks for hauling, a motor grader for levelling",
  "Add a water tanker for dust control, or a diesel bowser to keep machines fuelled on site",
  "See the rate on each machine's page before you call",
];

export default function WhyHire() {
  return (
    <section className="bg-sand text-slate-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        {/* Text */}
        <div>
          <p className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.1em]">
            <span className="h-2 w-10 bg-brand" />
            Why hire
          </p>
          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
            Why hire earthmoving equipment?
          </h2>

          <div className="mt-10 border-l-4 border-brand pl-6 sm:pl-8">
            <p className="text-lg leading-relaxed text-slate-700">
              Hiring gives you the right machine for the job without the cost of
              buying, maintaining and storing your own. You pay by the hour, and
              the machine goes back when the work is done.
            </p>

            <p className="mt-6 font-semibold">
              Hiring from LJ Plant Hire lets you:
            </p>
            <ul className="mt-4 space-y-3 text-slate-700">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2.5 h-2 w-2 shrink-0 bg-brand" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link
              href="/contact"
              className="rounded-sm bg-brand px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-slate-900 hover:text-white"
            >
              Request a quote
            </Link>
            <Link
              href="#fleet"
              className="group inline-flex items-center gap-3 border-b-2 border-slate-900 pb-1 text-sm font-bold uppercase tracking-widest"
            >
              Browse our fleet
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Photo */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-800">
          {photo && (
            <Image
              src={photo}
              alt="Operator working a machine on a site"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
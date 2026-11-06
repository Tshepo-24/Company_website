import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const points = [
  {
    title: "Pay only for the time you need",
    text: "Hire by the hour or by the day instead of buying a machine.",
  },
  {
    title: "The right machine for the job",
    text: "Excavators for digging, TLBs for tight sites, trucks for hauling and a motor grader for levelling.",
  },
  {
    title: "Support equipment on site",
    text: "Add a water tanker for dust control, or a diesel bowser to keep machines fuelled.",
  },
];

export default function WhyHire() {
  return (
    <section
      id="why-hire"
      aria-labelledby="why-hire-heading"
      className="scroll-mt-32 bg-white py-16 text-slate-900 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[5fr_6fr] lg:gap-24">
        {/* Photo with the offset box */}
        <div className="relative pb-8 pr-4 lg:pr-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-200">
            <Image
              src="/why1.jpg"
              alt="Operator working a machine on a site"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-0 max-w-[16rem] bg-brand p-6 text-black shadow-xl shadow-black/15 lg:-right-8 lg:p-8">
            <p className="font-display text-xl font-bold uppercase leading-tight">
              Built for the work.
              <br />
              Backed by people.
            </p>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionHeading
            id="why-hire-heading"
            eyebrow="Why hire"
            title="Why hire earthmoving equipment?"
          />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Hiring gives you the right machine for the job without the cost of
            buying, maintaining and storing your own. The machine goes back
            when the work is done.
          </p>

          <ul className="mt-8 space-y-6">
            {points.map((p) => (
              <li key={p.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand/15 text-brand"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m4 10.5 4 4 8-9" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            href="/equipment"
            className="group mt-10 inline-flex items-center gap-3 border-b-2 border-brand pb-1 text-sm font-bold uppercase tracking-widest"
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
    </section>
  );
}
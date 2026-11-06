import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { fleet, machineHref, type Machine } from "@/lib/fleet";
import { site } from "@/lib/site";

const jobs = [
  {
    title: "Foundations and trenches",
    text: "Dig out the ground with an excavator, then haul the soil and rubble away with a tipper.",
    slugs: ["22-ton-excavator", "10-cube-tipper-truck"],
  },
  {
    title: "Small and tight sites",
    text: "A TLB digs, loads and trenches where a big machine will not fit.",
    slugs: ["tlb"],
  },
  {
    title: "Roads and large platforms",
    text: "A motor grader levels and shapes the surface, and a water tanker settles the dust and helps with compaction.",
    slugs: ["motor-grader", "18000l-water-tanker"],
  },
  {
    title: "Mining and bulk haulage",
    text: "Load with an excavator, haul in volume with a side tipper, and fuel your machines on site with a diesel bowser.",
    slugs: ["22-ton-excavator", "35-cube-side-tipper", "1000l-diesel-bowser"],
  },
  {
    title: "Dust control and site water",
    text: "A water tanker keeps dust down on haul roads and around the site.",
    slugs: ["18000l-water-tanker"],
  },
];

export default function JobGuide() {
  return (
    <section
      id="job-guide"
      aria-labelledby="job-guide-heading"
      className="scroll-mt-32 bg-white py-16 text-slate-900 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header: heading on the left, intro on the right */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-24">
          <SectionHeading
            id="job-guide-heading"
            eyebrow="Job guide"
            title="Which machine for which job?"
          />
          <div>
            <p className="max-w-md text-lg leading-relaxed text-slate-600">
              Not sure what you need? These are the machines that usually work
              together on common jobs.
            </p>
            <Link
              href={`tel:${site.phoneHref}`}
              className="group mt-6 inline-flex items-center gap-3 border-b-2 border-brand pb-1 text-sm font-bold uppercase tracking-widest"
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
        </div>

        {/* Jobs */}
        <ol className="mt-12 border-b border-slate-200">
          {jobs.map((job, i) => {
            const machines = job.slugs
              .map((s) => fleet.find((m) => m.slug === s))
              .filter((m): m is Machine => Boolean(m));

            return (
              <li
                key={job.title}
                className="grid gap-4 border-t border-slate-200 py-8 md:grid-cols-[1.1fr_1.3fr_1fr] md:gap-10"
              >
                <div className="flex gap-4">
                  <span className="w-8 shrink-0 pt-1 font-display text-sm font-bold tracking-widest text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight">
                    {job.title}
                  </h3>
                </div>

                <p className="leading-relaxed text-slate-600">{job.text}</p>

                <ul className="space-y-2">
                  {machines.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={machineHref(m)}
                        className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-brand"
                      >
                        {m.name}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
import Link from "next/link";
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
      className="scroll-mt-24 bg-[#02163e] text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1fr_1.5fr] lg:gap-24 lg:py-28">
        {/* Left: stays in view while you scroll the list */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
            Job guide
            <span className="h-px w-12 bg-slate-500" />
          </p>
          <h2
            id="job-guide-heading"
            className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl"
          >
            Which machine for{" "}
            which job?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">
            Not sure what you need? These are the machines that usually work
            together on common jobs. Choose a machine to see its rate.
          </p>

        
        </div>

        {/* Right: the jobs */}
        <ol>
          {jobs.map((job, i) => {
            const machines = job.slugs
              .map((s) => fleet.find((m) => m.slug === s))
              .filter((m): m is Machine => Boolean(m));

            return (
              <li
                key={job.title}
                className="grid gap-4 border-t border-white/15 py-8 last:border-b sm:grid-cols-[4rem_1fr]"
              >
                <span className="font-display text-2xl font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase leading-none">
                    {job.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-slate-300">
                    {job.text}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-3">
                    {machines.map((m) => (
                      <li key={m.slug}>
                        <Link
                          href={machineHref(m)}
                          className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold transition-colors hover:border-brand hover:bg-brand hover:text-black"
                        >
                          {m.name}
                          <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
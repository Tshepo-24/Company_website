import Image from "next/image";

// Photo on the left half (put the file in public/)
const introImage: string | undefined = "/about.jpg";

const glance = [
  { label: "Based in", value: "Tzaneen, Limpopo" },
  { label: "Equipment", value: "Construction and mining" },
  { label: "Hire rates", value: "By the hour or by the day" },
  { label: "Delivery", value: "Worksites across South Africa" },
];

export default function Intro() {
  return (
    <section
      id="about"
      className="grid scroll-mt-40 bg-[#02163e] text-white lg:grid-cols-2"
    >
      {/* Photo */}
      <div className="relative min-h-[22rem] bg-slate-800 lg:min-h-[44rem]">
        {introImage && (
          <Image
            src={introImage}
            alt="LJ Plant Hire equipment on site"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[60%_50%]"
          />
        )}
      </div>

      {/* Text */}
      <div className="flex items-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24 xl:px-24">
        <div className="max-w-xl">
          <p className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
            About LJ Plant Hire
            <span className="h-px w-12 bg-slate-500" />
          </p>

          <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] text-brand sm:text-6xl lg:text-7xl">
            Plant hire you can rely on
          </h2>

          <span className="mt-8 block h-1 w-12 bg-brand" />

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-300">
            <p>
              When a job is waiting, a machine that does not start costs you
              time and money. So we keep ours maintained and ready to work.
            </p>
            <p>
              Every machine has its rate on its own page. Pick one, check the
              rate, and call or WhatsApp us when you are ready.
            </p>
          </div>

          <dl className="mt-10 space-y-4 border-t border-white/10 pt-8">
            {glance.map((item) => (
              <div key={item.label} className="flex items-baseline gap-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {item.label}
                </dt>
                <span
                  aria-hidden="true"
                  className="flex-1 border-b border-dotted border-slate-600"
                />
                <dd className="text-right text-sm font-bold sm:text-base">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

// Both files must exist in public/. The order here is the order they appear.
const images = [
  { src: "/why1.jpg", alt: "Operator working a machine on a site" },
  { src: "/how.jpg", alt: "Excavator working on a site" },
];

const benefits = [
  "Pay only for the time you need, by the hour or by the day, instead of buying a machine",
  "Match the machine to the job: excavators for digging, TLBs for tight sites, trucks for hauling, a motor grader for levelling",
  "Add a water tanker for dust control, or a diesel bowser to keep machines fuelled on site",
  "See the rate on each machine's page before you call",
];

const steps = [
  {
    title: "Choose your machine",
    text: "Open the machine you need to see its rate, what it is used for and answers to common questions.",
  },
  {
    title: "Call or WhatsApp us",
    text: "Tell us about the job, your site location and your dates, and we will give you a quote.",
  },
  {
    title: "We confirm and deliver",
    text: "We check availability, confirm with you and arrange delivery to your site.",
  },
];

const stepClass = "flex items-center py-16 lg:min-h-svh lg:py-24";

export default function StoryScroll() {
  const total = String(images.length).padStart(2, "0");

  return (
    <section id="why-hire" className="scroll-mt-40 bg-sand text-slate-900">
      <div className="mx-auto grid max-w-7xl px-6 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28">
        {/* Step 1: Why hire (grid row 1) */}
        <div className={`${stepClass} lg:col-start-1 lg:row-start-1`}>
          <div className="max-w-xl">
            {/* Photo for phones and tablets only */}
            <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800 lg:hidden">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <p className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.35em] text-slate-600">
              Why hire
              
            </p>
            <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
              Why hire earthmoving{" "}
              equipment?
            </h2>

            <div className="mt-10  sm:pl-8">
              <p className="text-lg leading-relaxed text-slate-600">
                Hiring gives you the right machine for the job without the cost
                of buying, maintaining and storing your own. You pay by the
                hour or by the day, and the machine goes back when the work is
                done.
              </p>
              <p className="mt-6 font-semibold">
                Hiring from LJ Plant Hire lets you:
              </p>
              <ul className="mt-4 space-y-3 text-slate-600">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2.5 h-2 w-2 shrink-0 bg-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10  px-9 items-center ">
              
              <Link
                href="/equipment"
                className="  items-center gap-3 border-b-2 border-brand  pb-1 text-sm font-bold uppercase tracking-widest"
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
        </div>

        {/* Step 2: How it works (grid row 2) */}
        <div
          className={`${stepClass} border-t  border-white/10 lg:col-start-1 lg:row-start-2`}
        >
          <div className="max-w-xl">
            {/* Photo for phones and tablets only */}
            <div className="relative mb-10 aspect-[4/3] overflow-hidden rounded-2xl bg-slate-800 lg:hidden">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            <p className="flex items-center gap-5 text-xs font-medium uppercase tracking-[0.35em] text-slate-600">
              How it works
              
            </p>
            <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
              Hiring a machine in{" "}
            three steps
            </h2>

            <ol className="mt-10">
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex gap-6 pb-10 last:pb-0">
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-2 left-5 top-12 w-px "
                    />
                  )}
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-300 font-display text-lg font-bold text-black">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase">
                      {s.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            
            
          </div>
        </div>

        {/* Photos (laptops only). Each one starts in the same row as its text and
            stays stuck until the end of the section. The next one slides over it. */}
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`hidden lg:col-start-2 lg:block lg:pb-8 ${
              i === 0
                ? "lg:row-start-1 lg:row-end-3"
                : "lg:row-start-2 lg:row-end-3"
            }`}
          >
            <div className="sticky top-24 mt-24 h-[calc(100svh-8rem)]">
              <span
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-28 w-28 border-b-4 border-l-4 border-brand"
              />

              <div
                className={`relative h-full overflow-hidden rounded-2xl bg-slate-800 ring-1 ring-white/10 ${
                  i > 0 ? "shadow-[0_-30px_60px_-20px_rgba(0,0,0,0.6)]" : ""
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1280px) 540px, 45vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
                />
                <p className="absolute bottom-6 left-6 text-xs font-semibold tracking-[0.3em] text-white/90">
                  {String(i + 1).padStart(2, "0")}
                  <span className="text-white/50"> / {total}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
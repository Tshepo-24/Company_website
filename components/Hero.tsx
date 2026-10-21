import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden">
      {/* Background picture and shading */}
      <Image
        src="/hero.jpg"
        alt="Excavator working on a construction site"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/85 via-black/55 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-ink to-transparent" />

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-41">
        <p className="rise px-2 flex items-center font-black gap-4 text-sm  uppercase tracking-[0.3em] text-brand">
       <span className=" h-2 w-10 bg-brand" />
         RELIABE EQUIPMENT FOR HIRE
        </p>

        <h1
          className="rise mt-2 max-w-3xl font-display text-6xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl"
          style={{ animationDelay: "120ms" }}
        >
          HEAVY POWER PRESTIGE {" "} <br />
          <span className="text-brand"> SERVICE.</span>
        </h1>

        <p
          className="rise px-2 mt-4 max-w-xl text-lg font-black leading-relaxed text-neutral-300"
          style={{ animationDelay: "240ms" }}
        >
        Reliable construction and mining equipment hire in Tzaeen .
        Premium machinery , maintained to the highest industrial standards , delivered across South Africa .
        </p>

        <div
          className="rise mt-10 flex flex-wrap gap-4"
          style={{ animationDelay: "360ms" }}
>
  <Link
  href="/contact"
  className="group mt-[-20] inline-flex flex-col gap-4  text-sm font-bold uppercase tracking-[0.25em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand"
>
  Get a Quote
  <span className="flex items-center text-brand">
    <span className="block  h-0.5 w-42 bg-current transition-all duration-500 ease-out group-hover:w-48" />
    <svg
      width="20"
      height="10"
      viewBox="0 0 10 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="-ml-2"
      aria-hidden="true"
    >
      <path d="M2 2l6 6-6 6" />
    </svg>
  </span>
</Link>
        </div>
      </div>
    </section>
  );
}
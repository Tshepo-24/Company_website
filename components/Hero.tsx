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
        <p className="rise px-2 flex items-center font-black gap-4 text-sm  uppercase tracking-[0.3em] text-white
        ">
       
         RELIABE EQUIPMENT FOR HIRE
        </p>

        <h1
          className="rise mt-2 max-w-3xl font-display text-6xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-8xl"
          style={{ animationDelay: "120ms" }}
        >
          HEAVY POWER <span className="text-brand"> PRESTIGE {" "} </span>
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
  className="group relative inline-flex items-center gap-4 px-2  overflow-hidden rounded-md border-2 py-4 pl-15 pr-15 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-lg shadow-[#02163e]/20 transition-colors duration-300  focus-visible:outline-2 focus-visible:outline-offset-4 "
>
  {/* Orange fill that sweeps in on hover */}
  <span
    aria-hidden="true"
    className="absolute inset-0 origin-left scale-x-5  transition-transform duration-500 ease-out group-hover:scale-x-100"
  />

  <span className="relative font-black">Get a quote</span>

 
</Link>
        </div>
      </div>
    </section>
  );
}
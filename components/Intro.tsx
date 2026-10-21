{/*import Image from "next/image";
import { fleet } from "@/lib/fleet";

// When you have a wide photo, put it in public/ and set it here, for example "/intro.jpg"
const introImage: string | undefined = "/about.jpg";


export default function Intro() {
  return (
    <section
      id="about"
      className="relative z-10 -mt-16 scroll-mt-40 rounded-t-[2.5rem] bg-sand text-neutral-900"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-24">
       {/* <p className="flex items-center px-1 font-black gap-4   uppercase tracking-[0.1em] text-neutral-1000">
          <span className=" h-2 w-10 bg-brand" />
           PLANT HIRE YOU CAN RELY ON
        </p>

        <div className="mt-4 grid gap-8 text-xl leading-relaxed font-black text-neutral-700  md:gap-16">
          <p>
           When a job is waiting ,
            you need a machine that starts  and a supplier who picks up the phone . <br />
            That is what we aim for on every hire 
          </p>
          
        </div>

        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-800 lg:aspect-[21/9]">
          {introImage && (
            <Image
              src={introImage}
              alt="LJ Plant Hire equipment on site"
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          )}
        </div>

      
      </div>
    </section>
  );
}*/}
import Image from "next/image";

// When you have a wide photo, put it in public/ and set it here, for example "/intro.jpg"
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
      className="relative z-10 -mt-16 scroll-mt-40 rounded-t-[3.5rem]  bg-[#02163e] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 lg:py-24">
        <p className="flex items-center px-1 font-black gap-4   uppercase tracking-[0.1em] text-neutral-1000">
          <span className=" h-2 w-10 bg-brand" />
           PLANT HIRE YOU CAN RELY ON
        </p>
        {/* Headline + At a glance */}
        <div className="grid mt-3 items-center gap-10 lg:grid-cols-[1.5fr_1.2fr] lg:gap-20">

          <h2 className="text-5xl font-bold  uppercase leading-[1.1] tracking-tight sm:text-4xl lg:text-4xl">
            When a job is waiting, a machine that does not start costs you
            time and money. So we keep ours maintained and{" "}
          ready to work.
          </h2>

          <div >
            

            <dl className="mt-0 space-y-5">
              {glance.map((item) => (
                <div key={item.label} className="flex items-baseline gap-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                    {item.label}
                  </dt>
                  <span
                    aria-hidden
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

        {/* Image */}
        <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-800 lg:aspect-[21/9]">
          {introImage && (
            <Image
              src={introImage}
              alt="LJ Plant Hire equipment on site"
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              className="object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
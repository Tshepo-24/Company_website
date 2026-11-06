import SectionHeading from "@/components/SectionHeading";

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

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-32 overflow-hidden bg-sand py-16 text-slate-900 lg:py-24"
    >
      {/* Faint excavator drawing behind the content */}
      <svg
        aria-hidden="true"
        viewBox="0 0 640 380"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute -top-2 right-0 hidden w-[40rem] text-slate-900/10 lg:block xl:right-16"
      >
        {/* Tracks */}
        <rect x="70" y="290" width="340" height="62" rx="31" />
        <circle cx="101" cy="321" r="18" />
        <circle cx="379" cy="321" r="18" />
        <circle cx="180" cy="327" r="8" />
        <circle cx="240" cy="327" r="8" />
        <circle cx="300" cy="327" r="8" />
        {/* Body */}
        <path d="M100 290V252H390V290" />
        <path d="M300 252V214H382L396 252" />
        {/* Cab */}
        <path d="M130 252L142 188H256V252" />
        <path d="M158 204H240V240H152Z" />
        {/* Boom, arm and cylinder */}
        <path d="M256 210L412 92" />
        <path d="M274 236L432 112" />
        <path d="M412 92L528 214" />
        <path d="M432 112L546 204" />
        <path d="M300 226L396 142" />
        {/* Bucket */}
        <path d="M528 214L586 238L556 272L512 240Z" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="How it works"
          title="Hiring a machine in three steps"
        />

        <ol className="mt-12 grid border-t border-slate-300 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="border-t border-slate-300 py-8 first:border-t-0 md:border-t-0 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0"
            >
              <span className="font-display text-sm font-bold tracking-widest text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-slate-600">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
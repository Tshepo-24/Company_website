import type { Metadata } from "next";
import Fleet from "@/components/Fleet";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Equipment for Hire",
  description:
    "Hire TLBs, excavators, tipper trucks, a motor grader, a diesel bowser and a water tanker for construction and mining. See the rates for each machine.",
  alternates: { canonical: "/equipment" },
};

export default function EquipmentPage() {
  return (
    <main>
      <section className="bg-[#02163e] pb-16 pt-36 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="flex items-center gap-4 text-sm font-black uppercase tracking-[0.1em]">
            <span className="h-2 w-10 bg-brand" />
            Equipment for hire
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl">
            Plant hire equipment for{" "}
            <span className="text-brand">construction &amp; mining</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Choose a machine to see its rates, what it is used for and how to
            hire it.
          </p>
        </div>
      </section>

      <Fleet />
      <CtaBand />
    </main>
  );
}
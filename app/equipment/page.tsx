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
      <section className="bg-navy pb-16 pt-36 text-white lg:pb-20 lg:pt-44">
        <div className="wrap">
          <p className="eyebrow">Equipment for hire</p>
          <h1 className="mt-3 max-w-3xl">
            Plant hire equipment for construction and mining
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
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
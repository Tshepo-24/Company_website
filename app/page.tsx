import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FleetShowcase from "@/components/FleetShowcase";

import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: { absolute: "Plant Hire for Construction & Mining | LJ Plant Hire" },
  description:
    "Hire excavators, TLBs, trucks, motor graders and water tankers for construction and mining. Clear hourly rates. Call or WhatsApp for a quote.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <FleetShowcase />
      <Faq />
      <CtaBand />
    </main>
  );
}
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import FleetPanels from "@/components/FleetPanels";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import WhyHire from "@/components/WhyHire";
   import StoryScroll from "@/components/StoryScroll";
   import Fleet from "@/components/Fleet";
   import JobGuide from "@/components/JobGuide";

export const metadata: Metadata = {
  title: { absolute: "Plant Hire for Construction & Mining | LJ Plant Hire" },
  description:
    "Hire excavators, TLBs, trucks, motor graders and water tankers for construction and mining. Clear hourly rates. Call or WhatsApp for a quote.",
};

export default function Home() {
  return (
    <main>
      <Hero />
       <Fleet />
     
  <JobGuide />
  <StoryScroll  />
   
    
      
      
    </main>
  );
}
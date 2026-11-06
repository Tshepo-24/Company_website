import type { Metadata } from "next";
import Hero from "@/components/Hero";
import WhyHire from "@/components/WhyHire";
import HowItWorks from "@/components/HowItWorks";
import FleetCarousel from "@/components/FleetCarousel";
import CtaBand from "@/components/CtaBand";
import FaqSection from "@/components/FaqSection";
import WhoWeAre from "@/components/WhoWeAre";


   
  
 
   import MachineMarquee from "@/components/MachineMarquee";

export const metadata: Metadata = {
  title: { absolute: "Plant Hire for Construction & Mining | LJ Plant Hire" },
  description:
    "Hire excavators, TLBs, trucks, motor graders and water tankers for construction and mining. Clear hourly rates. Call or WhatsApp for a quote.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      
       
       <FleetCarousel />
    <MachineMarquee />
 <WhoWeAre />

 <WhyHire />
<HowItWorks />
  
<FaqSection />
<CtaBand />
  
   
    
      
      
    </main>
  );
}
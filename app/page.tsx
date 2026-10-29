import type { Metadata } from "next";
import Hero from "@/components/Hero";


import CtaBand from "@/components/CtaBand";


   import StoryScroll from "@/components/StoryScroll";
   import Fleet from "@/components/Fleet";
   import JobGuide from "@/components/JobGuide";
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
      <MachineMarquee />
       <Fleet />
     <MachineMarquee />
  <JobGuide />
  <MachineMarquee />
  <StoryScroll  />
  
  <CtaBand/>
  
   
    
      
      
    </main>
  );
}
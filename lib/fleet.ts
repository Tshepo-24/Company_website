export type Machine = {
  slug: string; // must match the folder name in app/
  name: string;
  summary: string;
  rate?: string; // for example "R585/hr". Leave it out to show "Call for rate"
  image?: string; // for example "/fleet/excavators.jpg"
};

export const fleet: Machine[] = [
  {
    slug: "excavators",
    name: "Excavators",
    summary: "22 ton excavators for digging, loading and trenching.",
    rate: "R585/hr",
  },
  {
    slug: "tlb",
    name: "TLB's",
    summary: "Backhoe loaders for digging and loading on tight sites.",
    rate: "R395/hr",
  },
  {
    slug: "trucks",
    name: "Trucks",
    summary: "10 cube tippers and 35 cube side tippers for hauling.",
    rate: "R355/hr",
  },
  {
    slug: "motor-grader",
    name: "Motor Grader",
    summary: "Grading and levelling for roads and large sites.",
  },
  {
    slug: "diesel-bowser",
    name: "Diesel Bowser",
    summary: "Diesel delivered to your machines on site.",
  },
  {
    slug: "water-tanker",
    name: "Water Tanker",
    summary: "18 000 litre water tankers for dust control and more.",
  },
];
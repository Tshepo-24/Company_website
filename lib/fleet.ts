export type Machine = {
  slug: string; // becomes the web address: /equipment/<slug>
  name: string;
  category: "Earthmoving" | "Haulage" | "Support";
  summary: string;
  rate: number; // in rand
  unit: "hour" | "day";
  image: string;
};

export const fleet: Machine[] = [
  {
    slug: "tlb-backhoe-loader",
    name: "TLB Backhoe Loader",
    category: "Earthmoving",
    summary: "Digs, loads and trenches on tight sites.",
    rate: 395,
    unit: "hour",
    image: "/fleet/tlb-backhoe-loader.jpg",
  },
  {
    slug: "22-ton-excavator",
    name: "22 Ton Excavator",
    category: "Earthmoving",
    summary: "Heavy digging, loading and trenching.",
    rate: 585,
    unit: "hour",
    image: "/fleet/22-ton-excavator.png",
  },
  {
    slug: "10-cube-tipper-truck",
    name: "10 Cube Tipper Truck",
    category: "Haulage",
    summary: "Hauls gravel, sand and rubble.",
    rate: 355,
    unit: "hour",
    image: "/fleet/10-cube-tipper-truck.png",
  },
  {
    slug: "35-cube-side-tipper",
    name: "35 Cube Power Star Side Tipper",
    category: "Haulage",
    summary: "High-capacity hauling for bulk and mining work.",
    rate: 7500,
    unit: "day",
    image: "/fleet/35-cube-side-tipper-truck.png",
  },
  {
    slug: "motor-grader",
    name: "Motor Grader",
    category: "Earthmoving",
    summary: "Grades and levels roads and large sites.",
    rate: 685,
    unit: "hour",
    image: "/fleet/motor-grader.jpg",
  },
  {
    slug: "1000l-diesel-bowser",
    name: "1000L Diesel Bowser",
    category: "Support",
    summary: "Diesel delivered to your machines on site.",
    rate: 485,
    unit: "day",
    image: "/fleet/1000l-diesel-bowser.png",
  },
  {
    slug: "18000l-water-tanker",
    name: "18000L Water Tanker",
    category: "Support",
    summary: "Dust control and water supply on site.",
    rate: 395,
    unit: "hour",
    image: "/fleet/18000l-water-tanker.png",
  },
];

export const machineHref = (m: Machine) => `/equipment/${m.slug}`;

// 7500 -> "R7 500"
export const money = (n: number) =>
  "R" + String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
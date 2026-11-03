export type MachineContent = {
  heading: string; // the page's main heading (h1)
  intro: string;
  uses: string[];
  facts: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
};

// The key is the machine's slug from lib/fleet.ts
export const content: Record<string, MachineContent> = {
  "tlb-backhoe-loader": {
    heading: "TLB Backhoe Loader Hire",
    intro:
      "A TLB (tractor loader backhoe) has a loader bucket at the front and a digging arm at the back, so one machine can dig, load and move material. It is compact enough for small and tight sites, which makes it one of the most useful machines on any job.",
    uses: [
      "Digging trenches for pipes, cables and drains",
      "Digging foundations and holes for small buildings",
      "Loading trucks with sand, gravel and soil",
      "Moving material around the site",
      "Clearing rubble and levelling small areas",
    ],
    facts: [
      { label: "Machine", value: "TLB backhoe loader" },
      { label: "Best for", value: "Small and tight sites" },
    ],
    faqs: [
      {
        q: "What is a TLB?",
        a: "TLB stands for tractor loader backhoe. It has a loader bucket at the front for scooping and loading, and a backhoe arm at the back for digging.",
      },
      {
        q: "Should I hire a TLB or an excavator?",
        a: "A TLB suits smaller digging jobs and loading, especially where space is tight. An excavator digs deeper and moves more ground. Tell us about the job and we will help you choose.",
      },
    ],
  },

  "22-ton-excavator": {
    heading: "22 Ton Excavator Hire",
    intro:
      "A 22 ton excavator is a heavy digging machine built for large trenches, foundations and bulk earthmoving. It digs deeper and moves more material than a TLB and loads trucks quickly, which makes it the main machine on most construction and mining sites.",
    uses: [
      "Digging trenches and large foundations",
      "Loading tipper trucks quickly",
      "Excavating and shaping ground",
      "Mining and quarry work",
      "Removing rubble, topsoil and waste",
    ],
    facts: [
      { label: "Machine", value: "Excavator" },
      { label: "Size", value: "22 ton class" },
    ],
    faqs: [
      {
        q: "What can a 22 ton excavator do?",
        a: "It digs trenches and foundations, loads trucks, breaks ground and moves large amounts of soil and rock. It is the machine most big earthmoving jobs are built around.",
      },
      {
        q: "What does 22 ton mean?",
        a: "It is the size class of the machine, based on its weight. A heavier excavator digs deeper and reaches further, but it needs more space and is usually moved on a low-bed truck.",
      },
    ],
  },

  "10-cube-tipper-truck": {
    heading: "10 Cube Tipper Truck Hire",
    intro:
      "A 10 cube tipper truck carries about ten cubic metres of material and tips it out at the back. It is the everyday haulage truck for sand, gravel, soil and rubble, and a good partner for an excavator or TLB.",
    uses: [
      "Hauling gravel, sand and soil",
      "Carrying rubble away from site",
      "Delivering material to where it is needed",
      "Working with an excavator or TLB to load and haul",
      "Moving material over short and medium distances",
    ],
    facts: [
      { label: "Machine", value: "Tipper truck" },
      { label: "Capacity", value: "10 cubic metres" },
    ],
    faqs: [
      {
        q: "What does 10 cube mean?",
        a: "It is the volume the truck body can carry: ten cubic metres of material.",
      },
      {
        q: "What can a tipper truck carry?",
        a: "Loose material such as sand, gravel, soil and rubble. Tell us what you are hauling so we can confirm it is suitable.",
      },
    ],
  },

  "35-cube-side-tipper": {
    heading: "35 Cube Power Star Side Tipper Hire",
    intro:
      "The 35 cube Power Star side tipper is a large truck and trailer for hauling bulk material in volume. A side tipper empties its load to the side, which is quicker to offload than a rear tipper and suits mining and large bulk-haulage jobs.",
    uses: [
      "Hauling ore, aggregate, sand and other bulk material",
      "High-volume haulage on mining sites",
      "Large construction and earthworks projects",
      "Moving material over longer distances",
      "Quick offloading to the side",
    ],
    facts: [
      { label: "Machine", value: "Side tipper truck" },
      { label: "Capacity", value: "35 cubic metres" },
    ],
    faqs: [
      {
        q: "What is a side tipper?",
        a: "A side tipper tips its load out to the side instead of the back. It offloads faster and works where there is not enough room behind the truck.",
      },
      {
        q: "How is the side tipper charged?",
        a: "By the day. The rate is shown at the top of this page.",
      },
    ],
  },

  "motor-grader": {
    heading: "Motor Grader Hire",
    intro:
      "A motor grader has a long blade under the middle of the machine that cuts, spreads and levels ground to a fine finish. It shapes roads, platforms and large flat areas before they are surfaced or built on.",
    uses: [
      "Building and maintaining gravel roads",
      "Levelling building platforms",
      "Shaping haul roads on mining sites",
      "Spreading and smoothing gravel",
      "Preparing large areas for surfacing",
    ],
    facts: [
      { label: "Machine", value: "Motor grader" },
      { label: "Best for", value: "Roads and large sites" },
    ],
    faqs: [
      {
        q: "What does a motor grader do?",
        a: "It levels and shapes ground with its long blade. It is used to build and maintain gravel roads and to prepare flat platforms.",
      },
      {
        q: "Do I need a water tanker with a grader?",
        a: "On roads and platforms, water settles the dust and helps the surface compact. Many jobs use a grader and a water tanker together, so ask us about hiring both.",
      },
    ],
  },

  "1000l-diesel-bowser": {
    heading: "1000L Diesel Bowser Hire",
    intro:
      "A diesel bowser is a mobile fuel tank on a trailer. Hiring one lets you fuel your machines on site, without sending them away to a filling station, which saves time on busy jobs.",
    uses: [
      "Fuelling excavators, TLBs and trucks on site",
      "Keeping machines working through the day",
      "Remote sites far from a filling station",
      "Construction and mining projects",
      "Farm and forestry work",
    ],
    facts: [
      { label: "Machine", value: "Diesel bowser" },
      { label: "Capacity", value: "1000 litres" },
    ],
    faqs: [
      {
        q: "How much does the bowser hold?",
        a: "It holds 1000 litres of diesel.",
      },
      {
        q: "Is the diesel included in the hire rate?",
        a: "The rate on this page is for hiring the bowser. Ask us about supplying the diesel when you request a quote.",
      },
    ],
  },

  "18000l-water-tanker": {
    heading: "18000L Water Tanker Hire",
    intro:
      "An 18 000 litre water tanker is a large truck that carries and sprays water. On site it keeps dust down on haul roads and around the work area, and it supplies water for compaction and other jobs.",
    uses: [
      "Dust control on haul roads and sites",
      "Water for compacting roads and platforms",
      "Supplying water to remote sites",
      "Washing down equipment and work areas",
      "Mining and construction projects",
    ],
    facts: [
      { label: "Machine", value: "Water tanker" },
      { label: "Capacity", value: "18 000 litres" },
    ],
    faqs: [
      {
        q: "What is a water tanker used for?",
        a: "Mostly dust control on roads and sites. It also supplies water for compaction and general site use.",
      },
      {
        q: "How much water does it carry?",
        a: "The tanker carries 18 000 litres.",
      },
    ],
  },
};
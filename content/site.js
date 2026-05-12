export const siteSettings = {
  name: "BlackHawk Ventures",
  tagline: "What Lasts, Leads.",
  description:
    "Black Hawk Ventures is a Premium Venture Umbrella rooted in Real-Estate development and expanding across Food, Petroleum and Energy, Technology, and Commercial Town Planning.",
  primaryFocus: "Real-Estate Developers with Multi-Sector Ambition.",
  footerNote:
    "Built as a Premium Venture House with Real-Estate at its Core and Long-Horizon Expansion across Strategic Sectors.",
};

export const brandAssets = {
  horizontal: {
    src: "/brand/hawk.png",
  },
  shield: {
    src: "/brand/hawk.png",
  },
};

export const primaryNavigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/ventures", label: "Ventures" },
  { href: "/contact", label: "Contact" },
];

export const coreSectors = [
  {
    slug: "Real-Estate-Development",
    index: "01",
    title: "Real-Estate Development",
    summary:
      "The Anchor Business: Land, Communities, Mixed-Use Assets and Destination Developments with Long-Term Commercial Weight.",
    detail:
      "Black Hawk approaches Real-Estate as its Operating Foundation with Focus on Premium Positioning, Disciplined Planning and Assets Built to Endure.",
    focusAreas: [
      "Residential Communities",
      "Mixed-Use Developments",
      "Land Strategy and Plotting",
    ],
    featured: true,
  },
  {
    slug: "Food-Ventures",
    index: "02",
    title: "Food Ventures",
    summary:
      "Consumer-Facing Brands and Hospitality concepts designed for Presence, Loyalty and Scalable Visibility.",
    detail:
      "Food sits inside the Black Hawk Umbrella as a Brand-forward sector where Operational precision and Customer Experience matter Equally.",
    focusAreas: [
      "Hospitality Concepts",
      "Scalable Food Brands",
      "Experience-Led Retail",
    ],
  },
  {
    slug: "Petroleum-and-Energy",
    index: "03",
    title: "Petroleum & Energy",
    summary:
      "Strategic Energy Opportunities shaped around Reliability, Infrastructure Logic and Long-Horizon Operating Value.",
    detail:
      "The Energy Arm is Positioned for Ventures where Infrastructure Discipline, Delivery Confidence and Durable Relevance create Real Leverage.",
    focusAreas: [
      "Distribution Models",
      "Infrastructure-Led Growth",
      "Operational Resilience",
    ],
  },
  {
    slug: "Technology",
    index: "04",
    title: "Technology",
    summary:
      "Digital Products and Operational platforms that support Ventures, Properties and Communities Functioning at Scale.",
    detail:
      "Technology inside Black Hawk Ventures is not Decorative. It is intended to Strengthen Operations, Improve Delivery and Open Scalable New Venture Paths.",
    focusAreas: [
      "Operational Platforms",
      "Digital Ventures",
      "Smart Systems for Growth",
    ],
    featured: true,
  },
  {
    slug: "Commercial-Town-Planning",
    index: "05",
    title: "Commercial Town Planning",
    summary:
      "Vision-Led planning for Commercial Zones and Ecosystems where Infrastructure, Movement, Commerce and Utility Align.",
    detail:
      "Town Planning extends the Real-Estate foundation into broader Commercial Environments, Enabling Black Hawk Ventures to Shape Districts, not just Standalone Assets.",
    focusAreas: [
      "Commercial Districts",
      "Planning Frameworks",
      "Integrated Future-Ready Layouts",
    ],
    featured: true,
  },
];

export const brandPrinciples = [
  {
    index: "01",
    title: "Premium Positioning",
    description:
      "Every Venture is expected to carry Presence, Clarity and Brand Weight rather than Blend into Commodity Execution.",
  },
  {
    index: "02",
    title: "Selective Expansion",
    description:
      "The Brand Umbrella grows only where Strategic Fit, Operational Conviction and Durable Value can Coexist.",
  },
  {
    index: "03",
    title: "Long-Horizon Thinking",
    description:
      "Projects, Sectors and Partnerships are evaluated through a lens of Longevity instead of Short-Cycle Activity.",
  },
];

export const operatingSteps = [
  {
    title: "Acquire with Intent",
    description:
      "Black Hawk enters Opportunities where Location, Demand and Future Relevance create meaningful Strategic Edge.",
  },
  {
    title: "Plan with Ambition",
    description:
      "Concepts are Shaped through Premium Design Thinking, Commercial Logic and a Clear Long-term use Case.",
  },
  {
    title: "Develop with Precision",
    description:
      "Execution standards stay High whether the work is Property-Led, Infrastructure-Led or Venture-Led.",
  },
  {
    title: "Operate for Lasting Value",
    description:
      "The Goal is not Short-lived Activity. It is Relevance, Stature and Compounding Value over Time.",
  },
];

export const contactInterestOptions = coreSectors.map((sector) => sector.title);

export const contactDetails = {
  primaryNumber: "+923207479007",
  secondaryNumber: "+923397479001",
  email: "muhammadarif@blackhawkpk.com",
};

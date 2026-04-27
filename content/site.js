export const siteSettings = {
  name: "BlackHawk Ventures",
  tagline: "What Lasts, Leads.",
  description:
    "BlackHawk Ventures is a premium venture umbrella rooted in real-estate development and expanding across food, petroleum and energy, technology, and commercial town planning.",
  primaryFocus: "Real-estate developers with multi-sector ambition.",
  footerNote:
    "Built as a premium venture house with real estate at its core and long-horizon expansion across strategic sectors.",
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
    slug: "real-estate-development",
    index: "01",
    title: "Real-Estate Development",
    summary:
      "The anchor business: land, communities, mixed-use assets, and destination developments with long-term commercial weight.",
    detail:
      "BlackHawk Ventures approaches real estate as its operating foundation, with focus on premium positioning, disciplined planning, and assets built to endure.",
    focusAreas: [
      "Residential communities",
      "Mixed-use developments",
      "Land strategy and plotting",
    ],
    featured: true,
  },
  {
    slug: "food-ventures",
    index: "02",
    title: "Food Ventures",
    summary:
      "Consumer-facing brands and hospitality concepts designed for presence, loyalty, and scalable visibility.",
    detail:
      "Food sits inside the BlackHawk umbrella as a brand-forward sector where operational precision and customer experience matter equally.",
    focusAreas: [
      "Hospitality concepts",
      "Scalable food brands",
      "Experience-led retail",
    ],
  },
  {
    slug: "petroleum-and-energy",
    index: "03",
    title: "Petroleum & Energy",
    summary:
      "Strategic energy opportunities shaped around reliability, infrastructure logic, and long-horizon operating value.",
    detail:
      "The energy arm is positioned for ventures where infrastructure discipline, delivery confidence, and durable relevance create real leverage.",
    focusAreas: [
      "Distribution models",
      "Infrastructure-led growth",
      "Operational resilience",
    ],
  },
  {
    slug: "technology",
    index: "04",
    title: "Technology",
    summary:
      "Digital products and operational platforms that support how ventures, properties, and communities function at scale.",
    detail:
      "Technology inside BlackHawk Ventures is not decorative. It is intended to strengthen operations, improve delivery, and open scalable new venture paths.",
    focusAreas: [
      "Operational platforms",
      "Digital ventures",
      "Smart systems for growth",
    ],
    featured: true,
  },
  {
    slug: "commercial-town-planning",
    index: "05",
    title: "Commercial Town Planning",
    summary:
      "Vision-led planning for commercial zones and ecosystems where infrastructure, movement, commerce, and utility align.",
    detail:
      "Town planning extends the real-estate foundation into broader commercial environments, enabling BlackHawk Ventures to shape districts, not just standalone assets.",
    focusAreas: [
      "Commercial districts",
      "Planning frameworks",
      "Integrated future-ready layouts",
    ],
    featured: true,
  },
];

export const brandPrinciples = [
  {
    index: "01",
    title: "Premium Positioning",
    description:
      "Every venture is expected to carry presence, clarity, and brand weight rather than blend into commodity execution.",
  },
  {
    index: "02",
    title: "Selective Expansion",
    description:
      "The umbrella grows only where strategic fit, operational conviction, and durable value can coexist.",
  },
  {
    index: "03",
    title: "Long-Horizon Thinking",
    description:
      "Projects, sectors, and partnerships are evaluated through a lens of longevity instead of short-cycle activity.",
  },
];

export const operatingSteps = [
  {
    title: "Acquire with intent",
    description:
      "BlackHawk Ventures enters opportunities where location, demand, and future relevance create meaningful strategic edge.",
  },
  {
    title: "Plan with ambition",
    description:
      "Concepts are shaped through premium design thinking, commercial logic, and a clear long-term use case.",
  },
  {
    title: "Develop with precision",
    description:
      "Execution standards stay high whether the work is property-led, infrastructure-led, or venture-led.",
  },
  {
    title: "Operate for lasting value",
    description:
      "The goal is not short-lived activity. It is relevance, stature, and compounding value over time.",
  },
];

export const contactInterestOptions = coreSectors.map((sector) => sector.title);

export const contactDetails = {
  primaryNumber: "+923207479007",
  secondaryNumber: "+923397479001",
  email: "muhammadarif@blackhawkpk.com",
};

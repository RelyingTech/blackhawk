import { contactDetails } from "@/content/site";

export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Start the conversation with BlackHawk Ventures.",
    description:
      "Use the contact form to discuss development opportunities, strategic partnerships, future ventures, or general business inquiries.",
    highlights: [
      {
        label: "Channel",
        title: "Working inquiry form",
        description:
          "Messages submitted here are processed by the site and stored locally for review.",
      },
      {
        label: "Use case",
        title: "Partnership and development discussions",
        description:
          "Suitable for land opportunities, commercial planning conversations, and multi-sector partnerships.",
      },
      {
        label: "Next step",
        title: "Structured follow-up",
        description:
          "The form creates a clean intake path that can later be connected to email or CRM systems.",
      },
      {
        label: "Direct line",
        title: "Call or email directly",
        description:
          "Primary number, secondary number, and official contact email are now available on this page.",
      },
    ],
  },
  formIntro: {
    eyebrow: "Inquiry Form",
    title: "Send your inquiry directly from the site.",
    description:
      "This form is fully wired through a Next.js API route. Submissions are validated and stored locally so the site is not just a visual placeholder.",
  },
  inquiryTypes: [
    {
      label: "Inquiry type",
      title: "Development opportunities",
      description:
        "Reach out for land, plotting, mixed-use development, or commercial planning discussions.",
    },
    {
      label: "Inquiry type",
      title: "Strategic partnerships",
      description:
        "Use the form for joint ventures, brand partnerships, and high-conviction sector collaborations.",
    },
    {
      label: "Inquiry type",
      title: "General business inquiries",
      description:
        "The contact system also supports broader communication alongside direct phone and email access.",
    },
  ],
  directContact: {
    label: "Direct Contact",
    title: "Reach BlackHawk Ventures directly.",
    description:
      "Use the contact form for structured inquiries, or connect directly using the numbers and email below.",
    items: [
      {
        label: "Primary Number",
        value: contactDetails.primaryNumber,
        href: `tel:${contactDetails.primaryNumber}`,
      },
      {
        label: "Secondary Number",
        value: contactDetails.secondaryNumber,
        href: `tel:${contactDetails.secondaryNumber}`,
      },
      {
        label: "Email",
        value: contactDetails.email,
        href: `mailto:${contactDetails.email}`,
      },
    ],
  },
};

import { contactDetails } from "@/content/site";

export const contactContent = {
  hero: {
    eyebrow: "Contact",
    title: "Start the Conversation with BlackHawk Ventures.",
    description:
      "Use the Contact Form to discuss Development Opportunities, Strategic Partnerships, Future Ventures or General Business Inquiries.",
    highlights: [
      {
        label: "Channel",
        title: "Working Inquiry Form",
        description:
          "Messages submitted here are processed by the Site and stored locally for Review.",
      },
      {
        label: "Use case",
        title: "Partnership and Development Discussions",
        description:
          "Suitable for Land Opportunities, Commercial Planning Conversations and Multi-Sector Partnerships.",
      },
      {
        label: "Next step",
        title: "Structured Follow-Up",
        description:
          "The Form creates a clean Intake Path that can later be connected to Email or CRM Systems.",
      },
      {
        label: "Direct line",
        title: "Call or Email Directly",
        description:
          "Primary Number, Secondary Number and Official Contact Email are now available on this Page.",
      },
    ],
  },
  formIntro: {
    eyebrow: "Inquiry Form",
    title: "Send Your Inquiry Directly from the Site.",
    description:
      "This Form is fully wired through a Next.js API Route. Submissions are validated and stored locally so the Site is not just a visual placeholder.",
  },
  inquiryTypes: [
    {
      label: "Inquiry type",
      title: "Development opportunities",
      description:
        "Reach out for Land, Plotting, Mixed-Use Development or Commercial Planning Discussions.",
    },
    {
      label: "Inquiry type",
      title: "Strategic partnerships",
      description:
        "Use the Form for Joint Ventures, Brand Partnerships and High-Conviction Sector Collaborations.",
    },
    {
      label: "Inquiry type",
      title: "General business inquiries",
      description:
        "The Contact System also supports broader Communication alongside direct Phone and Email Access.",
    },
  ],
  directContact: {
    label: "Direct Contact",
    title: "Reach BlackHawk Ventures Directly.",
    description:
      "Use the Contact Form for structured Inquiries, or connect directly using the Numbers and Email below.",
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

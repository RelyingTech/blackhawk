import ContactForm from "@/components/contact-form";
import Reveal from "@/components/reveal";
import PageHero from "@/components/page-hero";
import { contactContent } from "@/content/contact";

export const metadata = {
  title: "Contact | BlackHawk Ventures",
  description:
    "Use the BlackHawk Ventures contact form to discuss development opportunities, partnerships, and future ventures.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactContent.hero.eyebrow}
        title={contactContent.hero.title}
        description={contactContent.hero.description}
        items={contactContent.hero.highlights}
      />

      <section className="section section-spaced">
        <div className="contact-layout">
          <Reveal className="form-shell">
            <div className="form-intro">
              <p className="eyebrow">{contactContent.formIntro.eyebrow}</p>
              <h2>{contactContent.formIntro.title}</h2>
              <p>{contactContent.formIntro.description}</p>
            </div>
            <ContactForm />
          </Reveal>

          <div className="grid-3" style={{ gridTemplateColumns: "1fr", gap: "1rem" }}>
            {contactContent.inquiryTypes.map((item) => (
              <Reveal as="article" className="info-card" key={item.title}>
                <span className="status-pill">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Reveal>
            ))}

            <Reveal as="article" className="info-card">
              <span className="status-pill">{contactContent.directContact.label}</span>
              <h3>{contactContent.directContact.title}</h3>
              <p>{contactContent.directContact.description}</p>
              <div className="contact-links">
                {contactContent.directContact.items.map((item) => (
                  <a className="contact-link" href={item.href} key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

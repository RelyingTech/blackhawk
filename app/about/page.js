import Reveal from "@/components/reveal";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import { aboutContent } from "@/content/about";
import { coreSectors } from "@/content/site";

export const metadata = {
  title: "About | BlackHawk Ventures",
  description:
    "Learn how BlackHawk Ventures is building a premium venture umbrella rooted in real-estate development.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutContent.hero.eyebrow}
        title={aboutContent.hero.title}
        description={aboutContent.hero.description}
        items={aboutContent.hero.highlights}
      />

      <section className="section section-spaced">
        <div className="story-layout">
          <Reveal className="story-block">
            <p className="eyebrow">{aboutContent.story.eyebrow}</p>
            <h3>{aboutContent.story.title}</h3>
            {aboutContent.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="story-block">
            <p className="eyebrow">Core Beliefs</p>
            <div className="grid-3" style={{ gridTemplateColumns: "1fr", marginTop: "1rem" }}>
              {aboutContent.pillars.map((pillar) => (
                <article className="info-card" key={pillar.title}>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-spaced">
        <Reveal>
          <SectionHeading
            eyebrow={aboutContent.umbrellaModel.eyebrow}
            title={aboutContent.umbrellaModel.title}
            description={aboutContent.umbrellaModel.description}
          />
        </Reveal>

        <div className="grid-3">
          {aboutContent.umbrellaModel.items.map((item) => (
            <Reveal as="article" className="signal-card" key={item.title}>
              <span className="status-pill">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-spaced">
        <Reveal>
          <SectionHeading
            eyebrow="Sector Umbrella"
            title="Expansion stays aligned with one BlackHawk standard."
            description="The sectors below define the venture umbrella BlackHawk Ventures is structured to grow under a single premium identity."
          />
        </Reveal>

        <div className="card-grid">
          {coreSectors.map((sector) => (
            <Reveal
              as="article"
              className={`signal-card ${sector.featured ? "span-6" : "span-4"}`}
              key={sector.slug}
            >
              <span className="status-pill">{sector.index}</span>
              <h3>{sector.title}</h3>
              <p>{sector.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

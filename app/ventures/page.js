import Reveal from "@/components/reveal";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import { venturesContent } from "@/content/ventures";
import { coreSectors } from "@/content/site";

export const metadata = {
  title: "Ventures | BlackHawk Ventures",
  description:
    "See the venture sectors BlackHawk Ventures is building across real estate, food, petroleum and energy, technology, and town planning.",
};

export default function VenturesPage() {
  return (
    <>
      <PageHero
        eyebrow={venturesContent.hero.eyebrow}
        title={venturesContent.hero.title}
        description={venturesContent.hero.description}
        items={venturesContent.hero.highlights}
      />

      <section className="section section-spaced">
        <Reveal>
          <SectionHeading
            eyebrow={venturesContent.matrix.eyebrow}
            title={venturesContent.matrix.title}
            description={venturesContent.matrix.description}
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
              <ul>
                {sector.focusAreas.map((focus) => (
                  <li key={focus}>{focus}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-spaced">
        <div className="split-layout">
          {venturesContent.strategy.map((block) => (
            <Reveal className="story-block" key={block.title}>
              <p className="eyebrow">{block.eyebrow}</p>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

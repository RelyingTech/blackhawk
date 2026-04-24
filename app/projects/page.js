import Reveal from "@/components/reveal";
import PageHero from "@/components/page-hero";
import SectionHeading from "@/components/section-heading";
import { projectsContent } from "@/content/projects";

export const metadata = {
  title: "Projects | BlackHawk Ventures",
  description:
    "Explore the project structure BlackHawk Ventures can use to publish developments, portfolio categories, and live project milestones.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow={projectsContent.hero.eyebrow}
        title={projectsContent.hero.title}
        description={projectsContent.hero.description}
        items={projectsContent.hero.highlights}
      />

      <section className="section section-spaced">
        <Reveal className="story-block">
          <p className="eyebrow">{projectsContent.framework.eyebrow}</p>
          <h3>{projectsContent.framework.title}</h3>
          <p>{projectsContent.framework.description}</p>
        </Reveal>
      </section>

      <section className="section section-spaced">
        <Reveal>
          <SectionHeading
            eyebrow={projectsContent.categories.eyebrow}
            title={projectsContent.categories.title}
            description={projectsContent.categories.description}
          />
        </Reveal>

        <div className="card-grid">
          {projectsContent.categories.items.map((item) => (
            <Reveal
              as="article"
              className={`signal-card ${item.featured ? "span-6" : "span-4"}`}
              key={item.title}
            >
              <span className="status-pill">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="chip-row">
                {item.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-spaced">
        <Reveal>
          <SectionHeading
            eyebrow={projectsContent.cmsFields.eyebrow}
            title={projectsContent.cmsFields.title}
            description={projectsContent.cmsFields.description}
          />
        </Reveal>

        <div className="grid-3">
          {projectsContent.cmsFields.items.map((item) => (
            <Reveal as="article" className="field-card" key={item.title}>
              <span className="status-pill">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

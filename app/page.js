import Link from "next/link";

import Reveal from "@/components/reveal";
import BrandLogo from "@/components/brand-logo";
import SectionHeading from "@/components/section-heading";
import { homeContent } from "@/content/home";
import { brandPrinciples, coreSectors, operatingSteps } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-section section">
        <Reveal className="hero-copy">
          <p className="eyebrow">{homeContent.hero.eyebrow}</p>
          <h1>{homeContent.hero.title}</h1>
          <p className="hero-lead">{homeContent.hero.description}</p>

          <div className="button-row" style={{ marginTop: "2rem" }}>
            <Link className="button primary" href={homeContent.hero.primaryCta.href}>
              {homeContent.hero.primaryCta.label}
            </Link>
            <Link className="button secondary" href={homeContent.hero.secondaryCta.href}>
              {homeContent.hero.secondaryCta.label}
            </Link>
          </div>

          <div className="metric-grid">
            {homeContent.hero.highlights.map((item) => (
              <article className="hero-metric" key={item.label}>
                <span className="metric-label">{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal className="hero-panel panel">
          <div className="hero-panel-glow" />
          <div className="hero-panel-stack">
            <BrandLogo variant="shield" className="shield" priority />
            <BrandLogo variant="hero" className="hero" priority />
          </div>
          <div className="hero-panel-copy">
            <strong>{homeContent.hero.panelLabel}</strong>
            <h2>{homeContent.hero.panelTitle}</h2>
            <p>{homeContent.hero.panelDescription}</p>
          </div>
        </Reveal>
      </section>

      <Reveal as="section" className="section intro-band">
        <p>{homeContent.intro}</p>
      </Reveal>

      <section className="section section-spaced">
        <Reveal>
          <SectionHeading
            eyebrow={homeContent.venturesPreview.eyebrow}
            title={homeContent.venturesPreview.title}
            description={homeContent.venturesPreview.description}
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
              <p>{sector.summary}</p>
              <div className="chip-row">
                {sector.focusAreas.slice(0, 2).map((focus) => (
                  <span className="chip" key={focus}>
                    {focus}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: "1.4rem" }}>
          <Link className="button ghost" href="/ventures">
            View All Ventures
          </Link>
        </Reveal>
      </section>

      <section className="section section-spaced">
        <Reveal>
          <SectionHeading
            eyebrow={homeContent.projectsPreview.eyebrow}
            title={homeContent.projectsPreview.title}
            description={homeContent.projectsPreview.description}
          />
        </Reveal>

        <div className="grid-3">
          {homeContent.projectsPreview.items.map((item) => (
            <Reveal as="article" className="signal-card" key={item.title}>
              <span className="status-pill">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-spaced">
        <div className="split-layout">
          <Reveal className="story-block">
            <p className="eyebrow">{homeContent.strategy.eyebrow}</p>
            <h3>{homeContent.strategy.title}</h3>
            {homeContent.strategy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="story-block">
            <p className="eyebrow">Operating Standard</p>
            <div className="grid-3" style={{ gridTemplateColumns: "1fr", marginTop: "1rem" }}>
              {brandPrinciples.map((principle) => (
                <article className="info-card" key={principle.title}>
                  <span className="status-pill">{principle.index}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-spaced">
        <Reveal>
          <SectionHeading
            eyebrow="How We Build"
            title="A disciplined route from vision to durable value."
            description="BlackHawk Ventures approaches new ventures with the rigor of a developer and the selectivity of a long-horizon holding company."
          />
        </Reveal>

        <div className="grid-4">
          {operatingSteps.map((step) => (
            <Reveal as="article" className="step-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section-spaced">
        <Reveal className="story-block">
          <p className="eyebrow">{homeContent.closingCta.eyebrow}</p>
          <h3>{homeContent.closingCta.title}</h3>
          <p>{homeContent.closingCta.description}</p>
          <div className="button-row" style={{ marginTop: "1.5rem" }}>
            <Link className="button primary" href="/contact">
              {homeContent.closingCta.primaryCta.label}
            </Link>
            <Link className="button secondary" href="/about">
              {homeContent.closingCta.secondaryCta.label}
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

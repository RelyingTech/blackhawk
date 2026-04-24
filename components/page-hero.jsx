import BrandLogo from "@/components/brand-logo";
import Reveal from "@/components/reveal";

export default function PageHero({ eyebrow, title, description, items = [] }) {
  return (
    <section className="page-hero section">
      <Reveal className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </Reveal>

      <Reveal className="page-hero-panel panel">
        <div className="page-hero-glow" />
        <div className="page-hero-panel-stack">
          <BrandLogo variant="shield" className="shield" priority />
          <div className="page-hero-list">
            {items.map((item) => (
              <article key={item.title}>
                <span className="status-pill">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

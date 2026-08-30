import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/projects.json";
import Icon from "../components/Icon";
import SectionCTA from "../components/SectionCTA";
import { metricIcon, techClass, CATEGORY_ICON } from "../utils/projectMeta";

const FEATURED_IDS = ["track-my-container", "bat-sop", "unilever-argus"];
const FILTERS = ["All", "Industry", "Research", "Academic"];




export default function Projects({ defaultFilter = "All", compact = false }) {
  const [filter, setFilter] = useState(defaultFilter);

  const list = useMemo(() => {
    if (compact) return data.filter((p) => FEATURED_IDS.includes(p.id));

    const filtered = filter === "All" ? data : data.filter((p) => p.category === filter);
    return [...filtered].sort((a, b) => {
      const ai = FEATURED_IDS.indexOf(a.id);
      const bi = FEATURED_IDS.indexOf(b.id);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return 0;
    });
  }, [filter, compact]);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Icon name="repo" />
            Projects
          </span>
          <h2 className="section-title">{compact ? "Featured projects" : "All projects"}</h2>
          <p className="section-subtitle">
            Production systems across surveillance, logistics, manufacturing, and smart systems
          </p>
        </div>

        {!compact && (
          <div className="projects-filters" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? "active" : ""}`}
                aria-pressed={filter === f}
              >
                <span aria-hidden="true">{CATEGORY_ICON[f]}</span>
                {f === "All" ? "All projects" : f}
              </button>
            ))}
          </div>
        )}

        {!compact && (
          <p className="results-count" aria-live="polite">
            Showing {list.length} {list.length === 1 ? "project" : "projects"}
          </p>
        )}

        <div className="projects-list">
          {list.map((p) => (
            <article key={p.id} id={`project-${p.id}`} className="project-card-detailed">
              <header className="project-detailed-header">
                <div className="project-title-section">
                  <div className="project-title-row">
                    {p.companyLogo && (
                      <img
                        src={p.companyLogo}
                        alt=""
                        className={`project-company-logo${p.companyLogoStyle === "wide" ? " is-wide" : ""}`}
                        width="60"
                        height="60"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <h3 className="project-detailed-title">{p.title}</h3>
                  </div>
                  {p.company && (
                    <div className="project-meta-badges">
                      <span className="project-meta-badge company">{p.company}</span>
                      {p.timeline && <span className="project-meta-badge timeline">{p.timeline}</span>}
                      {p.scale && <span className="project-meta-badge scale">{p.scale}</span>}
                    </div>
                  )}
                </div>
                <span className={`project-category-badge ${p.category.toLowerCase()}`}>
                  <span aria-hidden="true">{CATEGORY_ICON[p.category] || "💼"}</span> {p.category}
                </span>
              </header>

              <div className="project-detailed-section">
                <h4 className="project-section-title">Overview</h4>
                <p className="project-overview-text">{p.summary}</p>
              </div>

              {p.features?.length > 0 && (
                <div className="project-detailed-section">
                  <h4 className="project-section-title">Key features</h4>
                  <ul className="project-features-grid">
                    {p.features.map((feature) => (
                      <li key={feature} className="project-feature-item">
                        <span className="feature-check-icon"><Icon name="check" size={18} /></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {p.metrics && Object.keys(p.metrics).length > 0 && (
                <div className="project-detailed-section">
                  <h4 className="project-section-title">Impact &amp; results</h4>
                  <ul className="project-metrics-grid">
                    {Object.entries(p.metrics).map(([key, value]) => (
                      <li key={key} className="project-metric-card">
                        <span className="metric-icon"><Icon name={metricIcon(key)} size={20} /></span>
                        <span className="metric-value">{value}</span>
                        <span className="metric-label">{key.replace(/_/g, " ")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="project-detailed-section">
                <h4 className="project-section-title">Technologies used</h4>
                <ul className="project-tech-badges">
                  {p.stack.map((tech) => (
                    <li key={tech} className={`tech-badge ${techClass(tech)}`}>{tech}</li>
                  ))}
                </ul>
              </div>

              <footer className="project-detailed-footer">
                {p.inDevelopment ? (
                  <p className="project-dev-notice">Project under development</p>
                ) : (
                  <Link to={`/projects/${p.id}`} className="project-cta-btn primary">
                    <Icon name="doc" size={18} />
                    View full case study
                    <span className="sr-only"> for {p.title}</span>
                  </Link>
                )}

                {(p.demoLink || p.demo) && (
                  <a
                    href={p.demoLink || p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-cta-btn secondary"
                  >
                    <Icon name="externalLink" size={18} />
                    Live demo
                    <span className="sr-only"> for {p.title} (opens in a new tab)</span>
                  </a>
                )}

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-cta-btn secondary"
                  >
                    <Icon name="home" size={18} />
                    GitHub
                    <span className="sr-only"> repository for {p.title} (opens in a new tab)</span>
                  </a>
                )}
              </footer>
            </article>
          ))}
        </div>

        {compact && <SectionCTA to="/projects">See all projects</SectionCTA>}
      </div>
    </section>
  );
}

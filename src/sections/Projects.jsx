import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import data from "../data/projects.json";
import Icon from "../components/Icon";
import SectionCTA from "../components/SectionCTA";
import { techClass, CATEGORY_ICON } from "../utils/projectMeta";

const FEATURED_IDS = ["track-my-container", "bat-sop", "unilever-argus", "anpr-bangla"];
const FILTERS = ["All", "Industry", "Research", "Academic"];




export default function Projects({ defaultFilter = "All", compact = false, asPage = false }) {
  const [filter, setFilter] = useState(defaultFilter);
  const Heading = asPage ? "h1" : "h2";
  const CardHeading = asPage ? "h2" : "h3";

  const list = useMemo(() => {
    if (compact) {
      return FEATURED_IDS.map((id) => data.find((p) => p.id === id)).filter(Boolean);
    }

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
          <Heading className="section-title">{compact ? "Featured projects" : "All projects"}</Heading>
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
                <Icon name={CATEGORY_ICON[f]} size={16} />
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

        <div className="projects-list projects-card-grid">
          {list.map((p) => (
            <article key={p.id} id={`project-${p.id}`} className="project-summary-card">
              {p.workflowImage && (
                <Link
                  to={`/projects/${p.id}`}
                  className="project-workflow-preview"
                  aria-label={`Open ${p.title} case study`}
                >
                  <img
                    src={p.workflowImage}
                    alt={`${p.title} workflow diagram`}
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              )}
              <div className="project-summary-body">
                <div className="project-summary-topline">
                  <span className={`project-category-badge ${p.category.toLowerCase()}`}>
                    <Icon name={CATEGORY_ICON[p.category] || "briefcase"} size={15} /> {p.category}
                  </span>
                  {p.company && <span className="project-summary-company">{p.company}</span>}
                </div>
                <div className="project-summary-heading">
                  {p.companyLogo && (
                    <img src={p.companyLogo.replace(/^\.\/assets/, "/assets")} alt="" className="project-summary-logo" width="44" height="44" loading="lazy" decoding="async" />
                  )}
                  <CardHeading>{p.title}</CardHeading>
                </div>
                <p className="project-summary-text">{p.summary}</p>
                <ul className="project-tech-badges">
                  {p.stack.slice(0, 5).map((tech) => (
                    <li key={tech} className={`tech-badge ${techClass(tech)}`}>{tech}</li>
                  ))}
                  {p.stack.length > 5 && (
                    <li className="tech-badge tech-badge-more">+{p.stack.length - 5} more</li>
                  )}
                </ul>
                <Link to={`/projects/${p.id}`} className="project-summary-link">
                  {p.inDevelopment ? "View project" : "View case study"}
                  <Icon name="arrowRight" size={16} />
                  <span className="sr-only">: {p.title}</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {compact && <SectionCTA to="/projects">See all projects</SectionCTA>}
      </div>
    </section>
  );
}

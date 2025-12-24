
import { useState } from "react";
import data from "../data/projects.json";
import { Link } from "react-router-dom";

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 21h18v-2H3v2zM5 10h3v9H5v-9zm5 0h3v9h-3v-9zm5 0h3v9h-3v-9zM5 8h13V6H5v2zm0-4h13V2H5v2z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
  </svg>
);

const MetricIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
  </svg>
);

const getTechColor = (tech) => {
  const techLower = tech.toLowerCase();
  if (techLower.includes('python')) return 'tech-python';
  if (techLower.includes('tensorflow')) return 'tech-tensorflow';
  if (techLower.includes('pytorch')) return 'tech-pytorch';
  if (techLower.includes('yolo')) return 'tech-yolo';
  if (techLower.includes('opencv')) return 'tech-opencv';
  if (techLower.includes('deeplearning') || techLower.includes('deep learning')) return 'tech-dl';
  if (techLower.includes('nlp') || techLower.includes('bert') || techLower.includes('transformer')) return 'tech-nlp';
  if (techLower.includes('fastapi') || techLower.includes('flask') || techLower.includes('django')) return 'tech-web';
  if (techLower.includes('docker') || techLower.includes('kubernetes')) return 'tech-devops';
  if (techLower.includes('postgres') || techLower.includes('mongodb') || techLower.includes('sql')) return 'tech-db';
  return 'tech-default';
};

const getCategoryIcon = (category) => {
  if (category === 'Industry') return '🏭';
  if (category === 'Research') return '📚';
  if (category === 'Academic') return '🎓';
  return '💼';
};

export default function Projects({ defaultFilter = "All", compact = false }){
  const [filter, setFilter] = useState(defaultFilter);
  const allProjects = filter==="All" ? data : data.filter(p=>p.category===filter);
  const list = compact ? allProjects.slice(0, 3) : allProjects;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
            </svg>
            Repositories
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production systems across surveillance, logistics, manufacturing, and smart systems
          </p>
        </div>

        {!compact && <div className="projects-filters">
          {["All", "Industry", "Research", "Academic"].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)} 
              className={`filter-btn ${filter === f ? "active" : ""}`}
            >
              {f === "All" ? "🗂️ All Projects" : `${getCategoryIcon(f)} ${f}`}
            </button>
          ))}
        </div>}

        <div className="projects-list">
          {list.map(p => (
            <div key={p.id} className="project-card-detailed">
              {/* Project Header */}
              <div className="project-detailed-header">
                <div className="project-title-section">
                  <h3 className="project-detailed-title">{p.title}</h3>
                  {p.company && (
                    <div className="project-meta-badges">
                      <span className="project-meta-badge company">
                        <BuildingIcon />
                        {p.company}
                      </span>
                      {p.timeline && (
                        <span className="project-meta-badge timeline">
                          <CalendarIcon />
                          {p.timeline}
                        </span>
                      )}
                      {p.scale && (
                        <span className="project-meta-badge scale">
                          {p.scale}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <span className={`project-category-badge ${p.category.toLowerCase()}`}>
                  {getCategoryIcon(p.category)} {p.category}
                </span>
              </div>

              {/* Overview Section */}
              <div className="project-detailed-section">
                <h4 className="project-section-title">Overview</h4>
                <p className="project-overview-text">{p.summary}</p>
              </div>

              {/* Key Features */}
              {p.features && p.features.length > 0 && (
                <div className="project-detailed-section">
                  <h4 className="project-section-title">Key Features</h4>
                  <div className="project-features-grid">
                    {p.features.map((feature, idx) => (
                      <div key={idx} className="project-feature-item">
                        <div className="feature-check-icon">
                          <CheckIcon />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact Metrics */}
              {p.metrics && Object.keys(p.metrics).length > 0 && (
                <div className="project-detailed-section">
                  <h4 className="project-section-title">Impact & Results</h4>
                  <div className="project-metrics-grid">
                    {Object.entries(p.metrics).map(([key, value]) => (
                      <div key={key} className="project-metric-card">
                        <div className="metric-icon">
                          <MetricIcon />
                        </div>
                        <div className="metric-value">{value}</div>
                        <div className="metric-label">{key.replace(/_/g, ' ')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Used */}
              <div className="project-detailed-section">
                <h4 className="project-section-title">Technologies Used</h4>
                <div className="project-tech-badges">
                  {p.stack.map((tech, idx) => (
                    <span key={idx} className={`tech-badge ${getTechColor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-detailed-footer">
                <Link to={`/projects/${p.id}`} className="project-cta-btn primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                  </svg>
                  View Full Case Study
                </Link>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-cta-btn secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-cta-btn secondary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {compact && (
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link to="/projects" className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
              See All Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

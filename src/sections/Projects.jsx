
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

const getMetricIcon = (metricKey) => {
  const key = metricKey.toLowerCase();
  
  // Accuracy/Precision/Performance metrics
  if (key.includes('accuracy') || key.includes('precision') || key.includes('auc') || key.includes('mota')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    );
  }
  
  // Speed/Time/Response/Resolution
  if (key.includes('time') || key.includes('speed') || key.includes('fps') || key.includes('latency') || key.includes('resolution')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    );
  }
  
  // Deployment/Scale/Coverage
  if (key.includes('deployment') || key.includes('coverage') || key.includes('cameras') || key.includes('sites') || key.includes('floor')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    );
  }
  
  // Volume/Quantity
  if (key.includes('containers') || key.includes('ops') || key.includes('daily') || key.includes('visitors') || key.includes('throughput') || key.includes('packages') || key.includes('tracked')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    );
  }
  
  // Reduction metrics
  if (key.includes('reduction') || key.includes('decrease') || key.includes('workload')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
      </svg>
    );
  }
  
  // Increase/Growth/Improvement
  if (key.includes('increase') || key.includes('growth') || key.includes('satisfaction') || key.includes('compliance') || key.includes('conversion')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    );
  }
  
  // Alert notification
  if (key.includes('alert')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
    );
  }
  
  // Multi-entities
  if (key.includes('multi') || key.includes('stages') || key.includes('stores') || key.includes('locations') || key.includes('process')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    );
  }
  
  // Safety/Incident
  if (key.includes('incident') || key.includes('safety')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
    );
  }
  
  // False positive/Error
  if (key.includes('false') || key.includes('error') || key.includes('rate')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    );
  }
  
  // Real-time/Live
  if (key.includes('real') && key.includes('time') || key.includes('live') || key.includes('rtsp')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
      </svg>
    );
  }
  
  // Dataset size
  if (key.includes('dataset') || key.includes('samples') || key.includes('recordings') || key.includes('records')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
      </svg>
    );
  }
  
  // Efficiency/Performance
  if (key.includes('efficiency') || key.includes('savings')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
      </svg>
    );
  }
  
  // Model/Best
  if (key.includes('model') || key.includes('best')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    );
  }
  
  // Default metric icon
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    </svg>
  );
};

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
  
  // Featured projects order
  const featuredIds = ["track-my-container", "bat-sop", "unilever-argus"];
  
  // Sort projects to show featured ones first
  const sortedProjects = [...allProjects].sort((a, b) => {
    const aIndex = featuredIds.indexOf(a.id);
    const bIndex = featuredIds.indexOf(b.id);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return 0;
  });
  
  const list = compact 
    ? data.filter(p => featuredIds.includes(p.id))
    : sortedProjects;

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
            <div key={p.id} id={`project-${p.id}`} className="project-card-detailed">
              {/* Project Header */}
              <div className="project-detailed-header">
                <div className="project-title-section">
                  <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px'}}>
                    {p.companyLogo && (
                      <img src={p.companyLogo} alt={p.company} style={{width: '60px', height: '60px', objectFit: 'contain', borderRadius: '4px'}} />
                    )}
                    <h3 className="project-detailed-title" style={{margin: 0}}>{p.title}</h3>
                  </div>
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
                {/* {p.inDevelopment && (
                  <span className="project-dev-badge" style={{marginLeft: '8px', background: 'rgba(219, 97, 162, 0.15)', color: '#db61a2', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '4px'}}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    Under Development
                  </span>
                )} */}
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
                          {getMetricIcon(key)}
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
                {p.inDevelopment ? (
                  <div className="project-dev-notice" style={{padding: '16px', background: 'rgba(219, 97, 162, 0.1)', borderRadius: '8px', textAlign: 'center'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{marginBottom: '8px', color: '#db61a2'}}>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                    <p style={{margin: 0, color: '#db61a2', fontWeight: '500'}}>Project Under Development</p>
                  </div>
                ) : (
                  <>
                    <Link to={`/projects/${p.id}`} className="project-cta-btn primary">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                      </svg>
                      View Full Case Study
                    </Link>
                    {p.demoLink && (
                      <a href={p.demoLink} target="_blank" rel="noopener noreferrer" className="project-cta-btn secondary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </>
                )}
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

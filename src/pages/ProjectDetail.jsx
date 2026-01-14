
import { useParams, Link } from "react-router-dom";
import data from "../data/projects.json";
import MediaGallery from "../sections/MediaGallery";

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
  </svg>
);

const ArchitectureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.5 10h-2v7h2v-7zm6 0h-2v7h2v-7zm8.5 9H2v2h19v-2zm-2.5-9h-2v7h2v-7zm-7-6.74L16.71 6H6.29l5.21-2.74m0-2.26L2 6v2h19V6l-9.5-5z"/>
  </svg>
);

// Function to get relevant icon for different metric types
const getMetricIcon = (metricKey) => {
  const key = metricKey.toLowerCase();
  
  // Accuracy/Precision/Performance metrics (checkmark/target)
  if (key.includes('accuracy') || key.includes('precision') || key.includes('auc') || key.includes('mota')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    );
  }
  
  // Speed/Time/Response/Resolution time (clock)
  if (key.includes('time') || key.includes('speed') || key.includes('fps') || key.includes('latency') || key.includes('resolution')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    );
  }
  
  // Deployment/Scale/Coverage/Sites/Cameras (location/map)
  if (key.includes('deployment') || key.includes('coverage') || key.includes('cameras') || key.includes('sites') || key.includes('floor')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    );
  }
  
  // Volume/Quantity/Count (containers, ops, visitors, packages, throughput) (bar chart)
  if (key.includes('containers') || key.includes('ops') || key.includes('daily') || key.includes('visitors') || key.includes('throughput') || key.includes('packages') || key.includes('tracked')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
      </svg>
    );
  }
  
  // Reduction metrics (downward trending arrow)
  if (key.includes('reduction') || key.includes('decrease') || key.includes('workload')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>
      </svg>
    );
  }
  
  // Increase/Growth/Improvement/Satisfaction/Compliance (upward trending arrow)
  if (key.includes('increase') || key.includes('growth') || key.includes('satisfaction') || key.includes('compliance') || key.includes('conversion')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    );
  }
  
  // Alert notification (bell/alert icon)
  if (key.includes('alert')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
    );
  }
  
  // Multi-entities (multi-person, stores, locations, stages, processes) (people/group icon)
  if (key.includes('multi') || key.includes('stages') || key.includes('stores') || key.includes('locations') || key.includes('process')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    );
  }
  
  // Safety/Incident (warning triangle)
  if (key.includes('incident') || key.includes('safety')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
    );
  }
  
  // False positive/Error rate (warning circle)
  if (key.includes('false') || key.includes('error') || key.includes('rate')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    );
  }
  
  // Real-time/Live (broadcast icon)
  if (key.includes('real') && key.includes('time') || key.includes('live') || key.includes('rtsp')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
      </svg>
    );
  }
  
  // Dataset size (database/collection icon)
  if (key.includes('dataset') || key.includes('samples') || key.includes('recordings') || key.includes('records')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
      </svg>
    );
  }
  
  // Efficiency/Performance optimization (gear/settings)
  if (key.includes('efficiency') || key.includes('savings')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
      </svg>
    );
  }
  
  // Model/Best model (star icon)
  if (key.includes('model') || key.includes('best')) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    );
  }
  
  // Default icon for any other metric (metric/chart icon)
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    </svg>
  );
};

export default function ProjectDetail(){
  const { id } = useParams();
  const p = data.find(x => x.id === id);
  
  if(!p) {
    return (
      <div className="container project-detail">
        <h2>Project Not Found</h2>
        <Link to="/" className="btn btn-secondary">← Back to Home</Link>
      </div>
    );
  }

  const stack = Array.isArray(p.stack) ? p.stack : [];
  const features = Array.isArray(p.features) ? p.features : [];
  const challenges = Array.isArray(p.challenges) ? p.challenges : [];
  const media = p.media && typeof p.media === "object" ? p.media : { images: [], videos: [] };
  
  // Filter out publication/journal/citation/status related metrics, keep only outcome metrics
  const rawMetrics = p.metrics && typeof p.metrics === "object" ? p.metrics : {};
  const metrics = Object.fromEntries(
    Object.entries(rawMetrics).filter(([key, value]) => {
      const lowerKey = key.toLowerCase();
      const lowerValue = String(value).toLowerCase();
      
      // Exclude publication/journal/citation/status fields
      if (lowerKey.includes('publication') || 
          lowerKey.includes('journal') || 
          lowerKey.includes('citation') ||
          lowerKey.includes('status') ||
          lowerKey.includes('potential') ||
          lowerValue.includes('arxiv') ||
          lowerValue.includes('journal') ||
          lowerValue.includes('under review') ||
          lowerValue.includes('preprint') ||
          lowerValue.includes('growing') ||
          lowerValue.includes('future')) {
        return false;
      }
      
      // Keep dataset only if it's about size/volume (contains numbers)
      if (lowerKey.includes('dataset')) {
        return /\d/.test(value);
      }
      
      return true;
    })
  );

  return (
    <section className="container project-detail-page" style={{paddingTop: '100px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
        <Link to="/projects" state={{ scrollToProject: p.id }} className="back-link-detailed">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
          </svg>
          Back to Projects
        </Link>
        {p.demoLink && (
          <a href={p.demoLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Live Demo
          </a>
        )}
      </div>

      {/* Hero Header */}
      <div className="project-detail-hero">
        {p.companyLogo && (
          <div style={{marginBottom: '16px'}}>
            <img src={p.companyLogo} alt={p.company} style={{width: '100px', height: '100px', objectFit: 'contain', borderRadius: '8px'}} />
          </div>
        )}
        <div className="project-detail-badges">
          <span className={`project-category-badge ${p.category.toLowerCase()}`}>
            {p.category}
          </span>
          {/* {p.inDevelopment && (
            <span className="project-dev-badge" style={{background: 'rgba(219, 97, 162, 0.15)', color: '#db61a2', padding: '6px 16px', borderRadius: '12px', fontSize: '13px', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '6px'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Under Development
            </span>
          )} */}
          {p.company && (
            <span className="project-meta-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
              </svg>
              {p.company}
            </span>
          )}
          {p.timeline && (
            <span className="project-meta-chip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              {p.timeline}
            </span>
          )}
          {p.scale && (
            <span className="project-meta-chip scale">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
              </svg>
              {p.scale}
            </span>
          )}
        </div>
        <h1 className="project-detail-title">{p.title}</h1>
        <p className="project-detail-summary">{p.summary}</p>
      </div>

      {/* Impact Metrics Highlight */}
      {Object.keys(metrics).length > 0 && (
        <div className="impact-metrics-highlight">
          <h3 className="section-heading">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
            Key Impact & Results
          </h3>
          <div className="metrics-highlight-grid">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="metric-highlight-card">
                <div className="metric-icon-wrapper">
                  {getMetricIcon(key)}
                </div>
                <div className="metric-highlight-value">{value}</div>
                <div className="metric-highlight-label">{key.replace(/_/g, ' ')}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Media Gallery */}
      {(media.images?.length > 0 || media.videos?.length > 0) && (
        <div className="detail-section media-section">
          <h3 className="section-heading">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
            Project Media
          </h3>
          <MediaGallery media={media}/>
        </div>
      )}

      {/* Overview Section */}
      <div className="detail-section overview-section">
        <h3 className="section-heading">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Project Overview
        </h3>
        
        <div className="overview-grid">
          <div className="overview-card problem-card">
            <div className="overview-card-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              <h4>Problem Statement</h4>
            </div>
            <p>{p.problem}</p>
          </div>

          <div className="overview-card approach-card">
            <div className="overview-card-header">
              <LightbulbIcon />
              <h4>Approach & Methodology</h4>
            </div>
            <p>{p.approach}</p>
          </div>

          <div className="overview-card impact-card">
            <div className="overview-card-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
              </svg>
              <h4>Impact & Results</h4>
            </div>
            <p>{p.impact}</p>
          </div>
        </div>
      </div>

      {/* Technical Challenges & Solutions */}
      {challenges.length > 0 && (
        <div className="detail-section challenges-section">
          <h3 className="section-heading">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            </svg>
            Technical Challenges & Solutions
          </h3>
          
          <div className="challenges-timeline">
            {challenges.map((item, idx) => (
              <div key={idx} className="challenge-item">
                <div className="challenge-number">{idx + 1}</div>
                <div className="challenge-content">
                  <h4 className="challenge-title">
                    <span className="challenge-icon">⚠️</span>
                    {item.challenge}</h4>
                  <p className="challenge-description">{item.description}</p>
                  <div className="solution-box">
                    <div className="solution-header">
                      <CheckCircleIcon />
                      <strong>Solution</strong>
                    </div>
                    <p>{item.solution}</p>
                    {item.technical_details && (
                      <div className="technical-details">
                        <code>{item.technical_details}</code>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* System Architecture */}
      {p.architecture && (
        <div className="detail-section architecture-section">
          <h3 className="section-heading">
            <ArchitectureIcon />
            System Architecture
          </h3>
          <div className="architecture-content">
            {p.architecture.description && <p className="architecture-desc">{p.architecture.description}</p>}
            {p.architecture.components && (
              <div className="architecture-components">
                <h4>Key Components:</h4>
                <div className="components-grid">
                  {p.architecture.components.map((comp, idx) => (
                    <div key={idx} className="component-card">
                      <ChevronRightIcon />
                      <div>
                        <strong>{comp.name}</strong>
                        <p>{comp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Key Features */}
      {features.length > 0 && (
        <div className="detail-section features-section">
          <h3 className="section-heading">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l-5.5 9h11z M12 22l5.5-9h-11z"/>
            </svg>
            Key Features & Capabilities
          </h3>
          <div className="features-detailed-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-detailed-card">
                <div className="feature-icon-circle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies Used */}
      <div className="detail-section tech-stack-section">
        <h3 className="section-heading">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
          </svg>
          Technologies & Tools
        </h3>
        <div className="tech-stack-detailed">
          {stack.map((tech, idx) => (
            <div key={idx} className="tech-pill-detailed">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="3"/>
              </svg>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="project-actions-footer">
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
            View on GitHub
          </a>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noopener noreferrer" className="action-btn demo-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Live Demo
          </a>
        )}
        <Link to="/projects" className="action-btn secondary-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
          </svg>
          All Projects
        </Link>
      </div>
    </section>
  );
}

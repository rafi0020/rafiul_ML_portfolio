
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import data from "../data/projects.json";
import MediaGallery from "../sections/MediaGallery";
import Icon from "../components/Icon";
import useSEO from "../hooks/useSEO";
import { metricIcon } from "../utils/projectMeta";

const getMetricIcon = (metricKey) => <Icon name={metricIcon(metricKey)} size={32} />;
const isWideLogo = (project) =>
  project.companyLogoStyle === "wide" ||
  /(?:brac-bank|kdsll|bondstein|runner-motorcycles|bat_bangladesh)/i.test(project.companyLogo || "");
const isUltraWideLogo = (project) => /brac-bank-plc/i.test(project.companyLogo || "");

export default function ProjectDetail(){
  const { id } = useParams();
  const p = data.find((x) => x.id === id);

  useSEO({
    title: p ? p.title : "Project not found",
    description: p ? p.summary?.slice(0, 155) : "This project does not exist.",
    path: `/projects/${id}`,
  });
  
  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);
  
  if(!p) {
    return (
      <main id="main-content" tabIndex={-1} className="container project-detail section">
        <h1 className="section-title">Project not found</h1>
        <p className="section-subtitle">This case study may have been renamed or removed.</p>
        <div className="section-cta">
          <Link to="/projects" className="btn btn-primary">Back to all projects</Link>
        </div>
      </main>
    );
  }

  const stack = Array.isArray(p.stack) ? p.stack : [];
  const features = Array.isArray(p.features) ? p.features : [];
  const challenges = Array.isArray(p.challenges) ? p.challenges : [];
  const media = p.media && typeof p.media === "object" ? p.media : { images: [], videos: [] };
  const demoUrl = p.demoLink || p.demo;
  
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
    <main id="main-content" tabIndex={-1} className="container project-detail-page">
      <div className="project-detail-toolbar">
        <Link to="/projects" state={{ scrollToProject: p.id }} className="back-link-detailed">
          <Icon name="arrowLeft" size={20} />
          Back to Projects
        </Link>
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer" className="btn btn-primary project-demo-link">
            <Icon name="externalLink" size={18} />
            Live Demo
          </a>
        )}
      </div>

      {/* Hero Header */}
      <div className="project-detail-hero">
        {p.companyLogo && (
          <div className={`project-detail-logo-wrap${isWideLogo(p) ? " is-wide" : ""}${isUltraWideLogo(p) ? " is-ultrawide" : ""}`}>
            <img
              src={p.companyLogo.replace(/^\.\/assets/, "/assets")}
              alt=""
              className={`project-detail-logo${isWideLogo(p) ? " is-wide" : ""}${isUltraWideLogo(p) ? " is-ultrawide" : ""}`}
              width={isUltraWideLogo(p) ? "360" : isWideLogo(p) ? "240" : "76"}
              height={isUltraWideLogo(p) ? "31" : isWideLogo(p) ? "62" : "76"}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
        <div className="project-detail-badges">
          <span className={`project-category-badge ${p.category.toLowerCase()}`}>
            {p.category}
          </span>
          {p.inDevelopment && (
            <span className="project-dev-badge">
              <Icon name="clock" size={14} />
              In development
            </span>
          )}
          {p.company && (
            <span className="project-meta-chip">
              <Icon name="briefcase" size={16} />
              {p.company}
            </span>
          )}
          {p.timeline && (
            <span className="project-meta-chip">
              <Icon name="clock" size={16} />
              {p.timeline}
            </span>
          )}
          {p.scale && (
            <span className="project-meta-chip scale">
              <Icon name="users" size={16} />
              {p.scale}
            </span>
          )}
        </div>
        <h1 className="project-detail-title">{p.title}</h1>
        <p className="project-detail-summary">{p.summary}</p>
      </div>

      {p.workflowImage && (
        <figure className="project-workflow-hero">
          <img
            src={p.workflowImage}
            alt={`${p.title} workflow diagram`}
            width="1280"
            height="720"
            decoding="async"
            fetchpriority="high"
          />
          <figcaption>System workflow</figcaption>
        </figure>
      )}

      {/* Impact Metrics Highlight */}
      {Object.keys(metrics).length > 0 && (
        <div className="impact-metrics-highlight">
          <h2 className="section-heading">
            <Icon name="trend" size={24} />
            Key Impact & Results
          </h2>
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
          <h2 className="section-heading">
            <Icon name="image" size={24} />
            Project Media
          </h2>
          <MediaGallery media={media}/>
        </div>
      )}

      {/* Overview Section */}
      <div className="detail-section overview-section">
        <h2 className="section-heading">
          <Icon name="checkCircle" size={24} />
          Project Overview
        </h2>
        
        <div className="overview-grid">
          <div className="overview-card problem-card">
            <div className="overview-card-header">
              <Icon name="warning" size={28} />
              <h3>Problem Statement</h3>
            </div>
            <p>{p.problem}</p>
          </div>

          <div className="overview-card approach-card">
            <div className="overview-card-header">
              <Icon name="bulb" size={24} />
              <h3>Approach & Methodology</h3>
            </div>
            <p>{p.approach}</p>
          </div>

          <div className="overview-card impact-card">
            <div className="overview-card-header">
              <Icon name="trend" size={28} />
              <h3>Impact & Results</h3>
            </div>
            <p>{p.impact}</p>
          </div>
        </div>
      </div>

      {/* Technical Challenges & Solutions */}
      {challenges.length > 0 && (
        <div className="detail-section challenges-section">
          <h2 className="section-heading">
            <Icon name="warning" size={24} />
            Technical Challenges & Solutions
          </h2>
          
          <div className="challenges-timeline">
            {challenges.map((item, idx) => (
              <div key={idx} className="challenge-item">
                <div className="challenge-number">{idx + 1}</div>
                <div className="challenge-content">
                  <h3 className="challenge-title">
                    <Icon name="shield" size={18} className="challenge-icon" />
                    {item.challenge}</h3>
                  <p className="challenge-description">{item.description}</p>
                  <div className="solution-box">
                    <div className="solution-header">
                      <Icon name="checkCircle" size={24} />
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
          <h2 className="section-heading">
            <Icon name="architecture" size={24} />
            System Architecture
          </h2>
          <div className="architecture-content">
            {p.architecture.description && <p className="architecture-desc">{p.architecture.description}</p>}
            {p.architecture.components && (
              <div className="architecture-components">
                <h3>Key Components:</h3>
                <div className="components-grid">
                  {p.architecture.components.map((comp, idx) => (
                    <div key={idx} className="component-card">
                      <Icon name="chevronRight" size={20} />
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
          <h2 className="section-heading">
            <Icon name="sparkle" size={24} />
            Key Features & Capabilities
          </h2>
          <div className="features-detailed-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-detailed-card">
                <div className="feature-icon-circle">
                  <Icon name="check" size={20} weight="bold" />
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies Used */}
      <div className="detail-section tech-stack-section">
        <h2 className="section-heading">
          <Icon name="wrench" size={24} />
          Technologies & Tools
        </h2>
        <div className="tech-stack-detailed">
          {stack.map((tech, idx) => (
            <div key={idx} className="tech-pill-detailed">
              <Icon name="dot" size={12} weight="fill" />
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="project-actions-footer">
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="action-btn github-btn">
            <Icon name="github" size={20} />
            View on GitHub
          </a>
        )}
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="action-btn demo-btn">
            <Icon name="externalLink" size={20} />
            Live Demo
          </a>
        )}
        <Link to="/projects" className="action-btn secondary-btn">
          <Icon name="repo" size={20} />
          All Projects
        </Link>
      </div>
    </main>
  );
}

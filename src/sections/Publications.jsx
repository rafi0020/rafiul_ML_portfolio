
import pubs from "../data/publications.json";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Publications({ compact = false }){
  const [openBibtex, setOpenBibtex] = useState(null);

  return (
    <section id="publications" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75z"/>
            </svg>
            Publications
          </span>
          <h2 className="section-title">Research Papers</h2>
          <p className="section-subtitle">
            Peer-reviewed publications in machine learning and AI
          </p>
        </div>

        <div className="publications-list">
          {(compact ? pubs.slice(0, 2) : pubs).map(p => (
            <div key={p.id} className="publication-card">
              <span className="publication-venue">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                  <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"/>
                </svg>
                {p.venue} • {p.year}
              </span>
              <h3 className="publication-title">{p.title}</h3>
              <p className="publication-authors">{p.authors || "MD Rafiul Islam et al."}</p>
              {p.abstract && (
                <p className="publication-abstract">{p.abstract}</p>
              )}
              <div className="publication-actions">
                <button 
                  className="publication-btn"
                  onClick={() => setOpenBibtex(openBibtex === p.id ? null : p.id)}
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 1.75C4 .784 4.784 0 5.75 0h5.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0114.25 16h-8.5A1.75 1.75 0 014 14.25V1.75z"/>
                  </svg>
                  {openBibtex === p.id ? "Hide BibTeX" : "BibTeX"}
                </button>
                <a 
                  href={p.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="publication-btn"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"/>
                    <path d="M10 1a.75.75 0 000 1.5h2.44L7.22 7.72a.75.75 0 001.06 1.06l5.22-5.22V6a.75.75 0 001.5 0V1.75a.75.75 0 00-.75-.75H10z"/>
                  </svg>
                  View Paper
                </a>
                {p.code && (
                  <a 
                    href={p.code} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="publication-btn"
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    Code
                  </a>
                )}
              </div>
              {openBibtex === p.id && (
                <pre className="bibtex-modal" onClick={() => setOpenBibtex(null)}>
{p.bibtex}
                </pre>
              )}
            </div>
          ))}
        </div>
        
        {compact && (
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <Link to="/research" className="btn btn-primary" style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}>
              View All Publications
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

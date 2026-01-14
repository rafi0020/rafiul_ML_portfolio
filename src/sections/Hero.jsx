
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero(){
  const particlesRef = useRef(null);
  const dropdownRef = useRef(null);
  const [showCVMenu, setShowCVMenu] = useState(false);
  const baseUrl = import.meta.env.BASE_URL || "/";

  useEffect(() => {
    // Create floating particles
    const container = particlesRef.current;
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      container.appendChild(particle);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      const dropdown = document.querySelector('.cv-dropdown-menu');
      const button = dropdownRef.current;
      
      if (dropdown && !dropdown.contains(event.target) && 
          button && !button.contains(event.target)) {
        setShowCVMenu(false);
      }
    };

    if (showCVMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showCVMenu]);

  return (
    <section className="hero">
      <div className="neural-bg" ref={particlesRef}></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          <span>Available for opportunities</span>
        </div>
        
        <h1 className="hero-title">
          MD Rafiul Islam
        </h1>

        <div className="hero-role">Applied AI Engineer &amp; Researcher</div>
        
        <p className="hero-subtitle">
          From Peer-Reviewed AI Research to Real-World Deployments
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">10+</div>
            <div className="hero-stat-label">Industrial Projects</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">5+</div>
            <div className="hero-stat-label">Research Projects</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">2</div>
            <div className="hero-stat-label">Publications</div>
          </div>
        </div>

        <div className="hero-cta">
          <Link className="btn btn-primary" to="/projects">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z"/>
            </svg>
            View Repositories
          </Link>
          <a 
            ref={dropdownRef}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowCVMenu(prev => !prev);
            }}
            className="btn btn-secondary"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"/>
            </svg>
            Download CV
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" style={{ marginLeft: '4px' }}>
              <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z"/>
            </svg>
          </a>
          {showCVMenu && (
            <div 
              className="cv-dropdown-menu"
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                overflow: 'hidden',
                minWidth: '200px',
                zIndex: 1000,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              <a 
                href="./cv/MD_Rafiul_Islam_Academic.pdf" 
                download="MD_Rafiul_Islam_Academic.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = './cv/MD_Rafiul_Islam_Academic.pdf';
                  link.download = 'MD_Rafiul_Islam_Academic.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  setShowCVMenu(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.34l-7-3.82V18c0 1.93 3.13 3.5 7 3.5s7-1.57 7-3.5v-5.48l-7 3.82z"/>
                </svg>
                Academic CV
              </a>
              <a 
                href="./cv/MD_Rafiul_Islam_Industry.pdf" 
                download="MD_Rafiul_Islam_Industry.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = './cv/MD_Rafiul_Islam_Industry.pdf';
                  link.download = 'MD_Rafiul_Islam_Industry.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  setShowCVMenu(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 16px',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
                Industry Resume
              </a>
            </div>
          )}
          <a className="btn btn-ghost" href="https://github.com/rafi0020" target="_blank" rel="noreferrer">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

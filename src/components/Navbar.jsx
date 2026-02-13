
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          {/* <div className="navbar-logo">MR</div> */}
          <div>
            <div className="navbar-name">MD Rafiul Islam</div>
            <div className="navbar-tagline">AI Engineer & Researcher</div>
          </div>
        </Link>
        
        <button className="navbar-toggle" onClick={()=>setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"/></svg>
            About
          </NavLink>

          <NavLink
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            to="/skills"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M7.5 1.5a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5a.75.75 0 01-.75-.75zM4.75 2a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM1.75 4a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM1 7.25a.75.75 0 01.75-.75h.5a.75.75 0 010 1.5h-.5A.75.75 0 011 7.25zM1.75 10a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM4.75 12.5a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM8.25 14.5a.75.75 0 010-1.5h.5a.75.75 0 010 1.5h-.5zM11.25 12.5a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM14.25 10a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM15 7.25a.75.75 0 01-.75.75h-.5a.75.75 0 010-1.5h.5A.75.75 0 0115 7.25zM14.25 4a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM11.25 2a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"/></svg>
            Skills
          </NavLink>

          <NavLink
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            to="/projects"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9z"/></svg>
            Repositories
          </NavLink>

          <NavLink
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            to="/research"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75z"/></svg>
            Research
          </NavLink>

          <NavLink
            className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81z"/></svg>
            Contact
          </NavLink>
        </div>

        <div className="navbar-stats">
          <div className="stat-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/></svg>
            <span className="count">12</span>
          </div>
          <div className="stat-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878z"/></svg>
            <span className="count">8</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: "home", end: true },
  { to: "/about", label: "About", icon: "user" },
  { to: "/skills", label: "Skills", icon: "skills" },
  { to: "/projects", label: "Projects", icon: "repo" },
  { to: "/research", label: "Research", icon: "book" },
  { to: "/contact", label: "Contact", icon: "mail" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const menuId = useId();
  const { pathname } = useLocation();

  // Close on route change so the panel never covers the page you just opened.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    // Stop the page scrolling behind the open panel.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={navRef} aria-label="Primary">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="navbar-name">MD Rafiul Islam</span>
          <span className="navbar-tagline">AI Engineer &amp; Researcher</span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="navbar-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" focusable="false">
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <div id={menuId} className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {NAV_ITEMS.map(({ to, label, icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) => `navbar-link ${isActive ? "active" : ""}`}
              aria-current={pathname === to ? "page" : undefined}
            >
              <Icon name={icon} />
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

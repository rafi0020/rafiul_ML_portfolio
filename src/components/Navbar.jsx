import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { to: "/", label: "Home", icon: "house", end: true },
  { to: "/about", label: "About", icon: "user" },
  { to: "/skills", label: "Skills", icon: "skills" },
  { to: "/projects", label: "Projects", icon: "repo" },
  { to: "/research", label: "Research", icon: "book" },
  { to: "/contact", label: "Contact", icon: "mail" },
];

export default function Navbar({ onVisibilityChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef(null);
  const linksRef = useRef(null);
  const toggleRef = useRef(null);
  const menuId = useId();
  const { pathname } = useLocation();

  // Close on route change so the panel never covers the page you just opened.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const shouldHide = !menuOpen && currentScrollY > 140;

      setHidden((wasHidden) => {
        const nextHidden = shouldHide;
        if (nextHidden !== wasHidden) onVisibilityChange?.(!nextHidden);
        return nextHidden;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateNavbar);
    };

    onVisibilityChange?.(true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen, onVisibilityChange]);

  useEffect(() => {
    if (!menuOpen) return;

    const focusable = Array.from(linksRef.current?.querySelectorAll("a[href]") || []);
    focusable[0]?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
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
    <nav className={`navbar${hidden ? " is-hidden" : ""}`} ref={navRef} aria-label="Primary">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-copy">
            <span className="navbar-name">MD Rafiul Islam</span>
            <span className="navbar-tagline">ML Engineer · Computer Vision &amp; Edge AI</span>
          </span>
        </Link>

        <div ref={linksRef} id={menuId} className={`navbar-links ${menuOpen ? "open" : ""}`}>
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

        <div className="navbar-actions">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            className="navbar-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={23} weight="bold" /> : <List size={23} weight="bold" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

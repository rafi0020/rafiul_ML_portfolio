import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const CVS = [
  { href: "/cv/MD_Rafiul_Islam_Academic.pdf", label: "Academic CV", icon: "cap" },
  { href: "/cv/MD_Rafiul_Islam_Industry.pdf", label: "Industry Résumé", icon: "briefcase" },
];

const STATS = [
  { value: "17+", label: "Industrial projects" },
  { value: "5+", label: "Research projects" },
  { value: "2", label: "Publications" },
];

export default function Hero() {
  const particlesRef = useRef(null);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const [showCVMenu, setShowCVMenu] = useState(false);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Skip the decorative particle field entirely for reduced-motion users and
    // on small screens, where it is pure battery cost.
    const skip =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(max-width: 768px)").matches;
    if (skip) return;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 20; i += 1) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 15}s`;
      particle.style.animationDuration = `${15 + Math.random() * 10}s`;
      fragment.appendChild(particle);
    }
    container.appendChild(fragment);

    return () => { container.replaceChildren(); };
  }, []);

  useEffect(() => {
    if (!showCVMenu) return;

    const onPointerDown = (event) => {
      if (
        !menuRef.current?.contains(event.target) &&
        !triggerRef.current?.contains(event.target)
      ) {
        setShowCVMenu(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowCVMenu(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [showCVMenu]);

  return (
    <section className="hero">
      <div className="neural-bg" ref={particlesRef} aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-badge">Available for opportunities</p>

        <h1 className="hero-title">MD Rafiul Islam</h1>
        <p className="hero-role">Applied AI Engineer &amp; Researcher</p>
        <p className="hero-subtitle">
          From peer-reviewed AI research to real-world deployments
        </p>

        <dl className="hero-stats">
          {STATS.map(({ value, label }) => (
            <div className="hero-stat" key={label}>
              <dt className="hero-stat-label">{label}</dt>
              <dd className="hero-stat-value">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="hero-cta">
          <Link className="btn btn-primary" to="/projects">
            <Icon name="repo" size={18} />
            View projects
          </Link>

          {/* Positioning context lives on this wrapper. Without it the menu
              anchored to the whole hero section and rendered off-screen. */}
          <div className="cv-dropdown">
            <button
              ref={triggerRef}
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowCVMenu((open) => !open)}
              aria-expanded={showCVMenu}
              aria-haspopup="true"
            >
              <Icon name="download" size={18} />
              Download CV
              <Icon name="chevronDown" size={12} />
            </button>

            {showCVMenu && (
              <div className="cv-dropdown-menu" ref={menuRef}>
                {CVS.map(({ href, label, icon }) => (
                  <a
                    key={href}
                    href={href}
                    download
                    className="cv-dropdown-item"
                    onClick={() => setShowCVMenu(false)}
                  >
                    <Icon name={icon} />
                    {label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            className="btn btn-ghost"
            href="https://github.com/rafi0020"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="home" size={18} />
            GitHub profile
          </a>
        </div>
      </div>
    </section>
  );
}

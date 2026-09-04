import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

const CVS = [
  { href: "/cv/MD_Rafiul_Islam_Academic.pdf", label: "Academic CV", icon: "cap" },
  { href: "/cv/MD_Rafiul_Islam_Industry.pdf", label: "Industry Résumé", icon: "briefcase" },
];

const STATS = [
  { value: "20+", label: "AI & CV projects" },
  { value: "10+", label: "Industry deployments" },
  { value: "3", label: "Research publications" },
];

const TECH_STACK = ["Python", "PyTorch", "YOLO", "OpenCV", "TensorRT", "NVIDIA Jetson", "FastAPI", "Docker"];

export default function Hero() {
  const particlesRef = useRef(null);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const [showCVMenu, setShowCVMenu] = useState(false);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

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

      <div className="hero-shell">
        <div className="hero-content">
          <p className="hero-badge">Available for AI/ML &amp; Computer Vision opportunities</p>
          <p className="hero-kicker">Hello, I&rsquo;m</p>
          <h1 className="hero-title">MD Rafiul Islam</h1>
          <p className="hero-role">Machine Learning Engineer — Computer Vision &amp; Edge AI</p>
          <p className="hero-subtitle">
            I engineer production video analytics, OCR, safety, and inspection systems—connecting
            rigorous model development with reliable real-time deployment at the edge.
          </p>

          <div className="hero-cta">
          <Link className="btn btn-primary" to="/projects">
            <Icon name="repo" size={18} />
            View selected work
          </Link>

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
            <Icon name="github" size={18} />
            GitHub profile
          </a>
          </div>

          <dl className="hero-stats">
            {STATS.map(({ value, label }) => (
              <div className="hero-stat" key={label}>
                <dd className="hero-stat-value">{value}</dd>
                <dt className="hero-stat-label">{label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="identity-wrap" aria-label="Professional profile card">
          <span className="identity-lanyard" aria-hidden="true" />
          <article className="identity-card">
            <div className="identity-card-top">
              <img src="/assets/images/profile.jpg" alt="MD Rafiul Islam" />
              <span className="identity-online" aria-hidden="true" />
            </div>
            <div className="identity-card-body">
              <p className="identity-eyebrow">Verified professional profile</p>
              <h2>MD Rafiul Islam</h2>
              <p className="identity-role">Machine Learning Engineer</p>
              <dl className="identity-grid">
                <div><dt>Specialty</dt><dd>CV &amp; Edge AI</dd></div>
                <div><dt>Location</dt><dd>Dhaka, Bangladesh</dd></div>
                <div><dt>Focus</dt><dd>Production systems</dd></div>
                <div><dt>Status</dt><dd className="is-available">Available</dd></div>
              </dl>
              <div className="identity-id"><span>RI · ML · 2026</span><strong>PORTFOLIO</strong></div>
            </div>
          </article>
        </div>
      </div>

      <div className="tech-marquee" aria-label="Core technology stack">
        <div className="tech-marquee-track">
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => <span key={`${tech}-${index}`}>{tech}</span>)}
        </div>
      </div>
    </section>
  );
}

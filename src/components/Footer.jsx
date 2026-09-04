import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://github.com/rafi0020", icon: "github", label: "GitHub" },
  { href: "https://linkedin.com/in/rafi009", icon: "linkedin", label: "LinkedIn" },
  { href: "https://scholar.google.com/citations?user=ORj6wioAAAAJ&hl=en", icon: "scholar", label: "Google Scholar" },
  { href: "mailto:rafiulislam1921@gmail.com", icon: "mail", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const roles = ["Computer Vision Engineer", "Edge AI Builder", "Applied AI Researcher", "Production ML Engineer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((index) => (index + 1) % roles.length), 2400);
    return () => window.clearInterval(timer);
  }, [roles.length]);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-role-banner">
          <span>Designing dependable intelligence</span>
          <strong aria-live="polite">{roles[roleIndex]}</strong>
        </div>
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-mark" aria-hidden="true">RI</span>
            <span>MD Rafiul Islam</span>
          </div>
          <p className="footer-description">
            Machine Learning Engineer building production-grade computer vision
            and Edge AI systems. Open to collaborations and opportunities.
          </p>
          <ul className="footer-social" aria-label="Social profiles">
            {SOCIALS.map(({ href, icon, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="social-link"
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <Icon name={icon} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="footer-column" aria-label="Footer">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="footer-links">
            {QUICK_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="footer-link">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-column">
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-links">
            <li>
              <a href="mailto:rafiulislam1921@gmail.com" className="footer-link">
                <Icon name="mail" size={14} />
                rafiulislam1921@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+8801679899117" className="footer-link">
                <Icon name="phone" size={14} />
                +880 1679-899117
              </a>
            </li>
            <li>
              <span className="footer-link is-static">
                <Icon name="pin" size={14} />
                Dhaka, Bangladesh
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© {currentYear} MD Rafiul Islam. All rights reserved.</p>
      </div>
    </footer>
  );
}

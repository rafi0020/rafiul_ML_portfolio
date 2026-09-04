import { NavLink } from "react-router-dom";
import Icon from "./Icon";

const ITEMS = [
  { to: "/", label: "Home", icon: "house", end: true },
  { to: "/about", label: "About", icon: "user" },
  { to: "/skills", label: "Skills", icon: "skills" },
  { to: "/projects", label: "Projects", icon: "repo" },
  { to: "/research", label: "Research", icon: "book" },
  { to: "/contact", label: "Contact", icon: "mail" },
];

export default function FloatingDock({ visible = false }) {
  return (
    <nav className={`floating-dock${visible ? " is-visible" : ""}`} aria-label="Quick navigation" aria-hidden={!visible}>
      {ITEMS.map(({ to, label, icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => isActive ? "is-active" : ""}
          aria-label={label}
          title={label}
          tabIndex={visible ? 0 : -1}
        >
          <Icon name={icon} size={21} />
        </NavLink>
      ))}
    </nav>
  );
}

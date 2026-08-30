import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import Projects from "../sections/Projects";

export default function ProjectsPage() {
  const { state } = useLocation();

  useSEO({
    title: "Projects",
    description:
      "Production computer vision and Edge AI systems built for enterprise clients across logistics, manufacturing, and surveillance.",
    path: "/projects",
  });

  useEffect(() => {
    if (!state?.scrollToProject) return;
    const el = document.getElementById(`project-${state.scrollToProject}`);
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });

    // Highlight via a class rather than mutating inline styles, so the effect
    // is themable and cannot clobber styles set elsewhere.
    el.classList.add("is-highlighted");
    const timer = setTimeout(() => el.classList.remove("is-highlighted"), 2000);
    return () => clearTimeout(timer);
  }, [state]);

  return (
    <main id="main-content" tabIndex={-1}>
      <Projects defaultFilter="All" asPage />
    </main>
  );
}

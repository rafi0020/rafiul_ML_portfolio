import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { ROUTE_META } from "../data/portfolio";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Education from "../sections/Education";

export default function AboutPage() {
  const { state } = useLocation();

  useSEO({ ...ROUTE_META["/about"], path: "/about" });

  useEffect(() => {
    if (!state?.scrollTo) return;
    const el = document.getElementById(state.scrollTo);
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }, [state]);

  return (
    <main id="main-content" className="about-page" tabIndex={-1}>
      <About />
      <Experience />
      <Education />
    </main>
  );
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Education from "../sections/Education";

export default function AboutPage() {
  const { state } = useLocation();

  useSEO({
    title: "About",
    description:
      "Machine learning engineer and researcher working on computer vision, Edge AI, and computational healthcare.",
    path: "/about",
  });

  useEffect(() => {
    if (!state?.scrollTo) return;
    const el = document.getElementById(state.scrollTo);
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }, [state]);

  return (
    <main id="main-content" tabIndex={-1}>
      <About />
      <Experience />
      <Education />
    </main>
  );
}

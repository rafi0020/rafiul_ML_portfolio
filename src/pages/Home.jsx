import useSEO from "../hooks/useSEO";
import { ROUTE_META } from "../data/portfolio";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import Contact from "../sections/Contact";

export default function Home() {
  useSEO({ ...ROUTE_META["/"], path: "/" });

  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <About compact />
      <Projects compact />
      <Experience compact />
      <Skills compact />
      <Publications compact />
      <Contact />
    </main>
  );
}

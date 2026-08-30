import useSEO from "../hooks/useSEO";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import Contact from "../sections/Contact";

export default function Home() {
  useSEO({
    title: null,
    description:
      "Machine Learning Engineer building production-grade computer vision and Edge AI systems, with peer-reviewed research in computational healthcare.",
    path: "/",
  });

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

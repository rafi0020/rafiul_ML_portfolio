
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Publications from "../sections/Publications";
import Contact from "../sections/Contact";

export default function Home(){
  return (
    <main>
      <Hero/>
      <About compact={true} />
      <Skills compact={true} />
      <Experience compact={true} />
      <Education compact={true} />
      <Projects compact={true} />
      <Publications compact={true} />
      <Contact/>
    </main>
  );
}

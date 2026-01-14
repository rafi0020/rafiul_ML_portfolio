import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Education from "../sections/Education";

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (scrollTarget) {
      setTimeout(() => {
        const element = document.getElementById(scrollTarget);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <main>
      <About />
      <Experience />
      <Education />
    </main>
  );
}

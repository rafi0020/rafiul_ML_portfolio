import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Projects from "../sections/Projects";

export default function ProjectsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToProject) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const projectElement = document.getElementById(`project-${location.state.scrollToProject}`);
        if (projectElement) {
          projectElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Add a highlight effect
          projectElement.style.boxShadow = '0 0 0 3px rgba(88, 166, 255, 0.5)';
          setTimeout(() => {
            projectElement.style.boxShadow = '';
          }, 2000);
        }
      }, 100);
    }
  }, [location]);

  return (
    <main>
      <Projects defaultFilter="All" />
    </main>
  );
}

import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import FloatingDock from "./components/FloatingDock";
import Home from "./pages/Home";

// Route-level code splitting: the landing page ships in the initial bundle,
// everything else is fetched on demand.
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ResearchPage = lazy(() => import("./pages/ResearchPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <span className="route-spinner" aria-hidden="true" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

/**
 * Reset scroll on navigation, but leave in-page anchor navigation alone
 * so "View full experience" can still land on the right section.
 */
function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo || state?.scrollToProject) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, state]);

  return null;
}

export default function App() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  const handleNavbarVisibility = useCallback((visible) => setNavbarVisible(visible), []);
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar onVisibilityChange={handleNavbarVisibility} />
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <BackToTop />
      <FloatingDock visible={!navbarVisible} />
    </>
  );
}

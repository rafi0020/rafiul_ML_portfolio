
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Admin from "./pages/Admin";
import AboutPage from "./pages/AboutPage";
import ResearchPage from "./pages/ResearchPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProductsPage from "./pages/ProductsPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";

export default function App(){
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/research" element={<ResearchPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/projects/:id" element={<ProjectDetail/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      <Footer/>
      <BackToTop/>
    </>
  );
}

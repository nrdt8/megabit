import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsSection from "../components/Sections/ProjectsSection/ProjectsSection";
import CallbackSection from "../components/Sections/CallbackSection/CallbackSection";

import { useLocation } from "react-router";
import { useEffect } from "react";

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page">
      <Header background></Header>
      <div className="content">
        <ProjectsSection showButton></ProjectsSection>
        <CallbackSection></CallbackSection>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Projects;

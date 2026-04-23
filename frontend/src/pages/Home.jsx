import WelcomeSection from "../components/Sections/WelcomeSection/WelcomeSection";
import ServicesSection from "../components/Sections/ServicesSection/ServicesSection";
import CallbackSection from "../components/Sections/CallbackSection/CallbackSection";
import ProjectsSection from "../components/Sections/ProjectsSection/ProjectsSection";
import ReviewsSection from "../components/Sections/ReviewsSection/ReviewsSection";
import Footer from "../components/Footer/Footer";

import { useLocation } from "react-router";
import { useEffect } from "react";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <WelcomeSection></WelcomeSection>
      <ServicesSection></ServicesSection>
      <CallbackSection></CallbackSection>
      <ProjectsSection></ProjectsSection>
      <ReviewsSection></ReviewsSection>
      <Footer></Footer>
    </>
  );
};

export default Home;

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ServicesSection from "../components/Sections/ServicesSection/ServicesSection";
import CallbackSection from "../components/Sections/CallbackSection/CallbackSection";

import { useLocation } from "react-router";
import { useEffect } from "react";

const Services = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page">
      <Header background></Header>
      <div className="content">
        <ServicesSection showButton></ServicesSection>
        <CallbackSection></CallbackSection>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;

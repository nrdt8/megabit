import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CallbackSection from "../components/Sections/CallbackSection/CallbackSection";
import ReviewsSection from "../components/Sections/ReviewsSection/ReviewsSection";

import { useLocation } from "react-router";
import { useEffect } from "react";

const Contacts = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="page">
      <Header background />
      <div className="content">
        <CallbackSection></CallbackSection>
        <ReviewsSection></ReviewsSection>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;

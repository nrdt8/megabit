import "./WelcomeSection.css";
import Header from "../../Header/Header";
import ContentBox from "./ContentBox/ContentBox";
import NewsBox from "./NewsBox/NewsBox";
import { useSite } from "../../../context/SiteContext";

const WelcomeSection = () => {
  const { company } = useSite();

  if (!company) return null;

  return (
    <section className="welcome">
      <div
        style={{ backgroundImage: `url(${company.bg})` }}
        className="welcome__background-image"
      ></div>
      <div className="welcome__background-overlay"></div>
      <Header></Header>
      <ContentBox></ContentBox>
      <NewsBox></NewsBox>
    </section>
  );
};

export default WelcomeSection;

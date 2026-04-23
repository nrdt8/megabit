import "./ProjectCard.css";
import { Link } from "react-router";
import arrowIcon from "/src/assets/icons/project-card/arrow.svg";

const ProjectCard = ({ img, company, object, showButton }) => {
  return (
    <div className="project-card">
      <img src={img} className="project-card_img" />
      <div className="project-card_name">
        <div className="project-card_title">{company}</div>
        {showButton ? (
          ""
        ) : (
          <Link to="/projects">
            <button className="project-card_button">
              <span className="project-card_button-text">подробнее</span>
              <img className="project-card_button-img" src={arrowIcon} alt="" />
            </button>
          </Link>
        )}
      </div>
      <div className="project-card_description">{object}</div>
    </div>
  );
};

export default ProjectCard;

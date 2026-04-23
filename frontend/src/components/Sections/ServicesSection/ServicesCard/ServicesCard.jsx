import Button from "../../../Button/Button";
import "./ServicesCard.css";
import { Link } from "react-router";

const ServicesCard = ({ img, title, description, showButton }) => {
  return (
    <div className="services-card">
      <div className="services-card_content">
        <img className="services-card_img" src={img} alt="w" />
        <div className="services-card_title">{title}</div>
        <div className="services-card_description">{description}</div>
      </div>
      {showButton ? (
        ""
      ) : (
        <Link to="/services">
          <Button
            className="services-card_button"
            hoverTextColor="var(--color-blue-1)"
            hoverBorderColor="var(--color-blue-1)"
            fontSize="14px"
          >
            Подробнее
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ServicesCard;

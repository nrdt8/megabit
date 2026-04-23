import { useSite } from "/src/context/SiteContext";

import "./ContentBox.css";
import AdressIcon from "/src/assets/icons/content-box/adress.svg";
import PhoneIcon from "/src/assets/icons/content-box/phone.svg";
import ContactInfo from "./ContactInfo/ContactInfo";
import { Form } from "react-router";

const ContentBox = () => {
  const { company } = useSite();
  if (!company) return null;

  return (
    <div className="content-box">
      <div className="content__text">
        {company.slogan} с
        <span className="content__year"> {company.year} </span>года.
      </div>
      <div className="content__company">
        <iframe
          src={`https://yandex.ru/sprav/widget/rating-badge/${company.idYandex}?type=rating`}
          width="150"
          height="50"
          frameBorder="0"
          className="content__rating"
        ></iframe>

        <div className="content__contact">
          <ContactInfo icon={AdressIcon}>{company.adress}</ContactInfo>
          <ContactInfo icon={PhoneIcon}>{company.phone}</ContactInfo>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;

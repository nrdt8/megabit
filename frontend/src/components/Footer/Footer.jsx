import { useSite } from "/src/context/SiteContext";

import "./Footer.css";
import { Link } from "react-router";

const Footer = () => {
  const { company, social } = useSite();
  if (!company || !social) return null;

  return (
    <footer className={`footer`}>
      <div className="footer_container">
        <div className="footer_about">
          <div className="footer_about-title">{company.name}</div>
          <div className="footer_about-description">{company.description}</div>
        </div>
        <div className="footer_contact">
          <div className="footer_contact-title">Информация</div>
          <div className="footer_contacts">
            <ul className="footer_contacts_row">
              <li>
                <Link to="/services">Услуги</Link>
              </li>
              <li>
                <Link to="/projects">Проекты</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
            <ul className="footer_contacts_row">
              {social.map((elem, id) => {
                return (
                  <li key={id}>
                    <a href={elem.url}>{elem.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom">{company.arr}</div>
    </footer>
  );
};

export default Footer;

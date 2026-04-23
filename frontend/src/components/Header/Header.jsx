import "./Header.css";
import Button from "../Button/Button";
import BurgerButton from "./BurgerButton/BurgerButton";
import NavBox from "./NavBox/NavBox";

import { Link } from "react-router";
import { useState } from "react";
import { useSite } from "/src/context/SiteContext";

const Header = ({ onClickWelcomeBtn, background }) => {
  const { company } = useSite();

  const [navActive, setNavActive] = useState(false);

  if (!company) return null;

  const onClickNavButton = () => {
    setNavActive(!navActive);
  };

  return (
    <>
      <header className={`${background ? "header-background " : ""}header`}>
        <nav className="header__nav" aria-label="Основная навигация">
          <div className="header__logo">
            <Link to="/">{company.abbreviation}</Link>
          </div>

          <ul className="header__menu">
            <li className="header__item">
              <Link to="/services">Услуги</Link>
            </li>
            <li className="header__item">
              <Link to="/projects">Проекты</Link>
            </li>
            <li className="header__item">
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
        </nav>

        <Link to="/contacts">
          <Button className="header__button" onClick={onClickWelcomeBtn}>
            Связаться с нами
          </Button>
        </Link>

        <BurgerButton
          onClick={onClickNavButton}
          navActive={navActive}
          className="header__button-burder"
        ></BurgerButton>
      </header>

      <NavBox
        navActive={navActive}
        onClickNavButton={onClickNavButton}
      ></NavBox>
    </>
  );
};

export default Header;

import "./NavBox.css";
import BurgerButton from "../BurgerButton/BurgerButton";
import { NavLink } from "react-router";

const NavBox = ({ navActive, onClickNavButton, className }) => {
  return (
    <>
      <div
        className={`navbox${navActive ? " navbox-active" : ""} ${className ? className : ""}`}
      >
        <div className="navbar_header">
          <div className="navbar_header-title"></div>
          <BurgerButton
            className="navbox_header-btn"
            onClick={onClickNavButton}
            navActive={navActive}
          ></BurgerButton>
        </div>
        <nav className="navbox_nav">
          <ul className="navbox__menu">
            <li className="navbox__item" onClick={onClickNavButton}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbox_link active" : "navbox_link"
                }
                to="/"
              >
                Главная
              </NavLink>
            </li>
            <li className="navbox__item" onClick={onClickNavButton}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbox_link active" : "navbox_link"
                }
                to="/services"
              >
                Услуги
              </NavLink>
            </li>
            <li className="navbox__item" onClick={onClickNavButton}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbox_link active" : "navbox_link"
                }
                to="/projects"
              >
                Проекты
              </NavLink>
            </li>
            <li className="navbox__item" onClick={onClickNavButton}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbox_link active" : "navbox_link"
                }
                to="/contacts"
              >
                Контакты
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBox;

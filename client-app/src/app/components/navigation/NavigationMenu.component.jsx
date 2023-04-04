import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./NavigationMenu.styles.scss";
import Footer from "../footer/Footer.component";

const NavigationMenu = () => {
  const [activeButton, setIsActiveButton] = useState(false);

  const onClickLinkHandler = (event) => {
    setIsActiveButton(event.target.id);
  };

  return (
    <Fragment>
      <div className="menu-container">
        <Link
          to="/"
          className={activeButton === "1" ? "active" : undefined}
          id={"1"}
          onClick={onClickLinkHandler}
        >
          HOME
        </Link>
        <Link
          to="/projects"
          className={activeButton === "2" ? "active" : undefined}
          id={"2"}
          onClick={onClickLinkHandler}
        >
          PROJECTS
        </Link>
        <Link
          to="/about"
          className={activeButton === "3" ? "active" : undefined}
          id={"3"}
          onClick={onClickLinkHandler}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={activeButton === "4" ? "active" : undefined}
          id={"4"}
          onClick={onClickLinkHandler}
        >
          CONTACT
        </Link>
      </div>

      <Outlet />

      <Footer>Footer Component</Footer>
    </Fragment>
  );
};

export default NavigationMenu;

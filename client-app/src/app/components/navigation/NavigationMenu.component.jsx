import { Fragment, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./NavigationMenu.styles.scss";
import Footer from "../footer/Footer.component";

const NavigationMenu = () => {
  const [activeButton, setActiveButton] = useState(0);

  useEffect(() => {
    const storedActiveButton = localStorage.getItem("activeButton");
    if (storedActiveButton) {
      setActiveButton(storedActiveButton);
    }
  }, []);

  const onChangeActiveButtonState = (event) => {
    setActiveButton(event.target.id);

    localStorage.setItem("activeButton", event.target.id);
  };

  return (
    <Fragment>
      <div className="menu-container">
        <Link
          to="/"
          className={activeButton === "1" ? "active" : undefined}
          id={"1"}
          onClick={onChangeActiveButtonState}
        >
          HOME
        </Link>
        <Link
          to="/projects"
          className={activeButton === "2" ? "active" : undefined}
          id={"2"}
          onClick={onChangeActiveButtonState}
        >
          PROJECTS
        </Link>
        <Link
          to="/about"
          className={activeButton === "3" ? "active" : undefined}
          id={"3"}
          onClick={onChangeActiveButtonState}
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className={activeButton === "4" ? "active" : undefined}
          id={"4"}
          onClick={onChangeActiveButtonState}
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

import { Link, Outlet } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default NavigationMenu;

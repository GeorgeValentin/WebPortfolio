import { Link, Outlet } from "react-router-dom";

const NavigationMenu = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Link to="/projects">PROJECTS</Link>
      <Link to="/about">ABOUT</Link>

      <Outlet />
    </div>
  );
};

export default NavigationMenu;

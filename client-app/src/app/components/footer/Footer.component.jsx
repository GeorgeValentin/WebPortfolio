import "./Footer.styles.scss";
import HyperLink from "../hyper-link/HyperLink.component";

const Footer = () => {
  return (
    <div className="footer-container d-flex justify-content-between align-items-center gap-2">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <HyperLink
          hrefLink="https://www.linkedin.com/in/georgecujba"
          faIcon="fa-brands fa-linkedin"
          faSize="xl"
          faColor="white"
        />

        <HyperLink
          hrefLink="https://github.com/GeorgeValentin"
          faIcon="fa-brands fa-github"
          faSize="xl"
          faColor="white"
        />
      </div>

      <div>George-Valentin Cujbă</div>

      <span>&copy; Copyright 2023</span>
    </div>
  );
};

export default Footer;

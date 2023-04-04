import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.styles.scss";

const Footer = () => {
  return (
    <div className="footer-container d-flex justify-content-between align-items-center gap-2">
      <div className="d-flex justify-content-center align-items-center gap-3">
        <a
          href="https://www.linkedin.com/in/georgecujba"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            size="xl"
            color="white"
          />
        </a>

        <a
          href="https://github.com/GeorgeValentin"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon="fa-brands fa-github" size="xl" color="white" />
        </a>
      </div>

      <div>George-Valentin Cujbă</div>

      <span>&copy; Copyright 2023</span>
    </div>
  );
};

export default Footer;

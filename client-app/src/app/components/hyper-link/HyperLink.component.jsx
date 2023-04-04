import { Fragment } from "react";
import LogoContainer from "../logo-container/LogoContainer.component";

import "./HyperLink.styles.scss";

const HyperLink = ({ hrefLink, logoValue }) => {
  return (
    <Fragment>
      <a
        className="view-code-link"
        href={hrefLink}
        target="_blank"
        rel="noreferrer"
      >
        <LogoContainer logoValue={logoValue} />
      </a>
    </Fragment>
  );
};

export default HyperLink;

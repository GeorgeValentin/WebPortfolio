import { Fragment } from "react";
import LogoContainer from "../logo-container/LogoContainer.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./HyperLink.styles.scss";

const HyperLink = ({
  hrefLink,
  logoValue,
  faIcon = null,
  faSize = null,
  faColor = null,
}) => {
  return (
    <Fragment>
      <a
        className="view-link f-inline-block h-100"
        href={hrefLink}
        target="_blank"
        rel="noreferrer"
      >
        {logoValue ? (
          <LogoContainer logoValue={logoValue} />
        ) : (
          <FontAwesomeIcon icon={faIcon} size={faSize} color={faColor} />
        )}
      </a>
    </Fragment>
  );
};

export default HyperLink;

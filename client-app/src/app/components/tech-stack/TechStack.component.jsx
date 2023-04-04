import { Fragment } from "react";
import LogoContainer from "../logo-container/LogoContainer.component";

import "./TechStack.styles.scss";

const TechStack = ({ techStack }) => {
  return (
    <Fragment>
      <div className="fw-bolder text-center m-0">Tech Stack:</div>

      <div className="list-group list-group-flush justify-content-center flex-column">
        <div className="d-flex justify-content-center flex-row gap-3 flex-wrap">
          {techStack.map((techStack, index) => {
            return (
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                key={index}
              >
                <div>{Object.keys(techStack)}</div>

                {Object.values(techStack).map((logoValue, index) => {
                  return (
                    <div className="list-group-item" key={index}>
                      <LogoContainer logoValue={logoValue} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default TechStack;

import "./ProjectCard.styles.scss";

const ProjectCard = ({ project }) => {
  const { name, description, techStack } = project;

  return (
    <div className="card gap-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="list-group list-group-flush">
        <div className="d-flex justify-content-center flex-row gap-2">
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
                      <img
                        className="logo-img"
                        src={logoValue}
                        alt="logo-value"
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <button type="button" className="btn btn-primary">
        Do Something
      </button>
    </div>
  );
};

export default ProjectCard;

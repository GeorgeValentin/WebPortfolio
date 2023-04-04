import HyperLink from "../hyper-link/HyperLink.component";
import TechStack from "../tech-stack/TechStack.component";
import "./ProjectCard.styles.scss";

const ProjectCard = ({ project }) => {
  const { name, description, projectType, techStack, appLink, codeRepoLink } =
    project;

  return (
    <div className="card gap-2">
      <div className="card-body">
        <h5 className="card-title text-center fs-5 fw-bolder">{name}</h5>
        <div className="card-text d-flex flex-column text-center mb-2">
          <span className="fw-bolder">Description:</span>{" "}
          <span className="project-description">{description}</span>
        </div>
        <div className="card-text d-flex flex-column">
          <span className="text-center fw-bolder">Project Type:</span>{" "}
          <span className="text-center fst-italic">{projectType}</span>
        </div>
      </div>

      <TechStack techStack={techStack} />

      <div className="view-app-container d-flex justify-content-center align-items-center gap-4 mb-2">
        {!appLink ? (
          <div className="fw-bold border border-1 border-secondary rounded p-1">
            Not hosted!
          </div>
        ) : (
          <HyperLink
            hrefLink={appLink}
            logoValue="../../../../images/view.png"
          />
        )}
        <HyperLink
          hrefLink={codeRepoLink}
          logoValue="../../../../images/github.png"
        />
      </div>
    </div>
  );
};

export default ProjectCard;

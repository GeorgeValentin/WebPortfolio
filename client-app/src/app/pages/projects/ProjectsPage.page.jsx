import { Fragment } from "react";

import { projects } from "../../utils/projectsData";
import ProjectCard from "../../components/project-card/ProjectCard.component";

const ProjectsPage = () => {
  return (
    <Fragment>
      <div className="projects-page-container d-flex justify-content-center align-items-center flex-wrap gap-4 pt-5 pb-4 mt-5 px-0 mb-5">
        {projects.map((project, index) => {
          return (
            <Fragment key={index}>
              <ProjectCard project={project} />
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProjectsPage;

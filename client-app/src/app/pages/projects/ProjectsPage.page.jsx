import { Fragment } from "react";

import { projects } from "../../utils/projectsData";
import ProjectCard from "../../components/project-card/ProjectCard.component";

import "./ProjectsPage.styles.scss";

const ProjectsPage = () => {
  return (
    <Fragment>
      <div className='projects-page-container d-flex justify-content-center align-items-center flex-wrap flex-column gap-4 py-5 mt-5 px-0'>
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

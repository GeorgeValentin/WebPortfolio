import { projects } from "../../utils/projectsData";
import ProjectCard from "../../components/project-card/ProjectCard.component";

const ProjectsPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap gap-3">
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsPage;

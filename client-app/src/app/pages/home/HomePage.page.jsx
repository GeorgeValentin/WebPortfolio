import { useState } from "react";
import { projects } from "../../utils/projectsData";
import ProjectCard from "../../components/project-card/ProjectCard.component";

const HomePage = () => {
  const [project] = useState(projects[1]);

  return (
    <div className="mt-5 pt-2">
      <div>Hi, I'm George!</div>

      <div>A 22 years old student and developer.</div>

      <div className="d-flex justify-content-center">
        <ProjectCard project={project} />
      </div>
    </div>
  );
};

export default HomePage;

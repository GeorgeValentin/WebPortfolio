import { useState } from "react";
import { projects } from "../../utils/projectsData";
import ProjectCard from "../../components/project-card/ProjectCard.component";

import "./HomePage.styles.scss";

const HomePage = () => {
  const [project] = useState(projects[1]);

  return (
    <div className="home-page-container">
      <h2 className="text-center fw-bolder fs-2 mb-3 p-2">Hi, I'm George!</h2>

      <p className="text-center fs-4 w-50 mx-auto mb-4">
        A 22 years old student and enthusiastic developer with a drive to learn
        and challenge myself every day!
      </p>

      <p className="text-center fst-italic fw-bold m-0 fs-4">
        What I worked on last?
      </p>
      <div className="d-flex justify-content-center p-4">
        <ProjectCard project={project} />
      </div>
    </div>
  );
};

export default HomePage;

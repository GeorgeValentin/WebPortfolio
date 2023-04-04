import { Routes, Route } from "react-router-dom";
import NavigationMenu from "./app/components/navigation/NavigationMenu.component";
import AboutPage from "./app/pages/about/AboutPage.page";
import HomePage from "./app/pages/home/HomePage.page";
import ProjectsPage from "./app/pages/projects/ProjectsPage.page";
import ContactPage from "./app/pages/contact/ContactPage.page";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<NavigationMenu />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

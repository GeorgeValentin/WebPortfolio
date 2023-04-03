import { Routes, Route } from "react-router-dom";
import NavigationMenu from "./app/components/navigation/NavigationMenu";
import AboutPage from "./app/pages/AboutPage";
import HomePage from "./app/pages/HomePage";
import ProjectsPage from "./app/pages/projects/ProjectsPage.component";
import ContactPage from "./app/pages/ContactPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationMenu />}>
          <Route index={true} element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

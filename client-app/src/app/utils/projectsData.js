import {
  dotNetLogo,
  cSharpLogo,
  htmlLogo,
  jsLogo,
  mvcLogo,
  reactJsLogo,
  sqlServerLogo,
  cssLogo,
  googleFirebaseLogo,
  reduxLogo,
  blazorLogo,
} from "./logos";

export const projects = [
  {
    id: 1,
    name: "Interactive Library Website",
    description:
      "A Single Page Application that showcases visually and with some animations how a Library would look like. This app the focuses on aspect rather than functionality.",
    projectType: "front-end",
    techStack: [{ HTML: htmlLogo }, { JavaScript: jsLogo }, { CSS: cssLogo }],
    appLink: "https://georgevalentin.github.io/Interactive-Library-Website/",
    codeRepoLink:
      "https://github.com/GeorgeValentin/Interactive-Library-Website",
  },
  {
    id: 2,
    name: "E-Commerce Clothing Store",
    description:
      "A front-end e-commerce application for a clothing store which gets data from Firebase Firestore and manages state with redux. It also provides authentication with Firebase.",
    projectType: "front-end",
    techStack: [
      { "React.js": reactJsLogo },
      { Firebase: googleFirebaseLogo },
      { Redux: reduxLogo },
    ],
    appLink: "https://peppy-lebkuchen-4e89ba.netlify.app/",
    codeRepoLink: "https://github.com/GeorgeValentin/E-Commerce_Clothing_Store",
  },
  {
    id: 3,
    name: "Human Capital Management API",
    description:
      "A back-end API application that facilitates access to data from a SQL Server database that I have created and all manipulation operations.",
    projectType: "back-end",
    techStack: [
      { "C#": cSharpLogo },
      { "Rest Web API": dotNetLogo },
      { "Sql Server": sqlServerLogo },
    ],
    appLink: "",
    codeRepoLink: "https://github.com/GeorgeValentin/HumanCapitalManagementAPI",
  },
  {
    id: 4,
    name: "Human Capital Management",
    description:
      "This front-end app uses the HumanCapitalManagement API to showcase that data alongside the operations the API provides in an User Interface.",
    projectType: "front-end",
    techStack: [
      { "C#": cSharpLogo },
      { Blazor: blazorLogo },
      { HTML: htmlLogo },
    ],
    appLink: "",
    codeRepoLink: "https://github.com/GeorgeValentin/HumanCapitalManagementUI",
  },
  {
    id: 5,
    name: "Car Service",
    description:
      "A full-stack application built with MVC that allows the user to manage his information when it comes to his cars at a service and make appointments.",
    projectType: "full-stack",
    techStack: [
      { "C#": cSharpLogo },
      { "ASP NET MVC": mvcLogo },
      { "SQL Server": sqlServerLogo },
    ],
    appLink: "",
    codeRepoLink: "https://github.com/GeorgeValentin/CarService",
  },
];

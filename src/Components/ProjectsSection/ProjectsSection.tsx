import React from "react";
import "./projects.css";

import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="projects-section section-container">
      <h2>Protects</h2>
      <section className="projects-container">
        <ProjectCard />
      </section>
    </section>
  );
};

export default ProjectsSection;

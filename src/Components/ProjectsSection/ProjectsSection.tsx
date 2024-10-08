import React from "react";
import "./projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import { projectData } from "../../data";

const ProjectsSection = () => {
  const projectListItems = projectData.map((project, index) => {
    return (
      <li key={project.name}>
        <ProjectCard
          imageURL={project.image}
          projectName={project.name}
          githublink={project.githublink}
          liveDemo={project.website}
        />
      </li>
    );
  });

  return (
    <section className="projects-section" id="projects">
      <h2>Projects.</h2>
      <ul className="projects-container">{projectListItems}</ul>
    </section>
  );
};

export default ProjectsSection;

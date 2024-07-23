import React from "react";

const ProjectCard = ({ imageURL, projectName, githublink, liveDemo }) => {
  return (
    <section className="project-card">
      <section className="project-image-container">
        <img src={imageURL} alt={projectName.name} />
      </section>
      <section className="project-information-container">
        <h4>{projectName}</h4>
        <section className="project-links">
          <a href={githublink} target="_blank">
            Github
          </a>
          <a href={liveDemo} target="_blank">
            Live Demo
          </a>
        </section>
      </section>
    </section>
  );
};

export default ProjectCard;

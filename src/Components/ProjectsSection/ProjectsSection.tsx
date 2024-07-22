import React from "react";
import "./projects.css";
import ageCalImage from "../../assets/project-images/age-calculator/age-calculator.jpg";

const ProjectsSection = () => {
  return (
    <section className="projects-section section-container">
      <h2>Protects</h2>
      <section className="projects-container">
        <section className="project-card">
          <section className="project-image-container">
            <img src={ageCalImage} alt="" />
          </section>
          <section className="project-information-container">
            <h4> Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
            <section className="project-links">
              <a href="">Github</a>
              <a href="">Live Demo</a>
            </section>
          </section>
        </section>

        <section className="project-card">
          <section className="project-image-container">
            <img src={ageCalImage} alt="" />
          </section>
          <section className="project-information-container">
            <h4> Lorem ipsum adipisicing.</h4>
            <section className="project-links">
              <a href="">Github</a>
              <a href="">Live Demo</a>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProjectsSection;

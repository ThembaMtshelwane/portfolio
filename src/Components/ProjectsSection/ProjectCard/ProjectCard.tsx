import React from "react";
import ageCalImage from "../../../assets/project-images/age-calculator/age-calculator.jpg";
const ProjectCard = () => {
  return (
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
  );
};

export default ProjectCard;

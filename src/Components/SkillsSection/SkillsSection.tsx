import React from "react";
import "./skills.css";
import { skillsData } from "../../data";
import SkillsItem from "./SkillsItem/SkillsItem";

const SkillsSection = () => {
  const skillsListItems = skillsData.frontend.map((skill) => {
    return (
      <li key={skill.name}>
        <SkillsItem name={skill.name} years={skill.years} />
      </li>
    );
  });
  return (
    <section className="skills-section">
      <h2>Experience</h2>
      <section className="experience-container">
        <section className="work-experience-container">
          <section className="work-experiece">
            <p className="position">Full-stack Web Developer</p>
            <p className="duration">1 year</p>
            <p className="company">Wits Vaction work for Dr Philippe Ferrer</p>
          </section>
          <section className="work-experiece">
            <p className="position">Teaching Assistant</p>
            <p className="duration">3 months</p>
            <p className="company">Wits University</p>
          </section>
        </section>
        <section className="cv-container">
          <button>CV FOR DOWNLOAD</button>
        </section>
        <section className="skills-frontend">
          {/* <h4>Technologies</h4> */}
          <ul>{skillsListItems}</ul>
        </section>
      </section>
    </section>
  );
};

export default SkillsSection;

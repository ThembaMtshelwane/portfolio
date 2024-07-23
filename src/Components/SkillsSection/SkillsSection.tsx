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
    <section className="skills-section section-container">
      <h2>Skills</h2>
      <section className="skills-frontend">
        <h4>Frontend Development</h4>
        <ul>{skillsListItems}</ul>
      </section>
    </section>
  );
};

export default SkillsSection;

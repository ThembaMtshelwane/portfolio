import React from "react";
import "./skills.css";

const SkillsSection = () => {
  return (
    <section className="skills-section section-container">
      <h2>Skills</h2>
      <section className="skills-frontend">
        <h4>Frontend Development</h4>
        <ul>
          <li>
            <section>
              <p>HTML</p>
              <p>2yrs</p>
            </section>
          </li>
          <li>
            <section>
              <p>CSS</p>
              <p>2yrs</p>
            </section>
          </li>
          <li>
            <section>
              <p>JavaScript</p>
              <p>2yrs</p>
            </section>
          </li>
          <li>
            <section>
              <p>TypeScript</p>
              <p>1yrs</p>
            </section>
          </li>
          <li>
            <section>
              <p>ReactJS</p>
              <p>1yrs</p>
            </section>
          </li>
          <li>
            <section>
              <p>NextJS</p>
              <p>1yrs</p>
            </section>
          </li>
          <li>
            <section>
              <p>ChakraUI</p>
              <p>1yrs</p>
            </section>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default SkillsSection;

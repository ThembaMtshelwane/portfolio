import React from "react";
import "./about.css";
import { FaGithub } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className=" about-section section-container" id="about">
      <section className="about-image-container"></section>
      <section className="about-text-container">
        <h2>About</h2>
        <p>
          Recent Information Engineering graduand from Wits University.
          Experienced in front-end and full-stack development, UI/UX design, and
          database management. Demonstrated proficiency in React, NextJS, Chakra
          UI, and Firebase through independent projects on
          <a
            className="about-link"
            href="https://github.com/ThembaMtshelwane"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </section>
    </section>
  );
};

export default AboutSection;

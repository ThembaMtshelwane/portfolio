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
          Driven and skilled Software Developer with a BSc (Hons) in Information
          Engineering. Currently advancing my expertise as a Software Developer
          Intern at Tshimologong, where I specialize in creating responsive,
          user-focused websites. Committed to solving complex problems and
          enhancing user experiences through innovative, efficient code.
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
  )
};

export default AboutSection;

import React from "react";
import "./about.css";
import { FaGithub } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className=" about-section section-container" id="about">
      <section className="about-image-container"></section>
      <section className="about-text-container">
        {/* <div className="about-border"></div> */}
        <h2>About</h2>
        <p>
          Driven and skilled Software Developer with a BSc (Hons) in Information
          Engineering. Currently advancing my expertise as a Software Developer
          Intern at Tshimologong, where I specialize in creating responsive,
          user-focused fullstack websites. Committed to solving complex problems and
          enhancing user experiences through innovative, efficient code.
        </p>
      </section>
    </section>
  );
};

export default AboutSection;

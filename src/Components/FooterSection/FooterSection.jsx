import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <ul className="contact-list">
        <li className="work-socials">
          <a href="https://github.com/ThembaMtshelwane" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>ThembaMM3@gmail.com</li>

        <li className="work-socials">
          <a
            href="https://www.linkedin.com/in/themba-mtshelwane/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default FooterSection;

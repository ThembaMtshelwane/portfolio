import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection.tsx";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection.tsx";
import ContactsSection from "./Components/ContactsSection/ContactsSection.jsx";
import FooterSection from "./Components/FooterSection/FooterSection.jsx";

import "./App.css";
import Modal from "./Components/Modal.tsx";

const App = () => {
  return (
    <section className="main-container">
      <section className="background-colour"></section>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
      <FooterSection />
      <Modal />
    </section>
  );
};

export default App;

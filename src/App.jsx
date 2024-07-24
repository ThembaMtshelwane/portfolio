import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection.tsx";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection.tsx";
import ContactsSection from "./Components/ContactsSection/ContactsSection.jsx";
import "./App.css";

const App = () => {
  return (
    <section className="main-container">
      <section className="background-colour"></section>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
    </section>
  );
};

export default App;

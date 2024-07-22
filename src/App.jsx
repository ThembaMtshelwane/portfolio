import React from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection.tsx";
import SkillsSection from "./Components/SkillsSection/SkillsSection.tsx";
import ProjectsSection from "./Components/ProjectsSection/ProjectsSection.tsx";
import "./App.css";
const App = () => {
  return (
    <section className="main-container">
      <section className="background-colour"></section>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </section>
  );
};

export default App;

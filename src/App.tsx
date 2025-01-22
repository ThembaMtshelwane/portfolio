import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useState } from "react";

export default function App() {
  return (
    <div className="bg-black w-full h-[900vh] flex justify-center">
      <div className="flex flex-col fixed z-[999] justify-center items-center h-screen">
        <PortfolioSections />
        <EmanatingRing />
        <div className="relative h-screen  w-screen max-w-[1440px] ">
          <NavCircles />
        </div>
      </div>
    </div>
  );
}

const NavCircles = () => {
  const { scrollYProgress } = useScroll();

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const circleRadius = Math.min(viewportWidth, viewportHeight) * 0.4;
  const centerX = viewportWidth / 2;
  const centerY = viewportHeight / 2;

  // Calculate rotation angle based on scroll progress
  const rotationAngle = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  // Calculate x and y positions for each nav-circle based on rotation angle
  const xHome = useTransform(
    rotationAngle,
    (angle) =>
      centerX + circleRadius * Math.cos(angle - Math.PI / 4) - circleRadius / 2
  );
  const yHome = useTransform(
    rotationAngle,
    (angle) => centerY + circleRadius * Math.sin(angle - Math.PI / 4)
  );

  const xContact = useTransform(
    rotationAngle,
    (angle) =>
      centerX + circleRadius * Math.cos(angle + Math.PI / 4) - circleRadius / 2
  );
  const yContact = useTransform(
    rotationAngle,
    (angle) => centerY + circleRadius * Math.sin(angle + Math.PI / 4)
  );

  const xAbout = useTransform(
    rotationAngle,
    (angle) =>
      centerX +
      circleRadius * Math.cos(angle - (3 * Math.PI) / 4) -
      circleRadius * 0.5
  );
  const yAbout = useTransform(
    rotationAngle,
    (angle) => centerY + circleRadius * Math.sin(angle - (3 * Math.PI) / 4)
  );

  const xProjects = useTransform(
    rotationAngle,
    (angle) =>
      centerX +
      circleRadius * Math.cos(angle + (3 * Math.PI) / 4) -
      circleRadius / 2
  );
  const yProjects = useTransform(
    rotationAngle,
    (angle) => centerY + circleRadius * Math.sin(angle + (3 * Math.PI) / 4)
  );

  const handleHomeClick = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = () => {
    scrollTo({ top: viewportHeight * 8, behavior: "smooth" });
  };

  const handleAboutClick = () => {
    scrollTo({ top: viewportHeight * 2, behavior: "smooth" }); // Scroll to the About section
  };

  const handleProjectsClick = () => {
    scrollTo({ top: viewportHeight * 5, behavior: "smooth" }); // Scroll to the Projects section
  };

  return (
    <>
      <motion.div
        className="nav-circle"
        style={{
          x: xHome,
          y: yHome,
          position: "absolute",
          zIndex: 20,
        }}
        onClick={handleHomeClick}
      >
        Home
      </motion.div>
      <motion.div
        className="nav-circle"
        style={{
          x: xContact,
          y: yContact,
          position: "absolute",
          zIndex: 20,
        }}
        onClick={handleContactClick}
      >
        Contact
      </motion.div>
      <motion.div
        className="nav-circle"
        style={{
          x: xAbout,
          y: yAbout,
          position: "absolute",
          zIndex: 20,
        }}
        onClick={handleAboutClick}
      >
        About
      </motion.div>
      <motion.div
        className="nav-circle"
        style={{
          x: xProjects,
          y: yProjects,
          position: "absolute",
          zIndex: 20,
        }}
        onClick={handleProjectsClick}
      >
        Projects
      </motion.div>
    </>
  );
};

const PortfolioSections = () => {
  const { scrollY } = useScroll();
  const [className1, setClassName1] = useState("flex");
  const [className2, setClassName2] = useState("flex");
  const [className3, setClassName3] = useState("flex");
  const [className4, setClassName4] = useState("flex");

  const start = window.innerHeight;
  const end = start + window.innerHeight;

  const scale = useTransform(scrollY, [start, end], [1, 10]);
  const opacity = useTransform(scrollY, [start, end], [1, 0]);

  const scale2 = useTransform(
    scrollY,
    [3 * start, 3 * start + window.innerHeight],
    [1, 10]
  );
  const opacity2 = useTransform(
    scrollY,
    [3 * start, 3 * start + window.innerHeight],
    [1, 0]
  );

  const scale3 = useTransform(
    scrollY,
    [5 * start, 5 * start + window.innerHeight],
    [1, 10]
  );
  const opacity3 = useTransform(
    scrollY,
    [5 * start, 5 * start + window.innerHeight],
    [1, 0]
  );

  const scale4 = useTransform(
    scrollY,
    [7 * start, 7 * start + window.innerHeight],
    [1, 1.3]
  );
  const opacity4 = useTransform(
    scrollY,
    [7 * start, 7 * start + window.innerHeight],
    [1, 1.5]
  );

  useMotionValueEvent(opacity, "change", (latest) => {
    setClassName1(latest === 0 ? "hidden" : "flex");
  });

  useMotionValueEvent(opacity2, "change", (latest) => {
    setClassName2(latest === 0 ? "hidden" : "flex");
  });

  useMotionValueEvent(opacity3, "change", (latest) => {
    setClassName3(latest === 0 ? "hidden" : "flex");
  });

  useMotionValueEvent(opacity4, "change", (latest) => {
    setClassName4(latest === 0 ? "hidden" : "flex");
  });
  return (
    <>
      <motion.div
        id="home"
        className={`content-container  z-10 ${className1}`}
        style={{ scale, opacity }}
      >
        <div className="content">
          <Hero />
        </div>
      </motion.div>
      <motion.div
        className={`content-container z-[9] ${className2} `}
        style={{ scale: scale2, opacity: opacity2 }}
      >
        <div className="content">
          <About />
        </div>
      </motion.div>
      <motion.div
        className={`content-container z-[8] ${className3}`}
        style={{
          scale: scale3,
          opacity: opacity3,
        }}
      >
        <div className="content-p">
          <Projects />
        </div>
      </motion.div>
      <motion.div
        className={`content-container z-[7]  ${className4}`}
        style={{ scale: scale4, opacity: opacity4 }}
      >
        <div className="content ">
          <Contact />
        </div>
      </motion.div>
    </>
  );
};

const EmanatingRing = () => {
  return (
    <>
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`emanate `}
            style={{ animationDelay: `${index * 0.05}s` }}
          ></div>
        ))}
    </>
  );
};

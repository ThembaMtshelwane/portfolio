import React from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

const NavCircles: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const viewportWidth: number = window.innerWidth;
  const viewportHeight: number = window.innerHeight;

  const circleRadius: number = Math.min(viewportWidth, viewportHeight) * 0.6;
  const rotationAngle = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);

  interface Position {
    x: MotionValue<number>;
    y: MotionValue<number>;
  }

  const calculatePosition = (angleOffset: number): Position => ({
    x: useTransform(
      rotationAngle,
      (angle: number) => circleRadius * Math.cos(angle + angleOffset)
    ),
    y: useTransform(
      rotationAngle,
      (angle: number) => circleRadius * Math.sin(angle + angleOffset)
    ),
  });

  const homePosition = calculatePosition(-Math.PI / 4);
  const contactPosition = calculatePosition(Math.PI / 4);
  const aboutPosition = calculatePosition((-3 * Math.PI) / 4);
  const projectsPosition = calculatePosition((3 * Math.PI) / 4);

  const handleScrollToSection = (scrollTarget: number): void => {
    window.scrollTo({ top: scrollTarget, behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="nav-circle"
        style={{
          x: homePosition.x,
          y: homePosition.y,
          zIndex: 20,
        }}
        onClick={() => handleScrollToSection(0)}
      >
        Home
      </motion.div>
      <motion.div
        className="nav-circle"
        style={{
          x: contactPosition.x,
          y: contactPosition.y,
          zIndex: 20,
        }}
        onClick={() => handleScrollToSection(viewportHeight * 8)}
      >
        Contact
      </motion.div>
      <motion.div
        className="nav-circle"
        style={{
          x: aboutPosition.x,
          y: aboutPosition.y,
          zIndex: 20,
        }}
        onClick={() => handleScrollToSection(viewportHeight * 2)}
      >
        About
      </motion.div>
      <motion.div
        className="nav-circle"
        style={{
          x: projectsPosition.x,
          y: projectsPosition.y,
          zIndex: 20,
        }}
        onClick={() => handleScrollToSection(viewportHeight * 4)}
      >
        Projects
      </motion.div>
    </>
  );
};

export default NavCircles;

import {
  useScroll,
  useTransform,
  useMotionValueEvent,
  motion,
} from "framer-motion";
import { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

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
    setClassName2(latest < 0.5 ? "hidden" : "flex");
  });

  useMotionValueEvent(opacity3, "change", (latest) => {
    setClassName3(latest == 0 ? "hidden" : "flex");
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

export default PortfolioSections;

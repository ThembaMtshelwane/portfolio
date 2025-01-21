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
  const { scrollY } = useScroll();
  const [className1, setClassName1] = useState("flex");
  const [className2, setClassName2] = useState("flex");
  const [className3, setClassName3] = useState("flex");
  const [className4, setClassName4] = useState("flex");

  const start = window.innerHeight;
  const end = start + window.innerHeight;

  const scale = useTransform(scrollY, [start, end], [1, 10]);
  const opacity = useTransform(scrollY, [start, end], [1, 0]);
  const backgroundColor = useTransform(
    scrollY,
    [start, end],
    ["transparent", "#000000"]
  );

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
  const backgroundColor2 = useTransform(
    scrollY,
    [3 * start, 3 * start + window.innerHeight],
    ["transparent", "#000000"]
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
  const backgroundColor3 = useTransform(
    scrollY,
    [1.1 * 5 * start, 5 * start + window.innerHeight],
    ["transparent", "#000000"]
  );

  const scale4 = useTransform(
    scrollY,
    [7 * start, 7 * start + window.innerHeight],
    [1, 1.5]
  );
  const opacity4 = useTransform(
    scrollY,
    [7 * start, 7 * start + window.innerHeight],
    [1, 1.5]
  );

  // Update class based on opacity value
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
    <div className="bg-black w-full h-[900vh] flex justify-center cursor-none">
      <motion.div
        className={`content-container  z-10 ${className1}`}
        style={{ scale, opacity }}
      >
        <div className="content">
          {/* <motion.div
            className="absolute w-full h-full"
            // style={{ backgroundColor }}
          ></motion.div> */}
          <Hero />
        </div>
      </motion.div>

      <motion.div
        className={`content-container z-[9] ${className2} `}
        style={{ scale: scale2, opacity: opacity2 }}
      >
        <div className="content">
          {/* <motion.div
            className="absolute w-full h-full"
            // style={{ backgroundColor: backgroundColor2 }}
          ></motion.div> */}
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
          {/* <motion.div
            className="absolute w-full h-full"
            // style={{ backgroundColor: backgroundColor3 }}
          ></motion.div> */}
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

      {Array(10)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className={`emanate `}
            style={{ animationDelay: `${index * 0.05}s` }}
          ></div>
        ))}
    </div>
  );
}

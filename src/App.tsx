import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  const { scrollY } = useScroll();

  const start = window.innerHeight;
  const end = start + window.innerHeight;

  const scale = useTransform(scrollY, [start, end], [1, 10]);
  const opacity = useTransform(scrollY, [start, end], [1, 0]);
  const backgroundColor = useTransform(
    scrollY,
    [1.1 * start, end],
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
    [1.1 * 3 * start, 3 * start + window.innerHeight],
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
  return (
    <div className="bg-black w-full h-[900vh] flex justify-center overflow-x-hidden border border-blue-800">
      <motion.div
        className={`content-container  z-10 `}
        style={{ scale, opacity }}
      >
        <div className="content  relative">
          <motion.div
            className="absolute w-full h-full"
            style={{ backgroundColor }}
          ></motion.div>
          <Hero />
        </div>
      </motion.div>

      <motion.div
        className={`content-container z-[9]`}
        style={{ scale: scale2, opacity: opacity2 }}
      >
        <div className="content relative">
          <motion.div
            className="absolute w-full h-full"
            style={{ backgroundColor: backgroundColor2 }}
          ></motion.div>
          <About />
        </div>
      </motion.div>

      <motion.div
        className={`content-container z-[8]`}
        style={{
          scale: scale3,
          opacity: opacity3,
        }}
      >
        <div className="content relative">
          <motion.div
            className="absolute w-full h-full"
            style={{ backgroundColor: backgroundColor3 }}
          ></motion.div>
          <Projects />
        </div>
      </motion.div>

      <motion.div
        className={`content-container z-[7] `}
        style={{ scale: scale4, opacity: opacity4 }}
      >
        <div className="content">
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

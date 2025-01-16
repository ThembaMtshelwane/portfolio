import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./Components/Hero";
import About from "./Components/About";

export default function App() {
  const { scrollY } = useScroll();

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
    [1, 1.5]
  );
  return (
    <div className="bg-black w-full h-[1600vh]  flex justify-center overflow-x-hidden border border-blue-800">
      <motion.div
        className={`content-container  z-10 `}
        style={{ scale, opacity }}
      >
        <div className="content z-10">
          <Hero />
        </div>
      </motion.div>

      <motion.div
        className={`content-container   z-[9]`}
        style={{ scale: scale2, opacity: opacity2 }}
      >
        <div className="content">
          <About />
        </div>
        {/* Subtle pulsating circles */}
      </motion.div>

      <motion.div
        className={`content-container  z-[8]`}
        style={{ scale: scale3, opacity: opacity3 }}
      >
        <div className="content"> This is the Projects</div>
      </motion.div>

      <motion.div className={`content-container`} style={{ scale: scale4 }}>
        <div className="content -z-20">This is the Contact</div>
        {/* Subtle pulsating circles */}
        {Array(25)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className={`emanate -z-[21]`}
              style={{ animationDelay: `${index * 2.5}s` }}
            ></div>
          ))}
      </motion.div>
    </div>
  );
}

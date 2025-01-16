import { motion, useScroll, useTransform } from "framer-motion";

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

  console.log("window.innerHeight: ", window.innerHeight);

  return (
    <section className="h-[1600vh] flex justify-center   border-2 border-black">
      <motion.div
        className={`size-[600px] bg-red-500 my-auto fixed top-1/4 bottom-1/4 flex justify-center items-center`}
        style={{ scale, opacity }}
      >
        This is the Hero
      </motion.div>

      <motion.div
        className={`size-[600px] bg-orange-500 my-auto fixed top-1/4 bottom-1/4 flex justify-center items-center`}
        style={{ scale: scale2, opacity: opacity2, zIndex: -1 }}
      >
        This is the About
      </motion.div>

      <motion.div
        className={`size-[600px] bg-yellow-500 my-auto fixed top-1/4 bottom-1/4 flex justify-center items-center`}
        style={{ scale: scale3, opacity: opacity3, zIndex: -2 }}
      >
        This is the Project
      </motion.div>

      <motion.div
        className={`size-[600px] bg-green-500 my-auto fixed top-1/4 bottom-1/4 flex justify-center items-center`}
        style={{ scale: scale4, zIndex: -3 }}
      >
        This is the Contact
      </motion.div>
    </section>
  );
}

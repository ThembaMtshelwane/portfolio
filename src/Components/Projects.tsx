import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Projects = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // Mouse move event handler
  const manageMouseMove = (e: MouseEvent): void => {
    const { clientX, clientY } = e;
    setX(clientX);
    setY(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  // Smooth circular motion logic
  const circularMotion = {
    x: (x - window.innerWidth / 2) * 0.05,
    y: (y - window.innerHeight / 2) * 0.05,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  };

  return (
    <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
      <h3 className="text-4xl uppercase col-[6/7] row-[6/7] font-semibold ">
        Projects.
      </h3>

      <motion.div
        className=" rounded-full col-[1/7] row-[1/7] shadow-blue transform animate-floating"
        style={{
          x: (x - window.innerWidth / 2) * 0.01,
          y: (y - window.innerHeight / 2) * 0.01,
        }}
      >
        <img
          src="project-images/dronoticz/dronoticz1.PNG"
          className="h-full w-full object-cover object-center rounded-full"
          alt="Project"
        />
      </motion.div>

      <motion.div
        className="rounded-full  bg-orange-700 col-[1/7] row-[6/12] shadow-blue animate-[floating_4s_ease-in-out_infinite]"
        style={{ x: circularMotion.x * 0.2, y: circularMotion.y * 0.2 }}
      >
        <img
          src="project-images/enter-stream/media1.PNG"
          className="h-full w-full object-cover object-center rounded-full"
          alt="Project"
        />
      </motion.div>

      <motion.div
        className="rounded-full  bg-yellow-700 col-[6/12] row-[7/13] shadow-blue animate-[floating_3.5s_ease-in-out_infinite]"
        style={{ x: circularMotion.x * 0.1, y: circularMotion.y * 0.1 }}
      >
        <img
          src="project-images/lecturer/lecturer-1.jpg"
          className="h-full w-full object-cover object-center rounded-full"
          alt="Project"
        />
      </motion.div>

      <motion.div
        className="rounded-full  bg-green-700 col-[8/13] row-[4/9] shadow-blue animate-[floating_4.5s_ease-in-out_infinite]"
        style={{ x: circularMotion.y * 0.3, y: circularMotion.x * 0.3 }}
      >
        <img
          src="project-images/immergence-studios/immergence-studios.PNG"
          className="h-full w-full object-cover object-center rounded-full"
          alt="Project"
        />
      </motion.div>

      <motion.div
        className="rounded-full  bg-blue-700 col-[6/11] row-[1/6] shadow-blue animate-[floating_5s_ease-in-out_infinite]"
        style={{ x: circularMotion.x * 0.25, y: circularMotion.y * 0.25 }}
      >
        <img
          src="project-images/survey/survey.PNG"
          className="h-full w-full object-cover object-center rounded-full"
          alt="Project"
        />
      </motion.div>
    </div>
  );
};

export default Projects;

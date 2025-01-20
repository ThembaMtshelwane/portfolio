import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
      <h3 className="text-4xl uppercase col-[6/7] row-[6/7] font-semibold ">
        Projects.
      </h3>

      <motion.div className="rounded-full col-[1/7] row-[1/7] shadow-blue transform animate-floating relative hover:z-10">
        <img
          onClick={() => {
            console.log("Themba");
          }}
          src="project-images/dronoticz/dronoticz1.PNG"
          className="project-image"
          alt="Project"
        />
      </motion.div>

      <motion.div className=" rounded-full  bg-orange-700 col-[1/7] row-[6/12] shadow-blue animate-[floating_4s_ease-in-out_infinite] hover:z-10">
        <img
          src="project-images/enter-stream/media1.PNG"
          className="project-image"
          alt="Project"
        />
      </motion.div>

      <motion.div className="rounded-full  bg-yellow-700 col-[6/12] row-[7/13] shadow-blue animate-[floating_3.5s_ease-in-out_infinite] hover:z-10">
        <img
          src="project-images/lecturer/lecturer-1.jpg"
          className="project-image"
          alt="Project"
        />
      </motion.div>

      <motion.div className="rounded-full  bg-green-700 col-[8/13] row-[4/9] shadow-blue animate-[floating_4.5s_ease-in-out_infinite] hover:z-10">
        <img
          src="project-images/immergence-studios/immergence-studios.PNG"
          className="project-image"
          alt="Project"
        />
      </motion.div>

      <motion.div className="rounded-full  bg-blue-700 col-[6/11] row-[1/6] shadow-blue animate-[floating_5s_ease-in-out_infinite] hover:z-10">
        <img
          src="project-images/survey/survey.PNG"
          className="project-image"
          alt="Project"
        />
      </motion.div>
    </div>
  );
};

export default Projects;

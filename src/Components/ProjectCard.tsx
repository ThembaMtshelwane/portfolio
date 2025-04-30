import { motion } from "framer-motion";
import Modal from "./Modal";
import { useState } from "react";
import { ProjectDataType } from "../definitions";

const ProjectCard = ({ project }: { project: ProjectDataType }) => {
  const {
    name,
    techStack,
    summary,
    responsibilities,
    website,
    githublink,
    image,
    status,
    animation,
    gridPosition,
  } = project;

  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className={`cursor-pointer rounded-full shadow-blue ${animation} hover:z-10 ${gridPosition}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <img src={image} alt={image} className="project-image" />
      </motion.div>
      <Modal
        open={open}
        setOpen={setOpen}
        project={{
          name,
          techStack,
          summary,
          responsibilities,
          website,
          githublink,
          image,
          status,
        }}
      />
    </>
  );
};

export default ProjectCard;

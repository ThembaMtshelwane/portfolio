import React, { useState } from "react";
import Modal from "../../Modal";
import { ProjectDataType } from "../../../definitions";

const ProjectCard = ({ project }) => {
  const { name, image } = project;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className="project-card"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <section className="project-image-container">
          <img src={image} alt={name} />
        </section>
        <section className="project-information-container">
          <h2>{name}</h2>
        </section>
      </section>
      <Modal open={isOpen} setOpen={setIsOpen} project={project} />
    </>
  );
};

export default ProjectCard;

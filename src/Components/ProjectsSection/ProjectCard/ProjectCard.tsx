import React, { useState } from "react";
import Modal from "../../Modal";
import { ProjectDataType } from "../../../definitions";

const ProjectCard = ({ project }) => {
  const { name, image, status } = project;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section
        className="project-card"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="wavy-border-1"></div>
        <div className="wavy-border-2"></div>
        <div className="wavy-border-3"></div>
        {status === "Complete" ? (
          <div className="project-status-green">{status}</div>
        ) : (
          <div className="project-status-yellow">{status}</div>
        )}

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

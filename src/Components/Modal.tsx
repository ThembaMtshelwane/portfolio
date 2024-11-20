import React, { useState } from "react";
import "./Modal.css";
import { ProjectDataType } from "../definitions";
import { IoIosClose } from "react-icons/io";

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: ProjectDataType;
};
const Modal: React.FC<ModalProps> = ({ open, setOpen, project }) => {
  const toggleModal = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* Main modal */}
      {open && (
        <div className="modal-backdrop" onClick={toggleModal}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
          >
            {/* Modal content */}
            <div className="modal-content">
              {/* Modal header */}
              <div className="modal-header">
                <h3>{project?.name}</h3>

                <IoIosClose
                  className="modal-close-button"
                  onClick={() => setOpen(!open)}
                />
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <h4>Description</h4>
                <p>{project.summary}</p>

                <h4>Tech Stack</h4>
                {project.techStack.map((tech) => (
                  <span>{tech}</span>
                ))}

                <h4>Tasks</h4>
                {project.responsibilities.map((responsibility) => (
                  <li>
                    {" "}
                    {" - "} {responsibility}
                  </li>
                ))}
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <a
                  href={project.githublink}
                  target="_blank"
                  className="link"
                  onClick={toggleModal}
                >
                  GitHub Link
                </a>
                <a
                  href={project.website}
                  className="link"
                  target="_blank"
                  onClick={toggleModal}
                >
                  Live Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

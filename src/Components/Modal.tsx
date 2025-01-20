import React from "react";
import { IoIosClose } from "react-icons/io";
import { ProjectDataType } from "../definitions";

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  project: ProjectDataType;
};

const Modal: React.FC<ModalProps> = ({ open, setOpen, project }) => {
  const toggleModal = () => {
    setOpen(!open);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={toggleModal}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full p-6 overflow-auto max-h-[80vh]"
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        {/* Modal header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-3">
          <h3 className="text-lg font-bold">{project?.name}</h3>
          <IoIosClose
            className="text-3xl cursor-pointer hover:text-red-500"
            onClick={toggleModal}
          />
        </div>

        {/* Modal body */}
        <div className="my-4">
          <h4 className="text-md font-semibold mb-2">Description</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            {project.summary}
          </p>

          <h4 className="text-md font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-sm border border-gray-400 rounded-md px-2 py-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>

          <h4 className="text-md font-semibold mb-2">Tasks</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>

        {/* Modal footer */}
        <div className="flex justify-around border-t border-gray-300 pt-4">
          <a
            href={project.githublink}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 text-sm underline"
            rel="noopener noreferrer"
          >
            GitHub Link
          </a>
          <a
            href={project.website}
            target="_blank"
            className="text-blue-600 hover:text-blue-800 text-sm underline"
            rel="noopener noreferrer"
          >
            Live Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;

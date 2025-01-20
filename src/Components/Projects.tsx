import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectDataType } from "../definitions";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const projectStyles = [
    {
      animation: "animate-floating",
      gridPosition: "col-[1/7] row-[1/7]",
    },
    {
      animation: "animate-[floating_4s_ease-in-out_infinite]",
      gridPosition: "col-[1/7] row-[6/12]",
    },
    {
      animation: "animate-[floating_3.5s_ease-in-out_infinite]",
      gridPosition: "col-[6/12] row-[7/13]",
    },
    {
      animation: "animate-[floating_4.5s_ease-in-out_infinite]",
      gridPosition: "col-[8/13] row-[4/9]",
    },
    {
      animation: "animate-[floating_5s_ease-in-out_infinite]",
      gridPosition: "col-[6/11] row-[1/6]",
    },
  ];
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/data.json");

        if (!response.ok) {
          throw new Error("Failed to fetch project data");
        }
        const data = await response.json();

        const withStyles = data.projectData
          .slice(0, 5)
          .map((pr: ProjectDataType, index: number) => ({
            ...pr,
            animation: projectStyles[index].animation,
            gridPosition: projectStyles[index].gridPosition,
          }));
        setProjectData(withStyles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  console.log("projectData ", projectData);

  return (
    <div className="grid grid-cols-12 grid-rows-12 w-full h-full">
      <h3 className="text-4xl uppercase col-[6/7] row-[6/7] font-semibold ">
        Projects.
      </h3>

      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;

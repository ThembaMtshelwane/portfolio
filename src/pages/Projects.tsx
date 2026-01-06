import React, { useEffect, useState } from "react";

interface ProjectData {
  name: string;
  techStack: string[];
  summary: string;
  responsibilities: string[];
  website: string;
  githublink: string;
  image: string;
}

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projectData))
      .catch((err) => console.error("Error loading project data:", err));
  }, []);

  return (
    <section className="min-h-screen py-24 px-4 relative">
      {/* Background Grid & Star Map Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-[1px] bg-blue-500"></span>
            <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
              Orbital Archive
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter">
            Mission{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-100">
              Manifest
            </span>
          </h2>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-black/40 border border-white/5 backdrop-blur-md rounded-lg overflow-hidden flex flex-col transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              {/* Top Bar: Mission ID & Links */}
              <div className="flex justify-between items-center p-4 bg-white/5 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-mono text-blue-300 tracking-[0.3em] uppercase">
                    DATASET_0{index + 1}
                  </span>
                </div>
                <div className="flex gap-4">
                  {project.githublink && (
                    <a
                      href={project.githublink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/50 hover:text-white transition-colors"
                    >
                      <span className="text-xs font-mono">CODE_BASE</span>
                    </a>
                  )}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-200 transition-colors"
                  >
                    <span className="text-xs font-mono">LAUNCH_LIVE ↗</span>
                  </a>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6">
                {/* Project Header */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:tracking-wide transition-all duration-500">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light italic">
                    {project.summary}
                  </p>
                </div>

                {/* Satellite Image Feed */}
                <div className="relative aspect-video w-full bg-gray-900 rounded overflow-hidden border border-white/10 group-hover:border-blue-500/30 transition-all">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                  />
                  {/* UI Overlays */}
                  <div className="absolute top-2 left-2 p-1 border-t border-l border-white/20 w-4 h-4" />
                  <div className="absolute bottom-2 right-2 p-1 border-b border-r border-white/20 w-4 h-4" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>

                {/* Responsibilities (Mission Logs) */}
                <div className="space-y-3">
                  <h4 className="text-[10px] text-blue-500 font-mono uppercase tracking-[0.2em]">
                    Deployment_Logs
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.responsibilities.map((task, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-xs text-gray-400 font-mono"
                      >
                        <span className="text-blue-500/50">[{i}]</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack (Terminal) */}
                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-1 bg-blue-500/5 border border-blue-500/20 text-blue-300 rounded hover:bg-blue-500/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Scanline Animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-full h-[1px] bg-blue-400/20 absolute top-0 left-0 animate-scanline" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100px); }
          100% { transform: translateY(800px); }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;

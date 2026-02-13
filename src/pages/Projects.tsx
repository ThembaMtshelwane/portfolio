import React, { useEffect, useState, memo } from "react";

interface ProjectData {
  name: string;
  techStack: string[];
  summary: string;
  responsibilities: string[];
  website: string;
  githublink: string;
  image: string;
}

// 1. Memoized Skeleton Component for Performance
const ProjectSkeleton = () => (
  <div className="relative p-8 bg-white/5 border border-white/10 rounded-lg overflow-hidden min-h-100">
    <div className="flex justify-between mb-6">
      <div className="w-24 h-4 bg-white/10 animate-pulse rounded" />
      <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse" />
    </div>
    <div className="w-3/4 h-8 bg-white/10 animate-pulse rounded mb-4" />
    <div className="w-full aspect-video bg-white/5 rounded mb-6 animate-pulse border border-white/5" />
    <div className="space-y-2">
      <div className="w-full h-3 bg-white/5 animate-pulse rounded" />
      <div className="w-5/6 h-3 bg-white/5 animate-pulse rounded" />
    </div>
    {/* Animated "Scanning" bar for the skeleton */}
    <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-500/5 to-transparent h-1/2 w-full animate-scan-slow pointer-events-none" />
  </div>
);

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("./data.json", {
          signal: abortController.signal,
        });
        if (!response.ok) throw new Error("Connection Interrupted");
        const data = await response.json();
        setProjects(data.projectData);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    return () => abortController.abort(); // Cleanup on unmount
  }, []);

  return (
    <section className="min-h-screen py-24 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-px bg-blue-500"></span>
            <span className="text-blue-400 font-mono text-xs tracking-widest uppercase">
              {loading ? "Establishing Link..." : "Orbital Archive"}
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter">
            Mission{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-100">
              Manifest
            </span>
          </h2>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-8 border border-red-500/50 bg-red-500/10 rounded text-center">
            <p className="text-red-400 font-mono uppercase tracking-widest text-sm mb-2 italic">
              ⚠️ Uplink Error: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="text-xs text-white border border-white/20 px-4 py-2 hover:bg-white/10 transition-all"
            >
              RETRY CONNECTION
            </button>
          </div>
        )}

        {/* Dynamic Grid / Skeleton Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-200">
          {loading
            ? // Show 4 Skeletons while loading
              Array.from({ length: 3 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))
            : projects.slice(0, 3).map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  index={index}
                />
              ))}
        </div>
      </div>

      <style>{`
        @keyframes scan-slow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan-slow {
          animation: scan-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

// 2. Extracted ProjectCard to its own component to optimize re-renders
const ProjectCard = memo(
  ({ project, index }: { project: ProjectData; index: number }) => (
    <div className="group relative bg-black/40 border border-white/5 backdrop-blur-md rounded-lg overflow-hidden flex flex-col transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
      {/* ... (All your existing Project Card JSX from previous step) ... */}
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
              className="text-white/50 hover:text-white transition-colors text-xs font-mono"
            >
              CODE_BASE
            </a>
          )}
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-200 transition-colors text-xs font-mono"
          >
            LAUNCH_LIVE ↗
          </a>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        <h3 className="text-3xl font-bold text-white mb-2 group-hover:tracking-wide transition-all duration-500">
          {project.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed font-light italic">
          {project.summary}
        </p>

        <div className="relative aspect-video w-full bg-gray-900 rounded overflow-hidden border border-white/10">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy" // Native lazy loading for performance
            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-all duration-700 grayscale group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
        </div>

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
                <span className="text-blue-500/50">[{i}]</span> {task}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
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
  )
);

export default ProjectsSection;

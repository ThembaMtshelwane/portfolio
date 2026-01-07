import React from "react";

const SkillsCarousel: React.FC = () => {
  const technicalSkills = [
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Redux ToolKit",
    "RESTful APIs",
    "Firebase",
    "Next.js",
    "Figma",
    "Vercel",
    "Jest",
  ];

  const softSkills = [
    "Problem Solving",
    "Attention to Detail",
    "Critical Thinking",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Communication",
  ];

  const renderTicker = (
    items: string[],
    direction: "left" | "right",
    speed: string
  ) => {
    return (
      <div className="flex overflow-hidden mb-4 select-none">
        <div
          className={`flex whitespace-nowrap py-2 ${
            direction === "left"
              ? "animate-scroll-left"
              : "animate-scroll-right"
          }`}
          style={{ animationDuration: speed }}
        >
          {/* We use 3 sets to ensure a perfectly smooth, infinite loop */}
          {[...items, ...items, ...items].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="mx-4 flex items-center gap-3 px-5 py-2 bg-blue-500/5 border border-white/5 rounded-sm hover:border-blue-500/40 transition-colors"
            >
              <span className="text-[10px] font-mono text-blue-500/50">//</span>
              <span className="text-white font-mono text-xs tracking-[0.2em] uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-20 bg-black/40 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-blue-500/50" />
          <h3 className="text-sm font-mono text-blue-400 tracking-[0.4em] uppercase">
            System_Capabilities
          </h3>
        </div>
      </div>

      {renderTicker(technicalSkills, "left", "80s")}
      {renderTicker(softSkills, "right", "100s")}

      <style>{`
        @keyframes scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.33%, 0, 0); }
        }
        @keyframes scroll-right {
          0% { transform: translate3d(-33.33%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillsCarousel;

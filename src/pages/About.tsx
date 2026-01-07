import React from "react";

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Background Nebula Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Bold Header & Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative inline-block">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                The{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-200">
                  Engineer
                </span>
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-transparent" />
            </div>

            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              <p>
                I'm an efficient Software Developer with a{" "}
                <span className="text-white font-medium">
                  BSc in Electrical Information Engineering{" "}
                </span>
                from the University of the Witwatersrand.
              </p>

              <p>
                With over two years in the{" "}
                <span className="text-blue-300">React ecosystem</span>, I
                specialize in the MERN stack, TypeScript, and high-performance
                state management. My approach is rooted in the entire Software
                Development Lifecycle—from the first pixel to the final
                deployment.
              </p>

              <div className="p-6 bg-white/5 border-l-4 border-blue-500 backdrop-blur-md rounded-r-xl italic text-gray-400">
                "Awarded 1st Place in the 2024/2025 Tshimologong Samsung Program
                for outstanding performance."
              </div>
            </div>
          </div>

          {/* Right Column: "Orbital" Stats & Skills */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="group p-8 bg-black/40 border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-500">
              <h3 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">
                Current Trajectory
              </h3>
              <p className="text-white text-2xl font-bold">
                AWS Solutions Architect
              </p>
              <p className="text-gray-500 mt-1">
                Associate Certification Candidate
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-2">⚛️</div>
                <h4 className="text-white font-bold">React</h4>
                <p className="text-gray-500 text-sm">Expert Ecosystem</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-2">🛡️</div>
                <h4 className="text-white font-bold">TypeScript</h4>
                <p className="text-gray-500 text-sm">Type-Safe Dev</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-2">☁️</div>
                <h4 className="text-white font-bold">MERN</h4>
                <p className="text-gray-500 text-sm">Fullstack Power</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="text-3xl mb-2">🎨</div>
                <h4 className="text-white font-bold">Tailwind</h4>
                <p className="text-gray-500 text-sm">Modern Styling</p>
              </div>
            </div>

            <div className="mt-4 p-8 bg-linear-to-br from-blue-600/20 to-transparent border border-blue-500/20 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">
                Passionate Creator
              </h3>
              <p className="text-gray-400 text-sm">
                From crowdfunding platforms for authors to educational Binary
                Tree systems, I build tools that solve terrestrial problems with
                celestial precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

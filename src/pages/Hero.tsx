import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* HUD / Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left: Coordinates */}
        <div className="absolute bottom-20 left-10 border-l border-b border-white/20 p-4 hidden md:block">
          <p className="text-[10px] text-blue-400 font-mono tracking-[0.2em] uppercase">
            Location: Southern Hemisphere
          </p>
          <p className="text-xs text-white/50 font-mono tracking-widest mt-1">
            26.2041° S, 28.0473° E
          </p>
        </div>

        {/* Bottom Right: Status */}
        <div className="absolute bottom-20 right-10 border-r border-b border-white/20 p-4 text-right hidden md:block">
          <p className="text-[10px] text-cyan-400 font-mono tracking-[0.2em] uppercase">
            System Status
          </p>
          <div className="flex items-center justify-end gap-2 mt-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-xs text-white/50 font-mono tracking-widest">
              ORBITAL STABLE
            </p>
          </div>
        </div>

        {/* Large Faded "Background" Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/2 select-none uppercase italic">
          ORION
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <div className="inline-block px-3 py-1 mb-6 border border-blue-500/30 bg-blue-500/10 rounded-full">
          <span className="text-xs md:text-sm text-blue-300 font-mono tracking-[0.3em] uppercase">
            Initiating Sequence
          </span>
        </div>

        <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-4 leading-none uppercase italic">
          Themba
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-gray-600">
            Mtshelwane
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500 hidden md:block" />
          <p className="text-lg md:text-2xl text-gray-400 font-light tracking-[0.15em] uppercase italic">
            Fullstack{" "}
            <span className="text-white font-bold not-italic">Developer</span>
          </p>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500 hidden md:block" />
        </div>

        <p className="max-w-md mx-auto mt-6 text-sm md:text-base text-gray-500 font-mono tracking-wide leading-relaxed">
          Building high-performance digital architectures under the Southern
          Stars.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-linear-to-b from-blue-500 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
        </div>
        <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
          Scroll
        </span>
      </div>

      {/* Custom CSS Animation for the scroll line */}
      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

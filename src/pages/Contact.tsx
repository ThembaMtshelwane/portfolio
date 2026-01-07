import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* HUD Decorative Frame */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-24 h-1px bg-blue-500" />
        <div className="absolute top-10 left-20 w-1px h-24 bg-blue-500" />
        <div className="absolute bottom-20 right-10 w-24 h-px bg-blue-500" />
        <div className="absolute bottom-10 right-20 w-1px h-24 bg-blue-500" />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Connection Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-green-400 tracking-[0.2em] uppercase">
              Signal Strength: Optimal
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter mb-4">
            Establish{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-200">
              Uplink
            </span>
          </h2>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
            Johannesburg Base Station // South Africa
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          <a
            href="mailto:Thembamm3@gmail.com"
            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
          >
            <p className="text-[10px] font-mono text-blue-500 mb-2 tracking-widest uppercase">
              Primary_Channel
            </p>
            <h3 className="text-white text-xl font-bold mb-1">Email</h3>
            <p className="text-gray-400 group-hover:text-blue-300 transition-colors">
              Thembamm3@gmail.com
            </p>
          </a>

          {/* LinkedIn Card  */}
          <a
            href="https://www.linkedin.com/in/themba-mtshelwane/"
            target="_blank"
            rel="noreferrer"
            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
          >
            <p className="text-[10px] font-mono text-blue-400 mb-2 tracking-widest uppercase italic">
              Professional_Network
            </p>
            <h3 className="text-white text-xl font-bold mb-1">LinkedIn</h3>
            <p className="text-blue-300/80 group-hover:text-blue-200 transition-colors font-mono text-xs">
              VIEW_PROFILE_SIGNAL ↗
            </p>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/ThembaMtshelwane"
            target="_blank"
            rel="noreferrer"
            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
          >
            <p className="text-[10px] font-mono text-blue-500 mb-2 tracking-widest uppercase">
              Data_Repository
            </p>
            <h3 className="text-white text-xl font-bold mb-1">GitHub</h3>
            <p className="text-gray-400 group-hover:text-blue-300 transition-colors">
              View Source Modules
            </p>
          </a>

          {/* Location Card */}
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <p className="text-[10px] font-mono text-blue-500 mb-2 tracking-widest uppercase">
              Coordinates
            </p>
            <h3 className="text-white text-xl font-bold mb-1">Location</h3>
            <p className="text-gray-400">Johannesburg, ZA</p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] leading-relaxed">
            Ready for collaborative missions and freelance deployments.
            <br />
            <span className="text-blue-500/50">— End of Transmission —</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

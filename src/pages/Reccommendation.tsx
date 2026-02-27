interface Reference {
  quote: string;
  name: string;
  role: string;
  org: string;
}

const references: Reference[] = [
  {
    quote:
      "Themba demonstrated an exceptional commitment to growth, technical excellence, and teamwork. What truly set him apart was his leadership in collaborative environments — naturally taking initiative and supporting the success of the entire team.",
    name: "KATLEGO MOLALA",
    role: "Software Developer & Tech Mentor",
    org: "Tshimologong, Wits University",
  },
  {
    quote:
      "A very hard worker with excellent communication skills, conscientious in his work, and consistently improving the product out of his own initiative. He has a firm grasp on which problems are to be addressed and has the lateral capacity to solve them.",
    name: "PROF. PHILIPPE FERRER",
    role: "Theoretical Physics, School of Physics",
    org: "University of the Witwatersrand",
  },
];

const Reccommendation = () => {
  return (
    <section className="px-12 py-24 overflow-hidden backdrop-blur-md space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-[11px] tracking-[0.22em] text-[#4a9eff] uppercase">
            ◈ Field Commendations
          </span>
          <div className="flex-1 h-px bg-linear-to-r from-[rgba(74,158,255,0.35)] to-transparent" />
        </div>

     
          <h2 className="mb-20 text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter">
            Mission {" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-100">
              reports
            </span>
          </h2>
  

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(74,158,255,0.12)]">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="bg-[#080d1a] hover:bg-[rgba(74,158,255,0.03)] transition-colors duration-300 p-12 flex flex-col gap-9"
            >
              {/* Quote */}
              <p className="font-mono text-[13.5px] leading-[1.95] text-[#7a9db8] italic flex-1">
                <span className="text-[rgba(74,158,255,0.4)] not-italic text-base">
                  "{" "}
                </span>
                {ref.quote}
                <span className="text-[rgba(74,158,255,0.4)] not-italic text-base">
                  {" "}
                  "
                </span>
              </p>

              {/* Person */}
              <div className="border-t border-[rgba(74,158,255,0.15)] pt-6">
                <p className="font-mono text-[13px] font-bold text-[#e0f0ff] tracking-[0.1em] mb-1.5">
                  {ref.name}
                </p>
                <p className="font-mono text-[11px] text-[#4a7a96] tracking-[0.06em] leading-relaxed">
                  {ref.role}
                </p>
                <p className="font-mono text-[11px] text-[#4a9eff] tracking-[0.06em] opacity-70">
                  {ref.org}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reccommendation;

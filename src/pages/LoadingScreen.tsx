import React, { useEffect, useState } from "react";

const BOOT_LOGS = [
  "INITIALIZING SOUTHERN_SKY_OS v2.4...",
  "ESTABLISHING LINK WITH JHB_BASE_STATION...",
  "CALIBRATING STAR_FIELD_RENDERER...",
  "LOADING ORBITAL_MANIFEST...",
  "DECODING MISSION_DATA.JSON...",
  "UPLINK STABLE. WELCOME, ENGINEER.",
];

const LoadingScreen: React.FC<{ onFinished: () => void }> = ({
  onFinished,
}) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Progress Bar Logic
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onFinished, 1000); // Wait for exit animation
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Log Logic
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-black transition-transform duration-1000 ease-in-out ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="relative w-full max-w-md px-6">
        {/* Top HUD Detail */}
        <div className="flex justify-between items-end mb-2 font-mono text-[10px] text-blue-500/50 uppercase tracking-widest">
          <span>Boot_Sequence_In_Progress</span>
          <span>Loc: 26.2041° S</span>
        </div>

        {/* The Progress Bar Container */}
        <div className="h-1 w-full bg-white/5 border border-white/10 relative overflow-hidden mb-8">
          <div
            className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Terminal Logs */}
        <div className="font-mono text-xs md:text-sm space-y-2">
          {BOOT_LOGS.slice(0, logIndex + 1).map((log, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-blue-500/40">
                [{i.toString().padStart(2, "0")}]
              </span>
              <span
                className={`${i === logIndex ? "text-white" : "text-gray-600"}`}
              >
                {log}
                {i === logIndex && (
                  <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-blue-500 align-middle" />
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Percentage Counter */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
          <span className="text-6xl font-black text-white/5 font-mono italic">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Scanning Line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-1/4 bg-linear-to-b from-blue-500/5 to-transparent -translate-y-full animate-loader-scan" />
      </div>

      <style>{`
        @keyframes loader-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-loader-scan {
          animation: loader-scan 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

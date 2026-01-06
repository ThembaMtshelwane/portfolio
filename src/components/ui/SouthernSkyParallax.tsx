import React, { useEffect, useRef, useState, useCallback } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  layer: number;
}

interface Constellation {
  name: string;
  stars: { x: number; y: number }[];
  connections: [number, number][];
}

const SouthernSkyParallax: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const starsRef = useRef<Star[]>([]);
  const constellationRef = useRef<Constellation | null>(null);
  const animationRef = useRef<number>(0);
  const lastScrollRef = useRef(0);
  const ticking = useRef(false);
  const lastDrawnScrollRef = useRef(0);

  useEffect(() => {
    // Generate background stars
    const stars: Star[] = [];
    for (let i = 0; i < 250; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 400,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
        layer: Math.floor(Math.random() * 3) + 1,
      });
    }
    starsRef.current = stars;

    // Orion constellation - The Hunter
    constellationRef.current = {
      name: "Orion",
      stars: [
        { x: 15, y: 10 }, // Left shoulder (Betelgeuse)
        { x: 40, y: 0 }, // Head
        { x: 35, y: 35 }, // Left belt (Alnitak)
        { x: 50, y: 28 }, // Center belt (Alnilam)
        { x: 60, y: 25 }, // Right belt (Mintaka)
        { x: 50, y: 32 }, // Sword
        { x: 35, y: 55 }, // Left foot (Saiph)
        { x: 85, y: 65 }, // Right foot (Rigel)
        { x: 30, y: 24 }, // Upper body
        { x: 60, y: 10 }, // Right shoulder (Bellatrix)
        { x: 95, y: 5 }, // Extended arm
      ],
      connections: [
        [0, 8],
        [8, 2], // Left shoulder to belt
        [9, 10], // Right shoulder to arm
        [1, 9],
        [9, 4], // Head to right shoulder to belt
        [2, 3],
        [3, 4], // Belt line
        [2, 6],
        [4, 7], // Belt to feet
        [0, 1], // Shoulders
      ],
    };
  }, []);

  const handleScroll = useCallback(() => {
    lastScrollRef.current = window.scrollY;
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        setScrollY(lastScrollRef.current);
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = (window.innerHeight + 2000) * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight + 2000}px`;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Pre-create gradient
    const skyGradient = ctx.createRadialGradient(
      window.innerWidth / 2,
      window.innerHeight / 3,
      0,
      window.innerWidth / 2,
      window.innerHeight / 3,
      window.innerHeight
    );
    skyGradient.addColorStop(0, "#001d3d");
    skyGradient.addColorStop(0.5, "#000814");
    skyGradient.addColorStop(1, "#000000");

    let frameCount = 0;
    let lastTime = 0;
    const frameInterval = 16.67; // ~60 FPS

    const draw = (currentTime: number) => {
      // Throttle to 60 FPS
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }
      lastTime = currentTime;

      // Only redraw if scroll changed or for periodic twinkle
      const scrollDiff = Math.abs(scrollY - lastDrawnScrollRef.current);
      if (scrollDiff < 0.5 && frameCount % 60 !== 0) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      lastDrawnScrollRef.current = scrollY;
      frameCount++;

      const w = window.innerWidth;
      const h = window.innerHeight + 2000;

      // Fill background
      ctx.fillStyle = "#000814";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = skyGradient;
      ctx.fillRect(0, 0, w, h);

      // Draw background stars
      starsRef.current.forEach((star, i) => {
        const parallaxOffset = scrollY * star.layer * 0.3;
        const yPos = (star.y / 100) * h - parallaxOffset;

        if (yPos > -50 && yPos < h + 50) {
          const xPos = (star.x / 100) * w;

          ctx.beginPath();
          ctx.arc(xPos, yPos, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();

          // Occasional twinkle
          if (frameCount % 60 === i % 60 && Math.random() > 0.95) {
            ctx.beginPath();
            ctx.arc(xPos, yPos, star.size + 1, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 220, 255, ${star.opacity * 0.5})`;
            ctx.fill();
          }
        }
      });

      // Draw Orion constellation
      if (constellationRef.current) {
        const constParallax = scrollY * 0.15;
        const constellation = constellationRef.current;

        const stars = constellation.stars.map((s) => ({
          x: (s.x / 100) * w,
          y: (s.y / 100) * h - constParallax,
        }));

        // Draw constellation lines
        ctx.strokeStyle = "rgba(100, 150, 255, 0.6)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        constellation.connections.forEach(([i, j]) => {
          const start = stars[i];
          const end = stars[j];
          if (start && end && start.y > -50 && start.y < h + 50) {
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
          }
        });
        ctx.stroke();

        // Draw constellation stars
        stars.forEach((star) => {
          if (star.y > -50 && star.y < h + 50) {
            // Glow effect
            ctx.beginPath();
            ctx.arc(star.x, star.y, 10, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 240, 200, 0.3)";
            ctx.fill();

            // Main star
            ctx.beginPath();
            ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255, 240, 200, 1)";
            ctx.fill();
          }
        });
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollY]);

  return (
    <div className="relative min-h-[300vh] bg-black overflow-x-hidden">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ willChange: "transform" }}
      />

      {/* Content sections */}
      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              Your Portfolio
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Under the Southern Stars
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20 bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
              Welcome to my portfolio. This parallax effect showcases the
              beautiful night sky featuring the iconic Orion constellation.
              Orion the Hunter is one of the most recognizable constellations in
              the night sky, visible from both hemispheres.
            </p>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Scroll to experience the depth and beauty of the cosmos as stars
              move at different speeds, creating an immersive parallax effect.
              Watch as Orion dominates the sky with his distinctive belt and
              bright stars like Betelgeuse and Rigel.
            </p>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 sm:py-20 bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Projects
            </h2>
            <div className="grid gap-4 sm:gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    Project {i}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Your amazing project description goes here. The parallax
                    background creates a sense of depth and wonder.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SouthernSkyParallax;

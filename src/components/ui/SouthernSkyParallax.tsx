import React, { useEffect, useRef, useState } from "react";
import About from "../../pages/About";
import Hero from "../../pages/Hero";
import Projects from "../../pages/Projects";
import Contact from "../../pages/Contact";
import LoadingScreen from "../../pages/LoadingScreen";
import SkillsCarousel from "../../pages/SkillsCarousel";
import Lenis from "lenis";
import Navbar from "./Navbar";

interface Star {
  x: number;
  y: number;
  baseSize: number;
  opacity: number;
  layer: number;
  color: string;
  brightness: number;
  twinkles: boolean;
  twinkleSpeed: number;
  twinklePhase: number;
}

interface OrionStar {
  x: number;
  y: number;
  color: string;
  brightness: number;
  size: number;
}

interface Constellation {
  stars: OrionStar[];
  connections: [number, number][];
}

const SouthernSkyParallax: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const lenisRef = useRef<Lenis | null>(null);
  const [lenisInstance, setLenisInstance] = useState<any>(null);

  const scrollTargetRef = useRef(0);
  const scrollCurrentRef = useRef(0);

  const starsRef = useRef<Star[]>([]);
  const orionRef = useRef<Constellation | null>(null);

  const viewportRef = useRef({
    w: window.innerWidth,
    h: window.innerHeight + 2000,
    dpr: Math.min(window.devicePixelRatio || 1, 2),
  });

  const [isBooted, setIsBooted] = useState(false);

  /* ------------------ INIT DATA ------------------ */
  useEffect(() => {
    /* Background stars */
    starsRef.current = Array.from({ length: 800 }, () => {
      const twinkles = Math.random() < 0.35;
      return {
        x: Math.random() * 100,
        y: Math.random() * 400,
        baseSize: Math.random() * 1.6 + 0.8,
        opacity: Math.random() * 0.4 + 0.5,
        layer: Math.floor(Math.random() * 3) + 1,
        color: pickBackgroundStarColor(),
        brightness: Math.random() * 0.6 + 0.4,
        twinkles,
        twinkleSpeed: twinkles ? Math.random() * 0.6 + 0.3 : 0,
        twinklePhase: Math.random() * Math.PI * 2,
      };
    });

    /* Orion (realistic colors & brightness) */
    orionRef.current = {
      stars: [
        { x: 15, y: 10, color: "255,180,160", brightness: 1.3, size: 3.2 }, // Betelgeuse
        { x: 40, y: 0, color: "200,220,255", brightness: 1.4, size: 3.4 }, // Rigel
        { x: 35, y: 35, color: "200,220,255", brightness: 1.1, size: 2.6 }, // Bellatrix
        { x: 50, y: 28, color: "200,220,255", brightness: 1.0, size: 2.4 }, // Saiph
        { x: 60, y: 25, color: "220,235,255", brightness: 0.9, size: 2.2 }, // Alnitak
        { x: 50, y: 32, color: "220,235,255", brightness: 0.85, size: 2.1 }, // Alnilam
        { x: 35, y: 55, color: "220,235,255", brightness: 0.9, size: 2.2 }, // Mintaka
        { x: 85, y: 65, color: "255,245,220", brightness: 0.8, size: 2.0 },
        { x: 30, y: 24, color: "255,245,220", brightness: 0.75, size: 1.9 },
        { x: 60, y: 10, color: "255,245,220", brightness: 0.7, size: 1.8 },
        { x: 95, y: 5, color: "255,245,220", brightness: 0.7, size: 1.8 },
      ],
      connections: [
        [0, 8],
        [8, 2],
        [9, 10],
        [1, 9],
        [9, 4],
        [2, 3],
        [3, 4],
        [2, 6],
        [4, 7],
        [0, 1],
      ],
    };
  }, []);

  /* ------------------ SCROLL ------------------ */
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.5, // How long the scroll animation lasts
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth cubic easing
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Synchronize Lenis with your scrollTargetRef
    const onLenisScroll = (e: any) => {
      scrollTargetRef.current = e.animatedScroll;
    };

    lenis.on("scroll", onLenisScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  /* ------------------ CANVAS LOOP ------------------ */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    let gradient: CanvasGradient;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight + 2000;

      viewportRef.current = { w, h, dpr };

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      gradient = ctx.createRadialGradient(w / 2, h / 3, 0, w / 2, h / 3, h);
      gradient.addColorStop(0, "#000814");
      gradient.addColorStop(0.6, "#00040f");
      gradient.addColorStop(1, "#000000");
    };

    resize();
    window.addEventListener("resize", resize);

    /* -------- Reusable star renderer -------- */
    const drawStar = (
      x: number,
      y: number,
      size: number,
      color: string,
      alpha: number,
      brightness: number
    ) => {
      ctx.beginPath();
      ctx.arc(x, y, size * 2.6, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${alpha * 0.18})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color},${alpha})`;
      ctx.fill();

      if (brightness > 1.1) {
        ctx.strokeStyle = `rgba(${color},${alpha * 0.35})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - size * 3.2, y);
        ctx.lineTo(x + size * 3.2, y);
        ctx.moveTo(x, y - size * 3.2);
        ctx.lineTo(x, y + size * 3.2);
        ctx.stroke();
      }
    };

    const draw = (time: number) => {
      const { w, h } = viewportRef.current;

      scrollCurrentRef.current +=
        (scrollTargetRef.current - scrollCurrentRef.current) * 0.12;

      const scrollY = scrollCurrentRef.current;
      const t = time * 0.001;

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      /* Background stars */
      for (const s of starsRef.current) {
        const y = (s.y / 100) * h - scrollY * s.layer * 0.3;
        if (y < -120 || y > h + 120) continue;

        const twinkle = s.twinkles
          ? 0.9 + Math.sin(t * s.twinkleSpeed + s.twinklePhase) * 0.1
          : 1;

        drawStar(
          (s.x / 100) * w,
          y,
          s.baseSize * twinkle * s.brightness,
          s.color,
          s.opacity * twinkle,
          s.brightness
        );
      }

      /* Orion stars */
      const orion = orionRef.current;
      if (orion) {
        const t2 = time * 0.0004;
        const driftX = Math.sin(t2 * 0.6) * 4;
        const driftY = Math.cos(t2 * 0.5) * 6;
        const scrollOffset = scrollY * 0.15;

        orion.stars.forEach((s) => {
          drawStar(
            (s.x / 100) * w + driftX,
            (s.y / 100) * h - scrollOffset + driftY,
            s.size,
            s.color,
            1,
            s.brightness
          );
        });

        ctx.strokeStyle = "rgba(120,160,255,0.5)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        orion.connections.forEach(([a, b]) => {
          const p1 = orion.stars[a];
          const p2 = orion.stars[b];
          ctx.moveTo(
            (p1.x / 100) * w + driftX,
            (p1.y / 100) * h - scrollOffset + driftY
          );
          ctx.lineTo(
            (p2.x / 100) * w + driftX,
            (p2.y / 100) * h - scrollOffset + driftY
          );
        });
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative bg-black overflow-x-hidden">
      {!isBooted && <LoadingScreen onFinished={() => setIsBooted(true)} />}

      <div
        className={`transition-opacity duration-1000 ${
          isBooted ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar lenis={lenisInstance} />

        <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />

        <div className="relative z-10">
          <section id="hero">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <SkillsCarousel />
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

/* -------- Helpers -------- */
const pickBackgroundStarColor = () => {
  const r = Math.random();
  if (r < 0.08) return "170,200,255";
  if (r < 0.2) return "200,220,255";
  if (r < 0.65) return "255,255,255";
  if (r < 0.85) return "255,245,220";
  return "255,210,170";
};

export default SouthernSkyParallax;

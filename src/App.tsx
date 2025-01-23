import { useEffect } from "react";
import EmanatingRing from "./Components/Emanate";
import NavCircles from "./Components/NavCircles";
import PortfolioSections from "./Components/PortfolioSections";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <div className="bg-black w-full h-[900vh] flex justify-center">
      <div className="flex flex-col fixed z-[999] justify-center items-center h-screen">
        <PortfolioSections />
        <EmanatingRing />
        <div className="relative h-screen flex justify-center items-center w-screen max-w-[1440px] ">
          <NavCircles />
        </div>
      </div>
    </div>
  );
}

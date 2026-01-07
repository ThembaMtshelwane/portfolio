import React, { useState, useEffect } from "react";

const Navbar: React.FC<{ lenis: any }> = ({ lenis }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleNavClick = (e: React.MouseEvent, id: string) => {
    setIsOpen(false);
    scrollToSection(e, id);
  };

  const navLinks = [
    { name: "MISSION", id: "hero" },
    { name: "SPECS", id: "about" },
    { name: "MANIFEST", id: "projects" },
    { name: "UPLINK", id: "contact" },
  ];

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        offset: 0,
        lerp: 0.1,
        duration: 1.5,
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-100 transition-all duration-500 ${
          scrolled || isOpen
            ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/10"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Identity Section */}
          <div className="flex items-center gap-4 relative z-110">
            <div
              onClick={(e) => scrollToSection(e, "hero")}
              className="relative cursor-pointer"
            >
              <div className="w-10 h-10 border border-blue-500/50 rounded-lg flex items-center justify-center rotate-45">
                <span className="text-white font-black -rotate-45 text-xl tracking-tighter">
                  TM
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-white text-xs font-mono tracking-[0.3em] uppercase">
                Themba Mtshelwane
              </h1>
              <p className="text-blue-500/60 text-[9px] font-mono uppercase tracking-widest italic">
                Fullstack_Dev // MERN_Specialist
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ">
            <ul className="flex items-center gap-8 mb-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => scrollToSection(e, link.id)}
                    className="text-[10px] cursor-pointer font-mono text-gray-400 hover:text-blue-400 tracking-[0.2em] transition-colors flex flex-col items-center group uppercase"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 mb-1">
                      .
                    </span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="https://www.linkedin.com/in/themba-mtshelwane-17b502213/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-blue-500/30 rounded-sm text-[10px] font-mono text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all uppercase tracking-widest shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              Connect_Uplink
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-110 w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
          >
            <span
              className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-blue-400 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-90 md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Darkened backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-6">
          <div className="w-full max-w-xs space-y-8">
            <p className="text-[10px] font-mono text-blue-500/50 tracking-[0.5em] text-center mb-12 uppercase">
              // System_Navigation_Menu
            </p>

            <ul className="space-y-6">
              {navLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={`transform transition-all duration-500 delay-[${
                    index * 100
                  }ms] ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <button
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="w-full text-left flex items-center group"
                  >
                    <span className="text-blue-500/30 font-mono text-xs mr-4">
                      0{index + 1}
                    </span>
                    <span className="text-3xl font-black text-white italic tracking-tighter group-hover:text-blue-400 group-hover:pl-4 transition-all">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div
              className={`pt-12 border-t border-white/10 transform transition-all duration-700 delay-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/themba-mtshelwane-17b502213/"
                target="_blank"
                rel="noreferrer"
                className="w-full block text-center py-4 bg-blue-500/10 border border-blue-500/40 rounded-lg text-blue-400 font-mono text-sm tracking-widest"
              >
                ESTABLISH_UPLINK
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

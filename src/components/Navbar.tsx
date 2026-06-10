"use client";

import { useState, useEffect } from "react";
import MonkeyLogo from "./MonkeyLogo";

const navLinks = [
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3 group">
          <MonkeyLogo size={36} showGlow={false} className="group-hover:scale-110 transition-transform duration-300" />
          <span className="font-bold text-xl tracking-tight">
            Monkey<span className="text-cyan-400">Code</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-white/60 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/60 transition-all duration-200"
          >
            Iniciar proyecto
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/60 hover:text-cyan-400 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-center"
          >
            Iniciar proyecto
          </a>
        </div>
      )}
    </nav>
  );
}

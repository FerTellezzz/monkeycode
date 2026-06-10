"use client";

import { useState } from "react";
import MonkeyLogo from "./MonkeyLogo";
import { ArrowRight, ChevronDown } from "lucide-react";

const sections = ["#services", "#howwework", "#contact"];

export default function Hero() {
  const [sectionIdx, setSectionIdx] = useState(0);

  const handleScrollArrow = () => {
    const target = document.querySelector(sections[sectionIdx]);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setSectionIdx((i) => (i + 1) % sections.length);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,211,238,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl animate-glow-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-500/5 blur-3xl animate-glow-pulse pointer-events-none"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-xs text-cyan-400 font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Equipo de diseño y desarrollo &nbsp;·&nbsp; Sucre, Bolivia
        </div>

        <MonkeyLogo size={120} />

        {/* Headline */}
        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
            Menos trabajo manual.
            <br />
            <span className="text-gradient">Más software a tu medida.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Construimos las herramientas que tu PyME necesita para vender más y trabajar menos.
            Desarrollo a medida, con IA como aliada, y entregas que llegan rápido.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-cyan-400 text-[#050505] hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_24px_rgba(34,211,238,0.3)] hover:shadow-[0_0_36px_rgba(34,211,238,0.5)]"
          >
            Iniciar proyecto
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <button
        onClick={handleScrollArrow}
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-cyan-400 transition-colors duration-300 group cursor-pointer"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">scroll</span>
        <ChevronDown
          size={22}
          className="animate-bounce group-hover:text-cyan-400 transition-colors"
        />
      </button>
    </section>
  );
}

"use client";

import MonkeyLogo from "./MonkeyLogo";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_NUMBER = "59164415140";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{
            border: "1px solid rgba(34,211,238,0.25)",
            background: "#0a0b0d",
          }}
        >
          {/* Glow center */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34,211,238,0.08) 0%, transparent 65%)",
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-cyan-400/60 to-transparent" />
          <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-cyan-400/60 to-transparent" />
          <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-l from-cyan-400/60 to-transparent" />
          <div className="absolute bottom-0 right-0 w-px h-32 bg-gradient-to-t from-cyan-400/60 to-transparent" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <MonkeyLogo size={72} />

            {/* Headline con gradiente igual al hero */}
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-2xl">
              ¿Listo para construir{" "}
              <span className="text-gradient">
                el software que tu negocio necesita?
              </span>
            </h2>

            <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
              Escríbenos y armamos el plan. Te respondemos personalmente
              — sin formularios eternos, sin intermediarios.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base bg-cyan-400 text-[#050505] hover:bg-cyan-300 transition-all duration-200 shadow-[0_0_32px_rgba(34,211,238,0.35)] hover:shadow-[0_0_48px_rgba(34,211,238,0.55)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              Escríbenos por WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Sub-text */}
            <p className="text-white/25 text-sm flex items-center gap-2">
              <MessageCircle size={13} className="text-white/20" />
              Respuesta en menos de 24h · Cotización sin costo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

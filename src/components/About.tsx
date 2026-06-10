import { CheckCircle2 } from "lucide-react";
import MonkeyLogo from "./MonkeyLogo";

const values = [
  "Entregamos rápido — sin revisiones interminables",
  "Código limpio que puedes mantener",
  "Precios transparentes, sin sorpresas",
  "Soporte post-lanzamiento incluido",
  "Comunicación directa con los desarrolladores",
  "100% propiedad de tu código",
];

/* Small satellite monkeys — positions relative to the community container */
const satellites = [
  { size: 52, top: "2%",  left: "8%",  delay: "0s",    opacity: 0.7 },
  { size: 44, top: "10%", right: "6%", delay: "0.8s",  opacity: 0.55 },
  { size: 60, top: "58%", left: "2%",  delay: "1.3s",  opacity: 0.65 },
  { size: 40, top: "70%", right: "4%", delay: "0.4s",  opacity: 0.5 },
  { size: 36, top: "38%", left: "5%",  delay: "1.8s",  opacity: 0.45 },
  { size: 48, top: "82%", left: "22%", delay: "2.1s",  opacity: 0.6 },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: community of monkeys */}
          <div className="flex items-center justify-center">
            <div className="relative" style={{ width: 340, height: 380 }}>
              {/* Ambient background glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(34,211,238,0.07) 0%, transparent 70%)",
                }}
              />

              {/* Satellite monkeys */}
              {satellites.map((s, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    top: s.top,
                    left: (s as { left?: string }).left,
                    right: (s as { right?: string }).right,
                    opacity: s.opacity,
                    animationDelay: s.delay,
                    filter: "blur(0.4px)",
                  }}
                >
                  <MonkeyLogo size={s.size} showGlow={false} />
                </div>
              ))}

              {/* Main central monkey */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <MonkeyLogo size={140} showGlow={true} />
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-cyan-400 mb-3">
                // Nosotros
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                Equipo pequeño.
                <br />
                <span className="text-gradient">Resultados grandes.</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                MonkeyCode es un estudio de desarrollo boutique. Somos un equipo de
                ingenieros y diseñadores que creen en escribir código que dura. Sin
                relleno, sin atajos — solo software de calidad entregado a tiempo.
              </p>
            </div>

            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-center gap-3 text-sm text-white/70">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  {v}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
            >
              Trabajemos juntos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

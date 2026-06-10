import MonkeyLogo from "./MonkeyLogo";

const steps = [
  {
    num: "01",
    title: "Hablamos",
    description:
      "Nos cuentas qué te frena. Escuchamos, proponemos y armamos el plan juntos.",
  },
  {
    num: "02",
    title: "Construimos",
    description:
      "Prototipo funcionando en días, no meses. Tú lo pruebas, nosotros lo afinamos.",
  },
  {
    num: "03",
    title: "Lanzamos",
    description:
      "Deploy, capacitación y mejoras continuas. Te quedas con software propio.",
  },
];

/* Monkeys row — side by side above the section */
const monkeyRow = [
  { size: 54, delay: "0s",    opacity: 0.5  },
  { size: 68, delay: "0.6s",  opacity: 0.65 },
  { size: 90, delay: "1.1s",  opacity: 1    },
  { size: 68, delay: "0.4s",  opacity: 0.65 },
  { size: 54, delay: "0.9s",  opacity: 0.5  },
];

export default function HowWeWork() {
  return (
    <section id="howwework" className="relative py-28 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 10%, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Monkey community row */}
        <div className="flex items-end justify-center gap-4 mb-20">
          {monkeyRow.map((m, i) => (
            <div
              key={i}
              style={{
                opacity: m.opacity,
                animationDelay: m.delay,
              }}
            >
              <MonkeyLogo size={m.size} showGlow={i === 2} />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="mb-16 space-y-4 max-w-2xl">
          <p className="text-sm font-semibold text-cyan-400">
            // Cómo trabajamos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            De idea a software
            <br />
            funcionando, en 3 pasos.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group relative p-8 rounded-2xl border border-white/[0.07] bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Outlined number */}
              <div
                className="mb-8 text-7xl font-black leading-none select-none"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(34,211,238,0.55)",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.num}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-sm text-white/45 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

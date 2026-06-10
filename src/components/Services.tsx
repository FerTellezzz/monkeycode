"use client";

import { Receipt, Package, Bot, FileCheck, Globe, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Receipt,
    title: "Sistemas Contables",
    description: "Facturación, libros y reportes que se llenan solos. Cierres de mes sin dolor.",
    color: "from-cyan-400/15 to-cyan-400/5",
    border: "border-cyan-400/15",
    iconColor: "text-cyan-400",
  },
  {
    icon: Package,
    title: "Ventas e Inventario",
    description: "Stock, pedidos y márgenes en un solo lugar, en tiempo real.",
    color: "from-violet-400/15 to-violet-400/5",
    border: "border-violet-400/15",
    iconColor: "text-violet-400",
  },
  {
    icon: Bot,
    title: "Chatbots a Medida",
    description: "Atención 24/7 en WhatsApp que responde, cotiza y vende por ti.",
    color: "from-emerald-400/15 to-emerald-400/5",
    border: "border-emerald-400/15",
    iconColor: "text-emerald-400",
  },
  {
    icon: FileCheck,
    title: "Automatización de Documentos",
    description: "Contratos, facturas y reportes generados con IA en segundos.",
    color: "from-sky-400/15 to-sky-400/5",
    border: "border-sky-400/15",
    iconColor: "text-sky-400",
  },
  {
    icon: Globe,
    title: "Apps Web a Medida",
    description: "Portales y herramientas internas hechos para tu operación exacta.",
    color: "from-pink-400/15 to-pink-400/5",
    border: "border-pink-400/15",
    iconColor: "text-pink-400",
  },
  {
    icon: BarChart3,
    title: "Dashboards con IA",
    description: "Tus números explicados: predicciones y alertas, no solo gráficos.",
    color: "from-amber-400/15 to-amber-400/5",
    border: "border-amber-400/15",
    iconColor: "text-amber-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(34,211,238,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 space-y-4 max-w-2xl">
          <p className="text-sm font-semibold text-cyan-400">
            // Servicios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Todo lo que tu negocio necesita,
            <br />
            programado a tu medida.
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Nada de plantillas genéricas. Cada herramienta se diseña para
            cómo trabajas tú.
          </p>
        </div>

        {/* Grid — sin números */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`card-glow group relative p-7 rounded-2xl border ${service.border} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 cursor-default overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(34,211,238,0.04) 0%, transparent 70%)" }}
                />

                {/* Icon */}
                <div className={`mb-6 inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                  <Icon size={22} className={service.iconColor} />
                </div>

                {/* Text */}
                <h3 className="font-bold text-base mb-2 text-white group-hover:text-cyan-300 transition-colors duration-200 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

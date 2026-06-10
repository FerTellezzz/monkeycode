import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "NexPay",
    category: "Fintech · Web App",
    description: "Real-time payment dashboard for B2B transactions with advanced analytics.",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    color: "from-cyan-500/10 via-transparent to-transparent",
    accent: "text-cyan-400",
    border: "border-cyan-400/15",
  },
  {
    name: "Orbita",
    category: "SaaS · Mobile",
    description: "Project management app with AI-powered task prioritization for remote teams.",
    stack: ["React Native", "Go", "Redis"],
    color: "from-violet-500/10 via-transparent to-transparent",
    accent: "text-violet-400",
    border: "border-violet-400/15",
  },
  {
    name: "ShipFast",
    category: "E-commerce · Platform",
    description: "Multi-vendor marketplace with logistics tracking and seller analytics.",
    stack: ["Next.js", "GraphQL", "AWS"],
    color: "from-emerald-500/10 via-transparent to-transparent",
    accent: "text-emerald-400",
    border: "border-emerald-400/15",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 80% 50%, rgba(167,139,250,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase">
            Selected work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Products we&apos;ve
            <br />
            <span className="text-gradient">helped ship</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`group relative p-7 rounded-2xl border ${project.border} bg-gradient-to-br ${project.color} bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-white/30 mb-1">{project.category}</p>
                  <h3 className={`text-xl font-bold ${project.accent}`}>{project.name}</h3>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </div>

              <p className="text-sm text-white/50 leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-white/40 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

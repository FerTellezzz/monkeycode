import MonkeyLogo from "./MonkeyLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand + tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-3">
            <MonkeyLogo size={32} showGlow={false} />
            <span className="font-bold text-base tracking-tight">
              Monkey<span className="text-cyan-400">Code</span>
            </span>
          </div>
          <p className="text-xs text-white/35 md:pl-[44px]">
            Curiosos. Incansables. Manos a la obra.
          </p>
        </div>

        <p className="text-xs text-white/25 text-center">
          © {new Date().getFullYear()} MonkeyCode. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

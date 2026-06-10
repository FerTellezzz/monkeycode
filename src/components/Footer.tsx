import MonkeyLogo from "./MonkeyLogo";
import { GitBranch, X, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <MonkeyLogo size={32} showGlow={false} />
          <span className="font-bold text-base tracking-tight">
            Monkey<span className="text-cyan-400">Code</span>
          </span>
        </div>

        <p className="text-xs text-white/25 text-center">
          © {new Date().getFullYear()} MonkeyCode. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4 text-white/30">
          <a href="#" className="hover:text-white/70 transition-colors" aria-label="GitHub">
            <GitBranch size={16} />
          </a>
          <a href="#" className="hover:text-white/70 transition-colors" aria-label="Twitter">
            <X size={16} />
          </a>
          <a href="#" className="hover:text-white/70 transition-colors" aria-label="LinkedIn">
            <Briefcase size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

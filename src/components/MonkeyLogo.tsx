"use client";

import Image from "next/image";

interface MonkeyLogoProps {
  size?: number;
  className?: string;
  showGlow?: boolean;
}

export default function MonkeyLogo({ size = 80, className = "", showGlow = true }: MonkeyLogoProps) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {showGlow && (
        <div
          className="absolute rounded-full animate-glow-pulse pointer-events-none"
          style={{
            width: size * 1.8,
            height: size * 1.8,
            background: "radial-gradient(circle, rgba(34,211,238,0.20) 0%, transparent 60%)",
          }}
        />
      )}
      <div className="animate-float-slow relative z-10">
        <div
          style={{
            width: size,
            height: size,
            /* Mask fades out the gray PNG background, keeping only the monkey */
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 55%, black 52%, transparent 72%)",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 55%, black 52%, transparent 72%)",
          }}
        >
          <Image
            src="/logo.png"
            alt="MonkeyCode logo"
            width={size}
            height={size}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

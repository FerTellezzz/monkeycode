const stack = [
  "Next.js", "React", "TypeScript", "Node.js", "Go", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GCP",
  "Vercel", "React Native", "GraphQL", "Prisma", "Tailwind CSS", "Figma",
  "Next.js", "React", "TypeScript", "Node.js", "Go", "PostgreSQL",
  "MongoDB", "Redis", "Docker", "Kubernetes", "AWS", "GCP",
  "Vercel", "React Native", "GraphQL", "Prisma", "Tailwind CSS", "Figma",
];

export default function TechTicker() {
  return (
    <div className="relative py-12 overflow-hidden border-y border-white/5">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {stack.map((tech, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-medium text-white/25 hover:text-white/60 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

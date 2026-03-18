const SKILLS = [
  { name: "HTML/CSS", icon: "🌐", level: 95 },
  { name: "JavaScript", icon: "⚡", level: 75 },
  { name: "TypeScript", icon: "◆", level: 58 },
  { name: "React", icon: "⚛", level: 89 },
  { name: "Python", icon: "🐍", level: 98 },
  { name: "Git", icon: "📦", level: 92 },
  { name: "Node.js", icon: "🟢", level: 79 },
  { name: "SQL", icon: "🗄", level: 81 },
  { name: "Figma", icon: "🎨", level: 92 },
  { name: "C++", icon: "C", level: 56 },
  { name: "Tailwind", icon: "💨", level: 71 },
  { name: "Linux", icon: "🐧", level: 32 },
];

function clampPct(n) {
  return Math.max(0, Math.min(100, n));
}

export default function SkillsSection() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex items-center gap-3">
        <span className="chip">
          <span className="inline-flex h-4 w-4 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7l8-4 8 4-8 4-8-4Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M4 7v10l8 4 8-4V7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M12 11v10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-pixel)" }} className="text-[var(--accent-2)]">INVENTORY</span>
        </span>
      </div>

      <div className="mt-8 glass-panel pixel-border p-6">
        <div className="font-mono text-[11px] tracking-widest text-white/55">
          — SKILL SLOTS —
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="skill-slot pixel-border bg-[rgba(2,6,23,0.25)] p-4 transition-transform duration-150 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[color:var(--panel-border)] bg-[rgba(2,6,23,0.45)] text-sm text-white/80">
                  {s.icon}
                </div>
                <div className="font-mono text-[11px] tracking-widest text-white/45">
                  {clampPct(s.level)}%
                </div>
              </div>

              <div className="mt-3 font-mono text-xs tracking-widest text-white/80">
                {s.name}
              </div>

              <div className="mt-3 h-[10px] border border-[color:var(--panel-border)] bg-[rgba(2,6,23,0.45)]">
                <div
                  className="h-full bg-[color:var(--accent)]"
                  style={{ width: `${clampPct(s.level)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


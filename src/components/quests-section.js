const QUESTS = [
  {
    title: "Portfolio Website",
    status: "COMPLETED",
    difficulty: "EASY",
    description:
      "A pixel-theme portfolio website built with React and TypeScript, featuring isometric cards and retro RPG aesthetics.",
    tech: ["React", "TypeScript", "Tailwind"],
    link: "",
  },
  {
    title: "Automated Mining Script",
    status: "COMPLETED",
    difficulty: "NORMAL",
    description:
      "A simple visual recognition script for a game using image recognition, OCR, and automation tools.",
    tech: ["Python", "numpy", "cv2", "pyautogui"],
    link: "https://github.com/akagail/automated-mining-script",
  },
  {
    title: "Web-Based Billing System with Image Annotation and PRM",
    status: "IN PROGRESS",
    difficulty: "HARD",
    description:
      "A Web-Based Smart Billing System with Image Annotation and Patient Record Management for MSRA Ultrasound Clinic.",
    tech: ["Python", "Django", "SQLite", "Tailwind"],
    link: "https://github.com/carlosinag/comebackcapstone",
  },
  {
    title: "Data Analytics of crimes, Data Prediction and ML",
    status: "COMPLETED",
    difficulty: "HARD",
    description:
      "A set of activities we've done in our Data Analytics subject. Analyzed data and made predictions using machine learning models.",
    tech: ["numpy", "pandas", "seaborn"],
    link: "https://github.com/akagail/ITD-3B",
  },
];

function StatusPill({ status }) {
  const colorMap = {
    COMPLETED: "bg-emerald-500/90 text-emerald-950",
    "IN PROGRESS": "bg-amber-400/95 text-amber-950",
    PLANNED: "bg-sky-400/95 text-sky-950",
  };

  const cls = colorMap[status] ?? "bg-sky-400/95 text-sky-950";

  return (
    <span className={`font-mono text-[11px] tracking-widest px-2 py-1 ${cls}`}>
      {status}
    </span>
  );
}

export default function QuestsSection() {
  return (
    <section id="quests" className="mx-auto w-full max-w-6xl px-6 py-20">
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
                d="M5 4h14v5l-4 4-3-3-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 4v3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-pixel)" }} className="text-[var(--accent-2)]">QUEST LOG</span>
        </span>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {QUESTS.map((q) => (
          <article
            key={q.title}
            className="glass-panel pixel-border p-5 transition-transform duration-150 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-mono text-[11px] tracking-widest text-white/55">
                  QUEST
                </div>
                <h3 className="mt-1 text-sm font-semibold text-white/90">
                  {q.title}
                </h3>
                <div className="mt-1 font-mono text-[11px] tracking-widest text-white/45">
                  DIFFICULTY: {q.difficulty}
                </div>
              </div>
              <StatusPill status={q.status} />
            </div>

            <p className="mt-4 text-xs leading-6 text-white/70">
              {q.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {q.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-[color:var(--panel-border)] bg-[rgba(15,23,42,0.7)] px-2 py-1 font-mono text-[11px] tracking-widest text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <button className="btn-block text-[10px]">
                  <span className="font-mono">▶</span> Demo
                </button>
                <a href={q.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-block text-[10px]">
                  {"</>"} Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


const ACHIEVEMENTS = [
  {
    year: "2025",
    label: "Certificate",
    title: "Ethical Hacker",
    description:
      "Explored ethical hacking, IoT security, vulnerability scanning, etc.",
  },
  {
    year: "2025",
    label: "Certificate",
    title: "Networking Basics",
    description:
      "Learned about network media, protocol standards, IPv4 addresses, etc.",
  },
  {
    year: "2024",
    label: "Certificate",
    title: "Introduction to Cybersecurity",
    description:
      "Practiced cybersecurity, privacy and data confidentiality, and threat detection..",
  },
  {
    year: "2022 - current",
    label: "College",
    title: "Started IT Degree",
    description:
      "Began studying Information Technology with a focus on software development.",
  },
  {
    year: "2020 - 2022",
    label: "Senior High School",
    title: "Started IT Strand",
    description:
      "Began studying ICT.",
  },
];

export default function XpSection() {
  return (
    <section id="xp" className="mx-auto w-full max-w-6xl px-6 py-20">
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
                d="M6 4h12l-2 7H8L6 4Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 11v7l4 2 4-2v-7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-pixel)" }} className="text-[var(--accent)]">ACHIEVEMENTS / XP</span>
        </span>
      </div>

      <div className="mt-8 space-y-4">
        {ACHIEVEMENTS.map((item) => (
          <article
            key={`${item.year}-${item.title}`}
            className="glass-panel pixel-border p-5"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="font-mono text-[11px] tracking-widest text-[var(--accent-2)]">
                {item.year}
              </div>
              <div className="font-mono text-[11px] tracking-widest text-white/55">
                {item.label}
              </div>
            </div>
            <h3 className="mt-2 text-sm font-semibold text-white/90">
              {item.title}
            </h3>
            <p className="mt-3 text-xs leading-6 text-white/70">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}


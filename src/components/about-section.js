export default function AboutSection() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-20">
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
                d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M20 22a8 8 0 0 0-16 0"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-pixel)" }} className="text-[var(--accent)]">ABOUT ME</span>
        </span>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="glass-panel pixel-border p-6">
          <p className="text-sm leading-7 text-white/75">
            Hey there! I&apos;m Gail, an IT student who loves turning ideas into real,
            working applications. I specialize in frontend development with a
            growing interest in full-stack solutions.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/75">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, exploring the outside world, or gaming. I
            believe in writing clean, maintainable code and creating
            experiences that users love.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/75">
            I&apos;m currently enjoying life while trying to survive college.
            Hopefully, I can graduate on time and get a job in the future.
            But for now, I'm just trying to enjoy life and make the best of it.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="glass-panel pixel-border stat-card">
            <div className="icon-box text-[var(--accent)]">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7h16M6 3h12v4H6V3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 7v12h12V7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-widest text-white/55">
                Education
              </div>
              <div className="mt-1 text-sm font-semibold text-white/85">
                BS Information Technology, Dalubhasaan ng Lungsod ng Lucena
              </div>
            </div>
          </div>

          <div className="glass-panel pixel-border stat-card">
            <div className="icon-box text-[var(--accent)]">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22s7-4.438 7-12a7 7 0 1 0-14 0c0 7.562 7 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-widest text-white/55">
                Location
              </div>
              <div className="mt-1 text-sm font-semibold text-white/85">
                BellaVita Subdivision, Isabang, Tayabas, Quezon
              </div>
            </div>
          </div>

          <div className="glass-panel pixel-border stat-card">
            <div className="icon-box text-[var(--accent)]">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.65-7 10-7 10Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-widest text-white/55">
                Interests
              </div>
              <div className="mt-1 text-sm font-semibold text-white/85">
                Web Dev, Gaming, Outdoors, Art
              </div>
            </div>
          </div>

          <div className="glass-panel pixel-border p-4">
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] tracking-widest text-white/55">
                EXPERIENCE LEVEL
              </div>
              <div className="font-mono text-[11px] tracking-widest text-white/60">
                4th YEAR COLLEGE → JUNIOR DEV
              </div>
            </div>
            <div className="mt-3 progress-outer">
              <div className="progress-inner w-[82%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--panel-border)] bg-[rgba(7,10,15,0.96)]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between py-2">
        <Link style={{ fontFamily: "var(--font-pixel)" }}
          className="glitch-hover font-mono text-sm tracking-widest text-[var(--accent)]"
          href="/"
        >
          {"<GAIL/>"}
        </Link>

        <nav style={{ fontFamily: "var(--font-pixel)" }} className="hidden items-center gap-6 md:flex">
          <a className="nav-link" href="#about">
            ABOUT
          </a>
          <a className="nav-link" href="#skills">
            SKILLS
          </a>
          <a className="nav-link" href="#quests">
            QUESTS
          </a>
          <a className="nav-link" href="#xp">
            XP
          </a>
          <a className="nav-link" href="#contact">
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}

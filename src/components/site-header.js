"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const onNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--panel-border)] bg-[rgba(7,10,15,0.96)]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <Link
          style={{ fontFamily: "var(--font-pixel)" }}
          className="glitch-hover ml-2 font-mono text-sm tracking-widest text-[var(--accent)]"
          href="/"
        >
          {"<GAIL/>"}
        </Link>

        <nav
          style={{ fontFamily: "var(--font-pixel)" }}
          className="hidden items-center gap-6 sm:flex"
        >
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

        <button
          type="button"
          className="btn-block px-3 py-2 text-[10px] sm:!hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="font-mono">≡</span> MENU
        </button>
      </div>

      {open ? (
        <div className="border-t border-[color:var(--panel-border)] bg-[rgba(7,10,15,0.98)] sm:!hidden">
          <div
            className="mx-auto w-full max-w-6xl px-6 py-4"
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            <div className="grid gap-3">
              <a className="nav-link" href="#about" onClick={onNavClick}>
                ABOUT
              </a>
              <a className="nav-link" href="#skills" onClick={onNavClick}>
                SKILLS
              </a>
              <a className="nav-link" href="#quests" onClick={onNavClick}>
                QUESTS
              </a>
              <a className="nav-link" href="#xp" onClick={onNavClick}>
                XP
              </a>
              <a className="nav-link" href="#contact" onClick={onNavClick}>
                CONTACT
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

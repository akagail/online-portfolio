import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xl text-left">
          <div className="inline-flex items-center gap-3 glass-panel pixel-border px-4 py-2">
            <span style={{ fontFamily: "var(--font-pixel)" }} className="font-mono text-xs tracking-widest text-[var(--accent)]">
              // HELLO WORLD
            </span>
          </div>

          <h1 className="mt-8 text-balance text-3xl font-extrabold leading-[1.1] text-[var(--accent-2)] sm:text-4xl">
            <span style={{ fontFamily: "var(--font-pixel)" }} className="block font-[var(--font-pixel)] text-[18px] leading-[1.6] tracking-[0.18em] text-white sm:text-[20px]">
              I&apos;M A
            </span>
            <span style={{ fontFamily: "var(--font-pixel)" }} className="mt-2 block font-[var(--font-pixel)] text-[22px] leading-[1.4] tracking-[0.18em] text-[var(--accent-2)] sm:text-[26px]">
              DEV STUDENT
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-sm leading-7 text-[color:var(--muted)] sm:text-base">
            An IT student passionate about building things for the web. Currently
            leveling up my skills and looking for new quests.
          </p>

          <div style={{ fontFamily: "var(--font-pixel)" }} className="mt-9 flex flex-col items-start justify-start gap-3 sm:flex-row">
            <a className="btn-block btn-primary" href="#quests">
              <span style={{ fontFamily: "var(--font-pixel)" }} className="font-mono">{">"}</span>
              VIEW QUESTS
            </a>
            <a className="btn-block" href="#contact">
              CONTACT ME
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-md lg:max-w-lg">
          {/* pixel frames with images */}
          <div className="pointer-events-none absolute -left-10 top-6 h-24 w-24 -rotate-3 border border-[color:var(--panel-border)] bg-[rgba(2,6,23,0.6)]">
            <Image
              src="/images/hero-frame-1.jfif"
              alt="Hero frame 1"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="pointer-events-none absolute -right-8 bottom-12 h-28 w-28 rotate-4 border border-[color:var(--panel-border)] bg-[rgba(2,6,23,0.5)]">
            <Image
              src="/images/hero-frame-2.jpg"
              alt="Hero frame 2"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="pointer-events-none absolute left-14 -bottom-6 h-20 w-20 -rotate-6 border border-[color:var(--panel-border)] bg-[rgba(2,6,23,0.45)]">
            <Image
              src="/images/hero-frame-3.jpg"
              alt="Hero frame 3"
              fill
              className="object-cover opacity-80"
            />
          </div>

          <div className="relative floaty glass-panel pixel-border p-4 text-left">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-sm bg-red-500/90" />
                <span className="h-2.5 w-2.5 rounded-sm bg-yellow-400/90" />
                <span className="h-2.5 w-2.5 rounded-sm bg-green-500/90" />
              </div>
              <span className="font-mono text-xs tracking-widest text-white/60">
                terminal.exe
              </span>
            </div>

            <div className="mt-4 space-y-3 font-mono text-xs leading-5 text-white/80">
              <div>
                <span className="text-[var(--accent)]">$</span> whoami
                <div className="text-white/70">IT Student &amp; Web Developer</div>
              </div>
              <div>
                <span className="text-[var(--accent)]">$</span> cat skills.txt
                <div className="text-white/70">Designing, React, Python…</div>
              </div>
              <div>
                <span className="text-[var(--accent)]">$</span> echo STATUS
                <div className="text-[var(--accent-2)]">
                  → Ready for new adventures!
                  <span className="blink-soft ml-1 align-baseline text-white/80">
                    ▌
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 pt-4">
        <div className="flex flex-col items-center gap-1 font-mono text-xs tracking-widest text-white/40">
          <span>SCROLL DOWN</span>
          <span className="blink-strong text-[var(--accent-2)]">▼</span>
        </div>
      </div>
    </section>
  );
}
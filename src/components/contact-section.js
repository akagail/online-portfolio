"use client";

import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Failed to send message.");
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20">
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
                d="M4 4h16v12H5.5L4 17.5V4Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m6 6 6 4 6-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span style={{ fontFamily: "var(--font-pixel)" }} className="text-[var(--accent-2)]">CONTACT</span>
        </span>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Send a message */}
        <div className="glass-panel pixel-border p-6">
          <div className="font-mono text-[11px] tracking-widest text-[var(--accent)]">
            ▷ SEND A MESSAGE
          </div>
          <form className="mt-5 space-y-4" onSubmit={onSubmit}>
            <div className="space-y-1 text-xs">
              <label className="font-mono tracking-widest text-white/55">
                NAME
              </label>
              <input
                type="text"
                placeholder="Your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[color:var(--panel-border)] bg-[rgba(15,23,42,0.9)] px-3 py-2 text-xs text-white outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="space-y-1 text-xs">
              <label className="font-mono tracking-widest text-white/55">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[color:var(--panel-border)] bg-[rgba(15,23,42,0.9)] px-3 py-2 text-xs text-white outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="space-y-1 text-xs">
              <label className="font-mono tracking-widest text-white/55">
                MESSAGE
              </label>
              <textarea
                rows={4}
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none border border-[color:var(--panel-border)] bg-[rgba(15,23,42,0.9)] px-3 py-2 text-xs text-white outline-none focus:border-[var(--accent)]"
              />
            </div>
            <button
              type="submit"
              className="btn-block btn-primary w-full disabled:opacity-60"
              disabled={status === "sending"}
            >
              <span className="font-mono">▶</span>{" "}
              {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
            </button>

            {status === "sent" ? (
              <div className="font-mono text-[11px] tracking-widest text-[var(--accent)]">
                MESSAGE SENT ✓
              </div>
            ) : null}

            {status === "error" ? (
              <div className="font-mono text-[11px] tracking-widest text-red-300">
                {error || "Failed to send message."}
              </div>
            ) : null}
          </form>
        </div>

        {/* Find me online */}
        <div className="glass-panel pixel-border p-6 space-y-4">
          <div className="font-mono text-[11px] tracking-widest text-[var(--accent)]">
            FIND ME ONLINE
          </div>

          <div className="glass-panel pixel-border stat-card">
            <div className="icon-box text-[var(--accent)]">
              <span className="text-sm">@</span>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-widest text-white/55">
                GitHub
              </div>
              <div className="mt-1 break-words text-sm font-semibold text-white/85">
                @akagail
              </div>
            </div>
          </div>

          <div className="glass-panel pixel-border stat-card">
            <div className="icon-box text-[var(--accent)]">
              <span className="text-sm">f</span>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-widest text-white/55">
                Facebook
              </div>
              <div className="mt-1 break-words text-sm font-semibold text-white/85">
                www.facebook.com/akasaka.8
              </div>
            </div>
          </div>

          <div className="glass-panel pixel-border stat-card">
            <div className="icon-box text-[var(--accent)]">
              <span className="text-sm">✉</span>
            </div>
            <div>
              <div className="font-mono text-[11px] tracking-widest text-white/55">
                Email
              </div>
              <div className="mt-1 break-all text-sm font-semibold text-white/85">
                ivan.sinaon21@gmail.com/aka.gail621@gmail.com
              </div>
            </div>
          </div>

          <div className="glass-panel pixel-border p-3">
            <div className="font-mono text-[11px] tracking-widest text-white/60">
              STATUS
            </div>
            <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-10 border-t border-[color:var(--panel-border)] pt-4 text-center">
        <div className="font-mono text-[11px] tracking-widest text-white/40">
          © {new Date().getFullYear()} • Built with React + Next.js + Tailwind
        </div>
      </footer>
    </section>
  );
}


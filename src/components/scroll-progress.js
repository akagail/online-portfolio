"use client";

import { useEffect, useMemo, useState } from "react";

function clamp01(n) {
  return Math.max(0, Math.min(1, n));
}

export default function ScrollProgress({ steps = 18 }) {
  const [progress, setProgress] = useState(0);

  const blocks = useMemo(() => Array.from({ length: steps }, (_, i) => i), [steps]);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop || 0;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      setProgress(scrollTop / max);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  const filledCount = Math.round(clamp01(progress) * steps);

  return (
    <div
      className="scroll-rail"
      aria-hidden="true"
      title="Scroll progress"
    >
      <div className="scroll-rail__stack">
        {blocks.map((i) => {
          const filled = i < filledCount;
          return (
            <span
              key={i}
              className={`scroll-rail__block ${filled ? "is-filled" : ""}`}
            />
          );
        })}
      </div>
    </div>
  );
}


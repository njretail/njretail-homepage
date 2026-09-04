"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#C8075F] shadow-lg shadow-slate-900/15 ring-1 ring-slate-200 transition hover:scale-105"
      aria-label="맨 위로 이동"
    >
      <ArrowUpIcon />
    </button>
  );
}

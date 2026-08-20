"use client";

import { useState } from "react";

export function KakaoChatWidget() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#FEE500] text-[10px] font-black text-[#3C1E1E] shadow-lg shadow-slate-900/15 transition hover:scale-105"
        aria-label="카카오톡 상담창 열기"
      >
        TALK
      </button>
    );
  }

  return (
    <aside className="fixed bottom-4 right-4 z-50 w-[min(15rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-[#E4D000] bg-[#FEE500] shadow-xl shadow-slate-900/15">
      <div className="flex items-start justify-between px-4 pb-2.5 pt-3">
        <div>
          <p className="text-[10px] font-bold tracking-[0.14em] text-[#3C1E1E]/65">NJ RETAIL TALK</p>
          <h2 className="mt-1 text-base font-bold text-[#3C1E1E]">카카오톡 상담</h2>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="flex h-7 w-7 items-center justify-center rounded-full text-lg leading-none text-[#3C1E1E]/70 transition hover:bg-black/10"
          aria-label="카카오톡 상담창 닫기"
        >
          ×
        </button>
      </div>
      <div className="bg-white/80 px-4 py-3">
        <p className="text-xs leading-5 text-slate-700">무인매장 창업과 운영을 편하게 상담해보세요.</p>
        <a
          href="https://open.kakao.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-[#3C1E1E] px-3 py-2.5 text-xs font-bold text-white transition hover:bg-[#241313]"
        >
          카카오톡 상담하기
        </a>
      </div>
    </aside>
  );
}

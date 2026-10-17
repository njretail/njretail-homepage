"use client";

import { useRef } from "react";
import Image from "next/image";
import type { StoreCase } from "../data/stores";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
    >
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StoreGallerySlider({ stores }: { stores: StoreCase[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scroll(direction: number) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {stores.map((store) => (
          <div key={store.name} className="w-[54%] shrink-0 snap-start sm:w-[27%] lg:w-[20%]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={store.image}
                alt={`${store.name} 다모아 무인매장`}
                fill
                sizes="(min-width: 1024px) 25vw, 60vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center text-base font-semibold text-slate-800">{store.name}</p>
          </div>
        ))}
      </div>

      {stores.length > 4 && (
        <>
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="이전 매장 보기"
            className="absolute left-0 top-[38%] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-slate-700 shadow-md hover:text-[#C8075F] sm:flex"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="다음 매장 보기"
            className="absolute right-0 top-[38%] hidden translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2 text-slate-700 shadow-md hover:text-[#C8075F] sm:flex"
          >
            <ChevronIcon direction="right" />
          </button>
        </>
      )}
    </div>
  );
}

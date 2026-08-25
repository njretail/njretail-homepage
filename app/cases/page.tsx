'use client';

import Link from "next/link";
import { useState } from "react";
import { Footer, Header } from "../components/site-shell";

const filters = ["전체", "편의점", "카페", "세탁", "기타"];

const cases = [
  {
    title: "1호점",
    category: "편의점",
    location: "서울 강남",
    result: "월 매출 150% 성장",
    image: "/store-01.png",
  },
  {
    title: "2호점",
    category: "편의점",
    location: "서울 동대문",
    result: "고객 이용률 2배 증가",
    image: "/2.jpg",
  },
  {
    title: "3호점",
    category: "편의점",
    location: "부산 해운대",
    result: "심야 매출 180% 상승",
    image: "/3.jpg",
  },
  {
    title: "4호점",
    category: "편의점",
    location: "경기 평택",
    result: "오픈 3개월 내 흑자 전환",
    image: "/4.jpg",
  },
];

export default function CasesPage() {
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const visibleCases = selectedFilter === "전체" ? cases : cases.filter((item) => item.category === selectedFilter);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#C8075F]">Case</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">오픈사례</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            실전 컨설팅으로 실제 매장 성과를 만든 사례들을 확인해보세요. 무인매장형태와 상권 특성을 반영한 맞춤형 전략이 핵심입니다.
          </p>
        </section>

        <section className="mt-12">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  selectedFilter === filter
                    ? "bg-[#C8075F] text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {visibleCases.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img src={item.image} alt={`${item.title} 매장 전경`} className="h-64 w-full bg-slate-100 object-contain" />
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-[#FCE7F0] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#C8075F]">
                    {item.category}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-500">{item.location}</p>
                  <p className="mt-4 text-base text-slate-600">{item.result}</p>
                  <Link href="/contact" className="mt-5 inline-flex text-sm font-semibold text-[#C8075F] hover:text-[#a8054e]">
                    상담 신청 →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

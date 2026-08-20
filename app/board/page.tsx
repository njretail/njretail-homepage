'use client';

import { useState } from "react";
import { Footer, Header } from "../components/site-shell";

const notices = [
  { id: 1, title: "무인매장 창업 관련 세미나 일정 안내", author: "관리자", date: "2026-08-20", views: 120, content: "무인매장 창업을 준비하는 예비 점주님을 위한 세미나를 진행합니다. 상권 분석, 매장 설계, 운영 시스템 구축 사례를 중심으로 안내해드립니다. 자세한 일정은 상담 신청 후 확인하실 수 있습니다." },
  { id: 2, title: "무인매장 보안 시스템 점검 일정 안내", author: "관리자", date: "2026-08-17", views: 94, content: "안정적인 매장 운영을 위해 출입 인증, CCTV, 결제 시스템을 정기적으로 점검합니다. 점검 시간에는 일부 기능이 일시적으로 제한될 수 있습니다." },
  { id: 3, title: "오픈 전 필수 체크리스트 공개", author: "관리자", date: "2026-08-11", views: 176, content: "오픈 전에는 상품 입고와 매대 진열, 가격표 부착, 결제 테스트, 청소 상태, 보안 장비 작동 여부를 순서대로 확인해야 합니다." },
];

const qna = [
  { id: 1, title: "초보자도 무인매장 창업이 가능한가요?", author: "점주님", date: "2026-08-14", views: 88, content: "네, 가능합니다. 상권 분석부터 상품 구성, 운영 시스템과 오픈 후 관리까지 단계별 컨설팅을 제공해 처음 시작하는 점주님도 준비할 수 있도록 지원합니다." },
  { id: 2, title: "무인매장 운영 시 보안은 어떻게 관리하나요?", author: "점주님", date: "2026-08-10", views: 102, content: "출입 인증, CCTV, 결제 기록을 함께 확인할 수 있는 운영 구조를 구성합니다. 이상 상황이 발생하면 원격으로 확인하고 필요한 조치를 안내합니다." },
  { id: 3, title: "오픈 전 사전 점검은 어떤 항목을 확인해야 하나요?", author: "점주님", date: "2026-08-02", views: 73, content: "상품 입고 상태, 매대 진열, 냉장고와 결제 장비, 조명, 청소 상태, CCTV와 출입 장비를 확인합니다." },
];

export default function BoardPage() {
  const [tab, setTab] = useState<"notice" | "qna">("notice");
  const rows = tab === "notice" ? notices : qna;
  const [selected, setSelected] = useState(rows[0]);

  function changeTab(nextTab: "notice" | "qna") {
    setTab(nextTab);
    setSelected((nextTab === "notice" ? notices : qna)[0]);
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">Board</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">게시판</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            무인매장 창업, 운영, 보안, 인테리어에 관련된 정보를 확인할 수 있는 공간입니다.
          </p>
        </section>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex border-b border-slate-200">
            <button
              type="button"
              onClick={() => changeTab("notice")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition ${
                tab === "notice" ? "bg-[#3B82F6] text-white" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              공지사항
            </button>
            <button
              type="button"
              onClick={() => changeTab("qna")}
              className={`flex-1 px-6 py-4 text-sm font-semibold transition ${
                tab === "qna" ? "bg-[#3B82F6] text-white" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              Q&A
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs uppercase tracking-[0.16em] text-slate-500">
                <tr>
                  <th className="px-6 py-4">번호</th>
                  <th className="px-6 py-4">제목</th>
                  <th className="px-6 py-4">작성자</th>
                  <th className="px-6 py-4">날짜</th>
                  <th className="px-6 py-4">조회수</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((item) => (
                  <tr key={item.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">
                      <button type="button" onClick={() => setSelected(item)} className="text-left font-medium text-slate-900 hover:text-[#3B82F6] hover:underline">
                        {item.title}
                      </button>
                    </td>
                    <td className="px-6 py-4">{item.author}</td>
                    <td className="px-6 py-4">{item.date}</td>
                    <td className="px-6 py-4">{item.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm" aria-live="polite">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold text-slate-900">{selected.title}</h2>
            <span className="text-sm text-slate-500">{selected.date} · {selected.author}</span>
          </div>
          <p className="pt-5 text-base leading-8 text-slate-700">{selected.content}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}

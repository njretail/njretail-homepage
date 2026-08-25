import { CTAButton, Footer, Header } from "../components/site-shell";

const agencyCategories = [
  {
    title: "입고 및 매대진열",
    description: "상품 입고 검수부터 수량 확인, 매대 배치와 진열 기준까지 매장에 맞춰 대행합니다.",
    points: ["입고 상품 검수 및 수량 확인", "매장별 매대 진열과 가격표 정리", "재고 흐름 및 진열 상태 점검"],
  },
  {
    title: "청소대행",
    description: "정기적인 매장 청소와 위생 점검으로 고객이 안심하고 이용할 수 있는 환경을 관리합니다.",
    points: ["매장 바닥과 집기 청소", "화장실 및 공용 공간 위생 관리", "청소 체크리스트 기반 방문 점검"],
  },
];

export default function AgencyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#C8075F]">Agency Service</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">대행 신청하기</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            매장 운영에 필요한 업무를 선택해 주세요. 매장 상황을 확인한 뒤 맞춤형 대행 범위와 일정을 안내해드립니다.
          </p>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          {agencyCategories.map((category) => (
            <article key={category.title} className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FCE7F0] text-xl font-bold text-[#C8075F]">✓</div>
              <h2 className="mt-6 text-2xl font-bold text-slate-900">{category.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{category.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {category.points.map((point) => <li key={point}>• {point}</li>)}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-[30px] bg-slate-50 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8075F]">Application</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">대행 서비스 신청서</h2>
            </div>
            <form className="mt-10 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="agency-name" className="mb-2 block text-sm font-medium text-slate-700">이름</label>
                  <input id="agency-name" type="text" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]" placeholder="홍길동" />
                </div>
                <div>
                  <label htmlFor="agency-phone" className="mb-2 block text-sm font-medium text-slate-700">연락처</label>
                  <input id="agency-phone" type="tel" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]" placeholder="010-1234-5678" />
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="agency-type" className="mb-2 block text-sm font-medium text-slate-700">신청 서비스</label>
                  <select id="agency-type" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]">
                    <option value="">서비스를 선택해 주세요</option>
                    <option>입고 및 매대진열</option>
                    <option>청소대행</option>
                    <option>두 서비스 모두</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="agency-store" className="mb-2 block text-sm font-medium text-slate-700">매장 위치</label>
                  <input id="agency-store" type="text" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]" placeholder="서울시 성북구" />
                </div>
              </div>
              <div>
                <label htmlFor="agency-message" className="mb-2 block text-sm font-medium text-slate-700">신청 내용</label>
                <textarea id="agency-message" rows={5} className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none focus:border-[#C8075F]" placeholder="희망 일정과 필요한 업무를 적어 주세요." />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-[#C8075F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#a8054e]">대행 신청 접수하기</button>
              </div>
            </form>
          </div>
        </section>

        <div className="mt-10 flex justify-center">
          <CTAButton href="/service" text="창업지원으로 돌아가기" variant="secondary" />
        </div>
      </main>
      <Footer />
    </>
  );
}

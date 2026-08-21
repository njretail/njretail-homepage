import Image from "next/image";

const projects = [
  {
    n: "01",
    title: "상권을 읽습니다",
    body: "반경 500m 안의 유동인구와 주거 비율, 경쟁 매장 데이터를 분석해 자리를 검증합니다.",
    stats: [
      { label: "분석 반경", value: "500m" },
      { label: "주거 인구 비율", value: "73%" },
      { label: "핵심 고객층", value: "30–40대" },
    ],
    image: "/2.jpg",
  },
  {
    n: "02",
    title: "상품을 구성합니다",
    body: "고객 데이터를 기반으로 SKU를 설계하고, 회전율 높은 카테고리부터 채웁니다.",
    stats: [
      { label: "SKU", value: "487개" },
      { label: "냉동·간편식 비중", value: "42%" },
      { label: "평균 회전 주기", value: "6일" },
    ],
    image: "/3.jpg",
  },
  {
    n: "03",
    title: "공간을 설계합니다",
    body: "11평이라는 제한된 면적 안에서 동선과 진열, 조명까지 하나의 시스템으로 설계합니다.",
    stats: [
      { label: "매장 면적", value: "11평" },
      { label: "동선 길이", value: "14.2m" },
      { label: "진열대", value: "6열" },
    ],
    image: "/4.jpg",
  },
  {
    n: "04",
    title: "시스템을 연결합니다",
    body: "POS, 키오스크, 출입 인증, CCTV, 재고관리를 하나의 운영 구조로 통합합니다.",
    stats: [
      { label: "결제·인증", value: "POS · 키오스크" },
      { label: "모니터링", value: "24시간 원격" },
      { label: "재고 알림", value: "실시간" },
    ],
    image: "/store-dashboard.png",
  },
  {
    n: "05",
    title: "운영을 완성합니다",
    body: "입고, 진열, 청소, 재고관리까지 — 오픈 이후의 매일을 함께 운영합니다.",
    stats: [
      { label: "입고", value: "검수 · 수량 확인" },
      { label: "관리", value: "정기 청소 · 점검" },
      { label: "리포트", value: "매출 · 재고 분석" },
    ],
    image: "/about-hero.png",
  },
];

export function ProjectSections() {
  return (
    <div>
      {projects.map((p, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={p.n} className="border-t border-black/10 bg-[#F5F3EF]">
            <div className="mx-auto grid max-w-7xl lg:grid-cols-[3fr_2fr]">
              <div className={`flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                <span className="font-mono text-xs tracking-[0.3em] text-black/40">PROJECT {p.n}</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">{p.title}</h2>
                <p className="mt-4 max-w-md text-base leading-7 text-black/60">{p.body}</p>
                <dl className="mt-10 max-w-sm space-y-4 border-t border-black/10 pt-6">
                  {p.stats.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-4 text-sm">
                      <dt className="text-black/50">{s.label}</dt>
                      <dd className="font-semibold text-black">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className={`relative min-h-[280px] sm:min-h-[360px] lg:min-h-0 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

const costItems = [
  { label: "SPACE", amount: "150" },
  { label: "SIGNAGE", amount: "110" },
  { label: "KIOSK", amount: "120" },
  { label: "REFRIGERATION", amount: "86" },
  { label: "FIXTURE", amount: "264" },
  { label: "INITIAL STOCK", amount: "1,500" },
];

export function ReceiptCost() {
  return (
    <section className="border-t border-black/10 bg-black py-20 text-white sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Startup Cost — Store 01</p>
        <p className="mt-8 text-2xl font-bold sm:text-3xl">11평.</p>
        <p className="mt-2 text-5xl font-bold sm:text-6xl">2,232만원.</p>
        <p className="mt-4 text-base text-white/60">실제 1호점에 들어간 돈입니다.</p>

        <div className="mt-14 border-t border-white/15 font-mono text-sm">
          {costItems.map((item) => (
            <div key={item.label} className="flex items-baseline gap-3 border-b border-white/15 py-3">
              <span className="shrink-0 tracking-[0.15em] text-white/70">{item.label}</span>
              <span className="mb-1 flex-1 border-b border-dotted border-white/25" />
              <span className="shrink-0 font-semibold text-white">{item.amount}</span>
            </div>
          ))}
          <div className="flex items-baseline justify-between py-4 text-base font-bold">
            <span className="tracking-[0.15em]">TOTAL</span>
            <span>2,232</span>
          </div>
        </div>
        <p className="mt-6 text-xs leading-6 text-white/40">※ 단위: 만원 · 임대료 제외 · 11평 1호점 실제 사례 기준이며 매장 조건에 따라 달라질 수 있습니다.</p>
      </div>
    </section>
  );
}

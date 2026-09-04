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
    icons: [
      { icon: "◎", label: "반경 500m", sub: "주거 밀집 지역" },
      { icon: "▢", label: "도보 5분 거리", sub: "아파트 7개 단지" },
      { icon: "→", label: "주요 동선", sub: "버스 정류장 3개" },
    ],
    image: "/2.jpg",
    width: 1402,
    height: 1122,
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
    width: 1086,
    height: 1448,
  },
  {
    n: "03",
    title: "공간을 설계합니다",
    body: "10평이라는 제한된 면적 안에서 동선과 진열, 조명까지 하나의 시스템으로 설계합니다.",
    stats: [
      { label: "매장 면적", value: "10평" },
      { label: "동선 길이", value: "14.2m" },
      { label: "진열대", value: "6열" },
    ],
    image: "/4.jpg",
    width: 1448,
    height: 1086,
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
    width: 1536,
    height: 1024,
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
    width: 1538,
    height: 1022,
  },
];

const steps = [
  { n: "01", label: "상권", sub: "분석" },
  { n: "02", label: "상품", sub: "기획" },
  { n: "03", label: "공간", sub: "설계" },
  { n: "04", label: "시스템", sub: "구축" },
  { n: "05", label: "운영", sub: "관리" },
];

function ProcessStepper() {
  return (
    <div className="border-t border-black/10 bg-[#F5F3EF] py-10 sm:py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-6 px-4 sm:px-6 lg:flex-nowrap lg:justify-between lg:px-8">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center gap-2">
            <div className="flex items-baseline gap-2">
              <span className="font-mono text-sm font-bold text-[#C8075F]">{s.n}</span>
              <span className="text-sm font-semibold text-black">{s.label}</span>
              <span className="text-sm text-black/40">{s.sub}</span>
            </div>
            {i < steps.length - 1 && <span className="ml-2 text-[#C8075F]/30 lg:ml-4">&#8594;</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProjectSections() {
  return (
    <div>
      {projects.map((p, i) => {
        const isEven = i % 2 === 0;
        return (
          <div key={p.n}>
            <section className="border-t border-black/10 bg-white">
              <div className="mx-auto grid max-w-7xl lg:grid-cols-[2fr_3fr]">
                <div className={`flex flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="font-mono text-xs tracking-[0.3em] text-[#C8075F]">PROJECT {p.n}</span>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">{p.title}</h2>
                  <p className="mt-4 max-w-md text-base leading-7 text-black/60">{p.body}</p>

                  {p.icons && (
                    <div className="relative mt-10 flex h-40 w-full max-w-sm items-center justify-center border border-black/10 bg-[#FDF1F6]">
                      <span className="absolute h-24 w-24 rounded-full border border-dashed border-[#C8075F]/25" />
                      <span className="absolute h-14 w-14 rounded-full border border-dashed border-[#C8075F]/40" />
                      <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#C8075F]">
                        <span className="absolute -bottom-5 whitespace-nowrap font-mono text-[10px] text-black/50">STORE 01</span>
                      </span>
                    </div>
                  )}

                  <dl className="mt-10 max-w-sm space-y-4 border-t border-black/10 pt-6">
                    {p.stats.map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between gap-4">
                        <dt className="text-sm text-black/50">{s.label}</dt>
                        <dd className="text-xl font-bold tracking-tight text-black">{s.value}</dd>
                      </div>
                    ))}
                  </dl>

                  {p.icons && (
                    <div className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-black/10 pt-6">
                      {p.icons.map((item) => (
                        <div key={item.label}>
                          <div className="flex h-8 w-8 items-center justify-center border border-[#C8075F]/25 text-sm text-[#C8075F]">{item.icon}</div>
                          <div className="mt-2 text-xs font-semibold text-black">{item.label}</div>
                          <div className="text-[11px] text-black/40">{item.sub}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={`flex items-center bg-[#F5F3EF] ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <Image src={p.image} alt={p.title} width={p.width} height={p.height} className="h-auto w-full object-cover" />
                </div>
              </div>
            </section>
            {i === 0 && <ProcessStepper />}
          </div>
        );
      })}
    </div>
  );
}

const costItems = [
  { label: "SPACE", note: "인테리어", amount: "1,500,000" },
  { label: "SIGNAGE", note: "간판", amount: "1,100,000" },
  { label: "KIOSK", note: "키오스크 · 솔루션", amount: "1,200,000" },
  { label: "REFRIGERATION", note: "냉장 · 냉동 설비", amount: "860,000" },
  { label: "FIXTURE", note: "집기 · 선반", amount: "2,640,000" },
  { label: "INITIAL STOCK", note: "초기 상품", amount: "15,000,000" },
];

export function ReceiptCost() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[2fr_3fr]">
        <div className="bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#F587B0]">Startup Cost</p>
          <p className="mt-8 text-2xl font-bold sm:text-3xl">10평.</p>
          <p className="mt-2 text-5xl font-bold text-[#F587B0] sm:text-6xl">2,232만원.</p>
          <p className="mt-4 max-w-xs text-base leading-7 text-white/60">실제 1호점에 들어간 돈입니다.</p>
          <div className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/50">
            Store 01 Building Cost <span>&#8594;</span>
          </div>
        </div>

        <div className="relative bg-[#F5F3EF] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-xl border-t border-black/15 font-mono text-sm">
            {costItems.map((item) => (
              <div key={item.label} className="flex items-baseline gap-3 border-b border-black/15 py-3">
                <span className="shrink-0 tracking-[0.1em] text-black">
                  {item.label} <span className="text-black/40">({item.note})</span>
                </span>
                <span className="mb-1 flex-1 border-b border-dotted border-black/25" />
                <span className="shrink-0 font-semibold text-black">{item.amount}</span>
              </div>
            ))}
            <div className="flex items-baseline justify-between py-4 text-base font-bold text-[#C8075F]">
              <span className="tracking-[0.1em]">TOTAL</span>
              <span>22,320,000</span>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-xs leading-6 text-black/40">※ 단위: 원 · 임대료 제외 · 10평 1호점 실제 사례 기준이며 매장 조건에 따라 달라질 수 있습니다.</p>

          <div className="pointer-events-none absolute inset-y-0 right-8 hidden flex-col items-center justify-center gap-4 lg:flex">
            <div className="flex h-40 items-end gap-[2px]">
              {[3, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 3, 2].map((w, i) => (
                <span key={i} className="bg-black/70" style={{ width: w, height: "100%" }} />
              ))}
            </div>
            <div className="rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-[#C8075F]" style={{ writingMode: "vertical-rl" }}>
              NJ RETAIL / STORE 01
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

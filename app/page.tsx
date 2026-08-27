import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components/site-shell";
import { KakaoChatWidget } from "./components/kakao-chat-widget";

const PINK = "#C8075F";

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <path d="M21 8l-9-5-9 5 9 5 9-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 8v8l9 5 9-5V8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13v8" strokeLinecap="round" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-10 w-10">
      <path d="M3 10 4.5 4h15L21 10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9.5h14V10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 19.5V14h5v5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20.5 20.5-4.4-4.4" strokeLinecap="round" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <path d="M4 20.5 4.7 17 16.4 5.3a2 2 0 0 1 2.8 0l1 1a2 2 0 0 1 0 2.8L8.5 20.5H4Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m14.5 7.2 2.8 2.8" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.3M12 18.2v2.3M4.9 6.9l1.6 1.6M17.5 15.5l1.6 1.6M3.5 12h2.3M18.2 12h2.3M4.9 17.1l1.6-1.6M17.5 8.5l1.6-1.6" strokeLinecap="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" strokeLinecap="round" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.6" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.6" />
      <path d="M19.5 19.5v.5a3 3 0 0 1-3 3h-3" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <rect x="3" y="14" width="4" height="7" rx="1" />
      <rect x="10" y="10" width="4" height="11" rx="1" />
      <rect x="17" y="5" width="4" height="16" rx="1" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <path d="M4 5.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 3.5v-3.5H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8.3" cy="10.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15.7" cy="10.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <rect x="5" y="4" width="14" height="17" rx="1.6" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" strokeLinecap="round" />
      <path d="M8.5 11.5l1.7 1.7L13.5 10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 16h7" strokeLinecap="round" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <rect x="7" y="7" width="10" height="10" rx="1.4" />
      <path d="M9.5 7V3.5M14.5 7V3.5M9.5 20.5V17M14.5 20.5V17M7 9.5H3.5M7 14.5H3.5M17 9.5h3.5M17 14.5h3.5" strokeLinecap="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <path d="M4 11.5 12 4l8 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9.5h12V10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19.5V14h4v5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7" strokeLinecap="round" />
    </svg>
  );
}

function NoStaffIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c0-4.1 3.4-7 7.5-7s7.5 2.9 7.5 7" strokeLinecap="round" />
      <path d="M3.5 20.5 20.5 3.5" strokeLinecap="round" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M14.6 9.7c0-1.2-1.2-2.2-2.6-2.2s-2.6.9-2.6 2c0 3 5.2 1.5 5.2 4.5 0 1.1-1.2 2-2.6 2s-2.6-1-2.6-2.2" strokeLinecap="round" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <circle cx="8" cy="8" r="4" />
      <path d="M11 11l9.5 9.5M16.5 15.5l3-3M19 18l2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BroomIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-8 w-8">
      <path d="M14 3 6.5 20.5" strokeLinecap="round" />
      <path d="M14 3l4 2-9 15-6-2Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 12.5 20 16" strokeLinecap="round" />
    </svg>
  );
}

const damoaEdge = [
  { icon: NoStaffIcon, title: "인건비 Zero", desc: "24시간 무인 운영이라 인건비 부담이 없어요" },
  { icon: CoinIcon, title: "저렴한 창업비용", desc: "합리적인 초기 비용으로 부담 없이 시작" },
  { icon: KeyIcon, title: "오픈까지 본사가 대행", desc: "시작부터 마무리까지 본사가 모두 진행" },
  { icon: BroomIcon, title: "청소까지 대행", desc: "매장 청소도 본사 대행 서비스로 관리" },
  { icon: BoxIcon, title: "전 상품군 매장 셋업", desc: "필요한 모든 상품군을 본사가 구성해 셋업" },
];

const serviceHighlights = [
  { icon: StepsIcon, title: "5단계 과정", desc: "순서대로 알려드릴게요", highlight: true },
  { icon: ChatIcon, title: "전문 컨설팅", desc: "창업 전문 컨설턴트 1:1 맞춤 상담 지원" },
  { icon: ClipboardIcon, title: "맞춤형 설계", desc: "상권 분석부터 최적의 맞춤 설계" },
  { icon: ChipIcon, title: "시스템 구축", desc: "무인 운영 시스템 및 통합 솔루션 구축" },
  { icon: HomeIcon, title: "사후관리", desc: "오픈 후 안정적인 관리와 운영 지원" },
  { icon: UserIcon, title: "지속 지원", desc: "지속 가능한 수익구조 설계 및 지원" },
];

const processSteps = [
  { n: "01", title: "상권분석", desc: "입지 및 상권 분석 리포트 제공", icon: SearchIcon },
  { n: "02", title: "매장설계", desc: "효율적인 동선과 맞춤형 매장 설계", icon: PencilIcon },
  { n: "03", title: "시스템구축", desc: "무인 운영에 최적화된 시스템 구축", icon: GearIcon },
  { n: "04", title: "상품공급", desc: "경쟁력 있는 상품 안정적 공급", icon: BoxIcon },
  { n: "05", title: "운영관리", desc: "지속적인 관리와 운영 지원", icon: HeadsetIcon },
];

const brandPoints = [
  { img: "/brand-kiosk.png", title: "무인 셀프 결제 시스템" },
  { img: "/brand-goods.png", title: "생필품 판매" },
  { img: "/brand-eggs.png", title: "계란 판매" },
  { img: "/brand-toys.png", title: "문구류 판매" },
  { img: "/brand-snacks.png", title: "과자류 판매" },
  { img: "/brand-icecream.png", title: "아이스크림 판매" },
];

const costItems = [
  { label: "SPACE", sub: "인테리어", value: 1_500_000 },
  { label: "SIGNAGE", sub: "간판", value: 1_100_000 },
  { label: "KIOSK", sub: "키오스크·솔루션", value: 1_200_000 },
  { label: "REFRIGERATION", sub: "냉장·냉동설비", value: 860_000 },
  { label: "FIXTURE", sub: "집기·선반", value: 2_660_000 },
  { label: "INITIAL STOCK", sub: "초기 상품", value: 15_000_000 },
];
const costTotal = costItems.reduce((sum, item) => sum + item.value, 0);
const won = (n: number) => n.toLocaleString("ko-KR");

const storeGallery = [
  { img: "/2.jpg", name: "다모아마켓 상월곡동" },
  { img: "/1.png", name: "다모아마켓 동덕여대" },
  { img: "/3.jpg", name: "다모아마켓 장위동" },
  { img: "/4.jpg", name: "다모아마켓 장위초" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero */}
        <section>
          <div className="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:items-center lg:gap-6">
              <div>
                <h1 className="text-4xl font-bold leading-[1.25] text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                  가까운 동네에서,
                  <br />
                  <span style={{ color: PINK }}>믿고 찾는 무인매장</span>
                  <br />
                  함께 시작해요!
                  <br />
                  엔제이리테일
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  운영은 편하게, 수익은 안정적으로
                  <br />
                  내 가게 같은 마음으로 성공 창업을 함께 만들어갑니다.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <Link
                    href="/contact#inquiry-form"
                    className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-sm transition hover:opacity-90"
                    style={{ backgroundColor: PINK }}
                  >
                    무료 창업 상담 신청 <ArrowRightIcon />
                  </Link>
                </div>
              </div>

              <div className="relative aspect-[626/617] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/7.png"
                  alt="엔제이리테일 다모아 무인매장 매장 전경"
                  fill
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Service highlights */}
            <div className="mt-16 grid grid-cols-3 gap-3 sm:gap-5 lg:grid-cols-6">
              {serviceHighlights.map((s) => (
                <div
                  key={s.title}
                  className={`rounded-2xl p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-7 lg:p-8 ${
                    s.highlight ? "text-white" : "border border-black/5 bg-white"
                  }`}
                  style={s.highlight ? { backgroundColor: PINK } : undefined}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl sm:h-16 sm:w-16 ${
                      s.highlight ? "bg-white/15 text-white" : "bg-[#FCE7F0] text-[#C8075F]"
                    }`}
                  >
                    <s.icon />
                  </div>
                  <div
                    className={`mt-3 text-sm font-bold leading-5 sm:mt-5 sm:text-xl sm:leading-normal lg:text-2xl ${
                      s.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {s.title}
                  </div>
                  <p className={`mt-1.5 text-xs leading-5 sm:mt-2 sm:text-base sm:leading-6 ${s.highlight ? "text-white/80" : "text-slate-600"}`}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-[#FBF4F7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
              창업 <span style={{ color: PINK }}>진행</span> 프로세스
            </h2>

            <div className="mt-14 flex flex-col gap-6 sm:grid sm:grid-cols-3 sm:gap-6 lg:flex lg:flex-row lg:items-stretch lg:gap-3">
              {processSteps.map((step, i) => (
                <div key={step.n} className="flex flex-1 items-stretch">
                  <div className="flex flex-1 flex-col items-center rounded-2xl bg-white p-7 text-center shadow-sm sm:p-8">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full text-base font-bold text-white"
                      style={{ backgroundColor: PINK }}
                    >
                      {step.n}
                    </span>
                    <div className="mt-4 text-slate-700">
                      <step.icon />
                    </div>
                    <div className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">{step.title}</div>
                    <p className="mt-2 text-base leading-6 text-slate-500">{step.desc}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <span className="mx-1 hidden shrink-0 self-center text-slate-300 lg:block">
                      <ArrowRightIcon />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Damoa edge */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">
              다모아 <span style={{ color: PINK }}>창업</span>이 다른 이유
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
              {damoaEdge.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FCE7F0] text-[#C8075F] sm:h-16 sm:w-16">
                    <d.icon />
                  </div>
                  <div className="mt-3 text-sm font-bold leading-5 text-slate-900 sm:mt-5 sm:text-xl sm:leading-normal">
                    {d.title}
                  </div>
                  <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:mt-2 sm:text-base sm:leading-6">
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand competitiveness + cost */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid min-w-0 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
              <div className="min-w-0">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  다모아 브랜드 <span style={{ color: PINK }}>경쟁력</span>
                </h2>
                <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
                  {brandPoints.map((b) => (
                    <div key={b.title}>
                      <div className="relative aspect-square overflow-hidden rounded-2xl">
                        <Image src={b.img} alt={b.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                      </div>
                      <p className="mt-3 text-center text-base font-semibold text-slate-800">{b.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex min-w-0 flex-col overflow-hidden rounded-3xl border border-black/5 shadow-sm sm:flex-row lg:flex-col">
                <div className="flex min-w-0 flex-1 flex-col justify-between p-8 text-white sm:p-10" style={{ backgroundColor: PINK }}>
                  <div>
                    <div className="text-4xl font-bold sm:text-5xl">11평.</div>
                    <div className="mt-1 text-4xl font-bold sm:text-5xl">{won(costTotal / 1000)}만원.</div>
                    <p className="mt-4 text-base leading-6 text-white/85">
                      설레 1호점 기준
                      <br />
                      초기 창업 비용입니다.
                    </p>
                  </div>
                  <Link
                    href="/service"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold"
                    style={{ color: PINK }}
                  >
                    비용 상세보기 <ArrowRightIcon />
                  </Link>
                </div>

                <div className="min-w-0 flex-1 bg-white p-8 sm:p-10">
                  <dl className="divide-y divide-slate-100">
                    {costItems.map((item) => (
                      <div key={item.label} className="flex items-baseline justify-between gap-3 py-3.5 text-base">
                        <dt className="min-w-0 font-medium text-slate-600">
                          {item.label} <span className="text-slate-400">({item.sub})</span>
                        </dt>
                        <dd className="shrink-0 font-semibold text-slate-800">{won(item.value)}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-3 flex items-baseline justify-between gap-3 border-t border-slate-200 pt-4">
                    <dt className="text-lg font-bold text-slate-900">TOTAL</dt>
                    <dd className="shrink-0 text-2xl font-bold" style={{ color: PINK }}>
                      {won(costTotal)}
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real stores gallery */}
        <section className="bg-[#FBF4F7] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">실제 다모아 매장</h2>
              <Link href="/cases" className="flex items-center gap-1 text-base font-semibold" style={{ color: PINK }}>
                전체 보기 <ArrowRightIcon />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {storeGallery.map((store) => (
                <div key={store.name}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={store.img}
                      alt={`${store.name} 다모아 무인매장`}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 text-center text-base font-semibold text-slate-800">{store.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-[#FBF4F7]">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-8 lg:px-8">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white text-[#C8075F] shadow-sm">
                <StoreIcon />
              </div>
              <div>
                <p className="text-xl font-bold leading-7 text-slate-900 sm:text-2xl">
                  창업 고민, 혼자 하지 마세요. 엔제이리테일이 함께 하겠습니다.
                </p>
                <a href="tel:010-7650-9600" className="mt-1.5 block text-3xl font-bold sm:text-4xl" style={{ color: PINK }}>
                  010-7650-9600
                </a>
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-7">
              <span className="text-base text-slate-500">평일 09:00 - 18:00</span>
              <Link
                href="/contact#inquiry-form"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-lg font-bold text-white shadow-sm transition hover:opacity-90"
                style={{ backgroundColor: PINK }}
              >
                무료 창업 상담 신청 <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <KakaoChatWidget />
    </>
  );
}

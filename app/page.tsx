import Image from "next/image";
import Link from "next/link";
import { CTAButton, Footer, Header, SectionTitle } from "./components/site-shell";
import { HomePreviews } from "./components/home-previews";
import { KakaoChatWidget } from "./components/kakao-chat-widget";

const serviceHighlights = [
  { title: "인테리어 설계", description: "매장 특성에 맞춘 공간 구성과 상품 배치 전략을 설계합니다.", icon: "▣" },
  { title: "상품구성", description: "고객층과 상권에 맞는 SKU 구성과 수익성 기반 진열을 제안합니다.", icon: "◫" },
  { title: "운영시스템", description: "POS, 키오스크, CCTV까지 한 번에 연결해 안정적인 운영 환경을 구축합니다.", icon: "◎" },
  { title: "입고관리", description: "입고 기준과 검수 절차를 세우고 수량과 재고 흐름을 체계적으로 관리합니다.", icon: "□" },
  { title: "매장 청결 관리", description: "청소 주기와 점검 항목을 정해 고객이 안심하는 매장 환경을 유지합니다.", icon: "✦" },
  { title: "판매운영", description: "오픈 전·후 운영 매뉴얼과 판매 전략으로 매출을 빠르게 안정화합니다.", icon: "◍" },
  { title: "사후관리", description: "재고, 매출, 비용 데이터 기반으로 지속적인 운영 개선을 지원합니다.", icon: "◇" },
];

const metrics = [
  { value: 320, unit: "개", label: "누적 컨설팅 매장" },
  { value: 150, unit: "%", label: "평균 매출 증가율" },
  { value: 98, unit: "%", label: "고객 만족도" },
  { value: 24, unit: "시간", label: "24시간 운영 안정화" },
];

const testimonials = [
  { name: "박준호 대표", text: "무인매장에 필요한 인테리어, 시스템, 상품 구성을 모두 맞춰줘서 오픈 직후 매출이 안정적으로 유지됐습니다." },
  { name: "최유진 점주", text: "운영 초반에 자주 고민하던 재고 관리와 보안 부분을 체계적으로 해결해 주셔서 큰 도움이 됐습니다." },
  { name: "이상민 대표", text: "현장 노하우를 바탕으로 점주 입장에서 현실적인 조언을 주셔서 리스크를 많이 줄일 수 있었습니다." },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#FAFAFA]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div className="order-2 flex flex-col justify-center lg:order-1">
              <span className="mb-4 inline-flex w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[#3B82F6]">
                무인매장 컨설팅 전문
              </span>
              <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                무인매장 창업의 모든것 <span className="text-[#3B82F6]">ONE-STOP</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                인테리어, 진열, 운영시스템, 판매운영까지 원스톱으로 설계해 가맹점주님이 안심하고 사업을 시작할 수 있도록 돕습니다.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="/contact" text="무료 상담 신청" />
                <CTAButton href="/service" text="서비스 살펴보기" variant="secondary" />
              </div>
            </div>

            <div className="order-1 relative lg:order-2">
              <div className="hidden lg:block absolute -left-4 top-10 h-28 w-28 rounded-full bg-[#F97316]/15 blur-3xl" />
              <div className="hidden lg:block absolute -right-5 bottom-6 h-24 w-24 rounded-full bg-[#3B82F6]/15 blur-3xl" />
              <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:mx-0 lg:rounded-[28px] lg:border lg:border-slate-200 lg:bg-white lg:p-3 lg:shadow-sm">
                <Image
                  src="/onestop-infographic.png"
                  alt="무인편의점 내부와 무인 결제 시스템"
                  width={1200}
                  height={900}
                  className="aspect-[2/3] w-full object-cover lg:rounded-[22px]"
                />
              </div>
            </div>
          </div>
        </section>

        <HomePreviews />

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Service"
              title="무인매장 창업의 전 과정을 한 번에"
              description="오픈 준비부터 매장 운영, 사후관리까지 필요한 항목을 체계적으로 설계해 맞춤형 무인 매장으로 도약할 수 있습니다."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {serviceHighlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3B82F6]/10 text-xl font-bold text-[#3B82F6]">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] bg-[#F3F4F6] p-8 sm:p-12">
            <SectionTitle
              eyebrow="Performance"
              title="수치로 확인하는 성과"
              description="매장 특성과 업종에 맞춘 분석 기반 설계로, 현실적인 성과를 만들어냅니다."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                  <div className="text-4xl font-bold text-slate-900">
                    {item.value}
                    <span className="ml-1 text-2xl text-[#3B82F6]">{item.unit}</span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionTitle
              eyebrow="Review"
              title="점주님들의 생생한 후기"
              description="오픈 전 고민부터 오픈 후 운영까지, 엔제이리테일과 함께 한 경험을 들려드립니다."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F6] text-sm font-bold text-white">
                    {item.name.slice(0, 1)}
                  </div>
                  <p className="text-base leading-7 text-slate-600">“{item.text}”</p>
                  <div className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-900">{item.name}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[30px] bg-[#3B82F6] px-8 py-12 text-center text-white shadow-sm sm:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">Start your store</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">지금 무료 상담을 신청하세요</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-sky-100">
              무인매장 창업을 고민하고 있다면, 전문 컨설턴트가 상권 분석부터 매장 설계, 운영 전략까지 함께 설계해드립니다.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <CTAButton href="/contact" text="상담 신청하기" />
              <Link href="/shop" className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                패키지 보기
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

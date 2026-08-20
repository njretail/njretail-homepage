import Image from "next/image";
import { CTAButton, SectionTitle } from "./site-shell";

const previewCases = [
  { title: "1호점", result: "24시간 무인마켓 오픈", image: "/1호점.png" },
  { title: "2호점", result: "상권 맞춤형 매장 오픈", image: "/2.jpg" },
  { title: "3호점", result: "상품 구성과 매대 진열 최적화", image: "/3.jpg" },
  { title: "4호점", result: "운영 셋팅과 청결 관리 지원", image: "/4.jpg" },
];

export function HomePreviews() {
  return (
    <div className="border-t border-slate-200 bg-white">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8" id="about-preview">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">About</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">무인리테일의 새로운 기준을<br className="sm:hidden" /> 만들어 갑니다</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">엔제이리테일은 데이터 기반 운영 최적화와 24시간 안정적인 시스템 관리로 점주님이 안심할 수 있는 무인매장을 설계합니다.</p>
          <div className="mt-7"><CTAButton href="/about" text="기업소개 자세히 보기" variant="secondary" /></div>
        </div>
        <div className="overflow-hidden -mx-4 sm:-mx-6 lg:mx-0 lg:rounded-[24px] lg:border lg:border-slate-200 lg:bg-slate-50 lg:p-2">
          <Image src="/store-dashboard.png" alt="엔제이리테일 컨설팅 팀" width={1000} height={650} className="h-64 w-full object-cover sm:h-80 lg:rounded-[18px]" />
        </div>
      </section>

      <section className="bg-slate-50" id="service-preview">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="창업지원" title="지금, 예비 창업자를 모집합니다" description="상담과 상권분석부터 인테리어, 상품 구성, 운영시스템, 사후관리까지 창업의 전 과정을 엔제이리테일이 함께합니다." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["상담 & 상권분석", "매장 인테리어 설계", "상품 구성 & 진열", "운영 시스템 셋팅", "입고 및 청결 관리", "판매 운영 & 사후관리"].map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-bold text-[#3B82F6]">0{index + 1}</div>
                <h3 className="mt-3 font-bold text-slate-900">{step}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTAButton href="/contact#inquiry-form" text="창업 상담 신청" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="cases-preview">
        <SectionTitle eyebrow="Case" title="오픈사례" description="상권과 매장 형태에 맞춘 전략으로 실제 매장을 오픈한 사례들을 확인해보세요." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {previewCases.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <Image src={item.image} alt={`${item.title} 매장 전경`} width={700} height={520} className="h-52 w-full bg-slate-100 object-contain" />
              <div className="p-5"><h3 className="text-xl font-bold text-slate-900">{item.title}</h3><p className="mt-2 text-slate-600">{item.result}</p></div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center"><CTAButton href="/cases" text="오픈사례 더 보기" variant="secondary" /></div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="shop-preview">
        <SectionTitle eyebrow="Shop" title="쇼핑하기" description="무인매장 운영에 필요한 핵심 장비와 운영 패키지를 필요한 시점에 선택하세요." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[{ name: "Starter", text: "초보점주를 위한 필수 장비와 기본 셋업" }, { name: "Growth", text: "운영 최적화와 판매 성장을 위한 구성" }, { name: "Scale", text: "다수 매장 운영을 위한 확장형 패키지" }].map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-xl font-bold text-slate-900">{item.name}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></div>
          ))}
        </div>
        <div className="mt-8 text-center"><CTAButton href="/shop" text="쇼핑하기로 이동" variant="secondary" /></div>
      </section>

    </div>
  );
}
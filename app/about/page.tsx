import Image from "next/image";
import { CTAButton, Footer, Header, SectionTitle } from "../components/site-shell";

const visionPoints = [
  { title: "비전", text: "국내 무인리테일 산업을 선도하는 신뢰 기반 운영 플랫폼을 구축합니다." },
  { title: "미션", text: "똑똑한 매장 설계와 운영 노하우를 통해 점주의 성공 가능성을 높입니다." },
  { title: "가치", text: "실제 현장 데이터와 고객 경험을 바탕으로 지속 가능한 성장을 설계합니다." },
];

const timeline = [
  { year: "2026.01", title: "엔제이리테일 법인 설립", text: "무인매장 창업 컨설팅 전문 기업으로 공식 출범했습니다." },
  { year: "2026.07", title: "6개월 만에 5개 매장 오픈", text: "법인 설립 이후 6개월 만에 5개 매장을 오픈하며 빠른 성장세를 이어가고 있습니다." },
];

const strengths = [
  "상권별 맞춤형 매장 컨설팅",
  "인테리어·진열·운영시스템 통합 설계",
  "24시간 실시간 데이터 기반 운영관리",
  "오픈 후 사후관리와 지속 성과 개선",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#C8075F]">About</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              무인리테일의 새로운 기준을 만들어 갑니다
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              안녕하십니까, 엔제이리테일입니다. 저희는 무인매장이라는 새로운 리테일 패러다임을 만들어오며, 국내 최고 수준의 무인리테일 인프라와 노하우를 축적해왔습니다.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              단순히 매장을 무인화하는 것을 넘어, 데이터 기반의 운영 최적화와 24시간 안정적인 시스템 관리를 통해 가맹점주님들이 안심하고 사업을 운영할 수 있는 환경을 만드는 것이 저희의 목표입니다.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              앞으로도 엔제이리테일은 기술 혁신과 고객 신뢰를 바탕으로 대한민국 무인리테일 산업을 선도해 나가겠습니다.
            </p>
            <div className="mt-8">
              <CTAButton href="/contact" text="무료 상담 신청" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-sm">
            <Image
              src="/about-hero.png"
              alt="엔제이리테일 대표와 컨설팅 팀"
              width={1200}
              height={900}
              className="h-[520px] w-full rounded-[22px] object-cover"
            />
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle
            eyebrow="Vision"
            title="고객 중심의 무인매장 혁신"
            description="무인매장이 단순한 자동화가 아니라, 점주의 비용 절감과 안정적인 매출 확보를 가능하게 하는 실질적 사업 모델이 되도록 설계합니다."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {visionPoints.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C8075F]/10 text-lg font-bold text-[#C8075F]">
                  {item.title.slice(0, 1)}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle
            eyebrow="Timeline"
            title="엔제이리테일의 성장 역사"
            description="법인 설립 이후 짧은 기간에도 빠른 속도로 매장을 확장하고 있습니다."
          />

          <div className="mt-12 space-y-8">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C8075F] text-xs font-bold text-white shadow-sm">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && <div className="mt-2 h-20 w-px bg-slate-200" />}
                </div>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C8075F]">{item.year}</div>
                  <h3 className="mt-3 text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle
            eyebrow="Strengths"
            title="핵심 역량"
            description="단순한 매장 도입이 아니라, 운영 안정과 매출성을 함께 고려하는 종합 솔루션으로 실질적 성장을 돕습니다."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C8075F] text-sm font-bold text-white">✓</div>
                <p className="text-base font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

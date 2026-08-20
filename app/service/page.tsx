import { CTAButton, Footer, Header } from "../components/site-shell";
import { ServiceAgency, ServiceCost, ServiceSteps, ServiceWhyUs } from "../components/service-content";

export default function ServicePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">창업지원</p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">무인매장 창업의 6단계 프로세스</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            단순한 설치를 넘어, 점주가 실제로 운영하는 데 필요한 전략과 시스템을 연결해 안정적인 무인매장 생태계를 만들어갑니다.
          </p>
        </section>

        <div className="mt-14">
          <ServiceSteps />
        </div>

        <ServiceWhyUs />
        <ServiceCost />
        <ServiceAgency />

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">무인매장 창업, 지금 시작해보세요</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            어떤 점포를 준비하고 있든, 현재 단계와 목표에 맞는 맞춤형 컨설팅을 제안해드립니다.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact" text="상담 신청하기" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

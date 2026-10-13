import { CTAButton, Footer, Header } from "../components/site-shell";
import InquiryForm from "./InquiryForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#C8075F]">Contact</p>
          <h1 className="text-4xl font-bold leading-[1.25] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">문의하기</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            무인매장 창업 및 운영에 대한 궁금한 점이 있으시면 언제든 편하게 문의해 주세요.
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EC%84%B1%EB%B6%81%EA%B5%AC%20%EC%9E%A5%EC%9B%94%EB%A1%9C1%EA%B8%B8%2080%201%EC%B8%B5&output=embed"
              title="엔제이리테일 위치 지도"
              className="h-[520px] w-full rounded-[22px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">회사 정보</h2>
            <ul className="mt-6 space-y-4 text-base text-slate-700">
              <li><span className="font-semibold text-slate-900">주소:</span> 서울시 성북구 장월로1길 80 1층</li>
                            <li><span className="font-semibold text-slate-900">전화:</span> 010-7650-9600</li>
                            <li><span className="font-semibold text-slate-900">이메일:</span> njretail@njgroup.co.kr</li>
              <li><span className="font-semibold text-slate-900">영업시간:</span> 평일 09:00~18:00</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <CTAButton href="tel:01076509600" text="전화 상담" />
                            <CTAButton href="mailto:njretail@njgroup.co.kr" text="이메일 문의" variant="secondary" />
            </div>
          </div>
        </section>

        <section id="inquiry-form" className="mt-20 rounded-[30px] bg-[#FAFAFA] p-8 sm:p-12 scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center">문의 남기기</h2>
          <InquiryForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

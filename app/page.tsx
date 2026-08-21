import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components/site-shell";
import { CasesSection, ShopSection } from "./components/home-previews";
import { ProjectSections, ReceiptCost } from "./components/store-story";
import { KakaoChatWidget } from "./components/kakao-chat-widget";

const anatomyLeft = [
  {
    n: "01",
    title: "상권",
    lines: ["반경 500m", "주거 73%", "핵심 고객 30–40대"],
  },
  {
    n: "03",
    title: "공간",
    lines: ["11평", "동선 14.2m"],
  },
];

const anatomyRight = [
  {
    n: "02",
    title: "상품",
    lines: ["SKU 487개", "냉동·간편식 중심"],
  },
  {
    n: "04",
    title: "운영",
    lines: ["입고 · 진열", "청소 · 재고관리"],
  },
];

const testimonials = [
  { name: "박준호 대표", text: "무인매장에 필요한 인테리어, 시스템, 상품 구성을 모두 맞춰줘서 오픈 직후 매출이 안정적으로 유지됐습니다." },
  { name: "최유진 점주", text: "운영 초반에 자주 고민하던 재고 관리와 보안 부분을 체계적으로 해결해 주셔서 큰 도움이 됐습니다." },
  { name: "이상민 대표", text: "현장 노하우를 바탕으로 점주 입장에서 현실적인 조언을 주셔서 리스크를 많이 줄일 수 있었습니다." },
];

function AnatomyTag({ n, title, lines }: { n: string; title: string; lines: string[] }) {
  return (
    <div className="w-44 border border-white/30 bg-black/30 p-3 backdrop-blur-sm">
      <div className="font-mono text-[10px] tracking-[0.2em] text-white/60">{n} {title}</div>
      <div className="mt-1.5 space-y-0.5 text-xs leading-5 text-white/90">
        {lines.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-[#F5F3EF]">
        {/* Hero — store anatomy */}
        <section className="relative bg-black">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[21/9]">
            <Image src="/store-01.png" alt="엔제이리테일 1호점 실제 매장 전경" fill priority className="object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/50" />

            <div className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/70 sm:left-8 sm:top-8">
              NJ RETAIL / STORE 01 / SEOUL
            </div>

            <div className="absolute left-4 top-16 hidden flex-col gap-6 sm:left-8 lg:top-24 lg:flex">
              {anatomyLeft.map((item) => (
                <AnatomyTag key={item.n} {...item} />
              ))}
            </div>
            <div className="absolute right-4 top-16 hidden flex-col gap-6 sm:right-8 lg:top-24 lg:flex">
              {anatomyRight.map((item) => (
                <AnatomyTag key={item.n} {...item} />
              ))}
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14">
              <h1 className="max-w-2xl text-3xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-6xl">
                매장은 공간이 아니라<br />운영으로 완성됩니다.
              </h1>
            </div>
          </div>

          {/* Mobile / tablet: anatomy data below the photo */}
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:hidden">
            {[...anatomyLeft, ...anatomyRight].map((item) => (
              <div key={item.n} className="bg-black p-4">
                <div className="font-mono text-[10px] tracking-[0.2em] text-white/50">{item.n} {item.title}</div>
                <div className="mt-1.5 space-y-0.5 text-xs leading-5 text-white/90">
                  {item.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Statement */}
        <section className="border-t border-black/10 bg-[#F5F3EF] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              우리는 매장을 만들고,<br />
              상품을 채우고,<br />
              운영합니다.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.25em] text-black/40">
              <span>Space</span><span className="text-black/20">/</span>
              <span>Merchandise</span><span className="text-black/20">/</span>
              <span>System</span><span className="text-black/20">/</span>
              <span>Operation</span>
            </div>
          </div>
        </section>

        <ProjectSections />

        <ReceiptCost />

        <CasesSection />

        {/* Review */}
        <section className="border-t border-black/10 bg-[#F5F3EF] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">Review</span>
            <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
              {testimonials.map((t) => (
                <div key={t.name} className="py-8">
                  <p className="text-xl leading-8 text-black sm:text-2xl">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-black/40">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ShopSection />

        {/* Final CTA */}
        <section className="border-t border-black/10 bg-black py-20 text-center text-white sm:py-28">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">Store 005</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">다음 매장은,<br className="sm:hidden" /> 당신의 매장입니다.</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/60">
              상권 분석부터 운영까지, 엔제이리테일이 함께 만듭니다.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact#inquiry-form" className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
                상담 신청하기
              </Link>
              <Link href="/shop" className="inline-flex items-center justify-center border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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

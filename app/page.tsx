import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components/site-shell";
import { CasesSection, ShopSection } from "./components/home-previews";
import { ProjectSections, ReceiptCost } from "./components/store-story";
import { KakaoChatWidget } from "./components/kakao-chat-widget";

const anatomyPoints = [
  { n: "01", title: "상권", lines: ["반경 500m", "주거 73%", "핵심 고객 30–40대"], left: "18%", top: "48%", side: "right" as const },
  { n: "02", title: "상품", lines: ["SKU 487개", "냉동·간편식 중심"], left: "54%", top: "16%", side: "right" as const },
  { n: "03", title: "공간", lines: ["11평", "동선 14.2m"], left: "82%", top: "44%", side: "left" as const },
  { n: "04", title: "운영", lines: ["입고 · 진열", "청소 · 재고관리"], left: "56%", top: "72%", side: "right" as const },
];

const testimonials = [
  { name: "박준호 대표", text: "무인매장에 필요한 인테리어, 시스템, 상품 구성을 모두 맞춰줘서 오픈 직후 매출이 안정적으로 유지됐습니다." },
  { name: "최유진 점주", text: "운영 초반에 자주 고민하던 재고 관리와 보안 부분을 체계적으로 해결해 주셔서 큰 도움이 됐습니다." },
  { name: "이상민 대표", text: "현장 노하우를 바탕으로 점주 입장에서 현실적인 조언을 주셔서 리스크를 많이 줄일 수 있었습니다." },
];

function AnatomyPoint({ n, title, lines, left, top, side }: { n: string; title: string; lines: string[]; left: string; top: string; side: "left" | "right" }) {
  return (
    <div className="absolute hidden lg:block" style={{ left, top }}>
      <span className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white/80" />
      <div className={`absolute top-0 h-px w-8 bg-white/50 ${side === "right" ? "left-1" : "right-1"}`} />
      <div className={`absolute top-0 w-40 ${side === "right" ? "left-10" : "right-10 text-right"}`}>
        <div className="font-mono text-[10px] tracking-[0.2em] text-white/60">{n}&nbsp;&nbsp;{title}</div>
        <div className="mt-1.5 space-y-0.5 text-xs leading-5 text-white/90">
          {lines.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>
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

            {anatomyPoints.map((item) => (
              <AnatomyPoint key={item.n} {...item} />
            ))}

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between lg:p-14">
              <div>
                <h1 className="max-w-2xl text-3xl font-bold leading-[1.2] text-white sm:text-5xl lg:text-6xl">
                  매장은 공간이 아니라<br />운영으로 완성됩니다.
                </h1>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
                  우리는 매장을 만들고, 상품을 채우고, 운영합니다.
                </p>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                  Space / Merchandise / System / Operation
                </div>
              </div>
              <div className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/50 lg:flex">
                Scroll <span className="inline-block">↓</span>
              </div>
            </div>
          </div>

          {/* Mobile / tablet: anatomy data below the photo */}
          <div className="grid grid-cols-2 gap-px bg-white/10 lg:hidden">
            {anatomyPoints.map((item) => (
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

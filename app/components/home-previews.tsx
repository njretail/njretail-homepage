import Image from "next/image";
import Link from "next/link";
import { CTAButton, SectionTitle } from "./site-shell";

export function AboutSection() {
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
    </div>
  );
}

export function CasesSection() {
  return (
    <section className="border-t border-black/10 bg-white py-20 sm:py-28" id="cases-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-baseline justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-black/40">Cases</span>
          <Link href="/cases" className="text-sm font-semibold text-black underline underline-offset-4 hover:text-black/60">
            오픈사례 더 보기
          </Link>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-2 lg:aspect-auto">
            <Image src="/store-01.png" alt="1호점 매장 전경" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">Store 001 / Seoul / 11 PY</div>
              <div className="mt-1 text-lg font-bold tracking-tight text-white">Unmanned Market</div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/2.jpg" alt="2호점 매장 전경" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white">Store 002</div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image src="/3.jpg" alt="3호점 매장 전경" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white">Store 003</div>
            </div>
          </div>
        </div>

        <div className="relative mt-3 aspect-[21/9] overflow-hidden">
          <Image src="/4.jpg" alt="4호점 매장 전경" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-5">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/70">Store 004 / Seoul</div>
            <div className="mt-1 text-lg font-bold tracking-tight text-white">Operation Setup</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShopSection() {
  return (
    <section className="border-t border-slate-200 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="shop-preview">
      <SectionTitle eyebrow="Shop" title="쇼핑하기" description="무인매장 운영에 필요한 핵심 장비와 운영 패키지를 필요한 시점에 선택하세요." />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[{ name: "Starter", text: "초보점주를 위한 필수 장비와 기본 셋업" }, { name: "Growth", text: "운영 최적화와 판매 성장을 위한 구성" }, { name: "Scale", text: "다수 매장 운영을 위한 확장형 패키지" }].map((item) => (
          <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-xl font-bold text-slate-900">{item.name}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></div>
        ))}
      </div>
      <div className="mt-8 text-center"><CTAButton href="/shop" text="쇼핑하기로 이동" variant="secondary" /></div>
    </section>
  );
}

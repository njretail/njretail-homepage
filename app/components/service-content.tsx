import { CTAButton, SectionTitle } from "./site-shell";
import { BoxIcon, ChatIcon, ChipIcon, ClipboardIcon, GearIcon, HeadsetIcon, PencilIcon, SearchIcon, SparkleIcon } from "./icons";

export const serviceSteps = [
  {
    title: "1. 상담 & 상권분석",
    description: "예비 점주님의 목표와 매장 위치, 인근 고객층, 경쟁매장 데이터를 종합 분석해 운영 가능성을 검증합니다.",
    icon: SearchIcon,
  },
  {
    title: "2. 매장 인테리어 설계",
    description: "매장 규모와 업종에 맞춰 상품 진열, 동선, 출입 구조, 고객 경험 흐름까지 설계해 효율적인 공간을 만들어갑니다.",
    icon: PencilIcon,
  },
  {
    title: "3. 상품 구성 & 진열 컨설팅",
    description: "고객 수요와 판매권을 고려하여 최적의 SKU 구성, 가격 설계, 매장별 진열 계획을 제안합니다.",
    icon: BoxIcon,
  },
  {
    title: "4. 운영 시스템 셋팅",
    description: "POS, 키오스크, CCTV, 출입 인증, 재고관리까지 연동해 무인매장 운영에 필요한 시스템을 한 번에 구축합니다.",
    icon: GearIcon,
  },
  {
    title: "5. 입고 및 청결 관리",
    description: "상품 입고와 검수, 재고 흐름을 관리하고 청소 주기와 점검 기준을 세워 매장 청결을 함께 유지합니다.",
    icon: ClipboardIcon,
  },
  {
    title: "6. 오픈 후 판매 운영 & 사후관리",
    description: "오픈 이후 매출·재고·고객 반응을 분석하고, 지속적인 개선을 통해 안정적인 운영을 지원합니다.",
    icon: HeadsetIcon,
  },
];

const startupCosts = [
  { category: "인테리어", item: "자재·현장 비용 + CCTV", amount: "약 150만원", note: "" },
  { category: "간판/외부 디자인", item: "간판 및 외부 디자인", amount: "약 110만원", note: "" },
  { category: "무인키오스크", item: "중고 키오스크", amount: "약 120만원", note: "" },
  { category: "냉장/냉동장비", item: "중고 냉장고 4대", amount: "약 86만원", note: "" },
  { category: "진열대 / 비품", item: "진열대·청소도구·바구니·라벨기 등", amount: "약 264만원", note: "진열대 약 237만원 포함" },
  { category: "소모품비", item: "인쇄용지·냉장고 탈취제 등", amount: "약 6만원", note: "" },
  { category: "초도상품매입비", item: "초기 상품 매입", amount: "약 1,500만원", note: "아이스크림 약 500만원 포함" },
];

export function ServiceSteps() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      {serviceSteps.map((step) => (
        <details key={step.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" open>
          <summary className="flex cursor-pointer list-none items-center gap-3 text-lg font-bold text-slate-900">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FCE7F0] text-[#C8075F] [&_svg]:h-5 [&_svg]:w-5">
              <step.icon />
            </span>
            {step.title}
          </summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{step.description}</p>
        </details>
      ))}
    </section>
  );
}

export function ServiceWhyUs() {
  return (
    <section className="mt-20 rounded-[30px] bg-[#F3F4F6] p-8 sm:p-12">
      <SectionTitle
        eyebrow="Why NJRETAIL"
        title="무인매장 창업의 핵심은 준비와 운영입니다"
        description="엔제이리테일은 설계부터 사후관리까지 실전 기반으로 점주가 겪는 운영 고민을 함께 해결합니다."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE7F0] text-[#C8075F] [&_svg]:h-5 [&_svg]:w-5">
              <ChatIcon />
            </span>
            <div className="text-2xl font-bold text-[#C8075F]">01</div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">현장 중심 컨설팅</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">취급 상품, 고객 패턴, 매장 구조를 고려한 실제 적용형 제안으로 설계합니다.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE7F0] text-[#C8075F] [&_svg]:h-5 [&_svg]:w-5">
              <ChipIcon />
            </span>
            <div className="text-2xl font-bold text-[#C8075F]">02</div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">운영 데이터 연동</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">재고, 매출, 결제, 보안 정보를 실시간으로 확인할 수 있도록 통합 관리 구조를 구성합니다.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE7F0] text-[#C8075F] [&_svg]:h-5 [&_svg]:w-5">
              <ClipboardIcon />
            </span>
            <div className="text-2xl font-bold text-[#C8075F]">03</div>
          </div>
          <h3 className="mt-4 text-xl font-bold text-slate-900">지속적인 성과 개선</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">오픈 이후에도 데이터 분석과 현장 피드백을 기반으로 매출 상승과 운영 효율을 개선합니다.</p>
        </div>
      </div>
    </section>
  );
}

export function ServiceCost() {
  return (
    <section className="mt-20 rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8075F]">Startup Cost</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">10평 기준 창업비용 안내</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">1호점 실제 발생 비용을 기준으로 정리한 예상 금액입니다. 매장 위치와 상태, 장비 선택에 따라 달라질 수 있습니다.</p>
      </div>

      {/* Mobile: card list */}
      <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 sm:hidden">
        {startupCosts.map((cost) => (
          <div key={cost.category} className="p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold text-slate-900">{cost.category}</span>
              <span className="font-semibold text-[#C8075F]">{cost.amount}</span>
            </div>
            <p className="mt-1.5 text-sm text-slate-600">{cost.item}</p>
            {cost.note && <p className="mt-1 text-xs text-slate-500">{cost.note}</p>}
          </div>
        ))}
      </div>

      {/* Tablet and up: table */}
      <div className="mt-10 hidden overflow-x-auto rounded-2xl border border-slate-200 sm:block">
        <table className="min-w-full text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs font-semibold text-slate-500">
            <tr>
              <th className="whitespace-nowrap px-5 py-4">구분</th>
              <th className="whitespace-nowrap px-5 py-4">주요항목</th>
              <th className="whitespace-nowrap px-5 py-4">대략 금액</th>
              <th className="whitespace-nowrap px-5 py-4">비고</th>
            </tr>
          </thead>
          <tbody>
            {startupCosts.map((cost) => (
              <tr key={cost.category} className="border-t border-slate-200">
                <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">{cost.category}</td>
                <td className="min-w-56 px-5 py-4">{cost.item}</td>
                <td className="whitespace-nowrap px-5 py-4 font-semibold text-[#C8075F]">{cost.amount}</td>
                <td className="min-w-64 px-5 py-4 text-slate-500">{cost.note || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-900 p-6 text-white md:col-span-2">
          <div className="text-sm text-slate-300">임대료 제외 총 투자금액</div>
          <div className="mt-2 text-3xl font-bold">약 2,232만원</div>
        </div>
      </div>
      <p className="mt-5 text-center text-xs leading-6 text-slate-500">※ 위 금액은 10평 1호점 사례를 바탕으로 한 대략적인 안내이며, 실제 견적은 매장 조건에 따라 달라질 수 있습니다.</p>
    </section>
  );
}

export function ServiceAgency() {
  return (
    <section className="mt-20 rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C8075F]">Agency Service</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">매장 운영 대행도 함께 지원합니다</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">입고와 매대진열, 매장 청소까지 필요한 운영 업무를 선택해 신청할 수 있습니다.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE7F0] text-[#C8075F] [&_svg]:h-5 [&_svg]:w-5">
            <BoxIcon />
          </span>
          <h3 className="mt-4 text-xl font-bold text-slate-900">입고 및 매대진열</h3>
          <p className="mt-3 leading-7 text-slate-600">상품 입고 검수와 수량 확인, 매장별 매대 배치와 진열을 대행합니다.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FCE7F0] text-[#C8075F] [&_svg]:h-5 [&_svg]:w-5">
            <SparkleIcon />
          </span>
          <h3 className="mt-4 text-xl font-bold text-slate-900">청소대행</h3>
          <p className="mt-3 leading-7 text-slate-600">정기 청소와 위생 점검으로 고객이 안심하는 매장 환경을 관리합니다.</p>
        </div>
      </div>
      <div className="mt-8 flex justify-center"><CTAButton href="/agency" text="대행 신청하기" /></div>
    </section>
  );
}

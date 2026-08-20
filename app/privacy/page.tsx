import { Footer, Header } from "../components/site-shell";

const sections = [
  {
    title: "1. 수집하는 개인정보 항목",
    body: "엔제이리테일(이하 '회사')은 상담 신청, 대행 신청, 쇼핑몰 주문 등 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.\n필수항목: 이름, 연락처, 이메일 주소\n결제 이용 시: 배송지 주소, 결제 정보\n서비스 이용 과정에서 IP 주소, 쿠키, 방문 일시 등이 자동으로 생성되어 수집될 수 있습니다.",
  },
  {
    title: "2. 개인정보의 수집 및 이용목적",
    body: "회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.\n상담 및 대행 신청에 대한 응대, 견적 및 계약 안내\n쇼핑몰 상품 주문, 결제, 배송 및 사후관리\n공지사항 전달, 문의사항 응대 등 고객 관리",
  },
  {
    title: "3. 개인정보의 보유 및 이용기간",
    body: "회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 다만 관계 법령에 따라 보존할 필요가 있는 경우 아래와 같이 일정 기간 보관합니다.\n계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)\n대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)\n소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)",
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: "회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만 이용자가 사전에 동의한 경우, 또는 법령의 규정에 의거한 경우에는 예외로 합니다.",
  },
  {
    title: "5. 개인정보처리의 위탁",
    body: "회사는 원활한 서비스 제공을 위해 결제, 배송 등의 업무를 외부 전문업체에 위탁할 수 있으며, 위탁계약 체결 시 개인정보가 안전하게 관리될 수 있도록 필요한 사항을 규정합니다.",
  },
  {
    title: "6. 정보주체의 권리와 행사방법",
    body: "이용자는 언제든지 등록된 자신의 개인정보를 조회, 수정, 삭제, 처리정지를 요청할 수 있으며, 하단의 문의처를 통해 요청하실 수 있습니다.",
  },
  {
    title: "7. 개인정보 보호책임자",
    body: "성명: 이수영\n연락처: 010-7650-9600 / njretail@njgroup.kr\n개인정보 관련 문의사항은 위 연락처 또는 문의하기 페이지를 통해 접수해 주시기 바랍니다.",
  },
  {
    title: "8. 고지의 의무",
    body: "본 개인정보처리방침은 법령·정책 또는 서비스의 변경에 따라 내용이 추가·삭제 및 수정될 수 있으며, 변경 시 홈페이지를 통해 공지합니다.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">Privacy Policy</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">개인정보처리방침</h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          엔제이리테일(이하 '회사')은 이용자의 개인정보를 중요시하며, 「개인정보 보호법」 등 관련 법령을 준수하고 있습니다.
          회사는 개인정보처리방침을 통해 이용자가 제공하는 개인정보가 어떠한 목적과 방식으로 이용되고 있으며, 개인정보 보호를
          위해 어떠한 조치가 취해지고 있는지 알려드립니다.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-slate-900">{section.title}</h2>
              <div className="mt-3 space-y-2 text-base leading-7 text-slate-600">
                {section.body.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          본 방침은 2026년 8월 20일부터 적용됩니다.
        </p>
      </main>
      <Footer />
    </>
  );
}

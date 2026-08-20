import { Footer, Header } from "../components/site-shell";

const articles = [
  {
    title: "제1조 (목적)",
    body: "이 약관은 엔제이리테일(이하 '회사')이 운영하는 홈페이지 및 쇼핑몰(이하 '서비스')을 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항, 이용조건 및 절차 등 기본적인 사항을 규정함을 목적으로 합니다.",
  },
  {
    title: "제2조 (정의)",
    body: "'이용자'란 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.\n'상품'이란 회사가 서비스를 통해 판매하는 무인매장 운영 관련 장비, 소모품, 패키지 및 매장상품 등을 말합니다.",
  },
  {
    title: "제3조 (약관의 효력 및 변경)",
    body: "이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력이 발생합니다.\n회사는 관련 법령을 위배하지 않는 범위에서 이 약관을 변경할 수 있으며, 변경된 약관은 적용일자 및 개정사유를 명시하여 서비스 화면에 공지합니다.",
  },
  {
    title: "제4조 (서비스의 제공 및 변경)",
    body: "회사는 무인매장 창업 컨설팅, 상품 판매, 상담 및 대행 신청 등의 서비스를 제공합니다.\n회사는 상품의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 상품의 내용을 변경할 수 있습니다.",
  },
  {
    title: "제5조 (서비스의 중단)",
    body: "회사는 설비의 보수점검·교체, 시스템 장애, 통신두절 등의 사유가 발생한 경우에는 서비스 제공을 일시적으로 중단할 수 있습니다.",
  },
  {
    title: "제6조 (구매신청 및 개인정보 제공 동의)",
    body: "이용자는 서비스상에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, 회사는 이용자가 구매신청을 함에 있어 필요한 개인정보 제공 등을 이용자에게 요청할 수 있습니다.",
  },
  {
    title: "제7조 (계약의 성립)",
    body: "회사는 구매신청에 대하여 신청 내용에 허위, 기재누락, 오기가 있는 경우 등에는 승낙하지 않을 수 있으며, 회사의 승낙이 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.",
  },
  {
    title: "제8조 (지급방법)",
    body: "서비스를 통해 구매한 상품에 대한 대금지급방법은 계좌이체, 카드결제 등 회사가 지정하는 방법으로 할 수 있습니다.",
  },
  {
    title: "제9조 (청약철회 등)",
    body: "회사와 상품 등의 구매에 관한 계약을 체결한 이용자는 「전자상거래 등에서의 소비자보호에 관한 법률」 제13조 제2항에 따른 계약서를 받은 날부터 7일 이내에는 청약철회를 할 수 있습니다.",
  },
  {
    title: "제10조 (개인정보보호)",
    body: "회사는 이용자의 개인정보를 보호하기 위해 관련 법령이 정하는 바를 준수하며, 자세한 사항은 회사의 개인정보처리방침을 따릅니다.",
  },
  {
    title: "제11조 (회사의 의무)",
    body: "회사는 관련 법령과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적·안정적으로 서비스를 제공하기 위해 노력합니다.",
  },
  {
    title: "제12조 (분쟁해결)",
    body: "회사와 이용자 간에 발생한 분쟁은 상호 협의하여 해결함을 원칙으로 하며, 협의가 이루어지지 않을 경우 관련 법령 및 상관례에 따릅니다.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">Terms of Service</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">이용약관</h1>
        <p className="mt-5 text-base leading-8 text-slate-600">
          엔제이리테일 홈페이지 및 쇼핑몰 이용과 관련하여 회사와 이용자의 권리·의무 및 책임사항을 안내드립니다.
        </p>

        <div className="mt-12 space-y-10">
          {articles.map((article) => (
            <section key={article.title}>
              <h2 className="text-xl font-bold text-slate-900">{article.title}</h2>
              <div className="mt-3 space-y-2 text-base leading-7 text-slate-600">
                {article.body.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 border-t border-slate-200 pt-6 text-sm text-slate-500">
          이 약관은 2026년 8월 20일부터 시행됩니다.
        </p>
      </main>
      <Footer />
    </>
  );
}

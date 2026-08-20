import type { ReactNode } from "react";
import Link from "next/link";

export const navItems = [
  { href: "/", label: "메인" },
  { href: "/about", label: "기업소개" },
  { href: "/service", label: "창업지원" },
  { href: "/cases", label: "오픈사례" },
  { href: "/board", label: "게시판" },
  { href: "/agency", label: "대행 신청" },
  { href: "/shop", label: "쇼핑하기" },
  { href: "/contact", label: "오시는 길" },
];

export function CTAButton({ href, text, variant = "primary" }: { href: string; text: string; variant?: "primary" | "secondary" }) {
  const shared = "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";
  const classes =
    variant === "primary"
      ? `${shared} bg-[#F97316] text-white shadow-sm hover:bg-[#ea680c]`
      : `${shared} border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50`;

  return (
    <Link href={href} className={classes}>
      {text}
    </Link>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#3B82F6]">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="엔제이리테일 홈으로 이동">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3B82F6] text-sm font-bold text-white shadow-sm">
            NJ
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900">엔제이리테일</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500">JUICE RETAIL</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href="/contact" text="무료 상담 신청" />
        </div>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700">
            <span className="sr-only">메뉴 열기</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute right-0 top-14 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <CTAButton href="/contact" text="무료 상담 신청" variant="primary" />
              </div>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3B82F6] text-sm font-bold text-white">
            NJ
          </div>
          <div>
            <div className="text-lg font-bold text-slate-900">엔제이리테일</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">NJ RETAIL</div>
          </div>
        </div>

        <ul className="mt-5 space-y-1.5 text-sm text-slate-600">
          <li>대표자: 이수영</li>
          <li>사업자등록번호: 571-81-03959</li>
          <li>주소: 서울시 성북구 장월로1길 80 1층</li>
          <li>전화: 010-7650-9600</li>
          <li>이메일: njretail@njgroup.kr</li>
        </ul>

        <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 엔제이리테일. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-700">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-slate-700">이용약관</Link>
            <Link href="/contact" className="hover:text-slate-700">문의하기</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

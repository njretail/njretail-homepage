import Link from "next/link";
import { CTAButton, Footer, Header, SectionTitle } from "../components/site-shell";
import ShopClient from './shop-client';
import { getStoreProducts } from "../../lib/cafe24";

export const revalidate = 3600;

export default async function ShopPage() {
  const { categories, products } = await getStoreProducts();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#C8075F]">Shop</p>
          <h1 className="text-4xl font-bold leading-[1.25] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">쇼핑하기</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            무인매장에 필요한 핵심 장비와 운영 패키지를 필요한 시점에 선택해 구성할 수 있습니다.
          </p>
        </section>

        {/* Client-side shopping area (handles add-to-cart) */}
        <ShopClient categories={categories} products={products} />

        <section className="mt-20 rounded-[30px] bg-[#F3F4F6] p-8 sm:p-12">
          <SectionTitle
            eyebrow="Package"
            title="가맹점주님에게 필요한 골든 패키지"
            description="초기 셋업부터 운영 안정까지, 필요한 구성만 골라 맞춤형 패키지로 구성할 수 있습니다."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Starter</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">초보점주를 위한 필수 장비와 기본 셋업 패키지</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Growth</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">운영 최적화와 판매 성장을 위해 필요한 고도화 구성</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Scale</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">다수 매장 운영 및 확장형 고급패키지</p>
            </div>
          </div>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">맞춤형 견적이 필요하신가요?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">매장 규모와 업종에 따라 필요한 구성과 비용을 맞춤 제안해드립니다.</p>
          <div className="mt-8 flex justify-center">
            <CTAButton href="/contact" text="견적 문의하기" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

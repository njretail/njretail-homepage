import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const mallId = process.env.CAFE24_MALL_ID;
  const src = `https://${mallId}.cafe24.com/product/detail.html?product_no=${id}`;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/shop" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
          ← 쇼핑하기로 돌아가기
        </Link>
        <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <iframe src={src} title="상품 상세정보" className="h-[85vh] w-full border-0" />
        </div>
      </main>
      <Footer />
    </>
  );
}

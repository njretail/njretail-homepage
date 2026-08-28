import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { getProductDetail } from "../../../../lib/cafe24";

export const revalidate = 3600;

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductDetail(Number(id));

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-28 pt-6 sm:px-6 lg:pt-10">
        <Link
          href="/shop"
          className="sticky top-20 z-30 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-md hover:border-[#C8075F] hover:text-[#C8075F]"
        >
          ← 쇼핑하기로 돌아가기
        </Link>

        <div className="mt-6">
          <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">{product.name}</h1>
          <p className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{product.price}</p>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          {product.images.length > 0 ? (
            product.images.map((src, idx) => <img key={idx} src={src} alt="" className="block w-full" />)
          ) : (
            <p className="p-12 text-center text-base text-slate-500">상세 이미지를 불러오지 못했습니다.</p>
          )}
        </div>
      </main>
      <Footer />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl gap-3 px-4 py-3 sm:px-6">
          <a
            href={product.storeUrl}
            className="flex-1 rounded-xl border border-[#C8075F] bg-white px-4 py-3.5 text-center text-sm font-semibold text-[#C8075F] hover:bg-[#FDEEF4] sm:text-base"
          >
            장바구니 담기
          </a>
          <a
            href={product.storeUrl}
            className="flex-1 rounded-xl bg-[#C8075F] px-4 py-3.5 text-center text-sm font-semibold text-white hover:bg-[#a8054e] sm:text-base"
          >
            주문하기
          </a>
        </div>
      </div>
    </>
  );
}

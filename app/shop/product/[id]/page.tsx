import Link from "next/link";
import { Footer, Header } from "../../../components/site-shell";
import { getProductDetailImages } from "../../../../lib/cafe24";

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const images = await getProductDetailImages(Number(id));

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/shop" className="text-sm font-semibold text-slate-500 hover:text-slate-700">
          ← 쇼핑하기로 돌아가기
        </Link>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          {images.length > 0 ? (
            images.map((src, idx) => <img key={idx} src={src} alt="" className="block w-full" />)
          ) : (
            <p className="p-12 text-center text-base text-slate-500">상세 이미지를 불러오지 못했습니다.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";

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
    <div className="relative h-screen w-screen">
      <Link
        href="/shop"
        aria-label="쇼핑하기로 돌아가기"
        className="fixed left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg hover:bg-slate-50"
      >
        ←
      </Link>
      <iframe src={src} title="상품 상세정보" className="h-full w-full border-0" />
    </div>
  );
}
